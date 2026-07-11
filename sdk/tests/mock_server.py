"""Deterministic Tellama-compatible mock server for SDK contract tests.

SPDX-License-Identifier: Apache-2.0
"""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os


PORT = int(os.environ.get("TELLAMA_TEST_PORT", "18765"))
EXPECTED_KEY = "test-key"


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def do_GET(self):  # noqa: N802
        if not self._authorized():
            return
        if self.path == "/api/tags":
            self._json(200, {"models": [{"name": "Test", "model": "test-model", "size": 1}]})
        else:
            self._error(404, "SERVER_002", "Not found")

    def do_POST(self):  # noqa: N802
        if not self._authorized():
            return
        length = int(self.headers.get("Content-Length", "0"))
        body = json.loads(self.rfile.read(length) or b"{}")
        if body.get("model") != "test-model":
            self._error(404, "MODEL_001", "Model not found")
            return
        if self.path == "/api/chat":
            if self._triggers_stream_error(body):
                payload = self._stream_error().encode()
            else:
                payload = (
                    '{"message":{"role":"assistant","content":"hello "},"done":false}\n'
                    '{"message":{"role":"assistant","content":"world"},"done":false}\n'
                    '{"message":{"role":"assistant","content":""},"done":true}\n'
                ).encode()
            self._raw(200, "application/x-ndjson", payload)
        elif self.path == "/v1/chat/completions":
            if self._triggers_stream_error(body):
                payload = f"data: {self._stream_error()}\n\n".encode()
            else:
                payload = (
                    'data: {"choices":[{"delta":{"content":"openai "}}]}\n\n'
                    'data: {"choices":[{"delta":{"content":"works"}}]}\n\n'
                    'data: [DONE]\n\n'
                ).encode()
            self._raw(200, "text/event-stream", payload)
        else:
            self._error(404, "SERVER_002", "Not found")

    def _authorized(self):
        if self.headers.get("Authorization") == f"Bearer {EXPECTED_KEY}":
            return True
        self._json(
            401,
            {
                "error": {
                    "code": "AUTH_001",
                    "message": "API key required",
                    "type": "auth_failed",
                    "actions": ["Add a Bearer key"],
                }
            },
        )
        return False

    def _json(self, status, payload):
        self._raw(status, "application/json", json.dumps(payload).encode())

    def _error(self, status, code, message):
        self._json(status, {"error": {"code": code, "message": message, "type": "request_failed", "actions": []}})

    @staticmethod
    def _triggers_stream_error(body):
        return any(message.get("content") == "trigger-error" for message in body.get("messages", []))

    @staticmethod
    def _stream_error():
        return json.dumps({"error": {"code": "RUNTIME_006", "message": "Generation failed"}})

    def _raw(self, status, content_type, payload):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)
        self.wfile.flush()

    def log_message(self, _format, *_args):
        return


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
