(() => {
  "use strict";

  const LANGUAGE_KEY = "tellama-site-language";
  const SUPPORTED_LANGUAGES = new Set(["ko", "en"]);
  const META = {
    ko: {
      title: "Tellama — 안드로이드에서 실행되는 로컬 AI",
      description: "Tellama는 안드로이드 기기에서 로컬 AI 모델을 실행하는 프라이버시 중심 앱입니다. 모델 선택, 안전한 전환, 오프라인 채팅과 검증된 업데이트를 제공합니다."
    },
    en: {
      title: "Tellama — Local AI that runs on Android",
      description: "Tellama is a privacy-first Android app for running compatible AI models on device, with safe model switching, offline chat, and verified updates."
    }
  };

  const EN = {
    skip: "Skip to content",
    menu: "Menu",
    language: "Language",
    navProduct: "Product",
    navPrivacy: "Privacy",
    navModels: "Models",
    navPlatforms: "Platforms",
    navInstall: "Install",
    navGuide: "Guide",
    navSupport: "Support",
    downloadShort: "Download APK",
    releaseBadge: "Friend-testing release",
    heroEyebrow: "PRIVATE BY DEFAULT · POWERFUL ON DEVICE",
    heroTitle1: "Real local AI that runs",
    heroTitle2: "right on your phone",
    heroLead: "Tellama runs compatible language models on Android. When you use a local model, conversations and Memory stay on your device, and chat remains available offline.",
    download: "Download latest APK",
    installGuide: "View installation guide",
    androidSupport: "supported",
    noAccount: "No account required",
    offlineLocal: "Offline local-model use",
    readyTitle: "Ready to serve",
    readyBody: "Accurate selection, loading, and runtime states",
    localTitle: "Local first",
    localBody: "Chat and Memory stay on device by default",
    noticeTitle: "Clear privacy boundaries.",
    noticeBody: "If you choose an external API model or web research, data may be sent to the provider or URL you configured. Tellama explains this in the app before transmission.",
    privacyPolicy: "Privacy Policy",
    productEyebrow: "PRODUCT EXPERIENCE",
    productTitle: "From installation to model serving, in one app",
    productBody: "Tellama turns the complex local-AI workflow into a clear experience designed for mobile devices.",
    screenHome: "Home dashboard",
    screenHomeBody: "RAM, storage, and serving readiness at a glance",
    screenChat: "Local chat",
    screenChatBody: "Streaming responses and user-approved Memory",
    screenModels: "Model catalog",
    screenModelsBody: "Device-aware guidance and truthful status",
    screenSettings: "Organized settings",
    screenSettingsBody: "85%–130% text size and grouped controls",
    swipeHint: "Swipe sideways to explore the app screens.",
    capabilityEyebrow: "BUILT FOR REAL DEVICES",
    capabilityTitle: "Mobile constraints, solved as product experience",
    capability1Title: "Safe model replacement",
    capability1Body: "Tellama unloads the current model before recalculating available memory. If loading fails, it restores the previous selection and runtime.",
    capability2Title: "Verified downloads and updates",
    capability2Body: "Tellama verifies model and APK SHA-256 values, then checks update package, version, and signing certificate.",
    capability3Title: "Measurable readiness",
    capability3Body: "Selected, loading, and serving-ready states stay consistent across screens, while recovery guidance remains in Models.",
    privacyEyebrow: "CLEAR PRIVACY BOUNDARIES",
    privacyTitle: "Local when it is local. Transparent when it connects.",
    privacyBody: "Tellama is local-first by default. Network features are user-initiated, with clear guidance about what data goes where.",
    readPolicy: "Read the full Privacy Policy",
    localBadge: "LOCAL",
    choiceBadge: "USER CHOICE",
    boundary1Title: "Local-model chat",
    boundary1Body: "Prompts, responses, chat history, and approved Memory items are stored on your device.",
    boundary2Title: "External API models",
    boundary2Body: "The configured provider's privacy and billing terms apply, and your input is sent to that provider.",
    boundary3Title: "Web research and model downloads",
    boundary3Body: "Tellama connects directly to the public HTTPS URL or model host you choose. With an external API model, page content is also sent to that provider for summarization.",
    modelsEyebrow: "THE RIGHT MODEL FOR YOUR PHONE",
    modelsTitle: "Fit matters more than size",
    modelsBody: "Tellama guides model selection using your device's memory, storage, and thermal state. Move from lightweight chat to deeper reasoning as your device allows.",
    model1Title: "Fast everyday chat",
    model1Body: "Optimized for speed and memory efficiency",
    model2Title: "Balanced work",
    model2Body: "A practical balance of quality and responsiveness",
    model3Title: "Deeper reasoning",
    model3Body: "Requires enough RAM and thermal headroom",
    platformsEyebrow: "ONE TELLAMA, EVERY DEVICE",
    platformsTitle: "Android today, every device soon",
    platformsBody: "Tellama starts on Android. iOS, Windows, macOS, and Linux versions are on the way, with the same local-first experience on every device.",
    platformNow: "Available now · v1.3.3",
    platformSoon: "Coming soon",
    installEyebrow: "START SAFELY",
    installTitle: "Start safely in three steps",
    installBody: "The current friend-testing build is delivered as a signed APK outside Google Play.",
    install1Title: "Get the latest APK",
    install1Body: "Download tellama-v1-3-3.apk from the public release.",
    install2Title: "Allow Android installation",
    install2Body: "Allow Install unknown apps for this browser only, then complete the Play Protect scan.",
    install3Title: "Choose a model for your device",
    install3Body: "Review memory and storage guidance in Models, download a suitable model, and start chatting.",
    currentRelease: "CURRENT RELEASE",
    releasedAt: "Published July 23, 2026",
    downloadApk: "Download APK directly",
    releaseNotes: "Release notes",
    downloadQr: "Scan with your phone camera to download",
    shaLabel: "APK SHA-256",
    signerLabel: "Signing certificate SHA-256",
    upgradeTitle: "v1.2.0 users need one manual installation.",
    upgradeBody: "Because of an Android 10 verifier compatibility issue in the installed v1.2.0 build, install a signed v1.2.1-or-later APK once from the release page. Chats, Memory, and installed models remain intact; later releases support verified in-app updates.",
    supportEyebrow: "SUPPORT & TRANSPARENCY",
    supportTitle: "Information before installation and help after it",
    supportBody: "Anyone can review product documentation, security boundaries, the public SDK, and release history.",
    githubRepo: "Public GitHub repository",
    securityReport: "Report a security issue",
    contactSupport: "Contact support",
    faq1Q: "Does Tellama always need internet access?",
    faq1A: "Chat with an installed local model works offline. App and model downloads, web research, and external API models require network access.",
    faq2Q: "Are in-app updates safe?",
    faq2A: "Tellama v1.2.1 and later verify the APK SHA-256, package name, higher version, and signing certificate before opening Android's installer.",
    faq3Q: "Does data stay local with external API models?",
    faq3A: "No. When you select an external API model, your input and required context are sent to the provider you configured, under that provider's privacy and billing terms.",
    finalEyebrow: "LOCAL AI, YOUR WAY",
    finalTitle: "Your AI, starting on your device",
    footerTagline: "Private by default. Powerful on device.",
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
      link.setAttribute("href", nextLanguage === "ko" ? "privacy/ko/" : "privacy/");
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
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
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
