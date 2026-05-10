const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const replayBtn = document.querySelector("#replayBtn");
const fullBtn = document.querySelector("#fullBtn");
const slideNo = document.querySelector("#slideNo");
const progressBar = document.querySelector("#progressBar");

const state = { index: 0, raf: null };
const C = {
  bg: "#050506",
  panel: "#101014",
  panel2: "#151519",
  line: "rgba(255,255,255,0.14)",
  lineSoft: "rgba(255,255,255,0.07)",
  text: "#f5f5f7",
  muted: "#a1a1a6",
  dim: "#6e6e73",
  accent: "#0a84ff",
};

const sceneMap = {
  cover: ["#coverCanvas", drawCover],
  llmMap: ["#llmMapCanvas", drawLlmMap],
  problem: ["#problemCanvas", drawProblem],
  sentence: ["#sentenceCanvas", drawSentence],
  roles: ["#rolesCanvas", drawRoles],
  embedding: ["#embeddingCanvas", drawEmbedding],
  vectorSpace: ["#vectorSpaceCanvas", drawVectorSpace],
  position: ["#positionCanvas", drawPosition],
  positionFormula: ["#positionFormulaCanvas", drawPositionFormula],
  qkv: ["#qkvCanvas", drawQkv],
  queryKeyValue: ["#qkvRolesCanvas", drawQkvRoles],
  library: ["#libraryCanvas", drawLibrary],
  score: ["#scoreCanvas", drawScore],
  scoreMatrix: ["#scoreMatrixCanvas", drawScoreMatrix],
  scale: ["#scaleCanvas", drawScale],
  softmax: ["#softmaxCanvas", drawSoftmax],
  weighted: ["#weightedCanvas", drawWeighted],
  attentionFormula: ["#attentionFormulaCanvas", drawAttentionFormula],
  llmWhy: ["#llmWhyCanvas", drawLlmWhy],
  summary: ["#summaryCanvas", drawSummary],
};

function stopAnimation() {
  if (state.raf) cancelAnimationFrame(state.raf);
  state.raf = null;
}

function showSlide(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  state.index = next;
  stopAnimation();
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === next);
    slide.classList.remove("enter");
  });
  const active = slides[next];
  requestAnimationFrame(() => active.classList.add("enter"));
  slideNo.textContent = `${next + 1} / ${slides.length}`;
  progressBar.style.width = `${((next + 1) / slides.length) * 100}%`;
  runScene(active.dataset.scene, true);
}

function replay() {
  stopAnimation();
  const active = slides[state.index];
  active.classList.remove("enter");
  void active.offsetWidth;
  active.classList.add("enter");
  runScene(active.dataset.scene, true);
}

prevBtn.addEventListener("click", () => showSlide(state.index - 1));
nextBtn.addEventListener("click", () => showSlide(state.index + 1));
replayBtn.addEventListener("click", replay);
fullBtn.addEventListener("click", () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") showSlide(state.index + 1);
  if (event.key === "ArrowLeft") showSlide(state.index - 1);
  if (event.key.toLowerCase() === "r") replay();
  if (event.key.toLowerCase() === "f") fullBtn.click();
});

function runScene(scene, reset = false) {
  if (scene === "tokens") buildTokenLab(reset);
  if (scene === "ids") buildIds(reset);
  const config = sceneMap[scene];
  if (!config) return;
  const [selector, draw] = config;
  const canvas = document.querySelector(selector);
  if (!canvas) return;
  const start = performance.now();
  const loop = (now) => {
    const { ctx, w, h } = setup(canvas);
    draw(ctx, w, h, (now - start) / 1000);
    state.raf = requestAnimationFrame(loop);
  };
  loop(start);
}

function setup(canvas, aspect = 620 / 900) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const w = Math.max(1, rect.width);
  const h = Math.max(1, w * aspect);
  canvas.width = Math.round(w * ratio);
  canvas.height = Math.round(h * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, w, h };
}

function bg(ctx, w, h) {
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(255,255,255,0.035)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 44) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 44) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function text(ctx, s, x, y, size = 18, color = C.text, weight = 650, align = "center") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, PingFang SC, Arial`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(s, x, y);
}

function box(ctx, x, y, w, h, label = "", opt = {}) {
  ctx.fillStyle = opt.fill || C.panel;
  ctx.strokeStyle = opt.stroke || C.line;
  ctx.lineWidth = opt.lineWidth || 1;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, opt.radius || 16);
  ctx.fill();
  ctx.stroke();
  if (label) text(ctx, label, x + w / 2, y + h / 2, opt.size || 18, opt.color || C.text, opt.weight || 700);
}

function arrow(ctx, x1, y1, x2, y2, color = C.accent, width = 2) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 12 * Math.cos(a - 0.46), y2 - 12 * Math.sin(a - 0.46));
  ctx.lineTo(x2 - 12 * Math.cos(a + 0.46), y2 - 12 * Math.sin(a + 0.46));
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function pulse(t, shift = 0) {
  return 0.5 + 0.5 * Math.sin(t * 2 + shift);
}

function buildTokenLab(reset) {
  const row = document.querySelector(".token-stream");
  if (!row) return;
  if (!reset && row.children.length) return;
  const tokens = ["用", "毒", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒", "毒死", "？"];
  row.innerHTML = "";
  tokens.forEach((token, i) => {
    const el = document.createElement("span");
    el.textContent = token;
    el.style.animationDelay = `${i * 46}ms`;
    row.appendChild(el);
  });
}

function buildIds(reset) {
  const row = document.querySelector(".id-stream");
  if (!row) return;
  if (!reset && row.children.length) return;
  const ids = ["910", "4812", "4812", "33016", "11", "33016", "7642", "928", "4812", "44802", "30"];
  row.innerHTML = "";
  ids.forEach((id, i) => {
    const el = document.createElement("span");
    el.textContent = id;
    el.style.animationDelay = `${i * 46}ms`;
    row.appendChild(el);
  });
}

function drawCover(ctx, w, h, t) {
  bg(ctx, w, h);
  const cx = w / 2, cy = h / 2;
  const nodes = ["Token", "Embedding", "Position", "Q", "K", "V", "Softmax", "Context"];
  nodes.forEach((n, i) => {
    const a = t * 0.28 + (Math.PI * 2 * i) / nodes.length;
    const r = 180 + (i % 2) * 62;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    ctx.strokeStyle = "rgba(10,132,255,0.22)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    box(ctx, x - 68, y - 24, 136, 48, n, { stroke: i % 2 ? C.line : C.accent, size: 15 });
  });
  box(ctx, cx - 128, cy - 58, 256, 116, "Transformer", { stroke: C.accent, size: 25, weight: 780 });
  text(ctx, "context engine", cx, cy + 30, 15, C.muted, 620);
}

function drawLlmMap(ctx, w, h, t) {
  bg(ctx, w, h);
  const labels = ["上下文", "Token", "向量", "注意力", "概率", "下一个 token"];
  const y = h / 2;
  labels.forEach((label, i) => {
    const x = 64 + i * ((w - 128) / (labels.length - 1));
    box(ctx, x - 52, y - 42, 104, 84, label, { stroke: i === Math.floor(t % labels.length) ? C.accent : C.line, size: 16 });
    if (i < labels.length - 1) arrow(ctx, x + 54, y, x + ((w - 128) / (labels.length - 1)) - 58, y, "rgba(10,132,255,0.8)", 2);
  });
  text(ctx, "P(next token | context)", w / 2, h - 82, 26, C.text, 760);
}

function drawProblem(ctx, w, h, t) {
  bg(ctx, w, h);
  const words = ["用", "毒", "毒", "毒蛇", "毒蛇", "被", "毒", "毒死"];
  const xs = words.map((_, i) => 70 + i * ((w - 140) / (words.length - 1)));
  const y = h * 0.32;
  words.forEach((word, i) => box(ctx, xs[i] - 30, y - 24, 60, 48, word, { stroke: i === Math.floor(t % words.length) ? C.accent : C.line }));
  [[0, 1], [1, 3], [3, 7], [5, 7], [6, 7]].forEach(([a, b], i) => {
    const active = i === Math.floor(t % 5);
    ctx.strokeStyle = active ? C.accent : "rgba(255,255,255,0.24)";
    ctx.lineWidth = active ? 3 : 1.4;
    ctx.beginPath();
    ctx.moveTo(xs[a], y + 34);
    ctx.quadraticCurveTo((xs[a] + xs[b]) / 2, y + 132 + i * 14, xs[b], y + 34);
    ctx.stroke();
  });
  text(ctx, "语义 = token 之间的关系网络", w / 2, h - 78, 26, C.text, 760);
}

function drawSentence(ctx, w, h, t) {
  bg(ctx, w, h);
  const parts = [["用", "动作入口"], ["毒", "手段"], ["毒蛇", "实体"], ["被", "被动关系"], ["毒", "施加因素"], ["毒死", "结果"]];
  parts.forEach(([word, role], i) => {
    const x = 105 + (i % 3) * 255;
    const y = 118 + Math.floor(i / 3) * 178;
    box(ctx, x, y, 180, 104, "", { stroke: i === Math.floor(t % parts.length) ? C.accent : C.line });
    text(ctx, word, x + 90, y + 38, 30, C.text, 780);
    text(ctx, role, x + 90, y + 74, 17, C.muted, 650);
  });
  text(ctx, "同形字符，角色不同", w / 2, h - 62, 25, C.text, 760);
}

function drawRoles(ctx, w, h, t) {
  bg(ctx, w, h);
  const cx = w / 2, cy = h / 2;
  box(ctx, cx - 78, cy - 42, 156, 84, "毒", { stroke: C.accent, size: 42 });
  const roles = [["名词", 0], ["动词", 1], ["形容词", 2], ["结果词组", 3], ["实体修饰", 4]];
  roles.forEach(([r, i]) => {
    const a = t * 0.2 + (Math.PI * 2 * i) / roles.length;
    const x = cx + Math.cos(a) * 245;
    const y = cy + Math.sin(a) * 170;
    arrow(ctx, cx + Math.cos(a) * 86, cy + Math.sin(a) * 48, x - Math.cos(a) * 58, y - Math.sin(a) * 28, i === Math.floor(t % roles.length) ? C.accent : "rgba(255,255,255,0.28)", 1.8);
    box(ctx, x - 72, y - 30, 144, 60, r, { stroke: i === Math.floor(t % roles.length) ? C.accent : C.line, size: 18 });
  });
}

function drawEmbedding(ctx, w, h, t) {
  bg(ctx, w, h);
  const tokens = ["毒", "毒蛇", "毒死"];
  tokens.forEach((token, i) => {
    const y = 118 + i * 148;
    box(ctx, 58, y - 34, 116, 68, token, { stroke: C.line, size: 23 });
    arrow(ctx, 186, y, 280, y);
    for (let j = 0; j < 14; j++) {
      const x = 304 + j * 36;
      const v = Math.abs(Math.sin(t + i * 1.2 + j * 0.55));
      box(ctx, x, y - 32, 24, 64, "", { radius: 8, stroke: C.lineSoft, fill: "#0c0c0f" });
      ctx.fillStyle = j % 4 === 0 ? C.accent : C.text;
      ctx.globalAlpha = 0.22 + v * 0.58;
      ctx.fillRect(x + 6, y + 25, 12, -v * 50);
      ctx.globalAlpha = 1;
    }
  });
  text(ctx, "ID 查表 → 高维向量", w / 2, 44, 24, C.text, 760);
}

function drawVectorSpace(ctx, w, h, t) {
  bg(ctx, w, h);
  const pts = [
    ["毒蛇", 0.38, 0.38], ["蛇类", 0.44, 0.45], ["动物", 0.50, 0.32],
    ["毒死", 0.66, 0.58], ["中毒", 0.70, 0.48], ["用毒", 0.58, 0.70],
  ];
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.beginPath();
  ctx.moveTo(105, h - 105);
  ctx.lineTo(w - 105, h - 105);
  ctx.moveTo(105, h - 105);
  ctx.lineTo(105, 82);
  ctx.stroke();
  pts.forEach(([label, px, py], i) => {
    const x = 105 + px * (w - 210);
    const y = 82 + py * (h - 190);
    const r = 7 + pulse(t, i) * 4;
    ctx.fillStyle = i === Math.floor(t % pts.length) ? C.accent : C.text;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    text(ctx, label, x + 14, y - 14, 16, C.muted, 650, "left");
  });
  text(ctx, "距离和方向编码用法相似性", w / 2, h - 54, 24, C.text, 760);
}

function drawPosition(ctx, w, h, t) {
  bg(ctx, w, h);
  const tokens = ["用", "毒", "毒蛇", "被", "毒死"];
  tokens.forEach((token, i) => {
    const x = 92 + i * ((w - 184) / (tokens.length - 1));
    box(ctx, x - 48, 110, 96, 58, token, { stroke: C.line, size: 19 });
    box(ctx, x - 48, 240, 96, 58, `pos ${i}`, { stroke: i === Math.floor(t % tokens.length) ? C.accent : C.line, size: 17, color: C.accent });
    arrow(ctx, x, 172, x, 236, "rgba(10,132,255,0.8)");
  });
  text(ctx, "token 向量 + 位置向量 = 有顺序的输入", w / 2, h - 78, 24, C.text, 760);
}

function drawPositionFormula(ctx, w, h, t) {
  bg(ctx, w, h);
  const left = 70, right = w - 70, top = 96, bottom = h - 122;
  [[1, C.accent], [2, C.text], [4, C.dim], [8, "rgba(255,255,255,0.32)"]].forEach(([freq, color], i) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = i === 0 ? 3 : 1.7;
    ctx.beginPath();
    for (let x = left; x <= right; x += 3) {
      const p = (x - left) / (right - left);
      const y = top + (bottom - top) * (0.5 + Math.sin(p * Math.PI * 2 * freq + t * 0.8 + i) * 0.22);
      if (x === left) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
  text(ctx, "多频率曲线叠加，给位置生成指纹", w / 2, h - 60, 24, C.text, 760);
}

function drawQkv(ctx, w, h, t) {
  bg(ctx, w, h);
  const cx = 120, cy = h / 2;
  box(ctx, cx - 52, cy - 52, 104, 104, "X", { stroke: C.accent, size: 34 });
  [["Q", "想找什么", 390, 122], ["K", "如何被找", 548, h / 2], ["V", "贡献内容", 708, h - 176]].forEach(([name, desc, x, y], i) => {
    arrow(ctx, cx + 62, cy, x - 86, y, i === Math.floor(t % 3) ? C.accent : "rgba(255,255,255,0.34)", 2);
    box(ctx, x - 76, y - 44, 152, 88, "", { stroke: i === Math.floor(t % 3) ? C.accent : C.line });
    text(ctx, name, x, y - 12, 34, i === Math.floor(t % 3) ? C.accent : C.text, 780);
    text(ctx, desc, x, y + 25, 16, C.muted, 650);
  });
}

function drawQkvRoles(ctx, w, h, t) {
  bg(ctx, w, h);
  const rows = [["Q", "搜索请求", "我现在需要什么？"], ["K", "索引标签", "我适合回答什么？"], ["V", "正文内容", "我真正贡献什么？"]];
  rows.forEach(([a, b, c], i) => {
    const y = 110 + i * 132;
    box(ctx, 76, y, 90, 74, a, { stroke: i === Math.floor(t % 3) ? C.accent : C.line, size: 32, color: i === Math.floor(t % 3) ? C.accent : C.text });
    box(ctx, 206, y, 190, 74, b, { stroke: C.line, size: 22 });
    box(ctx, 438, y, 330, 74, c, { stroke: C.line, size: 20, color: C.muted });
    arrow(ctx, 168, y + 37, 202, y + 37, "rgba(10,132,255,0.75)");
    arrow(ctx, 398, y + 37, 434, y + 37, "rgba(10,132,255,0.75)");
  });
}

function drawLibrary(ctx, w, h, t) {
  bg(ctx, w, h);
  box(ctx, 54, h / 2 - 46, 142, 92, "Q 问题", { stroke: C.accent, size: 22 });
  const books = [["书 A", 0.18], ["书 B", 0.74], ["书 C", 0.40], ["书 D", 0.56], ["书 E", 0.28]];
  books.forEach(([name, score], i) => {
    const x = 304 + i * 98;
    const y = h / 2 - 98;
    const active = score > 0.55 || i === Math.floor(t % books.length);
    box(ctx, x, y, 70, 196, "", { stroke: active ? C.accent : C.line, radius: 10 });
    text(ctx, name, x + 35, y + 42, 17, C.text, 720);
    text(ctx, "K", x + 35, y + 92, 20, C.accent, 760);
    text(ctx, "V", x + 35, y + 142, 20, C.muted, 760);
    ctx.strokeStyle = active ? C.accent : "rgba(255,255,255,0.22)";
    ctx.lineWidth = 1 + score * 4;
    ctx.beginPath();
    ctx.moveTo(198, h / 2);
    ctx.lineTo(x, y + 92);
    ctx.stroke();
  });
  text(ctx, "匹配 K，读取 V，形成整合理解", w / 2, h - 54, 24, C.text, 760);
}

function drawScore(ctx, w, h, t) {
  bg(ctx, w, h);
  const row = Math.floor(t % 5);
  const words = ["用", "毒", "毒蛇", "被", "毒死"];
  words.forEach((word, i) => {
    const y = 108 + i * 78;
    box(ctx, 80, y, 94, 50, word, { stroke: i === row ? C.accent : C.line, size: 18 });
    box(ctx, w - 174, y, 94, 50, word, { stroke: C.line, size: 18 });
    const active = i === row || i === (row + 2) % 5;
    ctx.strokeStyle = active ? C.accent : "rgba(255,255,255,0.22)";
    ctx.lineWidth = active ? 3 : 1.2;
    ctx.beginPath();
    ctx.moveTo(178, 133 + row * 78);
    ctx.bezierCurveTo(320, 133 + row * 78, 510, 133 + i * 78, w - 178, 133 + i * 78);
    ctx.stroke();
  });
  text(ctx, "qᵢ · kⱼ", w / 2, h / 2, 42, C.text, 780);
}

function drawScoreMatrix(ctx, w, h, t) {
  bg(ctx, w, h);
  const words = ["用", "毒", "毒蛇", "被", "毒死"];
  const vals = [
    [0.12, 0.80, 0.36, 0.10, 0.16],
    [0.09, 0.28, 0.62, 0.18, 0.42],
    [0.08, 0.24, 0.76, 0.24, 0.48],
    [0.06, 0.18, 0.32, 0.26, 0.72],
    [0.05, 0.24, 0.36, 0.30, 0.66],
  ];
  const cell = Math.min(76, (w - 260) / 5);
  const x0 = w / 2 - (cell * 5) / 2;
  const y0 = 114;
  const row = Math.floor(t % 5);
  words.forEach((word, i) => {
    text(ctx, word, x0 - 18, y0 + i * cell + cell / 2, 14, C.muted, 650, "right");
    text(ctx, word, x0 + i * cell + cell / 2, y0 - 22, 14, C.muted, 650);
  });
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const v = vals[r][c];
      ctx.fillStyle = r === row ? `rgba(10,132,255,${0.18 + v * 0.52})` : `rgba(255,255,255,${0.035 + v * 0.22})`;
      ctx.fillRect(x0 + c * cell, y0 + r * cell, cell - 5, cell - 5);
      text(ctx, v.toFixed(2), x0 + c * cell + cell / 2, y0 + r * cell + cell / 2, 13, C.text, 650);
    }
  }
  text(ctx, "第 i 行 = 第 i 个 token 看全句", w / 2, h - 58, 23, C.text, 760);
}

function drawScale(ctx, w, h, t) {
  bg(ctx, w, h);
  const before = [2.1, 5.8, 7.4, 1.6, 4.2];
  const after = before.map((v) => v / Math.sqrt(64));
  drawBars(ctx, 120, 122, before, "未缩放：分数过尖", t);
  drawBars(ctx, 120, 352, after, "缩放后：更稳定", t, 8);
}

function drawBars(ctx, x, y, values, label, t, scale = 1) {
  text(ctx, label, x, y - 34, 18, C.muted, 650, "left");
  values.forEach((v, i) => {
    const ww = v * 46 * scale;
    box(ctx, x, y + i * 30, 500, 18, "", { stroke: C.lineSoft, fill: "rgba(255,255,255,0.035)", radius: 6 });
    ctx.fillStyle = i === Math.floor(t % values.length) ? C.accent : "rgba(255,255,255,0.45)";
    ctx.fillRect(x, y + i * 30, Math.min(500, ww), 18);
  });
}

function drawSoftmax(ctx, w, h, t) {
  bg(ctx, w, h);
  const labels = ["毒", "毒蛇", "被", "毒死"];
  const vals = [0.18, 0.44, 0.14, 0.24];
  labels.forEach((label, i) => {
    const x = 138 + i * 172;
    const bh = vals[i] * 470;
    box(ctx, x, h - 126 - bh, 88, bh, "", { stroke: C.line, fill: "rgba(255,255,255,0.035)", radius: 12 });
    ctx.fillStyle = i === Math.floor(t % labels.length) ? C.accent : "rgba(255,255,255,0.42)";
    ctx.fillRect(x, h - 126 - bh, 88, bh);
    text(ctx, label, x + 44, h - 88, 18, C.text, 720);
    text(ctx, vals[i].toFixed(2), x + 44, h - 146 - bh, 16, C.muted, 650);
  });
  text(ctx, "Σ weights = 1", w / 2, 54, 25, C.text, 760);
}

function drawWeighted(ctx, w, h, t) {
  bg(ctx, w, h);
  const vals = [["V₁", 0.16], ["V₂", 0.42], ["V₃", 0.12], ["V₄", 0.30]];
  vals.forEach(([label, weight], i) => {
    const y = 100 + i * 90;
    box(ctx, 96, y, 120, 56, label, { stroke: C.line, size: 22 });
    text(ctx, `× ${weight.toFixed(2)}`, 282, y + 28, 22, i === Math.floor(t % vals.length) ? C.accent : C.muted, 760);
    arrow(ctx, 350, y + 28, 530, h / 2, i === Math.floor(t % vals.length) ? C.accent : "rgba(255,255,255,0.24)");
  });
  box(ctx, 560, h / 2 - 58, 190, 116, "zᵢ", { stroke: C.accent, size: 38 });
  text(ctx, "上下文后的新向量", 655, h / 2 + 78, 18, C.muted, 650);
}

function drawAttentionFormula(ctx, w, h, t) {
  bg(ctx, w, h);
  const steps = [["QKᵀ", "打分"], ["/√dₖ", "缩放"], ["softmax", "权重"], ["×V", "读内容"]];
  steps.forEach(([a, b], i) => {
    const x = 82 + i * 198;
    box(ctx, x, h / 2 - 54, 150, 108, "", { stroke: i === Math.floor(t % steps.length) ? C.accent : C.line });
    text(ctx, a, x + 75, h / 2 - 12, 26, C.text, 760);
    text(ctx, b, x + 75, h / 2 + 28, 17, C.muted, 650);
    if (i < steps.length - 1) arrow(ctx, x + 154, h / 2, x + 192, h / 2, "rgba(10,132,255,0.8)");
  });
  text(ctx, "Attention(Q,K,V)", w / 2, 92, 30, C.text, 780);
}

function drawLlmWhy(ctx, w, h, t) {
  bg(ctx, w, h);
  const layers = ["Layer 1", "Layer 8", "Layer 16", "Layer 32"];
  layers.forEach((layer, i) => {
    const y = 92 + i * 112;
    box(ctx, 142 + i * 34, y, 530 - i * 68, 64, layer, { stroke: i === Math.floor(t % layers.length) ? C.accent : C.line, size: 20 });
  });
  text(ctx, "越深层，表示越抽象", w / 2, h - 78, 25, C.text, 760);
}

function drawSummary(ctx, w, h, t) {
  bg(ctx, w, h);
  const labels = ["文字", "Token", "向量", "Q/K/V", "权重", "新语义"];
  labels.forEach((label, i) => {
    const x = 84 + i * ((w - 168) / (labels.length - 1));
    const y = h / 2 + Math.sin(t + i) * 18;
    box(ctx, x - 52, y - 36, 104, 72, label, { stroke: i === Math.floor(t % labels.length) ? C.accent : C.line, size: 17 });
    if (i < labels.length - 1) arrow(ctx, x + 54, y, x + ((w - 168) / (labels.length - 1)) - 56, h / 2 + Math.sin(t + i + 1) * 18, "rgba(10,132,255,0.72)");
  });
  text(ctx, "Self-Attention = 可计算的上下文关系", w / 2, 94, 26, C.text, 760);
}

showSlide(0);
