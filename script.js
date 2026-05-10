const slides = window.COURSE_SLIDES || [];
const deck = document.querySelector("#deck");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const fullBtn = document.querySelector("#fullBtn");
const slideNo = document.querySelector("#slideNo");
const progressBar = document.querySelector("#progressBar");

const state = { index: 0 };

function normalizeSlides() {
  const byId = new Map(slides.map((slide) => [slide.id, slide]));
  const patch = (id, fields) => {
    const slide = byId.get(id);
    if (slide) Object.assign(slide, fields);
  };

  patch(1, {
    core: "从语言模型、图像生成、视频生成，到 AI 漫剧与文旅内容机会。",
    bullets: [
      "语言模型负责理解与组织文字",
      "图像模型负责角色、场景、风格资产",
      "视频模型负责镜头、动作与时间连续性",
    ],
  });
  patch(2, {
    bullets: [
      "内容生产正在从单点工具辅助走向多模型协同工作流",
      "模型能力越成熟，内容团队越需要理解怎么拆流程、怎么控质量",
      "真正的价值来自稳定产出、低成本试错和可复盘运营",
    ],
  });
  patch(3, {
    bullets: [
      "第一部分：AI 基础与语言模型，建立共同语言",
      "第二部分：AI 绘画与 AI 视频，理解视觉生成原理",
      "第三部分：AI 漫剧与文旅 IP，判断实际项目机会",
    ],
  });
  patch(4, {
    core: "AIGC 把创意策划、视觉资产、镜头生成、后期制作、分发复盘连接成可迭代流程。",
    bullets: [
      "创意策划：更快生成选题、人物关系和故事结构",
      "资产生产：更快形成角色、场景、分镜和视觉风格",
      "运营复盘：用数据判断内容是否带来到访、打卡和二次传播",
    ],
  });

  patch(5, {
    core: "先把 AI、模型、数据、参数这几个词讲成人话。",
    bullets: [
      "先认清 AI、模型、数据、参数这几个词",
      "再区分训练和推理",
      "最后建立后面三类生成模型共用的理解框架",
      "数学骨架：输出 y = f(x; θ)，x 是输入，θ 是训练后得到的参数。",
    ],
  });
  patch(6, {
    core: "模型可以理解为“被训练出来的经验系统”。",
    bullets: [
      "模型可以理解为“被训练出来的经验系统”：输入一个东西，它根据经验给出判断或生成",
      "模型本身是一套计算规则，训练完以后会把经验固定在参数里",
      "数学骨架：输出 y = f(x; θ)，x 是输入，θ 是训练后得到的参数。",
      "这一页只要记住：模型负责算，参数负责记忆。",
    ],
  });
  patch(7, {
    core: "数据就是模型见过的例子。",
    bullets: [
      "数据就是模型见过的例子。文本、图片、视频、声音都可以成为训练素材",
      "样本越多、覆盖越全，模型越容易学到稳定规律",
      "训练数据决定模型见识到什么，没见过的情况就容易出错",
      "数学骨架：训练样本越丰富，模型越容易逼近真实分布",
    ],
  });
  patch(8, {
    core: "参数是模型训练后留下的经验权重。",
    bullets: [
      "参数是模型训练后留下的经验权重。大量参数组合在一起，决定模型如何判断和生成",
      "参数不是素材库，而是训练中压缩出来的规律痕迹",
      "数学骨架：θ = {w₁, w₂, ..., wₙ}",
      "一个大模型的能力，很多时候就藏在这些数字怎么配合",
    ],
  });
  patch(9, {
    core: "训练像反复做题。",
    bullets: [
      "训练像反复做题：模型先答，再对答案，再改错，重复很多次",
      "核心动作就是：预测、计算误差、更新参数",
      "训练不是一次完成，而是很多轮迭代后慢慢稳定",
      "数学骨架：loss ↓，参数朝更优方向更新",
    ],
  });
  patch(10, {
    core: "推理是训练结束后的使用阶段。",
    bullets: [
      "推理是训练结束后的使用阶段：参数固定，用户输入问题，模型给出结果",
      "这时候模型不再改参数，只负责按经验做判断或生成",
      "训练阶段像学习，推理阶段像考试现场直接作答",
      "数学骨架：x + θ → y",
    ],
  });
  patch(11, {
    core: "传统 AI 更像判断题；生成式 AI 会补全文本、生成图片、生成视频。",
    bullets: [
      "传统 AI 更像判断题；生成式 AI 会补全文本、生成图片、生成视频",
      "生成式模型不只会分类，还会继续往下补全内容",
      "文字、图像、视频，本质上都可以走这条“继续生成”的路线",
      "数学骨架：continuation",
    ],
  });
  patch(12, {
    core: "因为它在海量样本中学到了关系。",
    bullets: [
      "因为它在海量样本中学到了关系：词和词的关系、图和词的关系、动作和时间的关系",
      "模型看起来像懂了，其实是学会了稳定的关系模式",
      "从表层字词，到结构关系，再到任务格式，都会被压进参数",
      "数学骨架：pattern layers",
    ],
  });
  patch(13, {
    core: "先把输入变成数字表示，再计算关系，最后生成新的内容。",
    bullets: [
      "先把输入变成数字表示，再计算关系，最后生成新的内容。文本、图像、视频都绕不开这三步",
      "表示、关系、生成，是后面所有章节共用的一条主线",
      "不同模态只是输入形式不同，底层链路非常像",
      "数学骨架：表示 → 关系 → 生成",
    ],
  });
  patch(14, {
    core: "AI 使用训练好的经验，把输入转成可计算的表示，再一步步生成输出。",
    bullets: [
      "AI 使用训练好的经验，把输入转成可计算的表示，再一步步生成输出",
      "这一章先把最基本的底层词讲清楚，后面三章就不会散",
      "下一章开始进入语言模型，先看 token 和上下文",
      "数学骨架：AI = 经验函数",
    ],
  });

  patch(15, {
    core: "一句话要靠上下文理解。",
    bullets: [
      "一句话要靠上下文理解。同一个词换了位置，角色和含义都会变",
      "语言模型的第一件事，不是背词，而是先看上下文",
      "中文里一个字能承担多个角色，所以模型必须看前后关系",
      "数学骨架：上下文决定含义",
    ],
  });
  patch(16, {
    core: "用这个例句说明：同一个“毒”，可能是手段、动作、属性、结果的一部分。",
    bullets: [
      "用这个例句说明：同一个“毒”，可能是手段、动作、属性、结果的一部分",
      "这句话里“毒”出现很多次，但每次角色都不一样",
      "中文的歧义感强，正好能把上下文理解讲清楚",
      "数学骨架：同字不同位，角色不同",
    ],
  });
  patch(17, {
    core: "人会自动看上下文。",
    bullets: [
      "人会自动看上下文：前后词、语法位置、常识关系共同决定含义",
      "人类理解语言，本来就不是逐字看，而是连着语境一起看",
      "这也是 LLM 需要 attention 的原因",
      "数学骨架：上下文 + 常识 + 语法",
    ],
  });
  patch(18, {
    core: "Token 是模型处理语言的基本单位。",
    bullets: [
      "Token 是模型处理语言的基本单位；有时是字，有时是词，有时是词的一部分",
      "先切成 token，模型才知道接下来该处理哪些最小单位",
      "这一步决定了后面所有计算的起点",
      "数学骨架：text → token",
    ],
  });
  patch(19, {
    core: "模型不能直接理解文字，需要把 token 变成数字向量。",
    bullets: [
      "模型不能直接理解文字，需要把 token 变成数字向量",
      "文字是给人看的，向量才是给模型算的",
      "Embedding 做的事情，就是把字词映射到可计算坐标里",
      "数学骨架：token → vector",
    ],
  });
  patch(20, {
    core: "相似用法在向量空间里更接近。",
    bullets: [
      "相似用法在向量空间里更接近，这种位置关系来自训练过程中的大量样本",
      "向量空间可以理解成一张语义地图",
      "相近的词、相近的用法，会在这张图上靠近",
      "数学骨架：semantic map",
    ],
  });
  patch(21, {
    core: "模型理解一个词时，会给不同上下文分配不同权重。",
    bullets: [
      "模型理解一个词时，会给不同上下文分配不同权重，重要信息读得更重",
      "注意力的本质，就是给有限的阅读预算做分配",
      "权重高的位置，多看一点；权重低的位置，少看一点",
      "数学骨架：Attention(Q,K,V)",
    ],
  });
  patch(22, {
    core: "当前词像带着问题进图书馆，去匹配最有帮助的“书”。",
    bullets: [
      "当前词像带着问题进图书馆，去匹配最有帮助的“书”",
      "先找资料，再决定怎么理解当前词",
      "这个类比的重点，是“主动检索”而不是“平均阅读”",
      "数学骨架：score = q · k",
    ],
    visual: { type: "diagram", variant: "library_ask", caption: "当前词先带着问题去找最相关的线索" },
  });
  patch(23, {
    core: "重要信息多读，不重要信息少读。",
    bullets: [
      "重要信息多读，不重要信息少读；这就是注意力的直觉",
      "分数还不能直接用，必须先变成比例",
      "这一步就是把“谁更重要”变成“各占多少比例”",
      "数学骨架：scores → weights",
    ],
    visual: { type: "diagram", variant: "library_match", caption: "Q 和 K 匹配后，得到原始相关性分数" },
  });
  patch(24, {
    core: "它根据前文和上下文关系，预测下一个最合理的 token。",
    bullets: [
      "它根据前文和上下文关系，预测下一个最合理的 token",
      "LLM 本质上是在一小步一小步地续写",
      "写总结、回答问题、改写文本，都是同一种生成逻辑的不同任务形态",
      "数学骨架：next token",
    ],
  });
  patch(25, {
    core: "因为它不只学词，还学到了大量表达结构、知识关联和任务格式。",
    bullets: [
      "因为它不只学词，还学到了大量表达结构、知识关联和任务格式",
      "会总结、会问答，很多时候是因为它见过大量类似写法",
      "它学到的是任务模板和表达规律",
      "数学骨架：task formats",
    ],
  });
  patch(26, {
    core: "它可能编造、不知道最新事实、对复杂现实缺乏真实经验，所以需要校验和约束。",
    bullets: [
      "它可能编造、不知道最新事实、对复杂现实缺乏真实经验，所以需要校验和约束",
      "LLM 很强，但它不是事实数据库，也不是现实世界本身",
      "最新信息、专业判断、业务决策都不能只靠它单独完成",
      "数学骨架：needs verification",
    ],
  });
  patch(27, {
    core: "如果文字能变成向量，那么图片也能变成向量。",
    bullets: [
      "如果文字能变成向量，那么图片也能变成向量；下一章就看文字如何控制图像",
      "语言模型把文字这条路讲明白了，图像模型就能接上来",
      "下一章开始进入 AI 绘画，先看为什么它早期容易失控",
      "数学骨架：text → image",
    ],
  });

  const contentRefresh = {
    15: {
      bullets: [
        "语言模型先解决的不是“懂不懂”，而是“当前词该看谁”",
        "这页只抓三件事：token、向量、注意力",
        "下一页用中文歧义句，把上下文依赖讲清楚",
      ],
    },
    16: {
      bullets: [
        "同一个“毒”，在不同位置扮演不同角色",
        "模型看的是位置关系，不是单字解释",
        "这个例子正好说明：语义要靠上下文来定",
      ],
    },
    17: {
      bullets: [
        "人读句子时，会自动把语法、常识和语境一起拿来用",
        "我们不是逐字扫描，而是连着关系理解",
        "模型要学的，就是这种连续判断能力",
      ],
    },
    18: {
      bullets: [
        "Token 是模型处理语言的最小单位",
        "有时是字，有时是词，有时是词的一部分",
        "切分方式会直接影响后面的所有计算",
      ],
    },
    19: {
      bullets: [
        "文字先变成编号，再查出向量",
        "向量不是意思本身，而是可计算的语义坐标",
        "从这一刻开始，语言进入数学空间",
      ],
    },
    20: {
      bullets: [
        "相近的用法会被训练到相近的位置",
        "向量空间像一张语义地图，不是人工写出来的词典",
        "接下来还要把顺序信息补进去",
      ],
    },
    21: {
      bullets: [
        "注意力不是平均看全句，而是给不同位置分配不同权重",
        "当前词会优先参考和自己最相关的上下文",
        "这一步决定了模型到底在看谁",
      ],
    },
    22: {
      bullets: [
        "当前词像带着问题进图书馆",
        "先找最相关的线索，再决定理解路径",
        "Q 负责提问，K 负责被找到，V 负责提供内容",
      ],
    },
    23: {
      bullets: [
        "相关性分数要先经过 softmax 变成比例",
        "比例越高，那个位置被读得越多",
        "这一步把“谁更重要”变成可计算的权重",
      ],
    },
    24: {
      bullets: [
        "LLM 的输出方式很朴素：一次猜一个 token",
        "前一个词给线索，后一个词接着往下补",
        "总结、问答、改写，本质上都是连续预测",
      ],
    },
    25: {
      bullets: [
        "它不只学词，还学到大量任务格式",
        "会写总结，往往是因为见过很多总结模板",
        "能力来自结构迁移，不只是记忆词汇",
      ],
    },
    26: {
      bullets: [
        "LLM 会编造，也会不知道最新事实",
        "它擅长语言组织，不等于擅长现实校验",
        "关键场景里必须接资料、接规则、接人工判断",
      ],
    },
    27: {
      bullets: [
        "文字和图片都能映射到向量空间里",
        "一旦语义坐标接上，文本就能开始影响图像",
        "下一章进入图像生成",
      ],
    },
    28: {
      bullets: [
        "AI 绘画不是找图拼贴，而是从噪声里生成新画面",
        "早期问题主要是结构、手部和文字都不稳",
        "这章先看它为什么怪，再看它怎么变稳",
      ],
    },
    29: {
      layout: "deepdive",
      bullets: [
        "早期模型常常连主体都摆不稳",
        "手指、文字、边缘、形状都容易漂",
        "这些问题说明它还没有真正学会全局结构",
      ],
    },
    30: {
      layout: "deepdive",
      bullets: [
        "一张图要同时满足主体、背景、构图、风格、文字",
        "约束越多，模型越容易在局部偷懒",
        "所以图像生成的关键一直是全局控制",
      ],
    },
    31: {
      bullets: [
        "扩散模型的核心是两个方向：加噪和去噪",
        "训练时学会还原噪声，生成时从噪声慢慢还原图像",
        "这比直接画出来更稳定",
      ],
    },
    32: {
      bullets: [
        "生成时先从随机噪声开始",
        "每一步只修一点，直到画面和提示词靠近",
        "这也是 diffusion gif 最直观的地方",
      ],
    },
    33: {
      bullets: [
        "U-Net 的作用像修复器",
        "先看整体，再补细节，再把中间结果整合回来",
        "所以它特别适合一步步去噪",
      ],
    },
    34: {
      bullets: [
        "提示词不是命令书，而是方向盘",
        "它会影响生成朝哪个语义方向收敛",
        "同一句提示词，不同权重会得到完全不同的结果",
      ],
    },
    35: {
      bullets: [
        "文字和图像要先站在同一套语义坐标里",
        "CLIP 这类模型做的就是把文字翻译成图像能懂的约束",
        "对齐越好，提示词就越听话",
      ],
    },
    36: {
      bullets: [
        "多模态理解不是装饰，而是控制力",
        "它让模型先读懂“你想要什么”，再开始画",
        "这样复杂需求才有机会被正确执行",
      ],
    },
    37: {
      layout: "deepdive",
      bullets: [
        "提示词不听话，通常不是一句话写得不够长",
        "更常见的是语义、布局和数据分布冲突",
        "模型先天没学会的关系，光靠加字很难补上",
      ],
    },
    38: {
      bullets: [
        "更强的多模态理解，让复杂描述变得可执行",
        "模型能把主体、动作、风格、位置拆成更明确的约束",
        "这也是文本控制图像越来越稳的原因",
      ],
    },
    39: {
      layout: "deepdive",
      bullets: [
        "布局乱，本质上是全局关系没锁住",
        "主体、背景、文字、视线一旦打架，画面就散",
        "所以这页重点是结构先于细节",
      ],
    },
    40: {
      bullets: [
        "全局注意力让不同区域互相知道彼此存在",
        "画面布局不再只看眼前一小块",
        "这就是 DiT 类方法能稳住结构的原因",
      ],
    },
    41: {
      layout: "deepdive",
      bullets: [
        "高质量标注会告诉模型这张图到底有什么",
        "主体、位置、风格、关系越细，模型越容易学稳",
        "标注本质上是在给模型建教材",
      ],
    },
    42: {
      bullets: [
        "自动标注把图片变成更细的说明书",
        "原来一张图只有一句描述，现在可以变成一整段结构化信息",
        "训练材料越细，模型越可控",
      ],
    },
    43: {
      layout: "deepdive",
      bullets: [
        "图中文字最难，因为它同时要求笔画、位置和语义都对",
        "一笔错了，就不像字",
        "所以这块一直是生成式模型的硬骨头",
      ],
    },
    44: {
      bullets: [
        "解决文字问题，不能只靠随机生成",
        "更明确的位置、版式和模板约束更有效",
        "让模型先知道字该站哪儿，再谈写得像不像",
      ],
    },
    45: {
      bullets: [
        "局部重绘的价值是只改需要改的地方",
        "不用整张重来，效率和稳定性都更好",
        "这也是实际工作流里最常用的修图方式之一",
      ],
    },
    46: {
      layout: "deepdive",
      bullets: [
        "语义分割先解决哪里该改的问题",
        "先找到主体边界，再决定修改范围",
        "这样才能减少白边和光影不一致",
      ],
    },
    47: {
      bullets: [
        "在潜空间里改图，往往比在像素里直接改更自然",
        "因为它动的是更抽象的语义层",
        "结构保住了，风格就更容易平滑变化",
      ],
    },
    48: {
      bullets: [
        "AI 绘画真正进入工作流，是从概念、角色、场景一路接到交付",
        "它不再只是出图玩具，而是前期提案和资产生产工具",
        "流程化之后，产出才可复用",
      ],
    },
    49: {
      bullets: [
        "适合做概念图、海报草图、角色探索和分镜",
        "这些任务更看重速度、方向和风格探索",
        "它特别适合前期试错",
      ],
    },
    50: {
      layout: "deepdive",
      bullets: [
        "不适合直接交付的，是强版权、强准确和强合规场景",
        "品牌物料和正式商业稿件还是要人工复核",
        "AI 在这里更多是提速，不是替代审稿",
      ],
    },
    51: {
      bullets: [
        "这章真正的进步，不是更炫，而是更稳",
        "语义理解、布局控制、局部修改都开始可用",
        "到了这里，AI 绘画才算从演示走向生产",
      ],
    },
    53: {
      layout: "deepdive",
      bullets: [
        "视频比图片难，因为它多了时间维度",
        "同一个人、同一件衣服、同一盏灯都要持续一致",
        "这一章先看为什么视频更容易崩",
      ],
    },
    54: {
      bullets: [
        "视频更像一块宽、高、时间一起存在的时空块",
        "不是一串独立图片，而是一个整体对象",
        "这就是为什么 GIF 能帮人一下看懂",
      ],
    },
    55: {
      layout: "deepdive",
      visual: { type: "diagram", variant: "spacetime_cube", caption: "三维时空块：宽、高、时间必须一起建模" },
      bullets: [
        "模型要同时看当前帧和前后帧",
        "只看单帧，运动就容易断",
        "把时间也纳入计算，才会有连续感",
      ],
    },
    56: {
      layout: "deepdive",
      bullets: [
        "视频 token 是把时空切成可计算的小块",
        "每个小块既有位置，也有时间",
        "这样模型才能开始处理视频",
      ],
    },
    57: {
      bullets: [
        "跨帧注意力的作用，是让前后画面互相记住彼此",
        "人物、衣服、场景不能每一帧都重置",
        "这一页是视频稳定性的核心",
      ],
    },
    58: {
      layout: "deepdive",
      bullets: [
        "帧间一致性决定视频是不是像同一段内容",
        "脸、衣服、背景、光线都要沿时间延续",
        "只要其中一个漂了，观感就会崩",
      ],
    },
    59: {
      bullets: [
        "参考图是最直接的控制信号之一",
        "它能先锁角色、风格和场景",
        "比纯文字更容易把结果拉稳",
      ],
    },
    60: {
      layout: "deepdive",
      bullets: [
        "参考图的价值是锁定身份，不让人物每段都变样",
        "角色长相、服装和风格都能被固定住",
        "这是做系列内容时特别重要的一步",
      ],
    },
    61: {
      layout: "deepdive",
      bullets: [
        "首尾帧控制就是给模型一个明确起点和终点",
        "中间动作靠它去补过渡",
        "比完全自由发挥更容易得到可用结果",
      ],
    },
    62: {
      layout: "deepdive",
      bullets: [
        "姿态控制解决的是怎么动，而不只是画什么",
        "骨架、轨迹和镜头参数都可以进入约束",
        "这页已经开始接近导演思维了",
      ],
    },
    63: {
      layout: "deepdive",
      bullets: [
        "物理感难，是因为模型只看数据，不是真的懂世界",
        "重力、惯性、碰撞、接触都要连续",
        "少一个条件，动作就会假",
      ],
    },
    64: {
      layout: "deepdive",
      bullets: [
        "物理一致性的思路，是把运动约束写进训练目标",
        "让轨迹、接触和世界规则一起优化",
        "这样视频才不会一动就穿帮",
      ],
    },
    65: {
      layout: "deepdive",
      visual: { type: "gif", src: "assets/gifs_cropped/control_clip.gif", caption: "动态示意：镜头与动作控制让视频更可导演" },
      bullets: [
        "镜头控制不是简单平移，而是主体、背景和透视一起变化",
        "推、拉、摇、移、环绕每一个都很难",
        "这就是视频生成真正高级的地方",
      ],
    },
    66: {
      layout: "deepdive",
      bullets: [
        "长视频的难点，是时间越长越容易记不住",
        "角色、场景和事件都会逐步漂移",
        "所以长视频通常要分段做",
      ],
    },
    67: {
      bullets: [
        "分段生成要靠上一段最后的状态来接力",
        "角色参考和场景参考必须继续沿用",
        "这样才能把长内容串起来",
      ],
    },
    68: {
      layout: "deepdive",
      bullets: [
        "音画同步是短剧能不能看的关键",
        "台词、口型、动作和情绪要对齐",
        "只看画面不够，声音也要跟上",
      ],
    },
    69: {
      layout: "deepdive",
      bullets: [
        "原生多模态视频的方向，是画面和声音一起建模",
        "不是先出画面，再单独补配音",
        "这会让内容生产更完整",
      ],
    },
    70: {
      layout: "deepdive",
      bullets: [
        "视频模型最适合的，是动态分镜、概念短片和广告预演",
        "这些场景更需要快速试版",
        "先让创意跑起来，比一次做死更重要",
      ],
    },
    71: {
      layout: "deepdive",
      bullets: [
        "现在的视频模型还不适合长篇叙事和复杂多人互动",
        "强 IP 商用也要格外谨慎",
        "技术能做不代表业务能直接上",
      ],
    },
  };

  Object.entries(contentRefresh).forEach(([id, fields]) => patch(Number(id), fields));

  const mediaRefresh = {
    22: {
      layout: "media",
      visual: {
        type: "carousel",
        caption: "图书馆类比：当前词先检索，再决定重点读哪些线索",
        items: [
          { type: "diagram", variant: "library_ask", label: "Query：带着问题找资料", maskSubtitles: false },
          { type: "image", src: "assets/frames_cropped/transformer_library.jpg", label: "课堂示意：语义检索" },
          { type: "diagram", variant: "library_match", label: "Key：每本书的索引标签", maskSubtitles: false },
        ],
      },
    },
    23: {
      layout: "media",
      visual: {
        type: "carousel",
        caption: "注意力权重：相关性分数会变成阅读比例",
        items: [
          { type: "diagram", variant: "library_match", label: "score = q · k", maskSubtitles: false },
          { type: "image", src: "assets/frames_cropped/transformer_qkv.jpg", label: "Q / K / V 直觉" },
          { type: "diagram", variant: "library_read", label: "softmax：分数变比例", maskSubtitles: false },
        ],
      },
    },
    28: {
      visual: {
        type: "carousel",
        caption: "早期生成图像的问题：结构、文字、手部细节都容易失稳",
        items: [
          { type: "image", src: "assets/frames_cropped/image_bad_old.jpg", label: "早期生成效果" },
          { type: "diagram", variant: "image_artifacts", label: "错误类型拆解", maskSubtitles: false },
          { type: "diagram", variant: "image_constraints", label: "图像约束太多", maskSubtitles: false },
        ],
      },
    },
    32: {
      visual: {
        type: "carousel",
        caption: "扩散生成：从噪声出发，逐步靠近提示词对应的画面",
        items: [
          { type: "gif", src: "assets/gifs_cropped/diffusion_clip.gif", label: "去噪过程" },
          { type: "diagram", variant: "diffusion_formula", label: "公式骨架", maskSubtitles: false },
          { type: "diagram", variant: "noise_to_image", label: "逐步收敛", maskSubtitles: false },
        ],
      },
    },
    36: {
      layout: "media",
      visual: {
        type: "carousel",
        caption: "多模态对齐：文字意图进入图像生成过程",
        items: [
          { type: "image", src: "assets/frames_cropped/image_diffusion.jpg", label: "文字到图像" },
          { type: "diagram", variant: "clip", label: "共享语义空间", maskSubtitles: false },
          { type: "diagram", variant: "prompt_guidance", label: "提示词权重", maskSubtitles: false },
        ],
      },
    },
    39: {
      visual: {
        type: "carousel",
        caption: "布局控制：主体、背景、文字区和视线关系要同时成立",
        items: [
          { type: "image", src: "assets/frames_cropped/image_layout.jpg", label: "布局示意" },
          { type: "diagram", variant: "layout_blocks", label: "版式结构", maskSubtitles: false },
          { type: "diagram", variant: "image_constraints", label: "全局约束", maskSubtitles: false },
        ],
      },
    },
    40: {
      visual: {
        type: "carousel",
        caption: "全局布局能力让模型同时考虑远处区域和局部细节",
        items: [
          { type: "gif", src: "assets/gifs_cropped/layout_clip.gif", label: "布局能力演示" },
          { type: "diagram", variant: "layout_blocks", label: "主体与留白", maskSubtitles: false },
          { type: "diagram", variant: "dataset_tags", label: "训练标注颗粒度", maskSubtitles: false },
        ],
      },
    },
    45: {
      layout: "media",
      visual: {
        type: "carousel",
        caption: "局部重绘：只锁定需要改的区域，保留整体一致性",
        items: [
          { type: "image", src: "assets/frames_cropped/image_inpaint.jpg", label: "局部编辑" },
          { type: "diagram", variant: "segmentation_mask", label: "先找修改范围", maskSubtitles: false },
          { type: "diagram", variant: "latent_edit", label: "潜空间微调", maskSubtitles: false },
        ],
      },
    },
    52: {
      visual: {
        type: "carousel",
        caption: "AI 视频的核心难点：时间越长，越容易出现闪烁、变形和漂移",
        items: [
          { type: "image", src: "assets/frames_cropped/video_broken.jpg", label: "早期视频问题" },
          { type: "diagram", variant: "temporal_break", label: "逐帧断裂", maskSubtitles: false },
          { type: "diagram", variant: "spacetime_cube", label: "时间维度进入模型", maskSubtitles: false },
        ],
      },
    },
    54: {
      visual: {
        type: "carousel",
        caption: "视频是一块时空整体：宽、高、时间一起决定内容是否连续",
        items: [
          { type: "gif", src: "assets/gifs_cropped/spacetime_clip.gif", label: "时空块演示" },
          { type: "diagram", variant: "spacetime_cube", label: "W × H × T", maskSubtitles: false },
          { type: "diagram", variant: "video_tokens", label: "视频 token", maskSubtitles: false },
        ],
      },
    },
    59: {
      visual: {
        type: "carousel",
        caption: "参考图控制：先锁定角色、场景和风格，再让视频沿时间生成",
        items: [
          { type: "image", src: "assets/frames_cropped/video_control.jpg", label: "参考图控制" },
          { type: "diagram", variant: "reference_lock", label: "角色身份证", maskSubtitles: false },
          { type: "diagram", variant: "keyframe_bridge", label: "关键帧约束", maskSubtitles: false },
        ],
      },
    },
    65: {
      visual: {
        type: "carousel",
        caption: "镜头控制：主体、背景、透视和动作必须一起变化",
        items: [
          { type: "gif", src: "assets/gifs_cropped/control_clip.gif", label: "镜头与动作控制" },
          { type: "diagram", variant: "pose_skeleton", label: "姿态骨架", maskSubtitles: false },
          { type: "diagram", variant: "camera_path", label: "镜头路径", maskSubtitles: false },
        ],
      },
    },
    67: {
      visual: {
        type: "carousel",
        caption: "长视频生成需要分段接力，并让角色、场景和事件持续一致",
        items: [
          { type: "image", src: "assets/frames_cropped/video_long.jpg", label: "长视频分段" },
          { type: "diagram", variant: "long_context", label: "长上下文记忆", maskSubtitles: false },
          { type: "diagram", variant: "consistency_tracks", label: "一致性轨道", maskSubtitles: false },
        ],
      },
    },
  };

  Object.entries(mediaRefresh).forEach(([id, fields]) => patch(Number(id), fields));

  return slides;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDeck() {
  normalizeSlides();
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
    opening: ["先把课程主线讲清楚", "再看三类生成模型怎么工作", "最后落到文旅内容的实际机会"],
    basics: ["先认清 AI、模型、数据、参数这几个词", "再区分训练和推理", "最后建立后面三类生成模型共用的理解框架"],
    llm: ["从中文歧义案例进入语言理解", "拆开 Token、向量、上下文关系", "再用图书馆类比看懂注意力怎么工作"],
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
  if (visual.type === "image" || visual.type === "gif" || visual.type === "carousel") {
    const items = (visual.items && visual.items.length ? visual.items : [visual]).slice(0, 4);
    const countClass = `count-${Math.max(1, items.length)}`;
    const frames = items.map((item, i) => {
      const itemType = item.type || visual.type;
      const label = item.label ? `<span class="media-frame-label">${escapeHtml(item.label)}</span>` : "";
      const maskClass = item.maskSubtitles === false ? "" : " has-subtitle-mask";
      const singleClass = items.length === 1 ? " is-single" : "";
      const body =
        itemType === "diagram"
          ? `<div class="media-diagram">${renderDiagram(item.variant || visual.variant || "network", slide)}</div>`
          : `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || item.caption || visual.caption || slide.title)}" />`;
      return `<div class="media-frame${maskClass}${singleClass}" style="--i:${i}">${body}${label}</div>`;
    }).join("");
    return `
      <div class="visual media-fit">
        <div class="media-carousel ${countClass}" style="--count:${items.length}">
          ${frames}
        </div>
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
      ${renderInsight(slide)}
      <div class="caption">${escapeHtml(visual.caption || "")}</div>
    </div>
  `;
}

function renderInsight(slide) {
  const detail = insightFor(slide);
  if (!detail) return "";
  const formula = detail.formula ? `<div class="insight-formula">${escapeHtml(detail.formula)}</div>` : "";
  return `
    <div class="insight-strip">
      <div>
        <b>${escapeHtml(detail.title)}</b>
        <span>${escapeHtml(detail.text)}</span>
      </div>
      ${formula}
    </div>
  `;
}

function insightFor(slide) {
  const custom = {
    5: { title: "AI 基础", text: "AI 先学规律，再把规律压进参数，使用时按输入快速计算输出。", formula: "y = f(x; θ)" },
    6: { title: "模型", text: "模型是把输入和参数连起来的计算器。", formula: "输入 + 参数 → 输出" },
    7: { title: "数据", text: "数据就是模型看过的例子，样本越丰富，规律越稳。", formula: "文本 / 图像 / 视频 / 声音" },
    8: { title: "参数", text: "参数不是资料库，而是训练后留下的经验权重。", formula: "θ = {w₁, w₂, ..., wₙ}" },
    9: { title: "训练", text: "训练的本质是不断预测、对答案、改错。", formula: "loss ↓" },
    10: { title: "推理", text: "推理阶段参数固定，模型只负责根据新输入给结果。", formula: "x + θ → y" },
    11: { title: "生成式 AI", text: "生成式模型不是只做判断，还会补全文本、绘图和生成视频。", formula: "continuation" },
    12: { title: "模式学习", text: "模型像懂了，是因为它学会了大量关系模式。", formula: "pattern layers" },
    13: { title: "共通链路", text: "文本、图像、视频都走同一条链路：表示、关系、生成。", formula: "表示 → 关系 → 生成" },
    14: { title: "本章收束", text: "先记住一件事：AI 是把经验变成参数，再把参数变成输出。", formula: "AI = 经验函数" },
    15: { title: "语言模型", text: "语言模型先理解上下文，再判断当前词最该参考谁。", formula: "context matters" },
    16: { title: "歧义案例", text: "同一个字在不同位置，可能是手段、属性、动作或结果的一部分。", formula: "token roles" },
    17: { title: "上下文理解", text: "人类读句子，会自动把语法、常识和上下文一起拿来用。", formula: "sentence + context" },
    18: { title: "Token", text: "Token 是模型处理语言的最小可计算单位。", formula: "text → token" },
    19: { title: "Embedding", text: "文字先变成数字向量，模型才能继续算。", formula: "token → vector" },
    20: { title: "向量空间", text: "相似用法会在向量空间里靠得更近。", formula: "semantic map" },
    21: { title: "注意力", text: "注意力就是给不同上下文分配不同权重。", formula: "Attention(Q,K,V)" },
    22: { title: "图书馆类比", text: "当前词先带着问题去找资料，先看谁最相关。", formula: "score = q · k" },
    23: { title: "分数比较", text: "匹配分数越高，模型越应该多看那个位置。", formula: "scores → weights" },
    24: { title: "归一化", text: "softmax 把分数变成比例，总和固定为 1。", formula: "softmax(scores)" },
    25: { title: "加权汇总", text: "权重乘上 Value 再求和，就得到新的语义表示。", formula: "z = Σ a·v" },
    26: { title: "Self-Attention", text: "一句话内部每个 token 都在看别的 token。", formula: "softmax(QKᵀ/√d)V" },
    27: { title: "转场", text: "文字能变成向量，图像也能变成向量。下一章看文字如何控制图像。", formula: "text → image" },
  };
  if (custom[slide.id]) return custom[slide.id];
  if (slide.sectionKey === "basics") {
    return { title: "AI 基础", text: "AI 先学规律，再把规律压进参数，使用时按输入快速计算输出。", formula: "y = f(x; θ)" };
  }
  if (slide.sectionKey === "llm") {
    return { title: "语言模型", text: "一句话先切成 token，再变成向量，最后通过注意力判断上下文关系。", formula: "softmax(QKᵀ/√d)V" };
  }
  if (slide.sectionKey === "image") {
    return { title: "图像生成", text: "扩散模型先学会加噪，再学会反向去噪，生成时从噪声逐步还原画面。", formula: "xₜ = √αₜx₀ + √(1-αₜ)ε" };
  }
  if (slide.sectionKey === "video") {
    return { title: "视频生成", text: "视频要同时处理空间和时间，角色、动作、光线都要沿时间连续。", formula: "token = patch(x, y, t)" };
  }
  if (slide.sectionKey === "comic") {
    return { title: "生产线", text: "AI 漫剧把不同模型放进不同环节，用流程稳定性换产能。", formula: "剧本 → 分镜 → 视频 → 后期" };
  }
  if (slide.sectionKey === "universal") {
    return { title: "落地判断", text: "文旅 AIGC 项目要同时看内容吸引力、线下转化和合规运营。", formula: "价值 = 内容 × 场景 × 运营" };
  }
  return null;
}

function renderDiagram(variant, slide) {
  const diagrams = {
    market_shift: splitCompare([
      ["过去", "文案 / 图片 / 剪辑各自分散"],
      ["现在", "文本、图像、视频模型进入同一条生产线"],
    ]),
    course_map: courseMap(),
    industry_chain: layerStack([
      ["创意策划", "选题 / 人设 / 剧情"],
      ["视觉资产", "角色 / 场景 / 风格"],
      ["镜头生成", "分镜 / 动作 / 转场"],
      ["后期制作", "配音 / 字幕 / 剪辑"],
      ["分发复盘", "发布 / 数据 / 迭代"],
    ]),
    course_stack: layerStack([
      ["数据", "文本 / 图像 / 视频 / 声音"],
      ["模型", "把样本规律压进参数"],
      ["生成", "按条件输出新内容"],
      ["控制", "让结果可导演、可修改"],
      ["工作流", "进入真实内容生产"],
    ]),
    basic_loop: arrowRow([
      ["例子", "文本 / 图片 / 视频"],
      ["训练", "反复预测与改错"],
      ["参数", "沉淀成模型经验"],
    ]),
    model_box: formulaPanel("模型函数", "输出 = f(输入, 参数)", [
      ["输入", "问题 / 图片 / 指令"],
      ["参数", "训练得到的经验权重"],
      ["输出", "判断 / 文本 / 图像 / 视频"],
    ]),
    data_evidence_wall: dataEvidenceWall(),
    data_modalities: orbitDiagram("训练数据", ["文本", "图片", "视频", "声音", "标签", "反馈"]),
    parameter_deepdive: parameterDeepDive(),
    parameter_matrix: matrixPanel("参数矩阵", "wᵢⱼ 决定信息传递强弱"),
    training_loop: loopPanel([
      ["预测", "模型先给答案"],
      ["误差", "和目标答案比较"],
      ["更新", "调整参数权重"],
      ["重复", "很多轮之后能力稳定"],
    ]),
    inference_path: arrowRow([
      ["用户输入", "提示词 / 问题"],
      ["固定参数", "不再重新训练"],
      ["生成结果", "文本 / 图像 / 视频"],
    ]),
    traditional_vs_generative: splitCompare([
      ["传统 AI", "判断 / 分类 / 打分"],
      ["生成式 AI", "续写 / 画图 / 做视频"],
    ]),
    pattern_layers: layerStack([
      ["表层", "字词、颜色、轮廓"],
      ["结构", "语法、布局、镜头"],
      ["关系", "因果、指代、角色"],
      ["任务", "总结、问答、生成"],
    ]),
    aigc_three_steps: arrowRow([
      ["表示", "转成向量"],
      ["关系", "计算谁影响谁"],
      ["生成", "输出新内容"],
    ]),
    tokens: arrowRow([
      ["文字", "用毒毒毒蛇"],
      ["Token", "切成可处理小块"],
      ["向量", "变成语义坐标"],
    ]),
    context_parse: weightedWords(["用", "毒", "毒蛇", "毒蛇", "会不会", "被毒死"], [0.35, 0.72, 0.95, 0.85, 0.56, 0.9], "上下文共同决定含义"),
    tokenization_anim: tokenStrip(["用", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒死", "？"]),
    embedding_numbers: formulaPanel("Embedding", "token → [0.12, -0.48, 0.77, ...]", [
      ["文字", "人能读"],
      ["向量", "模型能算"],
      ["维度", "保存语义特征"],
    ]),
    vector_space: coordinateMap([
      ["毒蛇", 70, 28],
      ["蛇", 58, 38],
      ["有毒", 77, 48],
      ["毒死", 38, 72],
      ["工具", 24, 30],
    ]),
    attention_weights: weightedWords(["当前词", "前文", "毒蛇", "会不会", "被毒死"], [0.38, 0.42, 0.9, 0.68, 0.95], "权重越高，模型读得越重"),
    next_token: generationPanel(["游客", "进入", "魔法", "世界", "后"], ["会", "遇到", "完成", "发现"]),
    task_formats: layerStack([
      ["语料", "大量文本结构"],
      ["格式", "问答 / 总结 / 改写"],
      ["迁移", "把学到的结构用到新任务"],
    ]),
    llm_limits: riskPanel([
      ["事实幻觉", "需要资料校验"],
      ["时效缺口", "需要最新信息"],
      ["现实经验", "需要人类判断"],
    ]),
    text_image_bridge: splitCompare([
      ["文本向量", "一句提示词的语义坐标"],
      ["图像向量", "画面内容的语义坐标"],
    ]),
    attention: `
      <div class="diagram">
        <div class="big-node"><b>注意力</b><span>先回答一个问题：当前词应该重点参考谁？</span><div class="formula-lite">关注度高 → 多读<br />关注度低 → 少读</div></div>
      </div>
    `,
    library_ask: `
      <div class="diagram">
        <div class="big-node" style="width:min(92%,760px)">
          <b style="font-size:38px">当前词先带着问题进图书馆</b>
          <span>先找最相关的线索，再决定怎么理解整句话</span>
          <div class="diagram-grid" style="margin-top:18px">
            <div class="node"><b>Query</b><span>当前词提出的问题</span></div>
            <div class="node"><b>问题</b><span>这句话里谁最值得参考</span></div>
            <div class="node"><b>方向</b><span>先找资料，再做判断</span></div>
          </div>
        </div>
      </div>
    `,
    library_match: `
      <div class="diagram">
        <div class="formula-card" style="width:min(100%,780px)">
          <b>Q 和 K 先做匹配</b>
          <div class="formula-lite">score(q, k<sub>j</sub>) = q · k<sub>j</sub></div>
          <div class="mini-grid">
            <div><strong>Q</strong><span>当前词的检索意图</span></div>
            <div><strong>K</strong><span>每个位置的标签</span></div>
            <div><strong>score</strong><span>相关性分数</span></div>
          </div>
        </div>
      </div>
    `,
    library_read: `
      <div class="diagram">
        <div class="split-compare" style="width:min(100%,780px)">
          <div><b>原始分数</b><span>还不能直接用，大小没有统一标准。</span></div>
          <div><b>Softmax 后</b><span>分数变成比例，注意力预算被分配出去。</span></div>
        </div>
        <div class="formula-lite" style="margin-top:26px">a<sub>ij</sub> = exp(s<sub>ij</sub>) / Σ<sub>m</sub> exp(s<sub>im</sub>)</div>
      </div>
    `,
    library_merge: `
      <div class="diagram">
        <div class="arrow-row">
          <div class="node"><b>权重</b><span>a<sub>ij</sub></span></div>
          <div class="arrow">×</div>
          <div class="node"><b>Value</b><span>v<sub>j</sub></span></div>
          <div class="arrow">→</div>
          <div class="node"><b>新表示</b><span>z<sub>i</sub></span></div>
        </div>
        <div class="formula-lite" style="margin-top:28px">z<sub>i</sub> = Σ<sub>j</sub> a<sub>ij</sub> v<sub>j</sub></div>
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
    image_artifacts: aiImageFailurePanel(),
    image_constraints: constraintRadar(["主体", "布局", "光影", "材质", "文字", "风格"]),
    noise_to_image: denoiseSteps(),
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
    prompt_guidance: formulaPanel("Classifier-Free Guidance", "x̂ = x_uncond + s · (x_text - x_uncond)", [
      ["s 太低", "不听提示词"],
      ["s 适中", "语义和画面平衡"],
      ["s 太高", "画面可能僵硬"],
    ]),
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
    prompt_mismatch: splitCompare([
      ["提示词意图", "红色飞船 / 雪地 / 电影感"],
      ["模型先验", "训练集中更常见的组合"],
    ]),
    multimodal_reasoning: arrowRow([
      ["读懂需求", "主体 / 动作 / 风格"],
      ["生成约束", "布局 / 色彩 / 细节"],
      ["画面输出", "更接近指令"],
    ]),
    layout_blocks: layoutCanvas(["主体", "背景", "文字区", "视线", "留白"]),
    dataset_tags: tagCloud(["夜景", "近景", "侧脸", "金属材质", "中文招牌", "低角度", "暖光", "雨天"]),
    auto_caption: arrowRow([
      ["图片", "无结构素材"],
      ["自动描述", "主体 / 风格 / 位置"],
      ["训练样本", "图文对应更细"],
    ]),
    text_fail: glyphBoard("AI"),
    glyph_grid: glyphBoard("字"),
    segmentation_mask: maskDiagram(),
    latent_edit: latentSlider(),
    image_workflow: layerStack([
      ["概念", "选方向"],
      ["角色", "统一形象"],
      ["场景", "确定风格"],
      ["编辑", "局部修正"],
      ["检查", "交付前校验"],
    ]),
    image_use_cases: cards(["概念图", "分镜", "角色探索", "视觉提案"]),
    image_delivery_risk: riskPanel([
      ["版权授权", "素材来源要清楚"],
      ["文字准确", "海报和标识需复核"],
      ["品牌一致", "风格不能漂移"],
    ]),
    spacetime: arrowRow([
      ["宽", "画面横向"],
      ["高", "画面纵向"],
      ["时间", "前后帧关系"],
    ]),
    temporal_break: frameStrip(["角色正常", "脸变形", "背景跳变", "手部消失"], true),
    spacetime_cube: cubeDiagram(),
    video_tokens: videoTokenCube(),
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
    consistency_tracks: consistencyPanel(),
    reference_lock: referenceLockPanel(),
    keyframe_bridge: frameStrip(["首帧", "运动过渡", "动作变化", "尾帧"], false),
    pose_skeleton: skeletonDiagram(),
    camera_path: cameraPath(),
    physics_fail: riskPanel([
      ["接触", "手没有真正拿住物体"],
      ["重力", "物体漂浮或下落异常"],
      ["惯性", "动作突然停顿"],
    ]),
    physics_loss: formulaPanel("物理一致性", "L = L_video + λ · L_motion", [
      ["轨迹", "运动连续"],
      ["接触", "关系稳定"],
      ["世界", "规则一致"],
    ]),
    long_context: timelineMemory(),
    audio_sync: audioWave(),
    native_video_model: orbitDiagram("原生视频模型", ["文字", "图像", "动作", "声音", "时间", "镜头"]),
    video_use_cases: cards(["动态分镜", "概念短片", "广告预演", "社媒短内容"]),
    video_limits: riskPanel([
      ["长篇叙事", "角色记忆难"],
      ["多人互动", "动作关系复杂"],
      ["强 IP 商用", "授权和审美门槛高"],
    ]),
    pipeline: arrowRow([
      ["剧本", "人物与冲突"],
      ["画面", "角色 / 分镜 / 场景"],
      ["视频", "镜头 / 配音 / 剪辑"],
    ]),
    comic_tool_chain: layerStack([
      ["LLM", "选题 / 剧本 / 分集"],
      ["图像模型", "角色 / 场景 / 分镜"],
      ["视频模型", "镜头 / 动作 / 转场"],
      ["后期工具", "配音 / 字幕 / 剪辑"],
    ]),
    story_map: storyMap(),
    character_bible: characterSheet(),
    storyboard_grid: storyboardGrid(),
    shot_motion: cameraPath(),
    audio_post: audioPost(),
    cost_time: splitCompare([
      ["传统试错", "周期长 / 人力重 / 成本高"],
      ["AI 辅助", "先低成本验证方向"],
    ]),
    risk_stack: riskPanel([
      ["IP 授权", "能不能用角色和场景"],
      ["内容合规", "能不能发布"],
      ["质量稳定", "能不能连续生产"],
    ]),
    tourism: arrowRow([
      ["内容种草", "短剧触达"],
      ["线下打卡", "场景体验"],
      ["二次传播", "UGC 与转化"],
    ]),
    conversion_funnel: funnel(["内容触达", "兴趣种草", "到访打卡", "消费转化", "二次传播"]),
    universal_assets: cards(["顶级 IP", "沉浸场景", "游客流量", "粉丝基础"]),
    topic_quadrants: quadrant(["魔法奇遇", "冒险探索", "英雄训练", "城市浪漫"]),
    magic_day: journey(["收到任务", "进入园区", "完成挑战", "获得纪念"]),
    dino_guardian: journey(["发现异常", "保护恐龙", "家庭协作", "温情收束"]),
    agent_training: journey(["入营", "训练", "任务", "结业"]),
    aigc_efficiency: splitCompare([
      ["传统制作", "大团队 / 长周期 / 高试错成本"],
      ["AI 辅助", "小样快测 / 快速复盘 / 低成本迭代"],
    ]),
    compliance_gate: layerStack([
      ["IP 授权", "能不能使用角色、场景和名称"],
      ["内容备案", "是否进入微短剧审核流程"],
      ["平台审核", "是否符合发布规则"],
      ["AI 标识", "生成内容是否需要说明"],
    ]),
    business_loop: arrowRow([
      ["市场", "短剧入口"],
      ["能力", "AI 降本提速"],
      ["落地", "IP 场景运营"],
    ]),
    operation_loop: loopPanel([
      ["选题", "找可传播故事"],
      ["制作", "多模型协作"],
      ["审核", "合规与品牌"],
      ["复盘", "数据反哺下一轮"],
    ]),
    four_checks: quadrant(["技术能做", "内容值得", "合规能过", "运营能持续"]),
    network: arrowRow([
      ["输入", slide.section],
      ["计算", "关系 / 约束 / 控制"],
      ["输出", slide.title],
    ]),
  };
  return diagrams[variant] || diagrams.network;
}

function layerStack(items) {
  return `<div class="diagram"><div class="layer-stack">${items.map(([k, v], i) => `<div class="layer" style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}</div></div>`;
}

function courseMap() {
  const items = [
    ["01", "AI 基础", "模型、数据、训练、推理"],
    ["02", "语言模型", "Token、向量、上下文"],
    ["03", "AI 绘画", "扩散、语义对齐、局部编辑"],
    ["04", "AI 视频", "时空一致、镜头控制"],
    ["05", "AI 漫剧", "剧本到成片的工作流"],
    ["06", "文旅 IP", "北京环球内容机会"],
  ];
  return `<div class="diagram"><div class="course-map">${items.map(([n, t, d], i) => `<div style="--i:${i}"><strong>${n}</strong><b>${escapeHtml(t)}</b><span>${escapeHtml(d)}</span></div>`).join("")}</div></div>`;
}

function formulaPanel(title, formula, items) {
  return `<div class="diagram"><div class="formula-card"><b>${escapeHtml(title)}</b><div class="formula-lite">${escapeHtml(formula)}</div><div class="mini-grid">${items.map(([k, v]) => `<div><strong>${escapeHtml(k)}</strong><span>${escapeHtml(v)}</span></div>`).join("")}</div></div></div>`;
}

function matrixPanel(title, subtitle) {
  const cells = Array.from({ length: 64 }, (_, i) => `<i style="--v:${(i * 37) % 100}"></i>`).join("");
  return `<div class="diagram"><div class="matrix-card"><b>${escapeHtml(title)}</b><span>${escapeHtml(subtitle)}</span><div class="matrix">${cells}</div></div></div>`;
}

function dataEvidenceWall() {
  const samples = [
    ["文本", "句子、网页、剧本、对白"],
    ["图像", "主体、背景、构图、风格"],
    ["视频", "动作、镜头、时间关系"],
    ["声音", "语音、音效、节奏"],
    ["标签", "分类、描述、边界"],
    ["反馈", "点击、偏好、人工评价"],
  ];
  return `
    <div class="diagram">
      <div class="data-wall">
        ${samples.map(([k, v], i) => `<div style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}
        <em>样本越丰富，模型越容易学到稳定规律</em>
      </div>
    </div>
  `;
}

function parameterDeepDive() {
  return `
    <div class="deep-panel">
      <div class="paper-note">
        <span>PAPER NOTE</span>
        <b>Scaling Laws for Neural Language Models</b>
        <p>论文关注模型规模、数据量、计算量与损失之间的幂律关系。课程里只取一个直觉：参数越多、数据越充分、训练越足，模型通常能学到更细的规律。</p>
      </div>
      <div class="param-board">
        <div class="formula-lite">y = f(x; θ)</div>
        <div class="formula-lite">θ = {w₁, w₂, ... , wₙ}</div>
        <div class="matrix mini">${Array.from({ length: 81 }, (_, i) => `<i style="--v:${(i * 29) % 100}"></i>`).join("")}</div>
      </div>
      <div class="takeaway-grid">
        <div><strong>参数是什么</strong><span>模型内部可以被训练改变的数字。</span></div>
        <div><strong>训练做什么</strong><span>通过误差反复调整这些数字。</span></div>
        <div><strong>能力从哪来</strong><span>大量权重组合形成复杂判断路径。</span></div>
      </div>
    </div>
  `;
}

function orbitDiagram(center, items) {
  return `<div class="diagram"><div class="orbit"><b>${escapeHtml(center)}</b>${items.map((item, i) => `<span style="--i:${i};--n:${items.length}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function loopPanel(items) {
  return `<div class="diagram"><div class="loop-panel">${items.map(([k, v], i) => `<div class="loop-step" style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}<em>↻</em></div></div>`;
}

function splitCompare(items) {
  return `<div class="diagram"><div class="split-compare">${items.map(([k, v]) => `<div><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}</div></div>`;
}

function weightedWords(words, weights, caption) {
  return `<div class="diagram"><div class="word-weights">${words.map((word, i) => `<span style="--w:${weights[i]}">${escapeHtml(word)}</span>`).join("")}<p>${escapeHtml(caption)}</p></div></div>`;
}

function tokenStrip(tokens) {
  return `<div class="diagram"><div class="token-strip">${tokens.map((token, i) => `<span style="--i:${i}">${escapeHtml(token)}</span>`).join("")}</div></div>`;
}

function coordinateMap(points) {
  return `<div class="diagram"><div class="coord-map">${points.map(([label, x, y]) => `<span style="left:${x}%;top:${y}%">${escapeHtml(label)}</span>`).join("")}<i class="x-axis"></i><i class="y-axis"></i></div></div>`;
}

function generationPanel(prefix, candidates) {
  return `<div class="diagram"><div class="generation"><p>${prefix.map(escapeHtml).join(" ")}</p><div>${candidates.map((c, i) => `<span style="--i:${i}">${escapeHtml(c)}</span>`).join("")}</div></div></div>`;
}

function riskPanel(items) {
  return `<div class="diagram"><div class="risk-panel">${items.map(([k, v]) => `<div><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}</div></div>`;
}

function artifactGrid(items) {
  return `<div class="diagram"><div class="artifact-grid">${items.map((item, i) => `<div style="--i:${i}"><b>${escapeHtml(item)}</b><span></span></div>`).join("")}</div></div>`;
}

function aiImageFailurePanel() {
  return `
    <div class="diagram">
      <div class="ai-failure-panel">
        <div class="failure-hand">
          <b>手部细节失真</b>
          <div class="hand-sketch">
            <i></i><i></i><i></i><i></i><i></i><i></i><em></em>
          </div>
          <span>早期模型容易多画手指、融合关节，原因是手部姿态组合太多，训练中很难学稳定。</span>
        </div>
        <div class="failure-list">
          <div><strong>结构混乱</strong><span>主体边界、遮挡关系不稳定。</span></div>
          <div><strong>文字错误</strong><span>笔画像纹理，无法保证字形精确。</span></div>
          <div><strong>物体融合</strong><span>多个物体靠近时容易粘在一起。</span></div>
        </div>
      </div>
    </div>
  `;
}

function constraintRadar(items) {
  return `<div class="diagram"><div class="radar">${items.map((item, i) => `<span style="--i:${i};--n:${items.length}">${escapeHtml(item)}</span>`).join("")}<b>图像约束</b></div></div>`;
}

function denoiseSteps() {
  return `<div class="diagram"><div class="denoise">${[0, 1, 2, 3, 4].map((i) => `<span style="--i:${i}"></span>`).join("")}</div></div>`;
}

function layoutCanvas(items) {
  return `<div class="diagram"><div class="layout-canvas">${items.map((item, i) => `<span class="slot-${i}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function tagCloud(items) {
  return `<div class="diagram"><div class="tag-cloud">${items.map((item, i) => `<span style="--i:${i}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function glyphBoard(char) {
  return `<div class="diagram"><div class="glyph-board"><b>${escapeHtml(char)}</b>${Array.from({ length: 36 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div></div>`;
}

function maskDiagram() {
  return `<div class="diagram"><div class="mask-diagram"><span>原图</span><span>主体 Mask</span><span>局部重绘</span></div></div>`;
}

function latentSlider() {
  return `<div class="diagram"><div class="latent"><span>写实</span><i></i><span>漫画</span><p>在潜空间移动，保留结构，改变风格</p></div></div>`;
}

function cards(items) {
  return `<div class="diagram"><div class="card-grid">${items.map((item, i) => `<div style="--i:${i}">${escapeHtml(item)}</div>`).join("")}</div></div>`;
}

function frameStrip(items, broken) {
  return `<div class="diagram"><div class="frame-strip ${broken ? "broken" : ""}">${items.map((item, i) => `<div style="--i:${i}"><span>${escapeHtml(item)}</span></div>`).join("")}</div></div>`;
}

function cubeDiagram() {
  return `<div class="diagram"><div class="cube"><b>W × H × T</b><span>空间 + 时间一起建模</span></div></div>`;
}

function tokenGrid(rows, cols, label) {
  return `<div class="diagram"><div class="video-token-grid"><b>${escapeHtml(label)}</b>${Array.from({ length: rows * cols }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div></div>`;
}

function videoTokenCube() {
  return `
    <div class="diagram">
      <div class="video-token-cube">
        <b>视频 token</b>
        <div class="token-cube-stack">
          ${[0, 1, 2].map((layer) => `<div class="cube-layer" style="--l:${layer}">${Array.from({ length: 16 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>`).join("")}
        </div>
        <p>每个小块都带着三个坐标：横向 x、纵向 y、时间 t。</p>
        <div class="formula-lite">token = patch(x, y, t)</div>
      </div>
    </div>
  `;
}

function tracksDiagram(items) {
  return `<div class="diagram"><div class="tracks">${items.map((item, i) => `<div style="--i:${i}"><b>${escapeHtml(item)}</b><span></span></div>`).join("")}</div></div>`;
}

function consistencyPanel() {
  const rows = [
    ["脸", "五官轮廓不能每帧重画"],
    ["衣服", "颜色、褶皱、纹理要延续"],
    ["背景", "建筑、道具、光源要稳定"],
    ["动作", "速度、方向、接触关系要连续"],
  ];
  return `
    <div class="diagram">
      <div class="consistency-panel">
        <b>一段视频要像同一个世界</b>
        ${rows.map(([k, v], i) => `<div style="--i:${i}"><strong>${escapeHtml(k)}</strong><span>${escapeHtml(v)}</span><i></i></div>`).join("")}
      </div>
    </div>
  `;
}

function referenceLockPanel() {
  return `
    <div class="diagram">
      <div class="reference-lock">
        <div><b>参考图</b><span>锁定角色长相、服装、风格</span></div>
        <i></i>
        <div><b>生成视频</b><span>沿时间保持同一身份</span></div>
        <p>系列内容里，参考图相当于角色身份证。</p>
      </div>
    </div>
  `;
}

function skeletonDiagram() {
  return `<div class="diagram"><div class="skeleton"><i></i><span></span><span></span><span></span><span></span></div></div>`;
}

function timelineMemory() {
  return `<div class="diagram"><div class="memory-line">${["第1镜", "第4镜", "第9镜", "第16镜", "第30镜"].map((item, i) => `<span style="--i:${i}">${escapeHtml(item)}</span>`).join("")}<b>长上下文记忆</b></div></div>`;
}

function audioWave() {
  return `<div class="diagram"><div class="audio-wave">${Array.from({ length: 42 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}<b>口型 / 动作 / 声音对齐</b></div></div>`;
}

function storyMap() {
  return `<div class="diagram"><div class="story-map"><b>冲突</b><span>人物</span><span>目标</span><span>阻碍</span><span>反转</span></div></div>`;
}

function characterSheet() {
  return `<div class="diagram"><div class="character-sheet"><b>角色设定卡</b><span>外形</span><span>服装</span><span>性格</span><span>禁用项</span></div></div>`;
}

function storyboardGrid() {
  return `<div class="diagram"><div class="storyboard">${Array.from({ length: 6 }, (_, i) => `<div><b>${String(i + 1).padStart(2, "0")}</b><span>镜头</span></div>`).join("")}</div></div>`;
}

function cameraPath() {
  return `<div class="diagram"><div class="camera-path"><span>关键帧 A</span><i></i><span>关键帧 B</span><b>镜头运动</b></div></div>`;
}

function audioPost() {
  return `<div class="diagram"><div class="post-stack">${["配音", "口型", "音效", "字幕", "BGM"].map((item, i) => `<span style="--i:${i}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function funnel(items) {
  return `<div class="diagram"><div class="funnel">${items.map((item, i) => `<span style="--i:${i}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function quadrant(items) {
  return `<div class="diagram"><div class="quadrant">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></div>`;
}

function journey(items) {
  return `<div class="diagram"><div class="journey">${items.map((item, i) => `<span style="--i:${i}">${escapeHtml(item)}</span>`).join("")}</div></div>`;
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
const initialSlide = Math.max(0, Math.min(slides.length - 1, Number(new URLSearchParams(window.location.search).get("slide")) - 1 || 0));
showSlide(initialSlide);

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
