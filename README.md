# Tellama

**Private local AI for Android.**  
Turn your phone into a personal AI workspace with local LLMs, long-term memory, voice input, model downloads, and an Ollama/OpenAI-compatible API server.

[![Android](https://img.shields.io/badge/Platform-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](#)
[![Local First](https://img.shields.io/badge/Local--first-Private_AI-111827?style=for-the-badge)](#)
[![GGUF](https://img.shields.io/badge/Models-GGUF-2563EB?style=for-the-badge)](#)
[![API](https://img.shields.io/badge/API-Ollama_%2F_OpenAI_compatible-7C3AED?style=for-the-badge)](#)
[![Privacy](https://img.shields.io/badge/Privacy-No_account_required-059669?style=for-the-badge)](#)

[Download test APK](https://github.com/redpluglab/tellama/releases/latest) · [Product page](https://redpluglab.github.io/tellama/) · [Privacy policy](https://redpluglab.github.io/tellama/privacy/)

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

## 한국어 소개

Tellama는 Android 스마트폰에서 로컬 LLM을 실행하고, 장기기억과 음성 입력, 모델 다운로드, Ollama/OpenAI 호환 API 서버까지 제공하는 개인 AI 워크스페이스입니다.

핵심 사용성은 간단합니다.

- 계정 없이 로컬 AI 사용.
- 휴대폰에 맞는 GGUF 모델 다운로드 또는 가져오기.
- 중요한 정보는 사용자가 승인한 장기기억으로 저장.
- 필요할 때 스마트폰을 로컬 AI API 서버처럼 활용.
- 안전 모드와 진단으로 모델 로딩 문제를 이해하기 쉽게 안내.
- 앱 언어 설정에 따라 AI 기본 응답 언어도 자연스럽게 맞춤.

Tellama는 “폰에서 돌아가는 장난감 데모”가 아니라, 실제 사용자 테스트와 Google Play 출시를 목표로 다듬고 있는 상용 Android 앱입니다.

---

## Short Global Summary

| Language | Summary |
|---|---|
| English | Private local AI for Android with local models, memory, voice, and API serving. |
| 한국어 | 안드로이드에서 로컬 LLM, 장기기억, 음성 입력, API 서버를 제공하는 개인 AI 앱. |
| 日本語 | AndroidでローカルLLM、長期メモリ、音声入力、APIサーバーを使える個人AIアプリ。 |
| 简体中文 | 面向 Android 的本地 AI 应用，支持本地模型、长期记忆、语音输入和 API 服务。 |
| 繁體中文 | Android 本地 AI 應用，支援本地模型、長期記憶、語音輸入與 API 服務。 |
| Español | IA local privada para Android con modelos locales, memoria, voz y servidor API. |
| Français | IA locale privée pour Android avec modèles locaux, mémoire, voix et serveur API. |
| Deutsch | Private lokale KI für Android mit lokalen Modellen, Gedächtnis, Spracheingabe und API-Server. |
| Português | IA local privada para Android com modelos locais, memória, voz e servidor de API. |

---

## Company

Tellama is developed by **redplug, Inc.**

Public links:

- Product page: [https://redpluglab.github.io/tellama/](https://redpluglab.github.io/tellama/)
- Privacy policy: [https://redpluglab.github.io/tellama/privacy/](https://redpluglab.github.io/tellama/privacy/)
- Releases: [https://github.com/redpluglab/tellama/releases](https://github.com/redpluglab/tellama/releases)
