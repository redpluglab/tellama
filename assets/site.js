(() => {
  "use strict";

  const LANGUAGE_KEY = "tellama-site-language";
  const SUPPORTED_LANGUAGES = new Set(["ko", "en", "ja", "zh"]);
  const META = {
    ko: {
      title: "Tellama — 안드로이드에서 실행되는 로컬 AI",
      description: "Tellama는 안드로이드 기기에서 로컬 AI 모델을 실행하는 프라이버시 중심 앱입니다. 모델 선택, 안전한 전환, 오프라인 채팅과 검증된 업데이트를 제공합니다."
    },
    en: {
      title: "Tellama — Local AI that runs on Android",
      description: "Tellama is a privacy-first Android app for running compatible AI models on device, with safe model switching, offline chat, and verified updates."
    },
    ja: {
      title: "Tellama — Androidで動くローカルAI",
      description: "TellamaはAndroid端末でローカルAIモデルを実行する、プライバシー重視のアプリです。モデル選択、安全な切り替え、オフラインチャット、検証済みの更新を提供します。"
    },
    zh: {
      title: "Tellama — 在 Android 上运行的本地 AI",
      description: "Tellama 是一款注重隐私的 Android 应用，在设备上运行兼容的 AI 模型，提供模型选择、安全切换、离线聊天与经校验的更新。"
    }
  };

  const EN = {
    skip: "Skip to content",
    menu: "Menu",
    language: "Language",
    navProduct: "Product",
    navPrivacy: "Privacy",
    navModels: "Models",
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
    installEyebrow: "START SAFELY",
    installTitle: "Start safely in three steps",
    installBody: "The current friend-testing build is delivered as a signed APK outside Google Play.",
    install1Title: "Get the latest APK",
    install1Body: "Download tellama-v1-3-4.apk from the public release.",
    install2Title: "Allow Android installation",
    install2Body: "Allow Install unknown apps for this browser only, then complete the Play Protect scan.",
    install3Title: "Choose a model for your device",
    install3Body: "Review memory and storage guidance in Models, download a suitable model, and start chatting.",
    currentRelease: "CURRENT RELEASE",
    releasedAt: "Published July 23, 2026",
    downloadApk: "Download APK directly",
    releaseNotes: "Release notes",
    downloadQr: "Scan with your phone camera to download",
    iosSoonTitle: "iOS version coming soon",
    iosSoonBody: "Tellama for iPhone and iPad is on the way.",
    iosSoonTag: "Coming soon",
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

  const JA = {
    skip: "コンテンツにスキップ",
    menu: "メニュー",
    language: "言語",
    navProduct: "製品",
    navPrivacy: "プライバシー",
    navModels: "モデル",
    navInstall: "インストール",
    navGuide: "ガイド",
    navSupport: "サポート",
    downloadShort: "APKをダウンロード",
    releaseBadge: "知人テストリリース",
    heroEyebrow: "PRIVATE BY DEFAULT · POWERFUL ON DEVICE",
    heroTitle1: "スマホの中で直接動く",
    heroTitle2: "本物のローカルAI",
    heroLead: "Tellamaは対応する言語モデルをAndroid端末上で実行します。ローカルモデルを使うと、会話とメモリは端末内に留まり、インターネットがなくてもチャットできます。",
    download: "最新APKをダウンロード",
    installGuide: "インストール手順を見る",
    androidSupport: "対応",
    noAccount: "アカウント不要",
    offlineLocal: "ローカルモデルをオフラインで利用",
    readyTitle: "実行準備完了",
    readyBody: "選択・読み込み・実行状態を正確に表示",
    localTitle: "ローカル優先",
    localBody: "会話とメモリは既定で端末内に保存",
    noticeTitle: "明確なプライバシー境界。",
    noticeBody: "外部APIモデルやウェブ検索を選ぶと、設定したプロバイダーやURLにデータが送信される場合があります。Tellamaは送信前にアプリ内で案内します。",
    privacyPolicy: "プライバシーポリシー",
    productEyebrow: "PRODUCT EXPERIENCE",
    productTitle: "インストールからモデル実行まで、ひとつのアプリで",
    productBody: "Tellamaは複雑なローカルAIの実行を、モバイル向けの分かりやすい流れに整えました。",
    screenHome: "ホームダッシュボード",
    screenHomeBody: "RAM・ストレージ・実行準備状況をひと目で",
    screenChat: "ローカルチャット",
    screenChatBody: "ストリーミング応答とユーザー承認メモリ",
    screenModels: "モデルカタログ",
    screenModelsBody: "端末に応じた案内と正確な状態表示",
    screenSettings: "整理された設定",
    screenSettingsBody: "85%〜130%の文字サイズとグループ化されたメニュー",
    swipeHint: "左右にスワイプしてアプリ画面をご覧ください。",
    capabilityEyebrow: "BUILT FOR REAL DEVICES",
    capabilityTitle: "モバイルの制約を、製品体験で解決",
    capability1Title: "安全なモデル切り替え",
    capability1Body: "現在のモデルを解放してから利用可能なメモリを再計算します。読み込みに失敗した場合は以前の選択と実行状態を復元します。",
    capability2Title: "検証されたダウンロードと更新",
    capability2Body: "モデルとAPKのSHA-256を確認し、更新パッケージ・バージョン・署名証明書を検証します。",
    capability3Title: "計測できる準備状態",
    capability3Body: "選択済み・読み込み中・実行準備完了の状態を各画面で一貫して表示し、トラブル対処はモデル画面で案内します。",
    privacyEyebrow: "CLEAR PRIVACY BOUNDARIES",
    privacyTitle: "ローカルはローカルらしく、接続機能は透明に。",
    privacyBody: "Tellamaは既定でローカル優先です。ネットワーク機能はユーザーが自分で選択し、どのデータがどこへ行くかを明確に案内します。",
    readPolicy: "プライバシーポリシー全文を読む",
    localBadge: "LOCAL",
    choiceBadge: "USER CHOICE",
    boundary1Title: "ローカルモデルとのチャット",
    boundary1Body: "プロンプト・応答・会話履歴・承認済みメモリは端末内に保存されます。",
    boundary2Title: "外部APIモデル",
    boundary2Body: "設定したプロバイダーのプライバシー・課金条件が適用され、入力内容がそのプロバイダーに送信されます。",
    boundary3Title: "ウェブ検索とモデルのダウンロード",
    boundary3Body: "選択した公開HTTPS URLやモデル配布元に直接接続します。外部APIモデルで要約する場合、ページ内容もそのプロバイダーに送信されます。",
    modelsEyebrow: "THE RIGHT MODEL FOR YOUR PHONE",
    modelsTitle: "大きさよりも、端末に合う選択が大切",
    modelsBody: "Tellamaは端末のメモリ・ストレージ・発熱状態をもとにモデル選択を案内します。軽いモデルからより深い推論モデルまで、必要に応じて切り替えられます。",
    model1Title: "速い日常チャット",
    model1Body: "速度とメモリ効率を重視",
    model2Title: "バランスの取れた作業",
    model2Body: "品質と応答性のバランス",
    model3Title: "より深い推論",
    model3Body: "十分なRAMと発熱の余裕が必要",
    installEyebrow: "START SAFELY",
    installTitle: "3ステップで安全に始めましょう",
    installBody: "現在の知人テストはGoogle Playではなく署名済みAPKで提供します。",
    install1Title: "最新APKを入手",
    install1Body: "公開リリースから tellama-v1-3-4.apk をダウンロードします。",
    install2Title: "Androidのインストールを許可",
    install2Body: "ブラウザの「不明なアプリのインストール」を今回のみ許可し、Play Protectのスキャンを完了します。",
    install3Title: "端末に合うモデルを選択",
    install3Body: "モデル画面のメモリ・ストレージ案内を確認してからダウンロードし、チャットを始めます。",
    currentRelease: "CURRENT RELEASE",
    releasedAt: "2026年7月23日公開",
    downloadApk: "APKを直接ダウンロード",
    releaseNotes: "リリースノート",
    downloadQr: "スマホのカメラでスキャンしてすぐダウンロード",
    iosSoonTitle: "iOS版は近日公開",
    iosSoonBody: "iPhone・iPad向けのTellamaも準備中です。",
    iosSoonTag: "近日公開",
    shaLabel: "APK SHA-256",
    signerLabel: "署名証明書 SHA-256",
    upgradeTitle: "v1.2.0 のユーザーは一度だけ手動インストールが必要です。",
    upgradeBody: "インストール済みの v1.2.0 における Android 10 の検証互換性の問題のため、v1.2.1 以降の署名済みAPKをリリースページから一度だけ手動でインストールしてください。会話・メモリ・インストール済みモデルは保持され、以降のバージョンからはアプリ内の検証済み更新が使えます。",
    supportEyebrow: "SUPPORT & TRANSPARENCY",
    supportTitle: "インストール前も、利用中も確認できるように",
    supportBody: "製品ドキュメント、セキュリティ境界、公開SDK、リリース履歴を誰でも確認できます。",
    githubRepo: "公開GitHubリポジトリ",
    securityReport: "セキュリティ問題を報告",
    contactSupport: "サポートに問い合わせ",
    faq1Q: "Tellamaは常にインターネットが必要ですか？",
    faq1A: "インストール済みのローカルモデルとのチャットはオフラインで使えます。アプリ・モデルのダウンロード、ウェブ検索、外部APIモデルにはネットワークが必要です。",
    faq2Q: "アプリの更新は安全ですか？",
    faq2A: "Tellama v1.2.1 以降は、APKのSHA-256・パッケージ名・より新しいバージョン・署名証明書を検証してからAndroidのインストーラーを開きます。",
    faq3Q: "外部APIモデルでもデータはローカルに残りますか？",
    faq3A: "いいえ。外部APIモデルを選ぶと、入力と必要な文脈が設定したプロバイダーに送信され、そのプロバイダーのプライバシー・課金条件が適用されます。",
    finalEyebrow: "LOCAL AI, YOUR WAY",
    finalTitle: "自分の端末で始める、あなたのAI",
    footerTagline: "Private by default. Powerful on device.",
    security: "セキュリティ",
    contribute: "コントリビュート",
    releases: "リリース",
    contact: "お問い合わせ",
    rights: "All rights reserved."
  };

  const ZH = {
    skip: "跳到内容",
    menu: "菜单",
    language: "语言",
    navProduct: "产品",
    navPrivacy: "隐私",
    navModels: "模型",
    navInstall: "安装",
    navGuide: "指南",
    navSupport: "支持",
    downloadShort: "下载 APK",
    releaseBadge: "熟人测试版",
    heroEyebrow: "PRIVATE BY DEFAULT · POWERFUL ON DEVICE",
    heroTitle1: "在你的手机上直接运行的",
    heroTitle2: "真正的本地 AI",
    heroLead: "Tellama 在 Android 设备上运行兼容的语言模型。使用本地模型时，对话和记忆都保留在设备内，没有网络也能聊天。",
    download: "下载最新 APK",
    installGuide: "查看安装指南",
    androidSupport: "支持",
    noAccount: "无需账户",
    offlineLocal: "本地模型可离线使用",
    readyTitle: "已就绪",
    readyBody: "准确显示选择、加载与运行状态",
    localTitle: "本地优先",
    localBody: "对话与记忆默认保存在设备内",
    noticeTitle: "清晰的隐私边界。",
    noticeBody: "若选择外部 API 模型或网页检索，数据可能会发送到你配置的提供商或 URL。Tellama 会在发送前于应用内说明。",
    privacyPolicy: "隐私政策",
    productEyebrow: "PRODUCT EXPERIENCE",
    productTitle: "从安装到运行模型，尽在一个应用",
    productBody: "Tellama 把复杂的本地 AI 运行流程，整理成适合移动设备的清晰体验。",
    screenHome: "主页仪表板",
    screenHomeBody: "一眼掌握内存、存储与就绪状态",
    screenChat: "本地聊天",
    screenChatBody: "流式回复与用户批准的记忆",
    screenModels: "模型目录",
    screenModelsBody: "结合设备状况的引导与真实状态",
    screenSettings: "有条理的设置",
    screenSettingsBody: "85%–130% 字号与分组菜单",
    swipeHint: "左右滑动查看应用界面。",
    capabilityEyebrow: "BUILT FOR REAL DEVICES",
    capabilityTitle: "把移动端的限制，做成产品体验来解决",
    capability1Title: "安全的模型切换",
    capability1Body: "Tellama 会先卸载当前模型，再重新计算可用内存。若加载失败，则恢复之前的选择与运行状态。",
    capability2Title: "经校验的下载与更新",
    capability2Body: "Tellama 校验模型与 APK 的 SHA-256，并检查更新包、版本与签名证书。",
    capability3Title: "可衡量的就绪状态",
    capability3Body: "已选择、加载中、可运行等状态在各界面保持一致，故障处理引导则集中在模型界面。",
    privacyEyebrow: "CLEAR PRIVACY BOUNDARIES",
    privacyTitle: "本地就该是本地，联网功能要透明。",
    privacyBody: "Tellama 默认本地优先。联网功能由用户主动开启，并清楚说明哪些数据会去往何处。",
    readPolicy: "阅读完整隐私政策",
    localBadge: "LOCAL",
    choiceBadge: "USER CHOICE",
    boundary1Title: "本地模型聊天",
    boundary1Body: "提示词、回复、聊天记录与已批准的记忆项都存储在你的设备内。",
    boundary2Title: "外部 API 模型",
    boundary2Body: "将适用所配置提供商的隐私与计费条款，你的输入会发送给该提供商。",
    boundary3Title: "网页检索与模型下载",
    boundary3Body: "Tellama 会直接连接你选择的公开 HTTPS URL 或模型来源。若用外部 API 模型进行摘要，页面内容也会发送给该提供商。",
    modelsEyebrow: "THE RIGHT MODEL FOR YOUR PHONE",
    modelsTitle: "适配比大小更重要",
    modelsBody: "Tellama 会依据设备的内存、存储与发热状况来引导模型选择。可按需要在轻量聊天与更深入推理之间切换。",
    model1Title: "快速日常聊天",
    model1Body: "侧重速度与内存效率",
    model2Title: "均衡任务",
    model2Body: "质量与响应速度的平衡",
    model3Title: "更深入推理",
    model3Body: "需要足够的内存与发热余量",
    installEyebrow: "START SAFELY",
    installTitle: "三步安全开始",
    installBody: "当前熟人测试以签名 APK 形式提供，而非通过 Google Play。",
    install1Title: "获取最新 APK",
    install1Body: "从公开发布页下载 tellama-v1-3-4.apk。",
    install2Title: "允许 Android 安装",
    install2Body: "仅对本次安装允许浏览器的“安装未知应用”，并完成 Play Protect 扫描。",
    install3Title: "选择适合你设备的模型",
    install3Body: "查看模型界面的内存与存储提示后下载合适的模型，然后开始聊天。",
    currentRelease: "CURRENT RELEASE",
    releasedAt: "2026年7月23日发布",
    downloadApk: "直接下载 APK",
    releaseNotes: "发布说明",
    downloadQr: "用手机相机扫描即可下载",
    iosSoonTitle: "iOS 版即将推出",
    iosSoonBody: "面向 iPhone 和 iPad 的 Tellama 也在筹备中。",
    iosSoonTag: "即将推出",
    shaLabel: "APK SHA-256",
    signerLabel: "签名证书 SHA-256",
    upgradeTitle: "v1.2.0 用户需手动安装一次。",
    upgradeBody: "由于已安装的 v1.2.0 在 Android 10 上存在校验兼容性问题，请从发布页手动安装一次 v1.2.1 或更高版本的签名 APK。对话、记忆与已安装的模型都会保留；之后的版本即可使用应用内经校验的更新。",
    supportEyebrow: "SUPPORT & TRANSPARENCY",
    supportTitle: "安装前可了解，使用中有帮助",
    supportBody: "任何人都可以查看产品文档、安全边界、公开 SDK 与发布历史。",
    githubRepo: "公开 GitHub 仓库",
    securityReport: "报告安全问题",
    contactSupport: "联系支持",
    faq1Q: "Tellama 一定需要联网吗？",
    faq1A: "与已安装的本地模型聊天可离线使用。应用与模型下载、网页检索、外部 API 模型需要联网。",
    faq2Q: "应用内更新安全吗？",
    faq2A: "Tellama v1.2.1 及以后会先校验 APK 的 SHA-256、包名、更高版本与签名证书，再打开 Android 安装程序。",
    faq3Q: "使用外部 API 模型时数据会留在本地吗？",
    faq3A: "不会。选择外部 API 模型后，你的输入与所需上下文会发送给你配置的提供商，并适用其隐私与计费条款。",
    finalEyebrow: "LOCAL AI, YOUR WAY",
    finalTitle: "在你的设备上开始，属于你的 AI",
    footerTagline: "Private by default. Powerful on device.",
    security: "安全",
    contribute: "贡献",
    releases: "发布",
    contact: "联系",
    rights: "All rights reserved."
  };

  const DICTS = { en: EN, ja: JA, zh: ZH };

  const translatableElements = Array.from(document.querySelectorAll("[data-i18n]"));
  const koreanText = new Map(translatableElements.map((element) => [element, element.textContent]));
  const languageSelect = document.querySelector("#language");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-navigation]");
  const descriptionMeta = document.querySelector('meta[name="description"]');

  function normalizeLanguage(value) {
    const normalized = String(value || "").toLowerCase();
    if (normalized.startsWith("ko")) return "ko";
    if (normalized.startsWith("ja")) return "ja";
    if (normalized.startsWith("zh")) return "zh";
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
      const translated = nextLanguage === "ko" ? koreanText.get(element) : (DICTS[nextLanguage] || EN)[key];
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
