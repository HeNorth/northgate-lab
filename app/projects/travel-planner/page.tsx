"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    back: "← 返回 NorthGate Lab",
    langButton: "EN",
    caseCode: "CASE-03 / PROJECT FILE",
    title: "旅途小程序",
    subtitle: "小程序 / 旅行规划 / 产品设计 / AI 交互",
    intro:
      "旅途小程序是一个围绕旅行计划设计的产品构想。它希望解决旅行前信息分散、路线规划麻烦、预算和行程难管理等问题。当前页面为项目档案占位，后续会继续补充功能结构、用户流程和原型设计。",

    cards: [
      {
        label: "PROJECT STATUS",
        title: "产品概念设计",
        desc: "目前处于产品构想与功能规划阶段，后续可以继续推进为网页原型或微信小程序。",
      },
      {
        label: "MY ROLE",
        title: "产品策划 / 交互设计",
        desc: "负责需求拆解、功能设计、用户流程和核心使用场景规划。",
      },
      {
        label: "CORE VALUE",
        title: "让旅行计划更清晰",
        desc: "把路线、预算、景点、时间安排和待办事项整合到一个更易理解的流程里。",
      },
    ],

    designSub: "PRODUCT DESIGN",
    designTitle: "产品设计方向",
    designItems: [
      {
        title: "行程规划",
        desc: "根据旅行天数、目的地和偏好生成基础行程结构，帮助用户快速获得初始方案。",
      },
      {
        title: "路线整理",
        desc: "将景点、交通、酒店和时间安排连接起来，减少旅行前的信息混乱。",
      },
      {
        title: "预算管理",
        desc: "记录交通、住宿、门票、餐饮等费用，让用户更容易控制旅行成本。",
      },
      {
        title: "AI 辅助建议",
        desc: "未来可以接入 AI，让系统根据用户偏好推荐路线、提醒风险和优化计划。",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "下一阶段补充内容",
    planItems: [
      "整理核心功能列表。",
      "绘制用户流程图。",
      "设计首页和行程详情页原型。",
      "补充痛点分析与竞品参考。",
      "决定先做网页 Demo 还是微信小程序 Demo。",
    ],

    endSub: "CASE FILE PENDING",
    endTitle: "这个产品档案还会继续完善",
    endDesc:
      "后续会补充功能架构、页面草图、原型图、用户流程，以及可演示的在线 Demo。",
    backProjects: "返回项目副本",
  },

  en: {
    back: "← Back to NorthGate Lab",
    langButton: "中文",
    caseCode: "CASE-03 / PROJECT FILE",
    title: "Travel Planner",
    subtitle: "Mini Program / Travel Planning / Product Design / AI Interaction",
    intro:
      "Travel Planner is a product concept built around trip planning. It aims to solve problems such as scattered information, complicated route planning, budget management, and itinerary organization. This page is currently a project file placeholder and will later include feature structure, user flow, and prototype design.",

    cards: [
      {
        label: "PROJECT STATUS",
        title: "Product Concept",
        desc: "Currently in the product concept and feature planning stage. It can later be developed into a web prototype or a WeChat mini program.",
      },
      {
        label: "MY ROLE",
        title: "Product Planning / Interaction Design",
        desc: "Responsible for requirement breakdown, feature planning, user flow, and core usage scenarios.",
      },
      {
        label: "CORE VALUE",
        title: "Make Travel Planning Clearer",
        desc: "Organize routes, budgets, attractions, schedules, and tasks into a clearer planning flow.",
      },
    ],

    designSub: "PRODUCT DESIGN",
    designTitle: "Product Design Direction",
    designItems: [
      {
        title: "Itinerary Planning",
        desc: "Generate a basic itinerary structure based on travel days, destination, and user preferences.",
      },
      {
        title: "Route Organization",
        desc: "Connect attractions, transportation, hotels, and schedules to reduce information chaos before traveling.",
      },
      {
        title: "Budget Management",
        desc: "Track transportation, accommodation, tickets, food, and other costs so users can control travel spending more easily.",
      },
      {
        title: "AI-Assisted Suggestions",
        desc: "Future versions may use AI to recommend routes, remind users of risks, and optimize travel plans.",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "Next Content Updates",
    planItems: [
      "Organize the core feature list.",
      "Draw the user flow diagram.",
      "Design homepage and itinerary detail prototypes.",
      "Add pain point analysis and competitor references.",
      "Decide whether to build a web demo or a WeChat mini program demo first.",
    ],

    endSub: "CASE FILE PENDING",
    endTitle: "This product file will be expanded later",
    endDesc:
      "Feature architecture, page sketches, prototypes, user flows, and an online demo will be added later.",
    backProjects: "Back to Case Files",
  },
};

export default function TravelPlannerPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none fixed right-10 top-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between gap-4">
          <link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {t.back}
          </link>

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
          {t.cards.map((card, index) => {
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
          <p className="font-mono text-sm text-cyan-300">{t.designSub}</p>
          <h2 className="mt-3 text-4xl font-black">{t.designTitle}</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.designItems.map((item) => (
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

          <link
            href="/#projects"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            {t.backProjects}
          </link>
        </section>
      </div>
    </main>
  );
}