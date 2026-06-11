export const languages = ['en', 'zh'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

/** Localized value helper for content data (artwork, etc.) */
export type L = Record<Lang, string>;
export const pick = (value: L, lang: Lang): string => value[lang] ?? value[defaultLang];

/** Path to the same page in the given locale. */
export const localePath = (lang: Lang): string => (lang === 'en' ? '/' : '/zh/');

export const ui = {
  en: {
    meta: {
      title: 'Veduta · 淡景: Museum art on your Mac desktop',
      desc: 'Veduta is a local-first, open-source macOS menu-bar app that rotates public-domain museum paintings as your wallpaper. One brew command, no account, works offline.',
      langName: 'English',
      toggle: '中',
      toggleLabel: '切换到中文',
    },
    nav: {
      library: 'The library',
      how: 'How it works',
      oss: 'Open source',
      install: 'Install',
    },
    menu: {
      next: 'Next wallpaper',
      shuffle: 'Shuffle this collection',
      collection: 'Collection',
      collectionValue: 'Venetian Vedute',
      interval: 'Change every',
      intervalValue: '30 minutes',
      launch: 'Launch at login',
      reveal: 'Reveal in Finder',
      quit: 'Quit Veduta',
    },
    hero: {
      titleA: 'The world’s museums,',
      titleB: 'hung on your desktop.',
      lede: 'Veduta is a local-first menu-bar app for macOS. It rotates public-domain paintings across your wallpaper, keeps the library in your Pictures folder, and works offline once a painting is cached.',
      github: 'View on GitHub',
      fine: 'Requires macOS 13 or later. Free and open source.',
      onView: 'On view now',
      readOn: 'Read on',
      openAccess: 'Open Access',
    },
    what: {
      title: 'It lives in the menu bar and keeps the collection in your Pictures folder.',
      body: 'Veduta builds a library at <span class="mono">~/Pictures/VedutaLibrary</span>: a catalog, the collections you choose, and the paintings themselves. When a piece isn’t on your Mac yet, it streams once from a public mirror, caches it, and from then on it is yours, offline.',
      cap: 'Your wallpaper, a moment ago. Now it lives in <span class="mono">~/Pictures</span>.',
      items: [
        { k: 'No account, no cloud', v: 'There is nothing to sign in to, and the library stays on your Mac.' },
        { k: 'Yours on disk', v: 'Real image files you can open, copy, or back up like any other.' },
        { k: 'Quiet by design', v: 'A single menu-bar icon that stays out of the dock and keeps to itself.' },
      ],
    },
    gallery: {
      title: 'A wall you keep adding to.',
      lede: 'Every piece is public domain, drawn from museum open-access collections. Hang the ones you love, filter by collection, and let them rotate. A few from the shelf:',
    },
    sources: {
      intro: 'Drawn from the open collections of',
      museums: [
        'The Metropolitan Museum of Art',
        'National Gallery of Art',
        'The Cleveland Museum of Art',
        'Art Institute of Chicago',
        'Harvard Art Museums',
      ],
      note: 'Veduta only imports works the museums have released as open access. Each image is public domain or museum-provided, and its provenance travels with it in the catalog. The art belongs to everyone; the app just hangs it.',
    },
    how: {
      title: 'Online for a moment, yours for good.',
      steps: [
        { n: '01', title: 'Stream once', body: 'The first time a painting comes up, Veduta pulls it from a public mirror. Just that one piece, just once.' },
        { n: '02', title: 'Cache on disk', body: 'It lands in your library as a real image file. Every time after that, there is no network at all.' },
        { n: '03', title: 'Rotate quietly', body: 'Your wallpaper changes on the interval you choose. Shuffle a collection, or pin the one you can’t part with.' },
      ],
    },
    app: {
      title: 'It asks for nothing.',
      lede: 'Veduta is the rare utility that wants nothing from you. No login, no subscription, no analytics pinging home. It sits in the menu bar, changes your wallpaper on your schedule, and otherwise stays out of the way.',
      specs: [
        'No account, no sign-in',
        'No telemetry, no analytics, ever',
        'Launches at login, lives in the menu bar',
        'Rotate from every minute to once a day',
        'macOS 13 or later, Apple silicon and Intel',
      ],
      shotAlt: 'The Veduta menu open on a macOS desktop, showing Frederic Church’s Heart of the Andes as the current wallpaper.',
      collectionValue: 'Luminist',
    },
    oss: {
      title: 'Open source, all the way down.',
      lede: 'Nothing here is a black box. Install the signed app with one command, or clone the repo and build the whole library from the source museums yourself.',
      termInstall: '# install the signed, notarized app',
      termBuild: '# or build the library from source',
      termOutput: '  imported 1,204 works · cached to ~/Pictures/VedutaLibrary',
      req: 'Requires macOS 13+, Swift 5.9+ and Python 3.11+ to build. The app alone needs none of that.',
      points: [
        { title: 'Two clean parts', body: 'A Python pipeline that imports from museum open-access APIs, and a Swift menu-bar app that shows the result. Read or fork either one.' },
        { title: 'Run your own mirror', body: 'Host the library on your own box and point the app at it. The streaming origin is just a static file server.' },
        { title: 'Bring your own keys', body: 'Most sources are fully open. Harvard wants a free API key; everything else imports without one.' },
      ],
    },
    etym: {
      term: 'veduta',
      pron: '/veˈduːta/',
      pos: 'noun, Italian',
      def: 'A detailed, faithful painting of a city or a place, made in eighteenth-century Venice for travelers who wanted to carry the view home. Canaletto painted them by the hundred.',
      cnGloss: 'the quiet view.',
      close: 'Three centuries on, Veduta does the same small thing: it brings the view home, to your desk.',
      capArtist: 'Canaletto',
      capTitle: 'Piazza San Marco',
      capDate: 'late 1720s',
    },
    get: {
      title: 'Bring the view home.',
      sub: 'One command, no account, macOS 13 and up.',
      github: 'View on GitHub',
    },
    footer: {
      tagline: 'A local-first macOS wallpaper app for public-domain and museum artwork.',
      credit: 'Artwork shown: Open Access, The Metropolitan Museum of Art (CC0).',
      colProject: 'Project',
      colProv: 'Provenance',
      linkGithub: 'GitHub',
      linkReleases: 'Releases',
      linkReadme: 'Read me',
      linkOpenAccess: 'Open Access',
      linkCC0: 'CC0 / Public domain',
      base: 'Built local-first. The art belongs to everyone.',
    },
  },

  zh: {
    meta: {
      title: 'Veduta · 淡景：让博物馆藏画成为你的 Mac 桌面',
      desc: 'Veduta 是一款 local-first 的开源 macOS 菜单栏应用，把公共领域的博物馆画作轮换成你的桌面壁纸。一条 brew 命令，无需账号，可离线使用。',
      langName: '中文',
      toggle: 'EN',
      toggleLabel: 'Switch to English',
    },
    nav: {
      library: '藏品',
      how: '工作原理',
      oss: '开源',
      install: '安装',
    },
    menu: {
      next: '下一幅壁纸',
      shuffle: '随机播放此合集',
      collection: '合集',
      collectionValue: '威尼斯城景',
      interval: '更换间隔',
      intervalValue: '30 分钟',
      launch: '开机自动启动',
      reveal: '在访达中显示',
      quit: '退出 Veduta',
    },
    hero: {
      titleA: '把全世界的博物馆，',
      titleB: '挂上你的桌面。',
      lede: 'Veduta 是一款 macOS 菜单栏应用，local-first：它把公共领域的画作轮换为你的壁纸，藏品就存在你的"图片"文件夹里，画作缓存之后即可离线观看。',
      github: '在 GitHub 查看',
      fine: '需要 macOS 13 或更新版本。免费、开源。',
      onView: '正在展出',
      readOn: '往下看',
      openAccess: '开放获取',
    },
    what: {
      title: '它住在菜单栏里，把整个收藏放进你的"图片"文件夹。',
      body: 'Veduta 在 <span class="mono">~/Pictures/VedutaLibrary</span> 建一座本地藏品库：一份目录、你挑选的合集，以及画作本身。某幅画还没在你的 Mac 上时，它只从公共镜像取一次、缓存下来，从此便归你所有，离线可看。',
      cap: '刚才还是你的壁纸，如今已存在 <span class="mono">~/Pictures</span> 里。',
      items: [
        { k: '无账号，无云端', v: '没有需要登录的东西，藏品库始终留在你的 Mac 上。' },
        { k: '落在你的硬盘上', v: '是真实的图片文件，可以像别的文件一样打开、复制、备份。' },
        { k: '生来安静', v: '只有一个菜单栏图标，不进程序坞，也不来打扰你。' },
      ],
    },
    gallery: {
      title: '一面你会不断添画的墙。',
      lede: '每一幅都属于公共领域，取自各大博物馆的开放藏品。挂上你喜欢的，按合集筛选，让它们轮流登场。先看几幅：',
    },
    sources: {
      intro: '取自这些机构的开放藏品',
      museums: [
        '大都会艺术博物馆',
        '美国国家美术馆',
        '克利夫兰艺术博物馆',
        '芝加哥艺术博物馆',
        '哈佛艺术博物馆',
      ],
      note: 'Veduta 只导入各馆已公布为"开放获取"的作品。每幅图都属于公共领域或由博物馆提供，其出处信息随目录一并保存。艺术属于所有人，这个应用只负责把它挂起来。',
    },
    how: {
      title: '只在线一瞬，便永久归你。',
      steps: [
        { n: '01', title: '取一次流', body: '某幅画第一次出现时，Veduta 从公共镜像把它取下来。只取这一幅，只取这一次。' },
        { n: '02', title: '缓存到硬盘', body: '它会作为真实的图片文件落进你的藏品库。此后每一次，都完全不需要联网。' },
        { n: '03', title: '安静轮换', body: '壁纸按你设定的间隔更换。可以随机播放某个合集，也可以把舍不得的那幅钉住。' },
      ],
    },
    app: {
      title: '它什么都不向你索取。',
      lede: 'Veduta 是少有的那种"对你毫无所求"的小工具：不登录、不订阅、不把分析数据往外发。它待在菜单栏里，按你的节奏更换壁纸，其余时候不打扰你。',
      specs: [
        '无账号，无需登录',
        '永不遥测，永不分析',
        '开机自启，常驻菜单栏',
        '更换间隔从每分钟到每天一次',
        'macOS 13 及以上，支持 Apple 芯片与 Intel',
      ],
      shotAlt: 'macOS 桌面上打开的 Veduta 菜单，当前壁纸是丘奇的《安第斯之心》。',
      collectionValue: '光辉派',
    },
    oss: {
      title: '开源，从头到脚。',
      lede: '这里没有黑箱。用一条命令安装已签名的应用，或者把仓库克隆下来，自己从各源博物馆构建整座藏品库。',
      termInstall: '# 安装已签名、已公证的应用',
      termBuild: '# 或者从源码构建藏品库',
      termOutput: '  已导入 1,204 件 · 缓存至 ~/Pictures/VedutaLibrary',
      req: '从源码构建需要 macOS 13+、Swift 5.9+ 与 Python 3.11+。只用应用本身则全都不需要。',
      points: [
        { title: '两个清爽的部分', body: '一条从各馆开放 API 导入的 Python 数据管道，加一个把结果展示出来的 Swift 菜单栏应用。任选其一去读、去 fork。' },
        { title: '自托管镜像', body: '把藏品库托管在你自己的机器上，再让应用指向它。流式来源不过是一台静态文件服务器。' },
        { title: '自带密钥', body: '大多数来源完全开放。哈佛需要一个免费 API key，其余的无需密钥即可导入。' },
      ],
    },
    etym: {
      term: 'veduta',
      pron: '/veˈduːta/',
      pos: '名词，意大利语',
      def: '一种对城市或某地细致而忠实的画作，诞生于十八世纪的威尼斯，为想把眼前景致带回家的旅人而作。卡纳莱托画过数以百计。',
      cnGloss: '淡淡的景。',
      close: '三个世纪之后，Veduta 做着同一件小事：把那处景致带回家，带到你的桌面上。',
      capArtist: '卡纳莱托',
      capTitle: '《圣马可广场》',
      capDate: '1720 年代晚期',
    },
    get: {
      title: '把景致带回家。',
      sub: '一条命令，无需账号，macOS 13 及以上。',
      github: '在 GitHub 查看',
    },
    footer: {
      tagline: '一款 local-first 的 macOS 壁纸应用，专为公共领域与博物馆藏画而作。',
      credit: '所示画作：开放获取，大都会艺术博物馆（CC0）。',
      colProject: '项目',
      colProv: '出处',
      linkGithub: 'GitHub',
      linkReleases: '版本发布',
      linkReadme: '说明文档',
      linkOpenAccess: '开放获取',
      linkCC0: 'CC0 / 公共领域',
      base: '以 local-first 构建。艺术属于所有人。',
    },
  },
} as const;

export const useTranslations = (lang: Lang) => ui[lang] ?? ui[defaultLang];
