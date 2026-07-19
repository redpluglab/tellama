(() => {
  "use strict";

  // 사용법 가이드 페이지 전용 i18n 컨트롤러.
  // index 의 site.js 와 동일한 동작(언어 저장·메뉴·번역)이지만,
  // 사전은 이 페이지에서 쓰는 키만 담아 독립적으로 유지한다.
  const LANGUAGE_KEY = "tellama-site-language";
  const SUPPORTED_LANGUAGES = new Set(["ko", "en"]);

  const META = {
    ko: {
      title: "Tellama 사용법 — 단계별 안내",
      description: "Tellama 안드로이드 앱을 설치부터 첫 대화, 안전 모드, 로컬 서버까지 그림과 함께 차근차근 안내하는 사용 설명서입니다."
    },
    en: {
      title: "How to use Tellama — step-by-step guide",
      description: "An illustrated manual for the Tellama Android app: install, first-run setup, chatting, Safe Mode, and the local server."
    }
  };

  const EN = {
    skip: "Skip to content",
    menu: "Menu",
    language: "Language",
    navProduct: "Product",
    navModels: "Models",
    navInstall: "Install",
    navSupport: "Support",
    navGuide: "Guide",
    navHome: "Home",
    downloadShort: "Download APK",

    guideBadge: "USER GUIDE",
    guideTitle: "Here is how to use Tellama",
    guideLead: "From installing the APK to your first conversation, Safe Mode, and the local server — each step is walked through with a hand-drawn sketch of the screen you will see.",
    guideNote: "Sketches are simplified illustrations of the real screens, so the layout on your phone may look slightly different.",

    tocInstall: "1 · Install",
    tocOnboard: "2 · First run",
    tocSetup: "3 · Auto setup",
    tocChat: "4 · First chat",
    tocModels: "5 · Models",
    tocSafe: "6 · Safe Mode",
    tocServer: "7 · Local server",

    step1Kicker: "STEP 01",
    step1Title: "Install the APK",
    step1Lead: "Tellama is shared as a signed APK during friend-testing, so you install it once from the release page.",
    step1a: "Open the release page and download the latest tellama-v1-2-7.apk.",
    step1b: "When Android asks, allow “Install unknown apps” for your browser this one time.",
    step1c: "Let Play Protect finish its scan, then tap Install.",
    step1Alt: "Sketch: a phone downloading the APK with the install-permission toggle turned on.",

    step2Kicker: "STEP 02",
    step2Title: "First run — meet the goat",
    step2Lead: "The first time you open Tellama, a friendly three-page walkthrough introduces the app.",
    step2a: "Swipe through the three intro pages narrated by the Tellama goat.",
    step2b: "Read what stays on device and what a model download needs.",
    step2c: "Tap “Get started” to begin automatic setup — every step is skippable.",
    step2Alt: "Sketch: three onboarding cards with the goat mascot and a Get started button.",

    step3Kicker: "STEP 03",
    step3Title: "Automatic setup",
    step3Lead: "Tellama inspects your phone and gets a suitable model ready without any decisions from you.",
    step3a: "It checks your RAM and storage, then picks a model that fits your device.",
    step3b: "The model downloads with a live progress bar, then warms up into memory.",
    step3c: "When it says “All set!”, a bouncing arrow points you to the Chat tab.",
    step3Alt: "Sketch: a download progress bar filling from 0 to 100 percent and an All set badge.",

    step4Kicker: "STEP 04",
    step4Title: "Start your first chat",
    step4Lead: "Open the Chat tab and the model is already loaded and ready to talk — fully offline.",
    step4a: "Type your message in the full-width field at the bottom.",
    step4b: "Attach a file, web, or voice using the tool row just beneath it.",
    step4c: "Tap send — replies stream in, and you approve anything saved to Memory.",
    step4Alt: "Sketch: the chat screen with the two-row composer and an arrow pointing to the Chat tab.",

    step5Kicker: "STEP 05",
    step5Title: "Pick or change the model",
    step5Lead: "The Models tab is where you move from light everyday chat to deeper reasoning as your phone allows.",
    step5a: "Each model shows a RAM badge and its readiness state.",
    step5b: "Download a model that fits, then set it as the serving model.",
    step5c: "Switching is safe — the old model is unloaded before the new one loads.",
    step5Alt: "Sketch: a model catalog list with RAM badges and a Download button.",

    step6Kicker: "STEP 06",
    step6Title: "Safe Mode when things feel off",
    step6Lead: "If the app ever feels unstable, Safe Mode runs everything in its most conservative state.",
    step6a: "Open Settings → Safety & Diagnostics.",
    step6b: "Turn on “Enable Safe Mode manually”.",
    step6c: "The local server is blocked and models use a reduced context until you turn it off.",
    step6Alt: "Sketch: the Safety settings page with the Safe Mode switch turned on.",

    step7Kicker: "STEP 07",
    step7Title: "Use it from another device",
    step7Lead: "The Server tab turns your phone into a local, Ollama/OpenAI-compatible AI server for trusted devices.",
    step7a: "Choose who can connect: this phone only, or your Wi-Fi.",
    step7b: "For Wi-Fi access, create an API key first, then start the server.",
    step7c: "Copy the address or the ready-made curl example into your app on another device.",
    step7Alt: "Sketch: a phone and a laptop connected over Wi-Fi with a curl command.",

    outroTitle: "That is the whole tour",
    outroLead: "Download the latest APK and start your own local AI in a few minutes.",
    outroDownload: "Download latest APK",
    backHome: "Back to home",

    footerTagline: "Private by default. Powerful on device.",
    privacyPolicy: "Privacy Policy",
    security: "Security",
    contribute: "Contribute",
    releases: "Releases",
    contact: "Contact",
    rights: "All rights reserved."
  };

  const translatableElements = Array.from(document.querySelectorAll("[data-i18n]"));
  const koreanText = new Map(translatableElements.map((element) => [element, element.textContent]));
  const languageSelect = document.querySelector("#language");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-navigation]");
  const descriptionMeta = document.querySelector('meta[name="description"]');

  function normalizeLanguage(value) {
    const normalized = String(value || "").toLowerCase();
    if (normalized.startsWith("ko")) return "ko";
    if (normalized.startsWith("en")) return "en";
    return "ko";
  }

  function storedLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LANGUAGES.has(queryLanguage)) return queryLanguage;
    try {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
      if (SUPPORTED_LANGUAGES.has(savedLanguage)) return savedLanguage;
    } catch (_) {
      // Storage may be unavailable in privacy-focused browsing modes.
    }
    return normalizeLanguage(window.navigator.language);
  }

  function applyLanguage(language, updateAddress) {
    const nextLanguage = SUPPORTED_LANGUAGES.has(language) ? language : "ko";
    document.documentElement.lang = nextLanguage;
    document.title = META[nextLanguage].title;
    if (descriptionMeta) descriptionMeta.setAttribute("content", META[nextLanguage].description);

    translatableElements.forEach((element) => {
      const key = element.dataset.i18n;
      const translated = nextLanguage === "en" ? EN[key] : koreanText.get(element);
      if (translated) element.textContent = translated;
    });

    document.querySelectorAll("[data-privacy-link]").forEach((link) => {
      link.setAttribute("href", nextLanguage === "ko" ? "../privacy/ko/" : "../privacy/");
    });

    if (languageSelect) languageSelect.value = nextLanguage;
    try { window.localStorage.setItem(LANGUAGE_KEY, nextLanguage); } catch (_) {}

    if (updateAddress) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLanguage);
      window.history.replaceState({}, "", url);
    }
  }

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      navigation.dataset.open = String(willOpen);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { closeMenu(); menuButton.focus(); }
    });
    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", closeMenu);
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value, true));
  }

  applyLanguage(storedLanguage(), false);
})();
