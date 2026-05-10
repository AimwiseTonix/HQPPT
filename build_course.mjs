import fs from "node:fs";
import path from "node:path";

const root = "/Users/tonix/Downloads/PPT/aigc_course_ppt";
const outlinePath = path.join(root, "data/outline.md");
const slidesPath = path.join(root, "data/slides.js");
const notesPath = path.join(root, "speaker_notes.md");

const outline = fs.readFileSync(outlinePath, "utf8");

const sectionMap = {
  "0. 开场：先建立主线，再进入原理，再看应用": {
    key: "opening",
    label: "开场",
    time: "5 min",
    intent: "建立课程主线，让听众知道今天不是工具演示，而是理解 AIGC 的底层逻辑。",
  },
  "1. AI基础大白话：先把名词讲明白": {
    key: "basics",
    label: "第一章 AI 基础",
    time: "12 min",
    intent: "先解释常见名词，降低理解门槛。",
  },
  "2. LLM：机器如何理解一句话": {
    key: "llm",
    label: "第二章 LLM",
    time: "18 min",
    intent: "只讲语言模型的直觉，不进入复杂公式和工程细节。",
  },
  "3. AI绘画：文字如何变成图像": {
    key: "image",
    label: "第三章 AI 绘画",
    time: "30 min",
    intent: "解释图像生成为什么从混乱走向稳定，以及如何进入工作流。",
  },
  "4. AI视频：为什么从崩坏走向流畅": {
    key: "video",
    label: "第四章 AI 视频",
    time: "30 min",
    intent: "讲清楚视频生成比图片更难，因为它要处理时间和一致性。",
  },
  "5. AI漫剧：把文本、图像、视频连成生产线": {
    key: "comic",
    label: "第五章 AI 漫剧",
    time: "15 min",
    intent: "把前面的模型能力串成一条真实内容生产线。",
  },
  "6. 北京环球：文旅 IP 的 AIGC 内容机会": {
    key: "universal",
    label: "第六章 北京环球机会",
    time: "15 min",
    intent: "结合参考 PPT，把技术能力落到文旅 IP 内容战略。",
  },
  "7. 结尾：把整条链路收回来": {
    key: "closing",
    label: "结尾",
    time: "5 min",
    intent: "用一套判断框架收束课程。",
  },
};

function parseOutline(text) {
  const lines = text.split(/\r?\n/);
  const slides = [];
  let currentSection = null;
  for (const line of lines) {
    const heading = line.match(/^##\s+(.+)/);
    if (heading) {
      currentSection = heading[1].trim();
      continue;
    }
    const row = line.match(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
    if (!row || !currentSection || row[1] === "页码") continue;
    slides.push({
      id: Number(row[1]),
      section: sectionMap[currentSection]?.label || currentSection,
      sectionKey: sectionMap[currentSection]?.key || "misc",
      sectionIntent: sectionMap[currentSection]?.intent || "",
      chapterTime: sectionMap[currentSection]?.time || "",
      title: clean(row[2]),
      core: clean(row[3]),
    });
  }
  return slides;
}

function clean(value) {
  return value
    .replace(/<br\s*\/?>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .trim();
}

const mediaMap = new Map([
  [16, { type: "diagram", variant: "case_sentence", caption: "自绘中文案例：保留完整例句，不使用英文翻译" }],
  [21, { type: "diagram", variant: "attention", caption: "自绘简化图：注意力不是公式，而是分配关注度" }],
  [22, { type: "image", src: "assets/frames_cropped/transformer_library.jpg", caption: "视频参考：图书馆类比" }],
  [28, { type: "image", src: "assets/frames_cropped/image_bad_old.jpg", caption: "视频参考：早期图像生成的混乱感" }],
  [31, { type: "diagram", variant: "diffusion_formula", caption: "自绘简化图：扩散模型的加噪与去噪" }],
  [33, { type: "diagram", variant: "unet", caption: "自绘简化图：U-Net 像图像修复器" }],
  [35, { type: "diagram", variant: "clip", caption: "自绘简化图：文字和图像进入同一语义空间" }],
  [36, { type: "image", src: "assets/frames_cropped/image_diffusion.jpg", caption: "视频参考：多模态模型作为翻译器" }],
  [40, { type: "gif", src: "assets/gifs_cropped/layout_clip.gif", caption: "视频 GIF：全局布局能力" }],
  [45, { type: "image", src: "assets/frames_cropped/image_inpaint.jpg", caption: "视频参考：局部重绘/编辑" }],
  [52, { type: "image", src: "assets/frames_cropped/video_broken.jpg", caption: "视频参考：早期 AI 视频崩坏" }],
  [54, { type: "gif", src: "assets/gifs_cropped/spacetime_clip.gif", caption: "视频 GIF：三维时空块" }],
  [57, { type: "diagram", variant: "video_attention", caption: "自绘简化图：跨帧信息互相通信" }],
  [59, { type: "image", src: "assets/frames_cropped/video_control.jpg", caption: "视频参考：提示词/参考图控制视频" }],
  [65, { type: "gif", src: "assets/gifs_cropped/control_clip.gif", caption: "视频 GIF：镜头与动作控制" }],
  [67, { type: "image", src: "assets/frames_cropped/video_long.jpg", caption: "视频参考：分段生成与一致性" }],
  [73, { type: "diagram", variant: "pipeline", caption: "自绘流程：AI 漫剧生产线" }],
  [83, { type: "diagram", variant: "tourism", caption: "自绘流程：内容种草到线下转化" }],
  [84, { type: "stats", caption: "参考 PPT 数据：微短剧市场规模、用户规模、使用时长" }],
  [93, { type: "timeline", caption: "参考 PPT：三阶段执行路径" }],
]);

const sourceMap = new Map([
  [21, "Vaswani et al., Attention Is All You Need, arXiv:1706.03762"],
  [31, "Ho et al., Denoising Diffusion Probabilistic Models, arXiv:2006.11239"],
  [35, "Rombach et al., Latent Diffusion Models, arXiv:2112.10752"],
  [40, "Peebles & Xie, Scalable Diffusion Models with Transformers, arXiv:2212.09748"],
  [84, "参考 PPT：AIGC漫剧赋能文旅IP，北京环球度假区内容战略新机遇"],
  [85, "参考 PPT：AI重构内容生产，成本降低60%+"],
  [92, "参考 PPT：政策合规与微短剧备案分层"],
]);

function layoutFor(slide) {
  if ([1, 4, 14, 27, 51, 72, 82, 95, 98].includes(slide.id)) return "hero";
  if ([3, 5, 15, 28, 52, 73, 83, 96].includes(slide.id)) return "chapter";
  if (mediaMap.has(slide.id)) return "media";
  if (slide.sectionKey === "universal") return "business";
  if (slide.sectionKey === "basics") return "plain";
  if (slide.sectionKey === "llm") return "concept";
  if (slide.sectionKey === "image" || slide.sectionKey === "video") return "technical";
  return "plain";
}

function bulletsFor(slide) {
  const t = slide.title;
  const c = slide.core;
  const lead = c.replace(/。$/, "");
  if (slide.sectionKey === "basics") {
    return [
      lead,
      "先用生活类比建立直觉，再给出一个准确但不吓人的定义。",
      "这一章的目标是让后面的 LLM、绘画、视频不再像黑盒。",
    ];
  }
  if (slide.sectionKey === "llm") {
    return [
      lead,
      "重点不是背术语，而是理解“上下文关系”为什么重要。",
      "所有复杂结构都先压成一句话：模型在判断当前内容应该参考谁。",
    ];
  }
  if (slide.sectionKey === "image") {
    return [
      lead,
      "从“为什么做不好”讲到“为什么现在能做好”，避免只罗列名词。",
      "把技术点落到画面稳定、文字准确、局部可改、工作流可用。",
    ];
  }
  if (slide.sectionKey === "video") {
    return [
      lead,
      "视频的关键不是动起来，而是在时间里保持同一个世界。",
      "围绕一致性、控制、物理感、长视频四个难点展开。",
    ];
  }
  if (slide.sectionKey === "comic") {
    return [
      lead,
      "把前面学过的模型能力拆进真实内容生产环节。",
      "AI 漫剧的价值来自流程提效，不是一键生成成片。",
    ];
  }
  if (slide.sectionKey === "universal") {
    return [
      lead,
      "用市场、场景、IP、合规、执行路径来判断可行性。",
      "这里不是直接给结论，而是让听众学会判断一个文旅 AIGC 项目。",
    ];
  }
  return [
    lead,
    "先建立判断框架，再进入下一层知识。",
    "这一页只服务一个观点，避免把听众带散。",
  ];
}

function visualSpec(slide) {
  if (mediaMap.has(slide.id)) return mediaMap.get(slide.id);
  if (slide.sectionKey === "basics") return { type: "diagram", variant: "basic_loop" };
  if (slide.sectionKey === "llm") return { type: "diagram", variant: "tokens" };
  if (slide.sectionKey === "image") return { type: "diagram", variant: "diffusion" };
  if (slide.sectionKey === "video") return { type: "diagram", variant: "spacetime" };
  if (slide.sectionKey === "comic") return { type: "diagram", variant: "pipeline" };
  if (slide.sectionKey === "universal") return { type: "diagram", variant: "business_loop" };
  return { type: "diagram", variant: "network" };
}

function speakerNote(slide) {
  const intro = {
    opening: "这一页先帮助听众建立方向感。不要急着讲技术细节，先说明今天我们要解决的核心问题：AIGC 为什么能从文字走到图片、视频和内容生产。",
    basics: "这一页要用大白话讲，不要把概念讲成定义背诵。可以先举生活例子，再落到 AI 里的准确说法。",
    llm: "这一页不进入公式，只讲直觉。目标是让听众明白语言模型为什么必须看上下文，而不是逐字查字典。",
    image: "这一页要围绕“问题怎么被解决”来讲。先说早期为什么不稳定，再说这一页对应的技术在解决哪一个具体问题。",
    video: "这一页要强调视频比图片多了时间维度。任何概念都尽量落到“为什么会闪、为什么会变脸、为什么镜头难控制”。",
    comic: "这一页开始从原理转向生产。重点不是炫工具，而是说明每个模型能力在内容流程中承担什么角色。",
    universal: "这一页结合参考 PPT 的商业逻辑来讲。不要变成销售话术，要用可行性判断的方式讲市场、场景、合规和执行。",
    closing: "这一页负责收束。把前面复杂内容压回一个听众能带走的判断框架。",
  }[slide.sectionKey] || "这一页负责承接上下文，把观点讲清楚即可。";

  return `${intro}\n\n讲法建议：先读出页面标题，再用一句话解释核心观点：“${slide.core}” 接着给一个具体例子或业务场景，最后用一句过渡把听众带到下一页。不要补太多术语；如果听众能复述这一页的核心观点，就算讲透了。`;
}

const slides = parseOutline(outline).map((slide) => ({
  ...slide,
  layout: layoutFor(slide),
  eyebrow: `${String(slide.id).padStart(2, "0")} / ${slide.section}`,
  bullets: bulletsFor(slide),
  visual: visualSpec(slide),
  source: sourceMap.get(slide.id) || "",
}));

const refs = [
  { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
  { label: "Denoising Diffusion Probabilistic Models", url: "https://arxiv.org/abs/2006.11239" },
  { label: "High-Resolution Image Synthesis with Latent Diffusion Models", url: "https://arxiv.org/abs/2112.10752" },
  { label: "Scalable Diffusion Models with Transformers", url: "https://arxiv.org/abs/2212.09748" },
];

fs.writeFileSync(
  slidesPath,
  `window.COURSE_SLIDES = ${JSON.stringify(slides, null, 2)};\nwindow.COURSE_REFS = ${JSON.stringify(refs, null, 2)};\n`,
);

const notes = [
  "# AIGC 2小时公开课逐页演讲稿 v1",
  "",
  "说明：这份讲稿对应本地网页 PPT 的 98 页。每页控制在约 45-90 秒，讲的时候不要逐字念，可以按“标题 → 核心观点 → 例子 → 过渡”来讲。",
  "",
  ...slides.flatMap((slide) => [
    `## ${slide.id}. ${slide.title}`,
    "",
    `所属章节：${slide.section}`,
    "",
    `页面核心：${slide.core}`,
    "",
    speakerNote(slide),
    "",
  ]),
];

fs.writeFileSync(notesPath, notes.join("\n"));

console.log(`generated ${slides.length} slides`);
console.log(slidesPath);
console.log(notesPath);
