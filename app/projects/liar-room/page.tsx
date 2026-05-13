"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    back: "← 返回 NorthGate Lab",
    langButton: "EN",
    caseCode: "CASE-01 / MISSION BRIEFING",
    title: "谎言密室",
    subtitle: "Unity / 推理解谜 / 搜证质问 / 剧情反转",
    intro:
      "《谎言密室》是一个以“搜证、质问、谎言识别、真相反转”为核心的推理解谜项目。玩家需要在有限信息中寻找矛盾点，通过证据链拆穿角色的谎言，并逐步还原事件真相。",

    statusCards: [
      {
        label: "MISSION STATUS",
        title: "可做成试玩 Demo",
        desc: "当前已具备核心玩法方向，后续可以继续制作 Unity WebGL 试玩版本。",
      },
      {
        label: "MY ROLE",
        title: "玩法 / 系统 / 剧情",
        desc: "负责案件结构、玩家流程、线索逻辑、NPC 谎言和交互设计。",
      },
      {
        label: "CORE LOOP",
        title: "发现 → 质问 → 反转",
        desc: "玩家通过调查场景获得证据，再用证据突破 NPC 的说法。",
      },
    ],

    gameplaySub: "GAMEPLAY DESIGN",
    gameplayTitle: "玩法设计",
    gameplayItems: [
      {
        title: "搜证系统",
        desc: "玩家在场景中点击、检查、收集关键物品和信息。每条线索都不是孤立存在，而是服务于后续质问和推理。",
      },
      {
        title: "质问系统",
        desc: "NPC 的证言中会存在漏洞。玩家需要选择正确证据进行反驳，推动剧情进入下一阶段。",
      },
      {
        title: "谎言识别",
        desc: "不直接告诉玩家谁在说谎，而是通过矛盾信息、时间线错位、行为异常让玩家自己判断。",
      },
      {
        title: "真相反转",
        desc: "案件表层真相和最终真相不同。玩家需要经历一次认知翻转，获得“我推出来了”的成就感。",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "下一阶段开发计划",
    planItems: [
      "完成第一案完整剧情流程。",
      "制作 Unity 2D 横版探索场景。",
      "实现基础搜证与证据背包。",
      "实现 NPC 对话与质问分支。",
      "导出 WebGL 试玩版本并嵌入作品集网站。",
    ],

    endSub: "CASE FILE END",
    endTitle: "这个副本还在继续开发中",
    endDesc:
      "后续我会把试玩 Demo、场景截图、角色设定、流程图和开发日志继续补充到这个页面。",
    backProjects: "返回项目副本",
  },

  en: {
    back: "← Back to NorthGate Lab",
    langButton: "中文",
    caseCode: "CASE-01 / MISSION BRIEFING",
    title: "Liar Room",
    subtitle: "Unity / Mystery Puzzle / Investigation / Narrative Twist",
    intro:
      "Liar Room is a mystery puzzle project built around investigation, questioning, lie detection, and narrative twists. Players search for contradictions in limited information, use evidence to break false statements, and gradually reconstruct the truth behind the case.",

    statusCards: [
      {
        label: "MISSION STATUS",
        title: "Playable Demo Direction",
        desc: "The core gameplay direction is already defined, and the next step is to build a Unity WebGL playable prototype.",
      },
      {
        label: "MY ROLE",
        title: "Gameplay / System / Narrative",
        desc: "Responsible for case structure, player flow, clue logic, NPC lies, and interaction design.",
      },
      {
        label: "CORE LOOP",
        title: "Discover → Question → Twist",
        desc: "Players investigate scenes to collect evidence, then use that evidence to challenge NPC statements.",
      },
    ],

    gameplaySub: "GAMEPLAY DESIGN",
    gameplayTitle: "Gameplay Design",
    gameplayItems: [
      {
        title: "Investigation System",
        desc: "Players click, inspect, and collect important objects and information in the scene. Each clue supports later questioning and reasoning instead of existing in isolation.",
      },
      {
        title: "Questioning System",
        desc: "NPC statements contain logical gaps. Players need to choose the correct evidence to refute them and push the story forward.",
      },
      {
        title: "Lie Detection",
        desc: "The game does not directly tell players who is lying. Instead, contradictions, timeline gaps, and unusual behaviors guide the player to make judgments.",
      },
      {
        title: "Truth Twist",
        desc: "The surface truth and the final truth are different. The goal is to give players the satisfaction of reaching the answer through their own reasoning.",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "Next Build Plan",
    planItems: [
      "Complete the full narrative flow of the first case.",
      "Create a Unity 2D side-scrolling exploration scene.",
      "Build the basic investigation and evidence inventory system.",
      "Implement NPC dialogue and questioning branches.",
      "Export a Unity WebGL playable demo and embed it into the portfolio.",
    ],

    endSub: "CASE FILE END",
    endTitle: "This case file is still under development",
    endDesc:
      "Playable demos, scene screenshots, character settings, flowcharts, and development logs will be added to this page later.",
    backProjects: "Back to Case Files",
  },
};

export default function LiarRoomPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none fixed right-10 top-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {t.back}
          </Link>

          <button
            type="button"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
          >
            {t.langButton}
          </button>
        </div>

        <section className="pt-16">
          <p className="font-mono text-sm text-cyan-300">{t.caseCode}</p>

          <h1 className="mt-4 bg-linear-to-r from-cyan-300 via-fuchsia-300 to-lime-300 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-4 text-xl text-zinc-300">{t.subtitle}</p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            {t.intro}
          </p>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {t.statusCards.map((card, index) => {
            const cardStyle =
              index === 0
                ? "border-cyan-400/20 bg-cyan-400/10"
                : index === 1
                  ? "border-fuchsia-400/20 bg-fuchsia-400/10"
                  : "border-lime-400/20 bg-lime-400/10";

            const labelStyle =
              index === 0
                ? "text-cyan-200"
                : index === 1
                  ? "text-fuchsia-200"
                  : "text-lime-200";

            return (
              <div
                key={card.title}
                className={`rounded-3xl border p-6 ${cardStyle}`}
              >
                <p className={`font-mono text-sm ${labelStyle}`}>
                  {card.label}
                </p>

                <h2 className="mt-3 text-2xl font-black">{card.title}</h2>

                <p className="mt-4 leading-7 text-zinc-300">{card.desc}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-16">
          <p className="font-mono text-sm text-cyan-300">{t.gameplaySub}</p>
          <h2 className="mt-3 text-4xl font-black">{t.gameplayTitle}</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.gameplayItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-sm text-lime-300">{t.planSub}</p>
          <h2 className="mt-3 text-4xl font-black">{t.planTitle}</h2>

          <div className="mt-8 space-y-4">
            {t.planItems.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-white/10 bg-black/30 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/10 font-mono text-sm text-lime-200">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="font-mono text-sm text-fuchsia-300">{t.endSub}</p>
          <h2 className="mt-3 text-3xl font-black">{t.endTitle}</h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            {t.endDesc}
          </p>

          <Link
            href="/#projects"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            {t.backProjects}
          </Link>
        </section>
      </div>
    </main>
  );
}