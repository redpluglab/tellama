<p align="center">
  <img src="assets/tellama-icon.png" width="148" alt="Tellama app icon" />
</p>

<h1 align="center">Tellama</h1>

<p align="center">
  <strong>Private local AI for Android.</strong><br />
  Turn your phone into a personal AI workspace with local LLMs, long-term memory, voice input, model downloads, and an Ollama/OpenAI-compatible API server.
</p>

<p align="center">
  <a href="https://github.com/redpluglab/tellama/releases/latest"><strong>Download test APK</strong></a>
  ·
  <a href="https://redpluglab.github.io/tellama/">Product page</a>
  ·
  <a href="https://redpluglab.github.io/tellama/privacy/">Privacy policy</a>
</p>

<p align="center">
  <a href="#english">English</a>
  ·
  <a href="#korean">한국어</a>
  ·
  <a href="#chinese-simplified">简体中文</a>
  ·
  <a href="#japanese">日本語</a>
  ·
  <a href="#german">Deutsch</a>
  ·
  <a href="#french">Français</a>
  ·
  <a href="#spanish">Español</a>
  ·
  <a href="#portuguese">Português</a>
  ·
  <a href="#indonesian">Indonesia</a>
  ·
  <a href="#hindi">हिन्दी</a>
</p>

<p align="center">
  <img alt="Android" src="https://img.shields.io/badge/Android-Local_AI-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img alt="Local first" src="https://img.shields.io/badge/Local--first-Private_Workspace-111827?style=for-the-badge" />
  <img alt="GGUF" src="https://img.shields.io/badge/GGUF-Model_Ready-2563EB?style=for-the-badge" />
  <img alt="API" src="https://img.shields.io/badge/API-Ollama_%2F_OpenAI-7C3AED?style=for-the-badge" />
  <img alt="Privacy" src="https://img.shields.io/badge/Privacy-No_Forced_Login-059669?style=for-the-badge" />
</p>

---

## Global Snapshot

<a id="english"></a>

### English

Tellama is a private local AI workspace for Android. It lets you run compatible GGUF models on your phone, manage memory, use voice input, download mobile-friendly models, and expose an Ollama/OpenAI-compatible local API when needed.

<a id="korean"></a>

### 한국어

Tellama는 Android 스마트폰에서 로컬 LLM을 실행하는 개인 AI 워크스페이스입니다. 장기기억, 음성 입력, 모바일 친화 모델 다운로드, Ollama/OpenAI 호환 로컬 API 서버까지 한 앱 안에서 제공합니다.

<a id="chinese-simplified"></a>

### 简体中文

Tellama 是一款面向 Android 的私人本地 AI 工作空间。你可以在手机上运行兼容的 GGUF 模型，管理长期记忆，使用语音输入，下载适合移动设备的模型，并在需要时启用兼容 Ollama/OpenAI 的本地 API。

<a id="japanese"></a>

### 日本語

Tellama は Android 向けのプライベートなローカル AI ワークスペースです。対応する GGUF モデルの実行、長期メモリ、音声入力、モバイル向けモデルのダウンロード、Ollama/OpenAI 互換のローカル API サーバーを利用できます。

<a id="german"></a>

### Deutsch

Tellama ist ein privater lokaler KI-Arbeitsbereich für Android. Die App unterstützt kompatible GGUF-Modelle auf dem Smartphone, Langzeitgedächtnis, Spracheingabe, mobile Modell-Downloads und bei Bedarf einen Ollama/OpenAI-kompatiblen lokalen API-Server.

<a id="french"></a>

### Français

Tellama est un espace de travail d'IA locale privée pour Android. L'application permet d'exécuter des modèles GGUF compatibles sur le téléphone, d'utiliser une mémoire longue durée, la saisie vocale, des téléchargements de modèles adaptés au mobile et une API locale compatible Ollama/OpenAI.

<a id="spanish"></a>

### Español

Tellama es un espacio de trabajo de IA local y privada para Android. Permite ejecutar modelos GGUF compatibles en el teléfono, usar memoria a largo plazo, entrada por voz, descargas de modelos adecuados para móviles y una API local compatible con Ollama/OpenAI.

<a id="portuguese"></a>

### Português

Tellama é um espaço de trabalho de IA local e privada para Android. Ele permite executar modelos GGUF compatíveis no celular, usar memória de longo prazo, entrada por voz, downloads de modelos adequados para dispositivos móveis e uma API local compatível com Ollama/OpenAI.

<a id="indonesian"></a>

### Indonesia

Tellama adalah ruang kerja AI lokal dan privat untuk Android. Aplikasi ini mendukung model GGUF yang kompatibel di ponsel, memori jangka panjang, input suara, unduhan model yang cocok untuk perangkat mobile, dan API lokal kompatibel Ollama/OpenAI.

<a id="hindi"></a>

### हिन्दी

Tellama Android के लिए एक निजी लोकल AI वर्कस्पेस है। यह फोन पर compatible GGUF models चलाने, long-term memory, voice input, mobile-friendly model downloads और जरूरत पड़ने पर Ollama/OpenAI-compatible local API server का उपयोग करने में मदद करता है।

---

## One Phone. One Private AI Workspace.

Tellama is an Android app for people who want practical AI on their own device, not just another cloud chat screen.

It brings together the pieces a real mobile AI product needs:

- Local GGUF model execution on Android.
- A curated phone-first model catalog.
- User-controlled long-term memory.
- Voice input through Android speech recognition.
- Safe model loading with device diagnostics.
- A local API server compatible with familiar Ollama and OpenAI-style workflows.
- Multilingual UI and language-aware assistant behavior.
- Optional profile and update contact, without forcing login.

Tellama is built for users who want control, privacy, and mobility. It is also built for developers who want an Android phone to act as a small local AI endpoint for tools, scripts, and experiments.

> Public repository note: this repository contains the public product page, privacy documentation, and APK release assets. The commercial Android application source code is maintained privately by redplug, Inc.

---

## Why Tellama

Most mobile AI apps fall into one of two groups: cloud chat wrappers or experimental local model demos. Tellama aims for the useful space in between.

It is a polished Android product experience around local AI:

| Tellama gives you | Why it matters |
|---|---|
| **Private local chat** | Prompts and responses can stay on the device when using local models. |
| **Long-term memory** | The assistant can remember user-approved facts, preferences, summaries, and project notes. |
| **Mobile model flow** | Users are guided toward models that make sense for phones instead of oversized desktop-class files. |
| **API serving** | A phone can become an Ollama/OpenAI-compatible local endpoint for trusted workflows. |
| **Safety diagnostics** | Memory, storage, battery, thermal, and load-state checks help users understand what is happening. |
| **No forced account** | Core local use does not require a Tellama login. |

The goal is simple: make local AI on Android feel less fragile, less technical, and more like a real product.

---

## Core Features

### Local LLM on Android

Tellama runs compatible GGUF models directly on Android through a native local runtime. Users can import supported model files or download catalog models, then chat on the phone.

Local execution is useful when users want:

- Better control over where prompts are processed.
- Offline-capable workflows after setup.
- A personal AI workspace that is not tied to a Tellama cloud account.
- A portable test environment for mobile LLM behavior.

### Phone-First Model Catalog

Tellama is designed around real smartphone limits. The model catalog focuses on practical small models and hides models that are unrealistic for typical phones.

The catalog flow supports:

- User-initiated model downloads.
- GGUF model import.
- Trusted download sources.
- File-size and checksum validation.
- Phone-first filtering for mobile-friendly models.
- Preflight checks before loading.

This helps users avoid wasting time on huge models that are unlikely to load well on a phone.

### Long-Term Memory

Tellama includes a local, user-controlled memory system so the assistant can become more useful over time.

Memory can store:

- User preferences.
- Personal facts.
- Project notes.
- Summaries.
- Reusable instructions.

Memory is not an invisible black box. It is local, reviewable, and deletable by the user. Tellama uses memory as compact context for future conversations, so the assistant can respond with more continuity instead of starting from zero every time.

### Local API Server

Tellama can serve a local model through an API from the Android device.

Developer-focused capabilities include:

- Ollama-style routes.
- OpenAI-compatible chat completion flow.
- Local Only mode by default.
- Optional LAN access for trusted networks.
- API key protection.
- Rate limiting.
- Foreground service notification while serving.

That means the phone is not just a chat interface. It can become a small private AI service for local tools, desktop scripts, agents, and prototypes.

### Voice Input

Tellama supports optional voice input through the Android system speech service. Voice input is user initiated, and recognized text flows into the normal chat composer.

### Multilingual Experience

Tellama is built for global use. The selected app language also guides the assistant's default response language, unless the user asks for something else.

Current language coverage includes:

| Language | Display |
|---|---|
| English | English |
| Korean | 한국어 |
| Japanese | 日本語 |
| Simplified Chinese | 简体中文 |
| Traditional Chinese | 繁體中文 |
| Spanish | Español |
| French | Français |
| German | Deutsch |
| Brazilian Portuguese | Português do Brasil |
| Italian | Italiano |
| Indonesian | Bahasa Indonesia |
| Vietnamese | Tiếng Việt |
| Thai | ไทย |
| Hindi | हिन्दी |
| Arabic | العربية |

### Optional Profile

Tellama does not force login for local use. Users can optionally add a profile photo and contact email for product updates or future account-related features.

This keeps onboarding light while still supporting a more personal product experience.

---

## Built for Trust

Tellama is designed with commercial release expectations in mind.

- No account required for core local use.
- Local Only API serving by default.
- LAN serving requires explicit user action.
- API keys are protected and not stored as plain visible secrets.
- Local data is encrypted.
- Android backup is disabled for app data.
- Model downloads are user initiated.
- Support reports are redacted before sharing.
- Foreground service behavior is visible for downloads and serving.
- Privacy policy and Data safety documentation are prepared for Play Store review.

Tellama's privacy promise is practical: keep the user in control, explain what is happening, and avoid sending data somewhere unexpected.

---

## What You Can Do With Tellama

### Use It as a Private Assistant

Chat with a local model, save important memory, keep useful context across sessions, and work in the language that feels natural.

### Use It as a Mobile LLM Server

Start a compatible model on Android and connect trusted local tools through Ollama/OpenAI-compatible routes.

### Use It as a Developer Test Bench

Test model loading, streaming, cancellation, memory pressure, battery state, thermal behavior, and real mobile constraints on actual Android hardware.

### Use It as a Portable Knowledge Companion

Store project notes and preferences locally so your assistant can stay aligned with your work without requiring a cloud account.

---

## Test APK

The current public test build is available from GitHub Releases:

[Download the latest Tellama APK](https://github.com/redpluglab/tellama/releases/latest)

Important notes:

- This APK is intended for phone testing before Play Store distribution.
- Android may ask you to allow installation from the browser or file manager.
- Future Play Store builds should be updated through Google Play.
- Model licenses vary by provider. Users should review each model's license before commercial use.

---

## Repository Scope

This public repository is intentionally limited.

It contains:

- Product README.
- Public website files.
- Privacy policy.
- Public APK release assets.

It does not contain:

- Commercial Android app source code.
- Private signing keys.
- Internal build scripts.
- Store operation credentials.
- Proprietary implementation details.

The Android source code is maintained in a private redplug, Inc. repository.

---

## Company

Tellama is developed by **redplug, Inc.**

Public links:

- Product page: [https://redpluglab.github.io/tellama/](https://redpluglab.github.io/tellama/)
- Privacy policy: [https://redpluglab.github.io/tellama/privacy/](https://redpluglab.github.io/tellama/privacy/)
- Releases: [https://github.com/redpluglab/tellama/releases](https://github.com/redpluglab/tellama/releases)
