const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const replayBtn = document.querySelector("#replayBtn");
const fullBtn = document.querySelector("#fullBtn");
const slideNo = document.querySelector("#slideNo");
const progressBar = document.querySelector("#progressBar");

const state = { index: 0, timers: new Map() };
const C = {
  bg: "#050505",
  panel: "#101012",
  line: "#303034",
  text: "#f5f5f7",
  muted: "#a1a1a6",
  dim: "#6e6e73",
  accent: "#0a84ff",
  accentSoft: "rgba(10,132,255,0.22)",
};

function clearTimer(key) {
  const id = state.timers.get(key);
  if (id) {
    cancelAnimationFrame(id);
    clearTimeout(id);
  }
  state.timers.delete(key);
}

function clearAllTimers() {
  for (const key of Array.from(state.timers.keys())) clearTimer(key);
}

function showSlide(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  state.index = next;
  clearAllTimers();
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
  clearAllTimers();
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
  if (scene === "cover") drawLoop("cover", "#coverCanvas", drawCover);
  if (scene === "relation") drawLoop("relation", "#relationCanvas", drawRelation);
  if (scene === "embedding") drawLoop("embedding", "#embeddingCanvas", drawEmbedding);
  if (scene === "position") drawLoop("position", "#positionCanvas", drawPosition);
  if (scene === "qkvIntro") drawLoop("qkv", "#qkvCanvas", drawQkv);
  if (scene === "library1") drawLoop("library", "#libraryCanvas", drawLibrary);
  if (scene === "score") drawLoop("score", "#scoreCanvas", drawScore);
  if (scene === "softmax") drawLoop("softmax", "#softmaxCanvas", drawSoftmax);
  if (scene === "matrix") drawLoop("matrix", "#matrixCanvas", drawMatrix);
  if (scene === "multiHeadWhy") drawLoop("heads", "#headsCanvas", drawHeads);
  if (scene === "encoderBlock") drawLoop("encoder", "#encoderCanvas", drawEncoder);
  if (scene === "autoregressive") drawLoop("generate", "#generateCanvas", drawGenerate);
  if (scene === "maskedAttention") drawLoop("mask", "#maskCanvas", drawMask);
  if (scene === "crossAttention") drawLoop("cross", "#crossCanvas", drawCross);
  if (scene === "prob") drawLoop("output", "#outputCanvas", drawOutput);
}

function setup(canvas, aspect = 560 / 900) {
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

function drawLoop(key, selector, draw) {
  const canvas = document.querySelector(selector);
  if (!canvas) return;
  const start = performance.now();
  const loop = (now) => {
    const s = setup(canvas);
    draw(s.ctx, s.w, s.h, (now - start) / 1000);
    const id = requestAnimationFrame(loop);
    state.timers.set(key, id);
  };
  loop(start);
}

function bg(ctx, w, h) {
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(255,255,255,0.045)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 42) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 42) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function t(ctx, s, x, y, size = 18, color = C.text, weight = 650, align = "center") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, PingFang SC, Arial`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(s, x, y);
}

function box(ctx, x, y, w, h, fill = C.panel, stroke = C.line) {
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 10);
  ctx.fill();
  ctx.stroke();
}

function arrow(ctx, x1, y1, x2, y2, color = C.accent) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 10 * Math.cos(a - 0.45), y2 - 10 * Math.sin(a - 0.45));
  ctx.lineTo(x2 - 10 * Math.cos(a + 0.45), y2 - 10 * Math.sin(a + 0.45));
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function buildTokenLab(reset) {
  const tokens = ["用", "毒", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒", "毒死", "？"];
  const row = document.querySelector(".token-stream");
  if (!row) return;
  if (!reset && row.children.length) return;
  row.innerHTML = "";
  tokens.forEach((token, i) => {
    const el = document.createElement("span");
    el.textContent = token;
    el.style.animationDelay = `${i * 36}ms`;
    row.appendChild(el);
  });
}

function buildIds(reset) {
  const ids = ["910", "4812", "4812", "33016", "11", "33016", "7642", "928", "4812", "44802", "30"];
  const boxEl = document.querySelector(".id-lab");
  if (!boxEl) return;
  if (!reset && boxEl.children.length) return;
  boxEl.innerHTML = "";
  ids.forEach((id, i) => {
    const el = document.createElement("span");
    el.textContent = id;
    el.style.animationDelay = `${i * 34}ms`;
    boxEl.appendChild(el);
  });
}

function drawCover(ctx, w, h, time) {
  bg(ctx, w, h);
  const cx = w / 2, cy = h / 2;
  const words = ["Token", "Embedding", "Q", "K", "V", "Attention", "Encoder", "Decoder"];
  words.forEach((word, i) => {
    const a = time * 0.35 + (Math.PI * 2 * i) / words.length;
    const r = 140 + (i % 2) * 70;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    box(ctx, x - 70, y - 23, 140, 46, "#0d0d0f", i % 2 ? C.line : C.accent);
    t(ctx, word, x, y, 16, i % 2 ? C.text : C.accent, 700);
    ctx.strokeStyle = "rgba(10,132,255,0.20)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
  });
  box(ctx, cx - 120, cy - 48, 240, 96, "#050505", C.accent);
  t(ctx, "Transformer", cx, cy - 8, 26, C.text, 760);
  t(ctx, "relationship engine", cx, cy + 24, 14, C.muted, 600);
}

function drawRelation(ctx, w, h, time) {
  bg(ctx, w, h);
  const words = ["用", "毒", "毒", "毒蛇", "毒蛇", "被", "毒", "毒死"];
  const xs = words.map((_, i) => 80 + i * ((w - 160) / (words.length - 1)));
  const y = 120;
  words.forEach((word, i) => {
    box(ctx, xs[i] - 30, y - 24, 60, 48, "#101010", C.line);
    t(ctx, word, xs[i], y, 18, C.text, 700);
  });
  const arcs = [[1, 3], [3, 7], [5, 7], [0, 1]];
  arcs.forEach(([a, b], i) => {
    ctx.strokeStyle = i === Math.floor(time % arcs.length) ? C.accent : "#555";
    ctx.lineWidth = i === Math.floor(time % arcs.length) ? 3 : 1.5;
    ctx.beginPath();
    const mid = (xs[a] + xs[b]) / 2;
    ctx.moveTo(xs[a], y + 28);
    ctx.quadraticCurveTo(mid, y + 120 + i * 22, xs[b], y + 28);
    ctx.stroke();
  });
  t(ctx, "语义来自关系，而不是孤立文字", w / 2, h - 70, 24, C.text, 700);
}

function drawEmbedding(ctx, w, h, time) {
  bg(ctx, w, h);
  const tokens = ["毒", "毒蛇", "毒死"];
  tokens.forEach((token, i) => {
    const y = 120 + i * 130;
    box(ctx, 70, y - 34, 130, 68, "#101010", C.line);
    t(ctx, token, 135, y, 22, C.text, 700);
    arrow(ctx, 220, y, 310, y);
    for (let j = 0; j < 12; j++) {
      const x = 330 + j * 38;
      const v = Math.abs(Math.sin(time + i * 1.3 + j * 0.7));
      box(ctx, x, y - 30, 24, 60, "#0b0b0c", "#242426");
      ctx.fillStyle = j % 3 === 0 ? C.accent : "#f5f5f7";
      ctx.globalAlpha = 0.25 + v * 0.55;
      ctx.fillRect(x + 5, y + 22, 14, -v * 44);
      ctx.globalAlpha = 1;
    }
  });
  t(ctx, "每个 token 查表得到一个高维向量", w / 2, 42, 22, C.text, 700);
}

function drawPosition(ctx, w, h, time) {
  bg(ctx, w, h);
  const left = 70, right = w - 70, top = 120, bottom = h - 115;
  [[1, C.accent], [2, C.text], [4, C.dim]].forEach(([freq, color], wi) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = wi === 0 ? 3 : 1.8;
    ctx.beginPath();
    for (let x = left; x <= right; x += 3) {
      const p = (x - left) / (right - left);
      const y = top + (bottom - top) * (0.5 + Math.sin(p * Math.PI * 2 * freq + time + wi) * 0.23);
      if (x === left) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
  for (let i = 0; i < 8; i++) {
    const x = left + ((right - left) / 7) * i;
    box(ctx, x - 24, bottom + 40, 48, 34, "#101010", C.line);
    t(ctx, String(i), x, bottom + 57, 16, C.text, 700);
  }
  t(ctx, "位置编码：给同时输入的 token 加上顺序指纹", w / 2, 44, 22, C.text, 700);
}

function drawQkv(ctx, w, h, time) {
  bg(ctx, w, h);
  const cx = 125, cy = h / 2;
  box(ctx, cx - 58, cy - 44, 116, 88, "#101010", C.accent);
  t(ctx, "X", cx, cy, 34, C.text, 760);
  [["Q", "我想找什么", 360, 115], ["K", "我能匹配谁", 525, 280], ["V", "我贡献什么", 690, 445]].forEach(([name, desc, x, y], i) => {
    arrow(ctx, cx + 66, cy, x - 82, y, i === 0 ? C.accent : "#777");
    box(ctx, x - 78, y - 42, 156, 84, "#101010", i === 0 ? C.accent : C.line);
    t(ctx, name, x, y - 10, 30, i === 0 ? C.accent : C.text, 760);
    t(ctx, desc, x, y + 24, 15, C.muted, 600);
  });
}

function drawLibrary(ctx, w, h, time) {
  bg(ctx, w, h);
  box(ctx, 56, h / 2 - 44, 150, 88, "#101010", C.accent);
  t(ctx, "你的 Q", 131, h / 2 - 8, 22, C.text, 720);
  t(ctx, "问题", 131, h / 2 + 24, 15, C.muted, 600);
  const books = [["书 A", 0.22], ["书 B", 0.76], ["书 C", 0.42], ["书 D", 0.58]];
  books.forEach(([name, score], i) => {
    const x = 350 + i * 118;
    const y = h / 2 - 72;
    box(ctx, x, y, 78, 144, "#101010", score > 0.6 ? C.accent : C.line);
    t(ctx, name, x + 39, y + 34, 18, C.text, 700);
    t(ctx, "K", x + 39, y + 72, 18, C.accent, 720);
    t(ctx, "V", x + 39, y + 108, 18, C.muted, 720);
    ctx.strokeStyle = score > 0.6 ? C.accent : "#555";
    ctx.lineWidth = 1 + score * 3;
    ctx.beginPath();
    ctx.moveTo(210, h / 2);
    ctx.lineTo(x, y + 72);
    ctx.stroke();
  });
  t(ctx, "Q 匹配书脊标签 K，再按匹配度阅读内容 V", w / 2, h - 54, 22, C.text, 700);
}

function drawScore(ctx, w, h, time) {
  bg(ctx, w, h);
  const words = ["用", "毒", "毒蛇", "被", "毒死"];
  const row = Math.floor(time % words.length);
  words.forEach((word, i) => {
    box(ctx, 90, 100 + i * 72, 90, 46, "#101010", i === row ? C.accent : C.line);
    t(ctx, word, 135, 123 + i * 72, 17, C.text, 700);
    box(ctx, 650, 100 + i * 72, 90, 46, "#101010", C.line);
    t(ctx, word, 695, 123 + i * 72, 17, C.text, 700);
  });
  t(ctx, "Q", 135, 62, 18, C.accent, 760);
  t(ctx, "K", 695, 62, 18, C.accent, 760);
  words.forEach((_, i) => {
    const y1 = 123 + row * 72;
    const y2 = 123 + i * 72;
    ctx.strokeStyle = i === row ? C.accent : "#555";
    ctx.lineWidth = i === row ? 3 : 1.3;
    ctx.beginPath();
    ctx.moveTo(185, y1);
    ctx.bezierCurveTo(320, y1, 480, y2, 645, y2);
    ctx.stroke();
  });
  t(ctx, "每个 Query 会和所有 Key 做相似度打分", w / 2, h - 52, 22, C.text, 700);
}

function drawSoftmax(ctx, w, h, time) {
  bg(ctx, w, h);
  const labels = ["毒", "毒蛇", "被", "毒死"];
  const vals = [0.18, 0.44, 0.14, 0.24];
  labels.forEach((label, i) => {
    const x = 160 + i * 160;
    const height = vals[i] * 520;
    box(ctx, x, h - 120 - height, 80, height, "#101010", C.line);
    ctx.fillStyle = i === 1 ? C.accent : "#f5f5f7";
    ctx.globalAlpha = i === 1 ? 0.9 : 0.38;
    ctx.fillRect(x, h - 120 - height, 80, height);
    ctx.globalAlpha = 1;
    t(ctx, label, x + 40, h - 82, 18, C.text, 700);
    t(ctx, vals[i].toFixed(2), x + 40, h - 136 - height, 16, C.muted, 650);
  });
  t(ctx, "softmax：分数变成总和为 1 的注意力预算", w / 2, 46, 22, C.text, 700);
}

function drawMatrix(ctx, w, h, time) {
  bg(ctx, w, h);
  const words = ["用", "毒", "毒蛇", "被", "毒死"];
  const weights = [
    [0.06, 0.44, 0.24, 0.10, 0.16],
    [0.08, 0.20, 0.35, 0.12, 0.25],
    [0.05, 0.18, 0.42, 0.15, 0.20],
    [0.04, 0.16, 0.24, 0.20, 0.36],
    [0.03, 0.17, 0.30, 0.18, 0.32],
  ];
  const cell = 62, x0 = w / 2 - cell * 2.5, y0 = 110;
  const row = Math.floor(time % 5);
  words.forEach((word, i) => {
    t(ctx, word, x0 - 18, y0 + i * cell + cell / 2, 14, C.muted, 650, "right");
    t(ctx, word, x0 + i * cell + cell / 2, y0 - 20, 14, C.muted, 650);
  });
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const v = weights[r][c];
      ctx.fillStyle = r === row ? `rgba(10,132,255,${0.16 + v})` : `rgba(255,255,255,${0.05 + v * 0.35})`;
      ctx.fillRect(x0 + c * cell, y0 + r * cell, cell - 4, cell - 4);
      t(ctx, v.toFixed(2), x0 + c * cell + cell / 2, y0 + r * cell + cell / 2, 13, C.text, 650);
    }
  }
  t(ctx, "一行 = 一个 token 看全句的关注分布", w / 2, h - 52, 22, C.text, 700);
}

function drawHeads(ctx, w, h, time) {
  bg(ctx, w, h);
  const heads = ["修饰关系", "动作关系", "实体关系", "长距离依赖"];
  heads.forEach((label, i) => {
    const x = 110 + (i % 2) * 340;
    const y = 110 + Math.floor(i / 2) * 150;
    box(ctx, x, y, 270, 110, "#101010", i === Math.floor(time % 4) ? C.accent : C.line);
    t(ctx, `Head ${i + 1}`, x + 34, y + 34, 20, C.text, 720, "left");
    t(ctx, label, x + 34, y + 72, 18, C.muted, 650, "left");
  });
  t(ctx, "多个头并行观察不同关系，再拼接回来", w / 2, h - 54, 22, C.text, 700);
}

function drawEncoder(ctx, w, h, time) {
  bg(ctx, w, h);
  const blocks = ["Multi-Head Attention", "Add + LayerNorm", "Feed Forward", "Add + LayerNorm"];
  blocks.forEach((label, i) => {
    const y = 86 + i * 95;
    box(ctx, w / 2 - 210, y, 420, 62, "#101010", i === Math.floor(time % 4) ? C.accent : C.line);
    t(ctx, label, w / 2, y + 31, 20, C.text, 700);
    if (i < blocks.length - 1) arrow(ctx, w / 2, y + 62, w / 2, y + 92, "#777");
  });
  t(ctx, "一个 Encoder Block：交换信息，再稳定和加工", w / 2, h - 46, 22, C.text, 700);
}

function drawGenerate(ctx, w, h, time) {
  bg(ctx, w, h);
  const seqs = ["<BOS>", "<BOS> 不会", "<BOS> 不会 被", "<BOS> 不会 被 毒死"];
  const idx = Math.floor(time * 0.8) % seqs.length;
  seqs.forEach((seq, i) => {
    const y = 100 + i * 82;
    box(ctx, 120, y, 660, 54, "#101010", i === idx ? C.accent : C.line);
    t(ctx, seq, 150, y + 27, 18, C.text, 650, "left");
  });
  t(ctx, "每一步把新 token 接回序列，再预测下一个", w / 2, h - 54, 22, C.text, 700);
}

function drawMask(ctx, w, h, time) {
  bg(ctx, w, h);
  const n = 6, cell = 52, x0 = w / 2 - (n * cell) / 2, y0 = 100;
  const row = Math.floor(time % n);
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const future = c > r;
      ctx.fillStyle = future ? "rgba(255,255,255,0.08)" : "rgba(10,132,255,0.24)";
      ctx.fillRect(x0 + c * cell, y0 + r * cell, cell - 4, cell - 4);
      ctx.strokeStyle = r === row ? C.accent : C.line;
      ctx.strokeRect(x0 + c * cell, y0 + r * cell, cell - 4, cell - 4);
      t(ctx, future ? "−∞" : "ok", x0 + c * cell + cell / 2, y0 + r * cell + cell / 2, 15, future ? C.dim : C.text, 650);
    }
  }
  t(ctx, "未来位置设为 −∞，softmax 后权重为 0", w / 2, h - 50, 22, C.text, 700);
}

function drawCross(ctx, w, h, time) {
  bg(ctx, w, h);
  const left = ["用", "毒", "毒蛇", "毒死"];
  const right = ["<BOS>", "毒蛇", "不会"];
  left.forEach((word, i) => {
    box(ctx, 110, 100 + i * 84, 210, 52, "#101010", C.line);
    t(ctx, word, 215, 126 + i * 84, 18, C.text, 700);
  });
  right.forEach((word, i) => {
    box(ctx, 610, 140 + i * 95, 210, 58, "#101010", C.line);
    t(ctx, word, 715, 169 + i * 95, 18, C.text, 700);
  });
  left.forEach((_, i) => right.forEach((__, j) => {
    ctx.strokeStyle = (i + j + Math.floor(time)) % 3 === 0 ? C.accent : "#444";
    ctx.lineWidth = (i + j + Math.floor(time)) % 3 === 0 ? 2.4 : 1;
    ctx.beginPath();
    ctx.moveTo(610, 169 + j * 95);
    ctx.bezierCurveTo(500, 169 + j * 95, 430, 126 + i * 84, 320, 126 + i * 84);
    ctx.stroke();
  }));
  t(ctx, "Decoder 查询 Encoder 的记忆", w / 2, 48, 22, C.text, 700);
}

function drawOutput(ctx, w, h, time) {
  bg(ctx, w, h);
  const labels = ["不会", "会", "毒死", "因为", "毒蛇"];
  const probs = [0.34, 0.11, 0.20, 0.18, 0.17];
  labels.forEach((label, i) => {
    const y = 88 + i * 66;
    box(ctx, 160, y, 590, 38, "#101010", C.line);
    ctx.fillStyle = i === 0 ? C.accent : "#f5f5f7";
    ctx.globalAlpha = i === 0 ? 0.85 : 0.25;
    ctx.fillRect(160, y, 590 * probs[i] * 1.8, 38);
    ctx.globalAlpha = 1;
    t(ctx, label, 188, y + 19, 17, C.text, 700, "left");
    t(ctx, `${Math.round(probs[i] * 100)}%`, 780, y + 19, 17, C.muted, 650, "right");
  });
  t(ctx, "argmax → 不会", w / 2, h - 52, 24, C.accent, 760);
}

showSlide(0);
