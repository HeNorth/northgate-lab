"use client";

import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    back: "← 返回 NorthGate Lab",
    langButton: "EN",
    caseCode: "CASE-02 / PROJECT FILE",
    title: "MARD 拼豆图纸生成器",
    subtitle: "Next.js / 网页工具 / 图像处理 / 色卡映射",
    intro:
      "MARD 拼豆图纸生成器是一个面向拼豆创作者的网页工具。它的目标是把图片转换成可制作的拼豆图纸，并根据不同色卡数量生成更适合实际材料的方案。当前页面为项目档案占位，后续会继续补充功能截图、技术细节和使用流程。",

    cards: [
      {
        label: "PROJECT STATUS",
        title: "功能验证完成",
        desc: "核心方向已经验证：图片上传、裁剪、像素化、颜色映射和图纸生成。",
      },
      {
        label: "MY ROLE",
        title: "网页工具 / 图像处理",
        desc: "负责产品流程、页面交互、图像处理逻辑和色卡映射设计。",
      },
      {
        label: "CORE VALUE",
        title: "让图片变成可制作图纸",
        desc: "帮助用户根据已有颜色数量生成更适合实际制作的拼豆图纸。",
      },
    ],

    designSub: "TOOL DESIGN",
    designTitle: "工具设计",
    designItems: [
      {
        title: "图片上传与裁剪",
        desc: "用户上传图片后，可以先选择想要保留的主体区域，再进入图纸生成流程。",
      },
      {
        title: "像素化处理",
        desc: "将原图转换成适合拼豆制作的像素图，降低细节复杂度，提高可制作性。",
      },
      {
        title: "色卡映射",
        desc: "根据用户选择的 MARD 色卡数量，将图片颜色映射到实际可用颜色。",
      },
      {
        title: "图纸与统计",
        desc: "后续计划输出图纸预览、颜色统计、用量估算和制作辅助信息。",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "下一阶段补充内容",
    planItems: [
      "补充工具页面截图。",
      "整理图片处理流程图。",
      "展示 24 / 48 / 72 / 96 / 120 / 144 / 168 / 192 色卡模式。",
      "补充图纸导出和颜色统计说明。",
      "记录开发过程和技术难点。",
    ],

    endSub: "CASE FILE PENDING",
    endTitle: "这个工具档案还会继续完善",
    endDesc:
      "后续会补充真实截图、功能演示、技术实现说明，以及可以直接访问的在线工具链接。",
    backProjects: "返回项目副本",
  },

  en: {
    back: "← Back to NorthGate Lab",
    langButton: "中文",
    caseCode: "CASE-02 / PROJECT FILE",
    title: "MARD Bead Pattern Generator",
    subtitle: "Next.js / Web Tool / Image Processing / Palette Mapping",
    intro:
      "MARD Bead Pattern Generator is a web tool designed for bead art creators. Its goal is to convert images into usable bead patterns and generate practical results based on different palette sizes. This page is currently a project file placeholder and will later include screenshots, technical details, and usage flow.",

    cards: [
      {
        label: "PROJECT STATUS",
        title: "Feature Prototype Done",
        desc: "The core direction has been validated: image upload, cropping, pixelation, palette mapping, and pattern generation.",
      },
      {
        label: "MY ROLE",
        title: "Web Tool / Image Processing",
        desc: "Responsible for product flow, page interaction, image processing logic, and palette mapping design.",
      },
      {
        label: "CORE VALUE",
        title: "Turn Images into Makeable Patterns",
        desc: "Helps users generate bead patterns that better match their available colors and materials.",
      },
    ],

    designSub: "TOOL DESIGN",
    designTitle: "Tool Design",
    designItems: [
      {
        title: "Image Upload and Cropping",
        desc: "Users can upload an image and select the main area before entering the pattern generation process.",
      },
      {
        title: "Pixelation",
        desc: "The original image is converted into a pixel-style pattern suitable for bead art production.",
      },
      {
        title: "Palette Mapping",
        desc: "Image colors are mapped to actual available MARD palette colors based on the selected palette size.",
      },
      {
        title: "Pattern and Statistics",
        desc: "Future versions may include pattern previews, color statistics, material estimates, and production support.",
      },
    ],

    planSub: "NEXT BUILD PLAN",
    planTitle: "Next Content Updates",
    planItems: [
      "Add screenshots of the tool interface.",
      "Document the image processing flow.",
      "Show 24 / 48 / 72 / 96 / 120 / 144 / 168 / 192 palette modes.",
      "Explain pattern export and color statistics.",
      "Record development notes and technical challenges.",
    ],

    endSub: "CASE FILE PENDING",
    endTitle: "This tool file will be expanded later",
    endDesc:
      "Screenshots, feature demos, technical notes, and the online tool link will be added to this page later.",
    backProjects: "Back to Case Files",
  },
};

export default function MardBeadGeneratorPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none fixed right-10 top-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between gap-4">
          <a
            href="../../"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {t.back}
          </a>

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

          <a
            href="../../#projects"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            {t.backProjects}
          </a>
        </section>
      </div>
    </main>
  );
}