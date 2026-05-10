const slides = window.COURSE_SLIDES || [];
const deck = document.querySelector("#deck");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const fullBtn = document.querySelector("#fullBtn");
const notesBtn = document.querySelector("#notesBtn");
const closeNotesBtn = document.querySelector("#closeNotesBtn");
const notesPanel = document.querySelector("#notesPanel");
const noteText = document.querySelector("#noteText");
const slideNo = document.querySelector("#slideNo");
const progressBar = document.querySelector("#progressBar");

const state = { index: 0 };

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDeck() {
  deck.innerHTML = slides.map(renderSlide).join("");
}

function renderSlide(slide) {
  const titleTag = slide.id === 1 ? "h1" : "h2";
  const source = slide.source ? `<div class="source">参考：${escapeHtml(slide.source)}</div>` : "";
  return `
    <section class="slide layout-${slide.layout}" data-id="${slide.id}">
      <div class="copy">
        <div class="eyebrow">${escapeHtml(slide.eyebrow)}</div>
        <${titleTag}>${escapeHtml(slide.title)}</${titleTag}>
        <p class="core">${escapeHtml(slide.core)}</p>
        ${renderBullets(slide)}
      </div>
      ${renderVisual(slide)}
      ${source}
    </section>
  `;
}

function renderBullets(slide) {
  if (slide.layout === "chapter") {
    return `<ul class="bullets"><li>${escapeHtml(slide.sectionIntent)}</li><li>建议讲授时长：${escapeHtml(slide.chapterTime)}</li></ul>`;
  }
  if (slide.layout === "hero" && slide.id !== 1) {
    return `<ul class="bullets">${slide.bullets.slice(0, 2).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
  }
  return `<ul class="bullets">${slide.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
}

function renderVisual(slide) {
  if (slide.layout === "hero" || slide.layout === "chapter") {
    return "";
  }
  const visual = slide.visual || { type: "diagram", variant: "network" };
  if (visual.type === "image" || visual.type === "gif") {
    return `
      <div class="visual media-fit">
        <img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.caption || slide.title)}" />
        <div class="caption">${escapeHtml(visual.caption || "")}</div>
      </div>
    `;
  }
  if (visual.type === "stats") {
    return `
      <div class="visual">
        <div class="stat-row">
          <div class="stat-card"><strong>¥1000亿+</strong><span>参考 PPT：2025 年微短剧市场规模</span></div>
          <div class="stat-card"><strong>6.9亿</strong><span>参考 PPT：短剧用户规模</span></div>
          <div class="stat-card"><strong>120.5分钟</strong><span>参考 PPT：人均单日使用时长</span></div>
        </div>
        <div class="caption">${escapeHtml(visual.caption || "")}</div>
      </div>
    `;
  }
  if (visual.type === "timeline") {
    return `
      <div class="visual">
        <div class="timeline-row">
          <div class="timeline-card"><strong>01</strong><b>培训 + 试点</b><span>1-2 个月，建立工具认知，完成 1-2 部试验作品。</span></div>
          <div class="timeline-card"><strong>02</strong><b>优化 + 放量</b><span>3-6 个月，形成 SOP、素材库、审核机制和多平台发布节奏。</span></div>
          <div class="timeline-card"><strong>03</strong><b>生态 + 变现</b><span>6-12 个月，形成系列内容、UGC 生态和商业化探索。</span></div>
        </div>
        <div class="caption">${escapeHtml(visual.caption || "")}</div>
      </div>
    `;
  }
  return `
    <div class="visual">
      ${renderDiagram(visual.variant, slide)}
      <div class="caption">${escapeHtml(visual.caption || "")}</div>
    </div>
  `;
}

function renderDiagram(variant, slide) {
  const diagrams = {
    basic_loop: arrowRow([
      ["例子", "文本 / 图片 / 视频"],
      ["训练", "反复预测与改错"],
      ["参数", "沉淀成模型经验"],
    ]),
    tokens: arrowRow([
      ["文字", "用毒毒毒蛇"],
      ["Token", "切成可处理小块"],
      ["向量", "变成语义坐标"],
    ]),
    attention: `
      <div class="diagram">
        <div class="big-node"><b>注意力</b><span>不是公式开始，而是先回答：当前词应该重点参考谁？</span><div class="formula-lite">关注度高 → 多读<br />关注度低 → 少读</div></div>
      </div>
    `,
    case_sentence: `
      <div class="diagram">
        <div class="big-node" style="width:min(92%,760px)">
          <b style="font-size:42px">用毒毒毒蛇，毒蛇会不会被毒死？</b>
          <span>同一个“毒”，在不同位置承担不同角色</span>
          <div class="diagram-grid" style="margin-top:18px">
            <div class="node"><b>用毒</b><span>手段</span></div>
            <div class="node"><b>毒蛇</b><span>属性 + 实体</span></div>
            <div class="node"><b>被毒死</b><span>结果</span></div>
          </div>
        </div>
      </div>
    `,
    diffusion: arrowRow([
      ["噪声", "随机起点"],
      ["去噪", "一步步擦掉不需要的部分"],
      ["图像", "符合提示词的结果"],
    ]),
    diffusion_formula: `
      <div class="diagram">
        <div class="arrow-row">
          <div class="node"><b>清晰图</b><span>x₀</span></div>
          <div class="arrow">+</div>
          <div class="node"><b>逐步加噪</b><span>xₜ = √αₜx₀ + √(1-αₜ)ε</span></div>
          <div class="arrow">⇄</div>
          <div class="node"><b>预测噪声</b><span>εθ(xₜ, t, text)</span></div>
        </div>
        <div class="formula-lite" style="margin-top:30px">训练：学会预测噪声<br />生成：从噪声一步步还原图像</div>
      </div>
    `,
    unet: `
      <div class="diagram">
        <div class="diagram-grid">
          <div class="node"><b>压缩</b><span>看整体结构</span></div>
          <div class="node"><b>瓶颈</b><span>理解语义</span></div>
          <div class="node"><b>还原</b><span>补回细节</span></div>
        </div>
      </div>
    `,
    clip: arrowRow([
      ["文字", "一只猫坐在窗边"],
      ["语义空间", "把文字和图片拉近"],
      ["图像", "猫 / 窗 / 光线 / 风格"],
    ]),
    spacetime: arrowRow([
      ["宽", "画面横向"],
      ["高", "画面纵向"],
      ["时间", "前后帧关系"],
    ]),
    video_attention: `
      <div class="diagram">
        <div class="diagram-grid">
          <div class="node"><b>第 1 帧</b><span>角色脸</span></div>
          <div class="node"><b>第 8 帧</b><span>服装延续</span></div>
          <div class="node"><b>第 16 帧</b><span>场景光线</span></div>
        </div>
        <div class="formula-lite" style="margin-top:28px">跨帧通信 = 减少闪烁、变脸、跳变</div>
      </div>
    `,
    pipeline: arrowRow([
      ["剧本", "人物与冲突"],
      ["画面", "角色 / 分镜 / 场景"],
      ["视频", "镜头 / 配音 / 剪辑"],
    ]),
    tourism: arrowRow([
      ["内容种草", "短剧触达"],
      ["线下打卡", "场景体验"],
      ["二次传播", "UGC 与转化"],
    ]),
    business_loop: arrowRow([
      ["市场", "短剧入口"],
      ["能力", "AI 降本提速"],
      ["落地", "IP 场景运营"],
    ]),
    network: arrowRow([
      ["输入", slide.section],
      ["计算", "关系 / 约束 / 控制"],
      ["输出", slide.title],
    ]),
  };
  return diagrams[variant] || diagrams.network;
}

function arrowRow(items) {
  return `
    <div class="diagram">
      <div class="arrow-row">
        <div class="node"><b>${escapeHtml(items[0][0])}</b><span>${escapeHtml(items[0][1])}</span></div>
        <div class="arrow">→</div>
        <div class="node"><b>${escapeHtml(items[1][0])}</b><span>${escapeHtml(items[1][1])}</span></div>
        <div class="arrow">→</div>
        <div class="node"><b>${escapeHtml(items[2][0])}</b><span>${escapeHtml(items[2][1])}</span></div>
      </div>
    </div>
  `;
}

function noteFor(slide) {
  const first = {
    opening: "先建立方向感：这门课不是工具演示，而是解释 AIGC 为什么能从文字走到图像、视频和内容生产。",
    basics: "这一页用大白话讲。先举生活例子，再落到 AI 概念，避免像教材定义。",
    llm: "这一页只讲直觉，不讲公式。重点是让听众理解上下文关系。",
    image: "这一页围绕图像生成的具体难题展开：语义、布局、文字、局部修改或工作流。",
    video: "这一页强调视频多了时间维度，所以要处理一致性、运动、物理和镜头。",
    comic: "这一页把模型能力落到内容生产流程，不把 AI 漫剧讲成一键生成。",
    universal: "这一页结合参考 PPT，用市场、IP、场景、合规、运营判断可行性。",
    closing: "这一页负责收束，把复杂内容压回听众能带走的判断框架。",
  }[slide.sectionKey] || "这一页讲清楚一个观点即可。";
  return `${first}\n\n页面核心：${slide.core}\n\n讲法：先解释标题，再给一个具体例子，最后用一句话过渡到下一页。`;
}

function showSlide(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  state.index = next;
  const nodes = Array.from(document.querySelectorAll(".slide"));
  nodes.forEach((slide, i) => {
    slide.classList.toggle("active", i === next);
    slide.classList.remove("enter");
  });
  const active = nodes[next];
  requestAnimationFrame(() => active.classList.add("enter"));
  slideNo.textContent = `${next + 1} / ${slides.length}`;
  progressBar.style.width = `${((next + 1) / slides.length) * 100}%`;
  noteText.textContent = noteFor(slides[next]);
}

function toggleNotes(force) {
  const open = typeof force === "boolean" ? force : !notesPanel.classList.contains("open");
  notesPanel.classList.toggle("open", open);
  notesPanel.setAttribute("aria-hidden", String(!open));
}

renderDeck();
showSlide(0);

prevBtn.addEventListener("click", () => showSlide(state.index - 1));
nextBtn.addEventListener("click", () => showSlide(state.index + 1));
notesBtn.addEventListener("click", () => toggleNotes());
closeNotesBtn.addEventListener("click", () => toggleNotes(false));
fullBtn.addEventListener("click", () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") showSlide(state.index + 1);
  if (event.key === "ArrowLeft") showSlide(state.index - 1);
  if (event.key.toLowerCase() === "n") toggleNotes();
  if (event.key.toLowerCase() === "f") fullBtn.click();
});
