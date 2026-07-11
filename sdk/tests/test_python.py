"""Python SDK contract test. SPDX-License-Identifier: Apache-2.0"""

import os
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).parents[1] / "python"))

from tellama import TellamaClient, TellamaError  # noqa: E402


base_url = os.environ.get("TELLAMA_TEST_URL", "http://127.0.0.1:18765")

try:
    TellamaClient(base_url, timeout=0)
    raise AssertionError("zero timeout unexpectedly accepted")
except ValueError:
    pass

try:
    TellamaClient(base_url).list_models()
    raise AssertionError("unauthenticated request unexpectedly succeeded")
except TellamaError as error:
    assert error.status == 401
    assert error.code == "AUTH_001"

client = TellamaClient(base_url, "test-key")
models = client.list_models()
assert models[0]["model"] == "test-model"
try:
    list(client.ollama_chat("missing", [{"role": "user", "content": "hi"}]))
    raise AssertionError("unknown model unexpectedly succeeded")
except TellamaError as error:
    assert error.status == 404
    assert error.code == "MODEL_001"
assert "".join(client.ollama_chat("test-model", [{"role": "user", "content": "hi"}])) == "hello world"
assert "".join(client.openai_chat("test-model", [{"role": "user", "content": "hi"}])) == "openai works"
print("python-sdk: ok")
