const slides = window.COURSE_SLIDES || [];
const deck = document.querySelector("#deck");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const fullBtn = document.querySelector("#fullBtn");
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
    return `<ul class="bullets">${chapterAgenda(slide.sectionKey).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
  }
  if (slide.layout === "hero" && slide.id !== 1) {
    return `<ul class="bullets">${slide.bullets.slice(0, 2).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
  }
  return `<ul class="bullets">${slide.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
}

function chapterAgenda(sectionKey) {
  const agenda = {
    opening: ["课程主线：从语言、图像、视频，到文旅 IP 内容生产", "学习目标：听懂原理、看清边界、判断落地价值", "结尾落点：AI 漫剧如何服务北京环球类文旅场景"],
    basics: ["先把 AI、模型、数据、参数这些词讲成人话", "再解释训练和推理的区别", "最后建立后面三类生成模型共用的理解框架"],
    llm: ["从中文歧义案例进入语言理解", "拆开 Token、向量、上下文关系", "用图书馆类比理解模型如何检索和组织信息"],
    image: ["先看早期 AI 绘画为什么容易失控", "再看扩散、语义对齐、局部编辑如何解决问题", "最后落到角色、风格、分镜这些内容工作流"],
    video: ["视频比图片多了时间，所以难点会成倍增加", "重点理解跨帧一致、镜头控制、物理感和长视频", "把技术能力对应到可导演、可剪辑、可复用"],
    comic: ["从剧本、角色、分镜开始搭建生产线", "把 LLM、AI 绘画、AI 视频放进不同环节", "判断 AI 漫剧真正节省的是哪一类成本"],
    universal: ["先看短剧内容消费和文旅 IP 的结合机会", "再看北京环球这类场景适合做哪些内容", "最后用合规、成本、运营节奏判断可行性"],
    closing: ["回收三条主线：语言理解、视觉生成、视频一致性", "形成一个判断框架：能力、边界、场景、合规", "把课程知识落到真实项目判断"],
  };
  return agenda[sectionKey] || ["本章先建立核心问题", "再拆解关键原理", "最后连接到真实应用场景"];
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
          <div class="stat-card"><strong>¥1000亿+</strong><span>2025 年微短剧市场规模</span></div>
          <div class="stat-card"><strong>6.9亿</strong><span>短剧用户规模</span></div>
          <div class="stat-card"><strong>120.5分钟</strong><span>人均单日使用时长</span></div>
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
}

renderDeck();
showSlide(0);

prevBtn.addEventListener("click", () => showSlide(state.index - 1));
nextBtn.addEventListener("click", () => showSlide(state.index + 1));
fullBtn.addEventListener("click", () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") showSlide(state.index + 1);
  if (event.key === "ArrowLeft") showSlide(state.index - 1);
  if (event.key.toLowerCase() === "f") fullBtn.click();
});
