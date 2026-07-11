"""Minimal Tellama Python example. SPDX-License-Identifier: Apache-2.0"""

import os

from tellama import TellamaClient


base_url = os.environ.get("TELLAMA_URL")
api_key = os.environ.get("TELLAMA_API_KEY")
if not base_url or not api_key:
    raise SystemExit("Set TELLAMA_URL and TELLAMA_API_KEY before running this example")

client = TellamaClient(base_url, api_key)
models = client.list_models()
if not models:
    raise SystemExit("No model is installed in Tellama")

model = models[0]["model"]
for text in client.ollama_chat(
    model,
    [{"role": "user", "content": "Hello from Python"}],
):
    print(text, end="", flush=True)
print()
