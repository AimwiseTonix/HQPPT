const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const replayBtn = document.querySelector("#replayBtn");
const fullBtn = document.querySelector("#fullBtn");
const slideNo = document.querySelector("#slideNo");
const progressBar = document.querySelector("#progressBar");

const state = {
  index: 0,
  timers: new Map(),
};

const colors = {
  bg: "#050b14",
  panel: "#0b1728",
  grid: "rgba(102,240,255,0.12)",
  text: "#eef8ff",
  muted: "#91a8b8",
  cyan: "#66f0ff",
  blue: "#4a8cff",
  violet: "#9c6bff",
  green: "#4effa1",
  amber: "#ffd166",
  red: "#ff5c7a",
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
  const active = slides[state.index];
  clearAllTimers();
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
  if (scene === "cover") animateCover();
  if (scene === "tokens") buildTokenLab(reset);
  if (scene === "embedding") animateEmbedding();
  if (scene === "qkv") animateQkv();
  if (scene === "attention") animateAttention();
  if (scene === "softmax") animateSoftmax();
  if (scene === "heads") animateHeads();
  if (scene === "position") animatePosition();
  if (scene === "encoder") animateEncoder();
  if (scene === "decoder") animateDecoder();
  if (scene === "cross") animateCross();
  if (scene === "output") animateOutput();
}

function setupCanvas(canvas, aspect) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const cssWidth = Math.max(1, rect.width);
  const cssHeight = Math.max(1, cssWidth * aspect);
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, w: cssWidth, h: cssHeight };
}

function text(ctx, value, x, y, size = 18, color = colors.text, weight = 800, align = "center") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px Inter, PingFang SC, Arial`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(value, x, y);
}

function roundRect(ctx, x, y, w, h, r = 8, fill = colors.panel, stroke = colors.grid) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

function drawGrid(ctx, w, h, step = 28) {
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(102,240,255,0.065)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function animate(key, canvas, aspect, draw) {
  const start = performance.now();
  const loop = (now) => {
    const setup = setupCanvas(canvas, aspect);
    draw(setup.ctx, setup.w, setup.h, (now - start) / 1000);
    const id = requestAnimationFrame(loop);
    state.timers.set(key, id);
  };
  loop(start);
}

function animateCover() {
  const canvas = document.querySelector("#coverCanvas");
  if (!canvas) return;
  animate("cover", canvas, 620 / 900, (ctx, w, h, t) => {
    drawGrid(ctx, w, h, 36);
    const cx = w / 2;
    const cy = h / 2;
    for (let r = 70; r < Math.min(w, h) * 0.48; r += 56) {
      ctx.strokeStyle = `rgba(102,240,255,${0.22 - r / 1800})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(cx, cy, r, t * 0.22, Math.PI * 1.35 + t * 0.22);
      ctx.stroke();
    }
    const words = ["Token", "Q", "K", "V", "Softmax", "FFN", "Mask", "Next"];
    words.forEach((word, i) => {
      const angle = t * 0.55 + (Math.PI * 2 * i) / words.length;
      const r = 145 + (i % 2) * 72;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      roundRect(ctx, x - 54, y - 22, 108, 44, 6, "rgba(102,240,255,0.08)", "rgba(102,240,255,0.38)");
      text(ctx, word, x, y, 17, i % 3 === 0 ? colors.green : colors.cyan, 900);
      ctx.strokeStyle = "rgba(102,240,255,0.18)";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.stroke();
    });
    roundRect(ctx, cx - 118, cy - 54, 236, 108, 10, "rgba(9,22,38,0.92)", "rgba(78,255,161,0.58)");
    text(ctx, "Transformer", cx, cy - 12, 30, colors.text, 950);
    text(ctx, "attention engine", cx, cy + 24, 15, colors.muted, 800);
  });
}

function buildTokenLab(reset) {
  const tokens = ["用", "毒", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒", "毒死", "？"];
  const ids = [910, 4812, 4812, 33016, 11, 33016, 7642, 928, 4812, 44802, 30];
  const tokenStream = document.querySelector(".token-stream");
  const idStream = document.querySelector(".id-stream");
  if (!tokenStream || !idStream) return;
  if (!reset && tokenStream.children.length) return;
  tokenStream.innerHTML = "";
  idStream.innerHTML = "";
  tokens.forEach((token, i) => {
    const el = document.createElement("span");
    el.textContent = token;
      el.style.animationDelay = `${i * 45}ms`;
    tokenStream.appendChild(el);
    const id = document.createElement("span");
    id.textContent = String(ids[i]);
    id.style.animationDelay = `${300 + i * 42}ms`;
    idStream.appendChild(id);
  });
}

function animateEmbedding() {
  const canvas = document.querySelector("#embeddingCanvas");
  if (!canvas) return;
  animate("embedding", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const tokens = ["毒", "毒蛇", "毒死"];
    tokens.forEach((token, i) => {
      const y = 126 + i * 112;
      roundRect(ctx, 54, y - 34, 158, 68, 8, "rgba(78,255,161,0.08)", "rgba(78,255,161,0.36)");
      text(ctx, token, 133, y, 20, colors.text, 900);
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(220, y);
      ctx.lineTo(320, y);
      ctx.stroke();
      text(ctx, "lookup", 270, y - 22, 13, colors.muted, 800);
      for (let j = 0; j < 10; j += 1) {
        const value = Math.sin(i * 1.7 + j * 0.95 + t * 1.2);
        const barW = 18 + Math.abs(value) * 78;
        const x = 344 + j * 52;
        const color = value > 0 ? colors.cyan : colors.violet;
        roundRect(ctx, x, y - 24, 38, 48, 5, "rgba(255,255,255,0.035)", "rgba(102,240,255,0.15)");
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.35 + Math.abs(value) * 0.55;
        ctx.fillRect(x + 8, y + 18, 22, -barW * 0.38);
        ctx.globalAlpha = 1;
      }
    });
    text(ctx, "Embedding table: id → dense vector", w / 2, 42, 24, colors.cyan, 950);
    text(ctx, "每一行都是一个 token 的 512 维语义坐标", w / 2, h - 28, 16, colors.muted, 800);
  });
}

function animateQkv() {
  const canvas = document.querySelector("#qkvCanvas");
  if (!canvas) return;
  animate("qkv", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const cx = 145;
    const cy = h / 2;
    roundRect(ctx, cx - 74, cy - 44, 148, 88, 10, "rgba(102,240,255,0.08)", "rgba(102,240,255,0.44)");
    text(ctx, "X", cx, cy - 10, 36, colors.text, 950);
    text(ctx, "token vector", cx, cy + 24, 14, colors.muted, 800);
    const targets = [
      ["Q", "我要找什么", colors.green, 330, 120],
      ["K", "我能被谁匹配", colors.cyan, 500, 280],
      ["V", "我贡献的内容", colors.amber, 670, 440],
    ];
    targets.forEach(([name, label, color, x, y], i) => {
      const p = (Math.sin(t * 2 + i) + 1) / 2;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.setLineDash([12, 10]);
      ctx.lineDashOffset = -t * 40;
      ctx.beginPath();
      ctx.moveTo(cx + 78, cy);
      ctx.bezierCurveTo(260, cy - 120 + i * 80, x - 120, y, x - 70, y);
      ctx.stroke();
      ctx.setLineDash([]);
      roundRect(ctx, x - 76, y - 42, 152, 84, 10, `rgba(102,240,255,${0.06 + p * 0.04})`, color);
      text(ctx, name, x, y - 10, 34, color, 950);
      text(ctx, label, x, y + 24, 15, colors.text, 800);
      text(ctx, `W${name}`, (cx + x) / 2, (cy + y) / 2 - 24, 15, color, 900);
    });
    text(ctx, "三套权重矩阵，把同一份 X 投影成三种角色", w / 2, 42, 22, colors.cyan, 950);
  });
}

function animateAttention() {
  const canvas = document.querySelector("#attentionCanvas");
  if (!canvas) return;
  animate("attention", canvas, 390 / 1320, (ctx, w, h, t) => {
    drawGrid(ctx, w, h, 32);
    const words = ["用", "毒", "毒蛇", "被", "毒死"];
    const weights = [
      [0.07, 0.18, 0.32, 0.20, 0.23],
      [0.04, 0.25, 0.45, 0.16, 0.10],
      [0.03, 0.22, 0.28, 0.34, 0.13],
      [0.05, 0.18, 0.40, 0.27, 0.10],
      [0.08, 0.10, 0.16, 0.24, 0.42],
    ];
    const row = Math.floor((t * 1.05) % words.length);
    const cell = Math.min(50, (h - 120) / 5);
    const gx = w / 2 - cell * 2.5;
    const gy = 76;
    text(ctx, `Query: ${words[row]}`, 154, gy + row * cell + cell / 2, 20, colors.green, 950, "left");
    ctx.strokeStyle = colors.green;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(260, gy + row * cell + cell / 2);
    ctx.lineTo(gx - 28, gy + row * cell + cell / 2);
    ctx.stroke();
    words.forEach((word, i) => {
      text(ctx, word, gx - 16, gy + i * cell + cell / 2, 13, colors.muted, 850, "right");
      text(ctx, word, gx + i * cell + cell / 2, gy - 18, 13, colors.muted, 850);
    });
    for (let r = 0; r < 5; r += 1) {
      for (let c = 0; c < 5; c += 1) {
        const value = weights[r][c];
        ctx.fillStyle = `rgba(102,240,255,${0.08 + value * 1.35})`;
        ctx.fillRect(gx + c * cell, gy + r * cell, cell - 4, cell - 4);
        if (r === row) {
          ctx.strokeStyle = colors.red;
          ctx.lineWidth = 2.5;
          ctx.strokeRect(gx + c * cell + 1, gy + r * cell + 1, cell - 6, cell - 6);
        }
        text(ctx, value.toFixed(2), gx + c * cell + cell / 2, gy + r * cell + cell / 2, 14, colors.text, 900);
      }
    }
    const bx = gx + 5 * cell + 90;
    weights[row].forEach((value, i) => {
      const y = gy + i * 52;
      roundRect(ctx, bx, y, 250, 32, 4, "rgba(255,209,102,0.08)", "rgba(255,209,102,0.12)");
      ctx.fillStyle = colors.amber;
      ctx.globalAlpha = 0.32 + value;
      ctx.fillRect(bx, y, 250 * value * 1.9, 32);
      ctx.globalAlpha = 1;
      text(ctx, `${words[i]} × ${value.toFixed(2)}`, bx + 125, y + 16, 15, colors.text, 850);
    });
    text(ctx, "softmax 权重矩阵", w / 2, 34, 22, colors.cyan, 950);
    text(ctx, "颜色越亮，当前 Query 越应该吸收该 Value", w / 2, h - 22, 15, colors.muted, 800);
  });
}

function animateSoftmax() {
  const canvas = document.querySelector("#softmaxCanvas");
  if (!canvas) return;
  animate("softmax", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const labels = ["毒", "毒蛇", "被", "毒死"];
    const scores = [1.7, 2.3, 1.5, 1.0];
    const exp = scores.map(Math.exp);
    const sum = exp.reduce((a, b) => a + b, 0);
    const weights = exp.map((v) => v / sum);
    text(ctx, "score → exp(score) → normalized weight", w / 2, 42, 22, colors.cyan, 950);
    labels.forEach((label, i) => {
      const x = 130 + i * 190;
      const scoreH = scores[i] * 54;
      const weightH = weights[i] * 520;
      const grow = Math.min(1, Math.max(0, (t * 0.8 - i * 0.12) % 2));
      roundRect(ctx, x - 58, h - 110 - scoreH, 52, scoreH, 5, "rgba(74,140,255,0.28)", "rgba(74,140,255,0.4)");
      roundRect(ctx, x + 10, h - 110 - weightH * grow, 72, weightH * grow, 5, "rgba(78,255,161,0.28)", "rgba(78,255,161,0.46)");
      text(ctx, label, x + 10, h - 62, 14, colors.text, 850);
      text(ctx, scores[i].toFixed(1), x - 32, h - 124 - scoreH, 14, colors.blue, 900);
      text(ctx, weights[i].toFixed(2), x + 46, h - 124 - weightH * grow, 14, colors.green, 900);
    });
    text(ctx, "蓝色是原始分数，绿色是归一化后的注意力预算", w / 2, 92, 17, colors.muted, 800);
  });
}

function animateHeads() {
  const canvas = document.querySelector("#headsCanvas");
  if (!canvas) return;
  animate("heads", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const heads = [
      ["Head 1", "修饰关系", colors.green],
      ["Head 2", "主谓宾", colors.cyan],
      ["Head 3", "长距离依赖", colors.violet],
      ["Head 4", "局部搭配", colors.amber],
    ];
    heads.forEach(([name, desc, color], i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 92 + col * 410;
      const y = 92 + row * 175;
      roundRect(ctx, x, y, 330, 126, 10, "rgba(102,240,255,0.06)", color);
      text(ctx, name, x + 26, y + 32, 23, color, 950, "left");
      text(ctx, desc, x + 26, y + 66, 17, colors.text, 850, "left");
      ctx.strokeStyle = color;
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x + 26, y + 100);
      ctx.lineTo(x + 26 + 250 * ((Math.sin(t * 1.8 + i) + 1) / 2), y + 100);
      ctx.stroke();
    });
    roundRect(ctx, w / 2 - 160, h - 92, 320, 58, 8, "rgba(78,255,161,0.09)", "rgba(78,255,161,0.44)");
    text(ctx, "Concat + Wᵒ", w / 2, h - 63, 24, colors.green, 950);
    text(ctx, "多头并行之后拼接，再投影回模型维度", w / 2, 44, 22, colors.cyan, 950);
  });
}

function animatePosition() {
  const canvas = document.querySelector("#positionCanvas");
  if (!canvas) return;
  animate("position", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const left = 74;
    const right = w - 70;
    const top = 118;
    const bottom = h - 126;
    text(ctx, "不同频率的 sin/cos，为每个位置生成唯一指纹", w / 2, 42, 22, colors.cyan, 950);
    const waves = [
      [1, colors.green, "dim 0"],
      [2, colors.cyan, "dim 1"],
      [4, colors.violet, "dim 2"],
    ];
    waves.forEach(([freq, color, label], wi) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = left; x <= right; x += 3) {
        const p = (x - left) / (right - left);
        const y = top + (bottom - top) * (0.5 + Math.sin(p * Math.PI * 2 * freq + t + wi) * 0.22);
        if (x === left) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      text(ctx, label, right - 50, top + 25 + wi * 30, 15, color, 900, "left");
    });
    for (let i = 0; i < 8; i += 1) {
      const x = left + ((right - left) / 7) * i;
      roundRect(ctx, x - 24, bottom + 28, 48, 36, 4, "rgba(255,255,255,0.04)", "rgba(102,240,255,0.24)");
      text(ctx, String(i), x, bottom + 46, 17, colors.text, 900);
    }
    const mx = left + ((right - left) * ((t * 0.13) % 1));
    ctx.strokeStyle = colors.red;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(mx, top - 20);
    ctx.lineTo(mx, bottom + 78);
    ctx.stroke();
  });
}

function animateEncoder() {
  const canvas = document.querySelector("#encoderCanvas");
  if (!canvas) return;
  animate("encoder", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const blocks = [
      ["Multi-Head Attention", colors.cyan],
      ["Add + LayerNorm", colors.green],
      ["Feed Forward Network", colors.violet],
      ["Add + LayerNorm", colors.amber],
    ];
    const x = w / 2 - 205;
    blocks.forEach(([label, color], i) => {
      const y = 80 + i * 104;
      const active = (Math.floor(t * 1.2) % blocks.length) === i;
      roundRect(ctx, x, y, 410, 72, 8, active ? "rgba(102,240,255,0.13)" : "rgba(102,240,255,0.055)", active ? color : "rgba(102,240,255,0.22)");
      text(ctx, label, w / 2, y + 36, 22, active ? color : colors.text, 950);
      if (i < blocks.length - 1) {
        ctx.strokeStyle = colors.muted;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w / 2, y + 72);
        ctx.lineTo(w / 2, y + 104);
        ctx.stroke();
      }
    });
    text(ctx, "Encoder Block × N", w / 2, 42, 24, colors.cyan, 950);
    text(ctx, "Residual path keeps original signal flowing", w / 2, h - 36, 17, colors.muted, 800);
    ctx.strokeStyle = "rgba(78,255,161,0.42)";
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 8]);
    ctx.lineDashOffset = -t * 36;
    ctx.beginPath();
    ctx.moveTo(x - 44, 116);
    ctx.bezierCurveTo(x - 120, 210, x - 120, 310, x - 44, 428);
    ctx.stroke();
    ctx.setLineDash([]);
    text(ctx, "residual", x - 86, 272, 15, colors.green, 900);
  });
}

function animateDecoder() {
  const canvas = document.querySelector("#decoderCanvas");
  if (!canvas) return;
  animate("decoder", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    text(ctx, "Mask: future positions are blocked", w / 2, 42, 23, colors.cyan, 950);
    const n = 6;
    const cell = 46;
    const x0 = w / 2 - (n * cell) / 2 - 42;
    const y0 = 104;
    const row = Math.floor((t * 1.25) % n);
    for (let r = 0; r < n; r += 1) {
      for (let c = 0; c < n; c += 1) {
        const future = c > r;
        const x = x0 + c * cell;
        const y = y0 + r * cell;
        ctx.fillStyle = future ? "rgba(255,92,122,0.18)" : "rgba(78,255,161,0.14)";
        ctx.fillRect(x, y, cell - 4, cell - 4);
        ctx.strokeStyle = r === row ? colors.cyan : "rgba(102,240,255,0.18)";
        ctx.strokeRect(x, y, cell - 4, cell - 4);
        text(ctx, future ? "−∞" : "ok", x + cell / 2 - 2, y + cell / 2 - 2, 16, future ? colors.red : colors.green, 900);
      }
    }
    text(ctx, `step ${row + 1}`, x0 + n * cell + 82, y0 + 96, 20, colors.cyan, 950);
    text(ctx, "未来位置", x0 + n * cell + 82, y0 + 128, 16, colors.text, 850);
    text(ctx, "置为 −∞", x0 + n * cell + 82, y0 + 154, 16, colors.red, 900);
  });
}

function animateCross() {
  const canvas = document.querySelector("#crossCanvas");
  if (!canvas) return;
  animate("cross", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    text(ctx, "Cross-Attention: decoder queries encoder memory", w / 2, 42, 22, colors.cyan, 950);
    const leftX = 90;
    const rightX = w - 300;
    const y0 = 108;
    const enc = ["用", "毒", "毒蛇", "毒死"];
    const dec = ["<BOS>", "毒蛇", "不会"];
    enc.forEach((label, i) => {
      const y = y0 + i * 82;
      roundRect(ctx, leftX, y, 210, 48, 6, "rgba(74,140,255,0.08)", "rgba(74,140,255,0.32)");
      text(ctx, label, leftX + 105, y + 24, 17, colors.text, 850);
    });
    dec.forEach((label, i) => {
      const y = y0 + 38 + i * 78;
      roundRect(ctx, rightX, y, 220, 54, 6, "rgba(78,255,161,0.08)", "rgba(78,255,161,0.36)");
      text(ctx, label, rightX + 110, y + 27, 18, colors.text, 900);
    });
    text(ctx, "Encoder X_out", leftX + 105, y0 - 38, 18, colors.blue, 900);
    text(ctx, "Decoder state", rightX + 110, y0 + 8, 18, colors.green, 900);
    dec.forEach((_, di) => {
      enc.forEach((__, ei) => {
        const strength = 0.22 + 0.55 * ((Math.sin(t * 1.4 + di * 1.7 + ei) + 1) / 2);
        ctx.strokeStyle = `rgba(102,240,255,${strength})`;
        ctx.lineWidth = 1.5 + strength * 3;
        ctx.setLineDash([10, 10]);
        ctx.lineDashOffset = -t * 42;
        ctx.beginPath();
        ctx.moveTo(rightX, y0 + 65 + di * 78);
        ctx.bezierCurveTo(w / 2 + 80, y0 + 65 + di * 78, w / 2 - 80, y0 + 24 + ei * 82, leftX + 210, y0 + 24 + ei * 82);
        ctx.stroke();
      });
    });
    ctx.setLineDash([]);
  });
}

function animateOutput() {
  const canvas = document.querySelector("#outputCanvas");
  if (!canvas) return;
  animate("output", canvas, 560 / 940, (ctx, w, h, t) => {
    drawGrid(ctx, w, h);
    const labels = ["不会", "会", "毒死", "因为", "毒蛇"];
    const probs = [0.34, 0.11, 0.20, 0.18, 0.17];
    text(ctx, "Vocabulary distribution for next token", w / 2, 42, 23, colors.cyan, 950);
    labels.forEach((label, i) => {
      const y = 70 + i * 50;
      roundRect(ctx, 160, y, 600, 36, 6, "rgba(255,255,255,0.035)", "rgba(102,240,255,0.16)");
      const glow = 0.85 + Math.sin(t * 2 + i) * 0.15;
      ctx.fillStyle = i === 0 ? colors.green : colors.cyan;
      ctx.globalAlpha = 0.25 + probs[i] * glow;
      ctx.fillRect(160, y, 600 * probs[i] * 1.9, 36);
      ctx.globalAlpha = 1;
      text(ctx, label, 188, y + 18, 17, colors.text, 900, "left");
      text(ctx, `${Math.round(probs[i] * 100)}%`, 790, y + 18, 17, i === 0 ? colors.green : colors.text, 900, "right");
    });
    text(ctx, "argmax → 不会", w / 2, h - 34, 20, colors.green, 950);
  });
}

showSlide(0);
