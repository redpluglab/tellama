<p align="center">
  <img src="assets/tellama-icon.png" width="128" alt="Tellama app icon" />
</p>

<h1 align="center">Tellama</h1>

<p align="center">
  <strong>Run Ollama-compatible local AI on your Android phone.</strong><br />
  Download a GGUF model, start the Wi-Fi server, and let your PC or agent use your phone as a private AI endpoint.
</p>

<p align="center">
  <a href="https://github.com/redpluglab/tellama/releases/latest"><strong>Download the Android APK</strong></a>
  · <a href="docs/README.ko.md">한국어</a>
  · <a href="docs/API.md">API reference</a>
  · <a href="sdk/README.md">Open SDK</a>
  · <a href="https://redpluglab.github.io/tellama/privacy/">Privacy</a>
</p>

<p align="center">
  <img alt="Android 10+" src="https://img.shields.io/badge/Android-10%2B-3DDC84?logo=android&logoColor=white" />
  <img alt="Ollama compatible" src="https://img.shields.io/badge/API-Ollama_compatible-111827" />
  <img alt="OpenAI compatible" src="https://img.shields.io/badge/API-OpenAI_streaming-2563EB" />
  <img alt="SDK license" src="https://img.shields.io/badge/SDK-Apache--2.0-059669" />
</p>

## Android phone → local AI server

<p align="center">
  <img src="assets/screenshots/screenshot-06-server.png" width="360" alt="Tellama Wi-Fi LAN server running on an Android phone" />
</p>

Tellama runs compatible GGUF models through a native Android runtime. Wi-Fi LAN mode exposes a deliberately small, authenticated API surface for trusted computers and agents.

```text
Mac / PC / Agent  ── Ollama or OpenAI API ──▶  Android phone  ──▶  Local GGUF model
```

The Android application remains commercially licensed and its complete source is private. The API clients, examples, and compatibility tests in [`sdk/`](sdk/) are real open-source code under Apache-2.0.

## Quick start

1. Install the [latest APK](https://github.com/redpluglab/tellama/releases/latest).
2. In **Models**, download and select a model that fits the phone.
3. In **Server**, create an API key, choose **Wi-Fi LAN**, and start the server.
4. Export the values shown by Tellama:

```bash
export TELLAMA_URL="http://PHONE_IP:11434"
export TELLAMA_API_KEY="tlm_..."
```

List the exact model IDs installed on the phone:

```bash
curl "$TELLAMA_URL/api/tags" \
  -H "Authorization: Bearer $TELLAMA_API_KEY"
```

Call the Ollama-compatible streaming chat route:

```bash
curl "$TELLAMA_URL/api/chat" \
  -H "Authorization: Bearer $TELLAMA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MODEL_ID_FROM_API_TAGS",
    "messages": [{"role": "user", "content": "Hello from my Mac"}]
  }'
```

The response is newline-delimited JSON. OpenAI-style streaming is available at `POST /v1/chat/completions` using SSE. See the [API compatibility reference](docs/API.md) for the exact supported routes and current limitations.

## Open clients

No cloud account or package registry is required.

```bash
# Python 3.10+, standard library only
TELLAMA_URL="$TELLAMA_URL" TELLAMA_API_KEY="$TELLAMA_API_KEY" \
  python3 sdk/python/example.py

# JavaScript, Node.js 18+
TELLAMA_URL="$TELLAMA_URL" TELLAMA_API_KEY="$TELLAMA_API_KEY" \
  node sdk/javascript/example.mjs
```

The clients support model discovery, Ollama NDJSON chat streaming, OpenAI SSE chat streaming, timeouts, and structured Tellama errors. Run their contract suite with:

```bash
sdk/tests/run.sh
```

## What the Android app includes

- Phone-aware GGUF model catalog, import, selection, deletion, and per-model generation controls
- Local streaming chat with timestamps, slash commands, voice input, and user-controlled long-term memory
- Workspace dashboard for serving readiness, measured chat speed, RAM, storage, battery, and thermal guidance
- Authenticated Wi-Fi LAN serving with one-time API keys, permission scopes, rate limiting, foreground status, and automatic stop on Wi-Fi loss
- In-app update download with SHA-256, package, version, and signing-certificate verification

## Security boundary

- LAN mode is off until the user starts it.
- LAN requests require `Authorization: Bearer <key>`.
- Full API keys are displayed once; Tellama stores their SHA-256 hashes.
- Changing or losing Wi-Fi automatically stops the LAN server.
- Do not expose port `11434` to the public internet or forward it from a router.
- External API models have different privacy and billing conditions from Tellama's local server.

Report security issues through [SECURITY.md](SECURITY.md). Feature requests and SDK contributions are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md) and the [roadmap](docs/ROADMAP.md).

## Licensing

- Tellama Android application and brand assets: proprietary, all rights reserved.
- Public SDK, examples, and compatibility tests under `sdk/`: [Apache License 2.0](sdk/LICENSE).
- Downloaded models: governed by each model publisher's license.

This repository intentionally does not contain the Tellama Android application source, native runtime implementation, signing material, or internal configuration.
