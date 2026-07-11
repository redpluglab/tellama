# Tellama open SDK

Dependency-free clients for the authenticated Tellama local AI server.

- `python/tellama.py`: Python 3.10+ standard-library client
- `javascript/tellama.mjs`: JavaScript client using built-in `fetch` and web streams
- `tests/`: deterministic mock server and cross-client contract tests

Both clients provide model discovery, Ollama NDJSON chat streaming, OpenAI SSE chat streaming, timeouts, and structured errors. They never log the API key.

## Python

```python
from tellama import TellamaClient

client = TellamaClient("http://PHONE_IP:11434", "tlm_...")
model = client.list_models()[0]["model"]
for chunk in client.ollama_chat(model, [{"role": "user", "content": "Hello"}]):
    print(chunk, end="", flush=True)
```

## JavaScript

```javascript
import { TellamaClient } from "./tellama.mjs";

const client = new TellamaClient({
  baseUrl: "http://PHONE_IP:11434",
  apiKey: "tlm_...",
});
const [model] = await client.listModels();
for await (const chunk of client.ollamaChat({
  model: model.model,
  messages: [{ role: "user", content: "Hello" }],
})) process.stdout.write(chunk);
```

Generation controls can be supplied through Python `options={"num_predict": 64}` or JavaScript `options: { num_predict: 64 }`. OpenAI-style helpers accept `max_tokens`/`maxTokens` and `temperature`. Streamed server errors are raised as structured `TellamaError` instances.

Run the contract tests with `tests/run.sh`. The public SDK and tests are licensed under Apache-2.0; they do not include Tellama Android application source code.
