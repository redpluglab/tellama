"""Dependency-free client for the Tellama local AI server.

SPDX-License-Identifier: Apache-2.0
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any, Iterator, Sequence
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen


@dataclass
class TellamaError(Exception):
    """An HTTP or Tellama API error with a safe, non-secret description."""

    message: str
    status: int | None = None
    code: str | None = None

    def __str__(self) -> str:
        details = [part for part in (self.code, str(self.status) if self.status else None) if part]
        prefix = " / ".join(details)
        return f"{prefix}: {self.message}" if prefix else self.message


class TellamaClient:
    """Small synchronous client for Ollama and OpenAI-compatible streaming routes."""

    def __init__(self, base_url: str, api_key: str | None = None, timeout: float = 180.0):
        parsed = urlparse(base_url)
        if parsed.scheme not in {"http", "https"} or not parsed.hostname:
            raise ValueError("base_url must be an absolute http(s) URL")
        if timeout <= 0:
            raise ValueError("timeout must be greater than zero")
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key.strip() if api_key else None
        self.timeout = timeout

    def list_models(self) -> list[dict[str, Any]]:
        """Return Ollama-compatible model descriptors from GET /api/tags."""
        with self._open("GET", "/api/tags") as response:
            payload = json.load(response)
        models = payload.get("models", [])
        if not isinstance(models, list):
            raise TellamaError("The server returned an invalid model list")
        return models

    def ollama_chat(
        self,
        model: str,
        messages: Sequence[dict[str, str]],
    ) -> Iterator[str]:
        """Yield visible text chunks from POST /api/chat (NDJSON)."""
        body = {"model": model, "messages": list(messages), "stream": True}
        with self._open("POST", "/api/chat", body) as response:
            for raw_line in response:
                line = raw_line.decode("utf-8").strip()
                if not line:
                    continue
                payload = json.loads(line)
                chunk = payload.get("message", {}).get("content", "")
                if chunk:
                    yield chunk
                if payload.get("done") is True:
                    return

    def openai_chat(
        self,
        model: str,
        messages: Sequence[dict[str, str]],
    ) -> Iterator[str]:
        """Yield text chunks from POST /v1/chat/completions (SSE)."""
        body = {"model": model, "messages": list(messages), "stream": True}
        with self._open("POST", "/v1/chat/completions", body) as response:
            for raw_line in response:
                line = raw_line.decode("utf-8").strip()
                if not line.startswith("data:"):
                    continue
                data = line.removeprefix("data:").strip()
                if data == "[DONE]":
                    return
                payload = json.loads(data)
                choices = payload.get("choices", [])
                if choices:
                    chunk = choices[0].get("delta", {}).get("content", "")
                    if chunk:
                        yield chunk

    def _open(self, method: str, path: str, body: dict[str, Any] | None = None):
        headers = {"Accept": "application/json"}
        if self.api_key:
            headers["Authorization"] = f"Bearer {self.api_key}"
        data = None
        if body is not None:
            data = json.dumps(body, separators=(",", ":")).encode("utf-8")
            headers["Content-Type"] = "application/json"
        request = Request(f"{self.base_url}{path}", data=data, headers=headers, method=method)
        try:
            return urlopen(request, timeout=self.timeout)
        except HTTPError as error:
            raise self._http_error(error) from None
        except (URLError, TimeoutError, OSError) as error:
            reason = getattr(error, "reason", error)
            raise TellamaError(f"Could not reach Tellama: {reason}") from None

    @staticmethod
    def _http_error(error: HTTPError) -> TellamaError:
        try:
            payload = json.loads(error.read().decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            payload = {}
        body = payload.get("error") if isinstance(payload.get("error"), dict) else payload
        return TellamaError(
            message=body.get("message") or "Tellama request failed",
            status=error.code,
            code=body.get("code"),
        )


__all__ = ["TellamaClient", "TellamaError"]
