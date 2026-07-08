# Tellama

**Private local AI for Android. A phone-first LLM workspace with local models, long-term Memory, voice input, and an Ollama/OpenAI-compatible API server.**

[Public Site](https://redpluglab.github.io/tellama/) · [Privacy Policy](https://redpluglab.github.io/tellama/privacy/)

Tellama is built for people who want serious AI on a phone without turning every prompt into a cloud dependency. It brings local GGUF model execution, private chat, persistent user-approved Memory, device safety checks, and developer-friendly API serving into one polished Android experience.

The app is designed for three kinds of users:

- People who want a private AI assistant that runs on their own Android device.
- Developers who want a phone to act as a local LLM endpoint for tools, scripts, and prototypes.
- Local AI enthusiasts who want practical model management, safety checks, and mobile-first runtime controls instead of a fragile demo.

This public repository contains product pages, privacy documentation, and public release information. The commercial Android source code is maintained privately by redplug, Inc.

## Why Tellama Feels Different

Most mobile AI apps are either cloud chat wrappers or experimental model launchers. Tellama is different: it treats the phone as a real AI runtime.

It is not just a chat box. It is a local model manager, runtime safety layer, long-term Memory system, developer API bridge, and privacy-forward Android app wrapped into one product.

## Core Capabilities

### Local LLM on Android

Tellama runs supported GGUF models locally on Android through a native llama.cpp runtime. Users can import local model files or download supported catalog models, then chat directly on the device.

Local execution is useful when users want lower data exposure, better control, offline-capable workflows after model setup, or a personal AI workspace that does not depend on sending prompts to a Tellama cloud server.

### Model Catalog and Phone-First Filtering

Tellama is built around realistic mobile constraints. The catalog is curated for phone-first serving and hides models that are too large for typical smartphones.

The model flow includes:

- GGUF model import.
- User-initiated model downloads.
- HTTPS and trusted-host validation.
- Checksum and file-size policy checks.
- Phone-first model size filtering.
- Preflight checks before loading.

### Long-Term Memory

Tellama includes user-controlled Memory so the assistant can carry useful context forward across conversations.

Memory is designed around consent and control:

- Users can manually save important facts, preferences, summaries, and project notes.
- Memory items are stored locally.
- The prompt builder curates Memory into compact profile and note sections.
- Users can delete individual Memory items or reset Memory.
- The assistant uses Memory only as part of the local prompt context.

This makes Tellama feel less like a blank chatbot and more like a personal workspace that can remember what matters.

### Local and Remote API Serving

Tellama can expose a local AI API server from the Android device.

The server is designed for developers who want to connect their own tools to a model running on the phone:

- Ollama-style routes.
- OpenAI-compatible chat completion flow.
- Local Only mode by default on `127.0.0.1`.
- Optional LAN mode for trusted local network clients.
- API key authentication.
- Rate limiting.
- Foreground service notification while serving is active.

In practice, this means a phone can become a private LLM endpoint for scripts, desktop tools, local agents, or experiments on the same trusted network.

### Runtime Safety and Preflight Checks

Local AI on phones needs guardrails. Tellama checks device conditions before and during runtime so users have a better chance of choosing a model that fits their device.

Safety features include:

- Memory readiness checks.
- Storage checks.
- Battery and charging awareness.
- Thermal risk handling.
- Safe Mode diagnostics after runtime failures.
- Load attempt tracking.
- Redacted support reports.

### Privacy-Forward Data Model

Tellama is built so prompts, responses, chat history, Memory items, API keys, and diagnostics stay on the user's device unless the user explicitly chooses otherwise.

Privacy and security choices include:

- No Tellama account required for local use.
- Encrypted local database.
- Android backup disabled for app data.
- API keys stored as hashes, not plaintext.
- Redacted support reports.
- Clear public Data safety and privacy documentation.

### Voice Input

Tellama supports optional voice input through the Android system speech service. Voice is user initiated, raw audio is not stored by Tellama, and recognized text is treated like normal chat input when the user sends it.

### Multilingual Experience

Tellama supports a broad language setting for the app, voice input, and the assistant's default response language.

Current language coverage includes:

- English
- 한국어
- 日本語
- 简体中文
- 繁體中文
- Español
- Français
- Deutsch
- Português do Brasil
- Italiano
- Bahasa Indonesia
- Tiếng Việt
- ไทย
- हिन्दी
- العربية

When the user selects a language, Tellama uses it not only for the UI but also as the default LLM response language, unless the user explicitly asks for another language.

## Feature Map

| Area | What Tellama Provides |
|---|---|
| Local AI | GGUF model execution on Android via native runtime |
| Model management | Import, catalog downloads, validation, phone-first filtering |
| Chat | Local conversations with streaming and cancellation |
| Memory | User-approved long-term facts, preferences, summaries, project notes |
| API serving | Ollama/OpenAI-compatible local server with optional LAN access |
| Security | API keys, rate limiting, local-only default, hashed secrets |
| Safety | Preflight checks, thermal/battery/storage awareness, Safe Mode |
| Privacy | Encrypted local data, no account required, redacted support reports |
| Voice | Optional system speech recognition integration |
| Languages | UI, voice, and default AI response language alignment |

## Example Use Cases

### Personal Local Assistant

Use Tellama as a private assistant that keeps useful Memory on the device: preferences, project notes, writing style, recurring context, and important facts.

### Developer Phone Endpoint

Run a compatible local model on Android and connect tools to the phone through the local API server. Start with Local Only, then enable LAN mode only on trusted networks.

### Portable AI Lab

Test model sizes, runtime behavior, generation settings, preflight outcomes, and mobile constraints without needing a desktop-class machine for every experiment.

### Privacy-Conscious Chat

Use local model execution for conversations where users want more control over where prompts and responses are processed.

## Product Positioning

### English

Tellama is a premium Android app for private local AI. It combines local model execution, long-term Memory, voice input, model safety checks, and optional API serving in a refined mobile experience.

### 한국어

Tellama는 Android 기기에서 로컬 AI를 실행하기 위한 프리미엄 앱입니다. 로컬 LLM 실행, 장기기억 Memory, 음성 입력, 모델 안전 점검, 선택형 API 서빙을 하나의 완성도 높은 모바일 경험으로 제공합니다.

### 日本語

Tellama は、Android でプライベートなローカル AI を扱うためのプレミアムアプリです。ローカル LLM 実行、長期 Memory、音声入力、モデル安全チェック、任意の API サービングを洗練されたモバイル体験としてまとめます。

### 中文

Tellama 是一款面向 Android 的高品质本地 AI 应用。它整合了本地 LLM 运行、长期 Memory、语音输入、模型安全检查，以及可选的 API 服务能力。

### Español

Tellama es una aplicación premium de Android para IA local y privada. Combina ejecución local de modelos, Memory a largo plazo, entrada de voz, comprobaciones de seguridad y API local opcional.

### Français

Tellama est une application Android premium pour l'IA locale et privée. Elle réunit exécution locale de modèles, Memory à long terme, saisie vocale, contrôles de sécurité et API locale optionnelle.

### Deutsch

Tellama ist eine hochwertige Android-App für private lokale KI. Sie verbindet lokale Modellausführung, langfristige Memory, Spracheingabe, Sicherheitsprüfungen und optionales API-Serving.

### Português

Tellama é um app Android premium para IA local e privada. Ele combina execução local de modelos, Memory de longo prazo, entrada por voz, verificações de segurança e API local opcional.

## Privacy

Tellama does not require a Tellama account for local use. Prompts, responses, chat history, Memory items, API keys, and diagnostics are designed to stay on the user's device unless the user explicitly chooses otherwise.

Read the public privacy policy:

https://redpluglab.github.io/tellama/privacy/

## Repository Note

This repository is public so users, reviewers, and partners can inspect Tellama's public-facing product information and privacy documentation. The production Android application source is kept in a private commercial repository.
