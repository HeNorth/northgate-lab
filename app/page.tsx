"use client";

import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: [
      { href: "#home", label: "入口" },
      { href: "#profile", label: "玩家档案" },
      { href: "#projects", label: "项目副本" },
      { href: "#skills", label: "技能树" },
      { href: "#timeline", label: "任务日志" },
      { href: "#contact", label: "联络终端" },
    ],
    heroTag: "PLAYER PROFILE INITIALIZED",
    title: "NorthGate Lab",
    subtitle: "Game Developer Portfolio / Interactive Resume",
    sloganEn: "Beyond the gate, every prototype becomes a world.",
    sloganZh: "门的彼端，每一个原型都将成为一个世界。",
    enterButton: "进入实验室",
    caseButton: "查看项目副本",

    profileTitle: "玩家档案",
    profileSub: "PLAYER PROFILE",
    profileIntro:
      "我是 HeNorth，一名游戏开发者与 3D 建模师。喜欢把脑洞、玩法、工具和交互系统做成真正可以体验的作品。目标很简单：少说空话，多做能跑起来的 Demo。",
    profileItems: [
      { label: "代号", value: "HeNorth" },
      { label: "职业", value: "游戏开发者 / 3D 建模师" },
      { label: "定位", value: "独立游戏创作者 / 创意产品构建者" },
      { label: "当前主线", value: "把想法推进成可玩的 Demo" },
    ],
    focusItems: [
      "Unity 2D / 3D",
      "网页工具",
      "独立设计",
      "游戏 UI 设计",
      "游戏策划",
      "交互原型",
    ],

    projectsTitle: "项目副本",
    projectsSub: "CASE FILES",
    projectsIntro:
      "这里不是普通作品列表，而是我的项目副本库：每个副本都记录一个想法如何被拆解、验证，并推进成可以体验的作品。",
    projects: [
      {
        type: "Unity / 推理解谜",
        title: "谎言密室",
        desc: "围绕搜证、质问、谎言识别和真相反转设计的推理解谜项目。",
      },
      {
        type: "Next.js / 网页工具",
        title: "MARD 拼豆图纸生成器",
        desc: "将图片转换成拼豆图纸，并支持不同色卡数量的工具型网站。",
      },
      {
        type: "小程序 / 旅行产品",
        title: "旅途小程序",
        desc: "用于规划旅行路线、整理行程信息和解决旅行痛点的产品构想。",
      },
    ],

    skillsTitle: "技能树",
    skillsSub: "SKILL TREE",
    skillsIntro:
      "这里是我的技能树，不只展示会什么工具，也展示这些能力分别服务于游戏开发、建模、网页工具和产品设计。",
    skills: [
      { name: "Unity", desc: "2D / 3D 游戏原型、玩法验证、WebGL 展示。" },
      { name: "C#", desc: "游戏逻辑、交互系统、基础工具开发。" },
      { name: "Next.js", desc: "个人网站、网页工具、交互式作品集。" },
      { name: "TypeScript", desc: "更稳定的前端开发和数据结构管理。" },
      { name: "Tailwind CSS", desc: "快速搭建现代化、响应式 UI。" },
      { name: "3ds Max", desc: "3D 建模、场景资产、硬表面建模。" },
      { name: "ZBrush", desc: "角色雕刻、造型设计、模型细节塑造。" },
      {
        name: "Game UI / Planning",
        desc: "游戏界面、玩法循环、任务结构和用户体验。",
      },
    ],

    timelineTitle: "任务日志",
    timelineSub: "QUEST CHRONICLE",
    timelineIntro:
      "这里记录的不是标准履历，而是一条正在推进的成长路线：主线负责长期目标，支线负责项目、比赛和创作实践。",
    mainQuestTitle: "主线任务",
    sideQuestTitle: "支线任务",
    mainTimeline: [
      {
        year: "2025",
        title: "高中阶段转向自学路线",
        desc: "从传统路线切换到更主动的自学与项目实践路线。",
      },
      {
        year: "2026",
        title: "自考专科：宁大方向",
        desc: "完成阶段性学历目标，为后续学习和职业路线打基础。",
      },
      {
        year: "2030",
        title: "预计自考本科：浙工大方向",
        desc: "长期目标：完成本科阶段学习，继续强化开发与设计能力。",
      },
    ],
    sideTimeline: [
      {
        year: "2025.08",
        title: "设计独立游戏《论证》",
        desc: "开始构思属于自己的独立游戏项目。",
      },
      {
        year: "2025.11",
        title: "学习 AI Agent",
        desc: "探索 AI Agent 在工具、自动化和交互产品中的可能性。",
      },
      {
        year: "2026.02",
        title: "参加 Game Jam",
        desc: "设计了基于脸谱主题的 VR 交互体验。",
      },
      {
        year: "2026.03",
        title: "参加小游戏创作大赛",
        desc: "设计推理解谜项目《谎言密室》。",
      },
      {
        year: "2026.04",
        title: "发布第一条抖音视频",
        desc: "开始公开记录创作、学习和项目过程。",
      },
      {
        year: "2026.05",
        title: "设计多个网站与工具",
        desc: "包括拼豆图纸生成器、旅途小程序等产品原型。",
      },
    ],

    contactTitle: "联络终端",
    contactSub: "READY TO COLLABORATE",
    contactDesc:
      "如果你对游戏原型、网页工具、3D 建模、独立游戏或交互产品感兴趣，可以通过下面的方式找到我。",
    contacts: [
      {
        label: "邮箱",
        value: "19519395201@163.com",
        href: "mailto:19519395201@163.com",
      },
      {
        label: "GitHub",
        value: "HeNorth",
        href: "https://github.com/HeNorth",
      },
      { label: "Bilibili", value: "北慕九", href: "" },
      { label: "抖音", value: "赫北", href: "" },
    ],
  },

  en: {
    nav: [
      { href: "#home", label: "Gate" },
      { href: "#profile", label: "Profile" },
      { href: "#projects", label: "Case Files" },
      { href: "#skills", label: "Skill Tree" },
      { href: "#timeline", label: "Quest Log" },
      { href: "#contact", label: "Contact" },
    ],
    heroTag: "PLAYER PROFILE INITIALIZED",
    title: "NorthGate Lab",
    subtitle: "Game Developer Portfolio / Interactive Resume",
    sloganEn: "Beyond the gate, every prototype becomes a world.",
    sloganZh: "Every prototype is a step toward a playable world.",
    enterButton: "Enter the Lab",
    caseButton: "View Case Files",

    profileTitle: "Player Profile",
    profileSub: "PLAYER PROFILE",
    profileIntro:
      "I am HeNorth, a game developer and 3D modeler. I enjoy turning ideas, gameplay systems, web tools, and interactive concepts into playable experiences. Less empty talk, more runnable demos.",
    profileItems: [
      { label: "Name", value: "HeNorth" },
      { label: "Class", value: "Game Developer / 3D Modeler" },
      { label: "Role", value: "Indie Creator / Creative Builder" },
      { label: "Main Quest", value: "Turning ideas into playable demos" },
    ],
    focusItems: [
      "Unity 2D / 3D",
      "Web Tools",
      "Indie Design",
      "Game UI Design",
      "Game Planning",
      "Interactive Prototypes",
    ],

    projectsTitle: "Case Files",
    projectsSub: "PROJECT ARCHIVE",
    projectsIntro:
      "This is not just a project list. It is a case archive showing how each idea is designed, tested, and pushed toward a playable experience.",
    projects: [
      {
        type: "Unity / Mystery Game",
        title: "Liar Room",
        desc: "A mystery puzzle game focused on investigation, questioning, lie detection, and plot twists.",
      },
      {
        type: "Next.js / Web Tool",
        title: "MARD Bead Pattern Generator",
        desc: "A web tool that converts images into bead patterns with different color palette options.",
      },
      {
        type: "Mini Program / Travel Product",
        title: "Travel Planner",
        desc: "A product concept for planning routes, organizing trip information, and solving travel pain points.",
      },
    ],

    skillsTitle: "Skill Tree",
    skillsSub: "SKILL TREE",
    skillsIntro:
      "This skill tree shows not only the tools I use, but also how each skill supports game development, modeling, web tools, and product design.",
    skills: [
      {
        name: "Unity",
        desc: "2D / 3D prototypes, gameplay validation, and WebGL presentation.",
      },
      {
        name: "C#",
        desc: "Gameplay logic, interaction systems, and basic tool development.",
      },
      {
        name: "Next.js",
        desc: "Portfolio websites, web tools, and interactive interfaces.",
      },
      {
        name: "TypeScript",
        desc: "More reliable frontend development and data structures.",
      },
      {
        name: "Tailwind CSS",
        desc: "Fast and responsive modern UI building.",
      },
      {
        name: "3ds Max",
        desc: "3D modeling, environment assets, and hard-surface modeling.",
      },
      {
        name: "ZBrush",
        desc: "Character sculpting, shape design, and model detailing.",
      },
      {
        name: "Game UI / Planning",
        desc: "Game interface design, gameplay loops, quest structures, and player experience.",
      },
    ],

    timelineTitle: "Quest Chronicle",
    timelineSub: "TIMELINE",
    timelineIntro:
      "This is not a traditional resume timeline. It is a growth route: main quests represent long-term goals, while side quests record projects, competitions, and creative practice.",
    mainQuestTitle: "Main Questline",
    sideQuestTitle: "Side Quests",
    mainTimeline: [
      {
        year: "2025",
        title: "Shifted to a self-learning path",
        desc: "Moved from a traditional route to a more self-driven path focused on learning and project practice.",
      },
      {
        year: "2026",
        title: "Self-taught college track: Ningbo University",
        desc: "Completed a key academic milestone and built a stronger foundation for future growth.",
      },
      {
        year: "2030",
        title: "Planned bachelor track: Zhejiang University of Technology",
        desc: "Long-term goal: complete undergraduate studies while continuing to improve development and design skills.",
      },
    ],
    sideTimeline: [
      {
        year: "2025.08",
        title: "Designed indie game concept: Lun Zheng",
        desc: "Started developing the concept for an original indie game.",
      },
      {
        year: "2025.11",
        title: "Started learning AI Agents",
        desc: "Explored how AI Agents can support tools, automation, and interactive products.",
      },
      {
        year: "2026.02",
        title: "Joined a Game Jam",
        desc: "Designed a VR interaction experience based on Chinese opera face imagery.",
      },
      {
        year: "2026.03",
        title: "Joined a mini-game creation competition",
        desc: "Designed the mystery puzzle project Liar Room.",
      },
      {
        year: "2026.04",
        title: "Published first Douyin video",
        desc: "Started publicly documenting creation, learning, and project progress.",
      },
      {
        year: "2026.05",
        title: "Designed multiple websites and tools",
        desc: "Built concepts such as a bead pattern generator and a travel mini program.",
      },
    ],

    contactTitle: "Contact Terminal",
    contactSub: "READY TO COLLABORATE",
    contactDesc:
      "If you are interested in game prototypes, web tools, 3D modeling, indie games, or interactive products, feel free to contact me.",
    contacts: [
      {
        label: "Email",
        value: "19519395201@163.com",
        href: "mailto:19519395201@163.com",
      },
      {
        label: "GitHub",
        value: "HeNorth",
        href: "https://github.com/HeNorth",
      },
      { label: "Bilibili", value: "北慕九", href: "" },
      { label: "Douyin", value: "赫北", href: "" },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  const profileStats =
    lang === "zh"
      ? [
          {
            name: "原型开发",
            value: "Prototype Dev",
            desc: "把想法快速做成可体验的 Demo，不让创意永远停留在嘴上。",
          },
          {
            name: "游戏 UI",
            value: "Game UI",
            desc: "关注界面节奏、信息层级和玩家操作感，让按钮不只是按钮。",
          },
          {
            name: "3D 建模",
            value: "3D Modeling",
            desc: "使用 3ds Max / ZBrush 制作角色、道具与场景资产。",
          },
          {
            name: "网页工具",
            value: "Web Tools",
            desc: "用 Next.js 制作实用型交互工具，把需求变成可用页面。",
          },
        ]
      : [
          {
            name: "Prototype Dev",
            value: "Playable Demo",
            desc: "Turning ideas into testable interactive prototypes instead of keeping them as abstract concepts.",
          },
          {
            name: "Game UI",
            value: "Interface Design",
            desc: "Designing clear, readable, and playful interfaces for better player interaction.",
          },
          {
            name: "3D Modeling",
            value: "3D Assets",
            desc: "Creating characters, props, and environment assets with 3ds Max / ZBrush.",
          },
          {
            name: "Web Tools",
            value: "Next.js Tools",
            desc: "Building practical interactive tools with modern web technologies.",
          },
        ];

  const projectMeta =
    lang === "zh"
      ? [
          {
            code: "CASE-01",
            status: "可做成试玩 Demo",
            role: "玩法 / 系统 / 剧情",
            progress: 68,
            tags: ["推理解谜", "搜证", "NPC 谎言", "剧情反转"],
          },
          {
            code: "CASE-02",
            status: "功能验证完成",
            role: "网页工具 / 图像处理",
            progress: 76,
            tags: ["Next.js", "图像处理", "色卡映射", "工具产品"],
          },
          {
            code: "CASE-03",
            status: "产品概念设计",
            role: "产品策划 / 交互设计",
            progress: 42,
            tags: ["旅行规划", "小程序", "用户痛点", "AI 交互"],
          },
        ]
      : [
          {
            code: "CASE-01",
            status: "Playable Demo Ready",
            role: "Gameplay / System / Narrative",
            progress: 68,
            tags: ["Mystery", "Investigation", "NPC Lies", "Plot Twist"],
          },
          {
            code: "CASE-02",
            status: "Feature Prototype Done",
            role: "Web Tool / Image Processing",
            progress: 76,
            tags: [
              "Next.js",
              "Image Processing",
              "Palette Mapping",
              "Tool Product",
            ],
          },
          {
            code: "CASE-03",
            status: "Product Concept",
            role: "Product Planning / Interaction",
            progress: 42,
            tags: [
              "Travel Planning",
              "Mini Program",
              "Pain Points",
              "AI Interaction",
            ],
          },
        ];

  const skillMeta =
    lang === "zh"
      ? [
          {
            branch: "开发分支",
            level: "Lv. 7",
            progress: 70,
            tags: ["玩法原型", "WebGL", "2D/3D"],
          },
          {
            branch: "代码分支",
            level: "Lv. 6",
            progress: 62,
            tags: ["游戏逻辑", "交互系统", "工具脚本"],
          },
          {
            branch: "网页分支",
            level: "Lv. 6",
            progress: 65,
            tags: ["作品集", "网页工具", "产品页面"],
          },
          {
            branch: "工程分支",
            level: "Lv. 5",
            progress: 55,
            tags: ["类型安全", "数据结构", "组件开发"],
          },
          {
            branch: "UI 分支",
            level: "Lv. 6",
            progress: 66,
            tags: ["响应式", "视觉系统", "快速搭建"],
          },
          {
            branch: "建模分支",
            level: "Lv. 6",
            progress: 64,
            tags: ["场景资产", "硬表面", "模型制作"],
          },
          {
            branch: "雕刻分支",
            level: "Lv. 5",
            progress: 58,
            tags: ["角色雕刻", "造型", "细节塑造"],
          },
          {
            branch: "设计分支",
            level: "Lv. 7",
            progress: 72,
            tags: ["游戏 UI", "玩法循环", "任务结构"],
          },
        ]
      : [
          {
            branch: "Dev Branch",
            level: "Lv. 7",
            progress: 70,
            tags: ["Prototype", "WebGL", "2D/3D"],
          },
          {
            branch: "Code Branch",
            level: "Lv. 6",
            progress: 62,
            tags: ["Game Logic", "Interaction", "Tool Scripts"],
          },
          {
            branch: "Web Branch",
            level: "Lv. 6",
            progress: 65,
            tags: ["Portfolio", "Web Tools", "Product Pages"],
          },
          {
            branch: "Engineering",
            level: "Lv. 5",
            progress: 55,
            tags: ["Type Safety", "Data", "Components"],
          },
          {
            branch: "UI Branch",
            level: "Lv. 6",
            progress: 66,
            tags: ["Responsive", "Visual System", "Fast Build"],
          },
          {
            branch: "Modeling",
            level: "Lv. 6",
            progress: 64,
            tags: ["Assets", "Hard Surface", "Modeling"],
          },
          {
            branch: "Sculpting",
            level: "Lv. 5",
            progress: 58,
            tags: ["Character", "Shape", "Details"],
          },
          {
            branch: "Design Branch",
            level: "Lv. 7",
            progress: 72,
            tags: ["Game UI", "Game Loop", "Quest Design"],
          },
        ];

  const mainQuestMeta =
    lang === "zh"
      ? [
          { code: "MAIN-01", status: "路线重置", badge: "已完成" },
          { code: "MAIN-02", status: "学历节点", badge: "已完成" },
          { code: "FINAL QUEST", status: "长期目标", badge: "未来目标" },
        ]
      : [
          { code: "MAIN-01", status: "Route Reset", badge: "Completed" },
          { code: "MAIN-02", status: "Academic Node", badge: "Completed" },
          {
            code: "FINAL QUEST",
            status: "Long-Term Goal",
            badge: "Future Goal",
          },
        ];

  const sideQuestMeta =
    lang === "zh"
      ? [
          { code: "SIDE-01", status: "创意启动", badge: "已完成" },
          { code: "SIDE-02", status: "AI 探索", badge: "已完成" },
          { code: "SIDE-03", status: "比赛实践", badge: "已完成" },
          { code: "SIDE-04", status: "项目副本", badge: "进行中" },
          { code: "SIDE-05", status: "内容发布", badge: "已完成" },
          { code: "SIDE-06", status: "工具开发", badge: "进行中" },
        ]
      : [
          { code: "SIDE-01", status: "Creative Start", badge: "Completed" },
          { code: "SIDE-02", status: "AI Exploration", badge: "Completed" },
          { code: "SIDE-03", status: "Jam Practice", badge: "Completed" },
          { code: "SIDE-04", status: "Project Case", badge: "In Progress" },
          { code: "SIDE-05", status: "Content Release", badge: "Completed" },
          { code: "SIDE-06", status: "Tool Building", badge: "In Progress" },
        ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* 背景光晕 */}
      <div className="pointer-events-none fixed left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none fixed right-10 top-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative z-10">
        {/* 顶部导航栏 */}
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="font-bold tracking-wide text-cyan-300">
              NorthGate Lab
            </a>

            <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
              {t.nav.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </header>

        {/* 首页第一屏 */}
        <section
          id="home"
          className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2"
        >
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-mono text-sm tracking-widest text-cyan-300 lg:mx-0">
              {t.heroTag}
            </div>

            <h1 className="bg-linear-to-r from-cyan-300 via-fuchsia-300 to-lime-300 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-300">{t.subtitle}</p>

            <div className="mx-auto mt-6 max-w-3xl lg:mx-0">
              <p className="text-xl leading-8 text-zinc-100 md:text-2xl">
                {t.sloganEn}
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-400">
                {t.sloganZh}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#profile"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
              >
                {t.enterButton}
              </a>

              <a
                href="#projects"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.caseButton}
              </a>
            </div>
          </div>

          {/* 右侧游戏档案面板 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <p className="font-mono text-xs text-zinc-500">
                  /northgate/player-profile.exe
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="font-mono text-sm text-cyan-200">
                  CURRENT MAIN QUEST
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Build a playable portfolio.
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {lang === "zh"
                    ? "用网站展示我的游戏项目、建模能力、工具产品和创意落地能力。"
                    : "Showcase my game projects, modeling skills, web tools, and ability to turn ideas into demos."}
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-5">
                  <p className="font-mono text-sm text-fuchsia-200">CLASS</p>
                  <h3 className="mt-2 text-xl font-bold">
                    {lang === "zh" ? "游戏开发者" : "Game Developer"}
                  </h3>
                </div>

                <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 p-5">
                  <p className="font-mono text-sm text-lime-200">SUB CLASS</p>
                  <h3 className="mt-2 text-xl font-bold">
                    {lang === "zh" ? "3D 建模师" : "3D Modeler"}
                  </h3>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/70 p-5 font-mono text-sm leading-7 text-zinc-300">
                <p>
                  <span className="text-cyan-300">SYSTEM:</span> Welcome to
                  NorthGate Lab.
                </p>
                <p>
                  <span className="text-fuchsia-300">STATUS:</span> Portfolio
                  initialized.
                </p>
                <p>
                  <span className="text-lime-300">NEXT:</span> Add playable
                  project files.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 玩家档案 */}
        <section id="profile" className="mx-auto max-w-7xl px-6 py-24">
          <p className="font-mono text-sm text-cyan-300">{t.profileSub}</p>
          <h2 className="mt-3 text-4xl font-black">{t.profileTitle}</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs tracking-widest text-cyan-200">
                  PLAYER CARD / DEV BUILD
                </div>

                <h3 className="text-5xl font-black tracking-tight">HeNorth</h3>

                <p className="mt-3 text-lg text-zinc-300">
                  {lang === "zh"
                    ? "游戏开发者 / 3D 建模师"
                    : "Game Developer / 3D Modeler"}
                </p>

                <p className="mt-6 leading-8 text-zinc-300">
                  {t.profileIntro}
                </p>

                <div className="mt-8 space-y-3">
                  {t.profileItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4"
                    >
                      <span className="font-mono text-sm text-zinc-500">
                        {item.label}
                      </span>
                      <span className="text-right font-semibold text-zinc-100">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profileStats.map((stat) => (
                <div
                  key={stat.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <p className="font-mono text-sm text-cyan-300">
                    {stat.value}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">{stat.name}</h3>

                  <p className="mt-4 leading-7 text-zinc-300">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="font-mono text-sm text-zinc-500">
              {lang === "zh" ? "FOCUS AREA / 当前专精方向" : "FOCUS AREA"}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {t.focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 项目副本 */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-cyan-300">
                {t.projectsSub}
              </p>
              <h2 className="mt-3 text-4xl font-black">{t.projectsTitle}</h2>
            </div>

            <p className="max-w-xl leading-7 text-zinc-400">
              {t.projectsIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {t.projects.map((project, index) => {
              const meta = projectMeta[index];

              return (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-sm text-cyan-300">
                          {meta.code}
                        </p>
                        <h3 className="mt-3 text-2xl font-black">
                          {project.title}
                        </h3>
                      </div>

                      <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-200">
                        {meta.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-zinc-400">
                      {project.type}
                    </p>

                    <p className="mt-4 min-h-28 leading-7 text-zinc-300">
                      {project.desc}
                    </p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                      <p className="font-mono text-xs text-zinc-500">
                        {lang === "zh" ? "MY ROLE / 我的职责" : "MY ROLE"}
                      </p>
                      <p className="mt-2 font-semibold text-zinc-100">
                        {meta.role}
                      </p>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-sm text-zinc-400">
                        <span>
                          {lang === "zh" ? "完成度 / 可展示度" : "Progress"}
                        </span>
                        <span>{meta.progress}%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-cyan-300 via-fuchsia-300 to-lime-300"
                          style={{ width: `${meta.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      {index === 0 ? (
                        <a
                          href="projects/liar-room"
                          className="block w-full rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-center font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
                        >
                          {lang === "zh" ? "打开副本档案" : "Open Case File"}
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-zinc-400"
                        >
                          {lang === "zh" ? "档案整理中" : "File Pending"}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 技能树 */}
        <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-fuchsia-300">
                {t.skillsSub}
              </p>
              <h2 className="mt-3 text-4xl font-black">{t.skillsTitle}</h2>
            </div>

            <p className="max-w-xl leading-7 text-zinc-400">
              {t.skillsIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.skills.map((skill, index) => {
              const meta = skillMeta[index];

              return (
                <article
                  key={skill.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-sm text-fuchsia-300">
                        {meta.branch}
                      </p>

                      <h3 className="mt-3 text-2xl font-black">
                        {skill.name}
                      </h3>
                    </div>

                    <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-100">
                      {meta.level}
                    </span>
                  </div>

                  <p className="mt-4 min-h-24 leading-7 text-zinc-300">
                    {skill.desc}
                  </p>

                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-sm text-zinc-400">
                      <span>
                        {lang === "zh" ? "熟练度 / 使用频率" : "Skill Progress"}
                      </span>
                      <span>{meta.progress}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-fuchsia-300 via-cyan-300 to-lime-300"
                        style={{ width: `${meta.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 任务日志 */}
        <section id="timeline" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-lime-300">{t.timelineSub}</p>
              <h2 className="mt-3 text-4xl font-black">{t.timelineTitle}</h2>
            </div>

            <p className="max-w-xl leading-7 text-zinc-400">
              {t.timelineIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* 主线任务 */}
            <div className="rounded-3xl border border-lime-400/20 bg-lime-400/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-lime-200">
                  {t.mainQuestTitle}
                </h3>

                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 font-mono text-xs text-lime-200">
                  MAIN ROUTE
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {t.mainTimeline.map((item, index) => {
                  const meta = mainQuestMeta[index];

                  return (
                    <article
                      key={item.year}
                      className="relative rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-lime-400/30 hover:bg-black/40"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-sm text-lime-300">
                            {meta.code}
                          </p>
                          <p className="mt-1 font-mono text-xs text-zinc-500">
                            {item.year} / {meta.status}
                          </p>
                        </div>

                        <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-200">
                          {meta.badge}
                        </span>
                      </div>

                      <h4 className="mt-4 text-xl font-bold">{item.title}</h4>
                      <p className="mt-3 leading-7 text-zinc-300">
                        {item.desc}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* 支线任务 */}
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-cyan-200">
                  {t.sideQuestTitle}
                </h3>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-200">
                  SIDE ROUTE
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {t.sideTimeline.map((item, index) => {
                  const meta = sideQuestMeta[index];

                  return (
                    <article
                      key={item.year}
                      className="rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-cyan-400/30 hover:bg-black/40"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-sm text-cyan-300">
                            {meta.code}
                          </p>
                          <p className="mt-1 font-mono text-xs text-zinc-500">
                            {item.year} / {meta.status}
                          </p>
                        </div>

                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                          {meta.badge}
                        </span>
                      </div>

                      <h4 className="mt-4 text-xl font-bold">{item.title}</h4>
                      <p className="mt-3 leading-7 text-zinc-300">
                        {item.desc}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 联系区域 */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="font-mono text-sm text-cyan-300">{t.contactSub}</p>

            <h2 className="mt-3 text-4xl font-black">{t.contactTitle}</h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              {t.contactDesc}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {t.contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="font-mono text-sm text-zinc-500">
                    {contact.label}
                  </p>

                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="mt-2 block wrap-break-word text-lg font-bold text-cyan-200 hover:text-cyan-100"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="mt-2 wrap-break-word text-lg font-bold text-zinc-100">
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}