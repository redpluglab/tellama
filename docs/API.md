# Tellama API compatibility

Tellama exposes a focused subset of Ollama and OpenAI-compatible routes from an Android phone. This document describes the routes that are implemented and tested; it does not claim drop-in compatibility with every Ollama or OpenAI feature.

## Connection and authentication

- Default port: `11434`
- Phone-only mode: binds to `127.0.0.1`
- Wi-Fi LAN mode: displays the phone's current private IPv4 address
- LAN authentication: `Authorization: Bearer tlm_...`
- Content type: JSON requests; NDJSON or SSE generation responses
- Error language: `Accept-Language` supports Korean, English, and Japanese

Never place the API key in source control, command history intended for sharing, screenshots, or issue reports. Tellama shows each complete key once and stores only its hash.

## Supported routes

| Method | Route | Permission | Response |
|---|---|---|---|
| `GET` | `/api/tags` | `model_read` | Ollama-style installed model list |
| `GET` | `/api/ps` | `model_read` | Running model list; currently an empty compatibility list |
| `POST` | `/api/show` | `model_read` | GGUF format and available model metadata |
| `POST` | `/api/chat` | `chat` | NDJSON chat stream |
| `POST` | `/api/generate` | `generate` | NDJSON text-generation stream |
| `GET` | `/v1/models` | `model_read` | OpenAI-style installed model list |
| `POST` | `/v1/chat/completions` | `chat` | SSE chat-completion stream |

## Model discovery

```bash
curl "$TELLAMA_URL/api/tags" \
  -H "Authorization: Bearer $TELLAMA_API_KEY"
```

Use the returned `model` value exactly in generation requests. Display names are not guaranteed to be model IDs.

## Ollama chat stream

```bash
curl "$TELLAMA_URL/api/chat" \
  -H "Authorization: Bearer $TELLAMA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MODEL_ID",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Each response line is a JSON object. Text appears in `message.content`; the final object has `done: true`.

## OpenAI chat stream

```bash
curl -N "$TELLAMA_URL/v1/chat/completions" \
  -H "Authorization: Bearer $TELLAMA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MODEL_ID",
    "stream": true,
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Tellama sends `data: {json}` SSE events and terminates with `data: [DONE]`.

## Errors

Non-success responses use an HTTP status and a structured body:

```json
{
  "error": {
    "message": "Human-readable summary",
    "type": "auth_failed",
    "code": "AUTH_001",
    "actions": ["Suggested recovery action"]
  }
}
```

Common statuses include `400` for invalid requests, `401` for missing or invalid credentials, `403` for insufficient permission, `404` for unknown models, `429` for rate limiting, and `503` when the local runtime cannot serve the request.

## Current limitations

- Chat completions are streaming-only in the current compatibility layer.
- Tool calls, embeddings, image inputs, model upload/pull, and model deletion are not exposed through the API.
- The server handles one local runtime workload conservatively; concurrent generation may return a runtime-busy error.
- Performance depends on the Android device, selected quantization, available RAM, context, battery, and temperature.
- Wi-Fi LAN is intended for trusted local networks only. TLS termination and public-internet exposure are outside Tellama's supported boundary.
