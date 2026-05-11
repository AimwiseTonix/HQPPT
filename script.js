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
    title: "机器第一步：切成 token，再变成向量",
    core: "模型先把一句话切成 token，再把每个 token 查成一串数字向量。文字到这一步，才真正进入可计算状态。",
    bullets: [
      "Token 是语言进入模型前的小块，可以是字、词，也可以是词的一部分",
      "Embedding 会把 token 映射成向量，向量里保存它在训练中学到的用法特征",
      "这一步只解决“每个小块是什么”，还没有解决“它出现在第几个位置”",
      "数学骨架：text → token → embedding vector",
    ],
    visual: { type: "diagram", variant: "token_to_vector", caption: "切词之后，每个 token 都会被映射成模型能计算的向量" },
  });
  patch(19, {
    title: "向量不是字典，是语义坐标",
    core: "向量不是给每个词写一条解释，而是把它放进一个高维语义空间。用法相近的 token，会在训练中被拉得更近。",
    bullets: [
      "“蛇”“毒蛇”“有毒”经常在相近语境出现，向量位置会更接近",
      "“毒死”更偏动作和结果，位置会和实体名词拉开",
      "模型后面计算的不是汉字本身，而是这些向量之间的方向、距离和组合",
      "数学骨架：token id → E[id] ∈ Rᵈ",
    ],
    visual: { type: "diagram", variant: "vector_space", caption: "语义空间：相似用法在向量坐标里更接近" },
  });
  patch(20, {
    title: "还要加入顺序向量",
    core: "Transformer 会把一整句 token 同时送进模型。为了让模型知道先后顺序，每个 token 向量还要加上位置向量。",
    bullets: [
      "同一个“毒”出现在不同位置，可能分别表示手段、动作、属性或结果",
      "位置向量像给每个 token 贴上座位号：第 1 个、第 2 个、第 3 个各不一样",
      "最终输入给模型的是“词义向量 + 位置向量”，这样才同时有内容和顺序",
      "数学骨架：xᵢ = embedding(tokenᵢ) + positionᵢ",
    ],
    visual: { type: "diagram", variant: "position_encoding", caption: "输入向量 = 词义向量 + 位置向量，模型才能同时看到内容和顺序" },
  });
  patch(21, {
    title: "注意力权重：给上下文分配阅读预算",
    core: "理解当前 token 时，模型不会把全句平均看一遍，而是把更多权重分给更相关的位置。",
    bullets: [
      "比如判断“会不会被毒死”时，“毒蛇”“被毒死”通常比逗号更重要",
      "权重可以理解成阅读比例：0.45 表示重点参考，0.03 表示基本略过",
      "所有权重加起来等于 1，模型用这组比例决定当前 token 主要吸收哪些上下文",
      "数学骨架：weights = softmax(scores)",
    ],
    visual: { type: "diagram", variant: "attention_weight_budget", caption: "注意力权重把有限的阅读预算分给最相关的上下文" },
  });
  patch(22, {
    title: "权重从哪里来：先问问题，再找标签",
    core: "每个 token 会生成一个 Query，像“我现在想找什么”；同时每个位置都有 Key，像“我这里有什么线索”。",
    bullets: [
      "Query 代表当前 token 的检索意图：我需要哪些上下文帮助理解",
      "Key 代表每个位置的索引标签：我能提供什么线索",
      "Query 和 Key 越匹配，相关性分数越高，后面分到的权重越大",
      "数学骨架：score = q · k",
    ],
    visual: { type: "diagram", variant: "library_match", caption: "Q 和 K 做匹配，先得到每个位置的相关性分数" },
  });
  patch(23, {
    title: "分数变比例：再决定读多少",
    core: "相关性分数还不能直接用，softmax 会把它们转成一组比例。比例越高，那个位置的 Value 被带走得越多。",
    bullets: [
      "分数只说明谁更匹配，softmax 负责把分数统一成 0 到 1 之间的比例",
      "Value 是真正被汇总的信息内容，权重越大，被汇入当前表示的影响越大",
      "最后得到的新向量，已经融合了当前 token 该重点参考的上下文",
      "数学骨架：zᵢ = Σⱼ aᵢⱼ vⱼ",
    ],
    visual: { type: "diagram", variant: "library_read", caption: "softmax 把分数变成比例，再按比例读取 Value" },
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
        "用中文歧义句观察上下文依赖",
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
        "提示词会作为条件信号进入去噪过程",
        "它会持续影响图像朝哪个语义方向收敛",
        "同一句提示词在不同权重下，画面细节和风格会明显变化",
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
        "只有把时间放进同一个计算对象里，模型才有机会保持连续",
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
        "跨帧记忆是视频稳定性的核心",
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

  const v2TextRefresh = {
    1: {
      core: "这门课先讲清楚 AIGC 到底是什么，再看它怎样进入图文、视频和文旅内容生产。",
      bullets: [
        "第一步：用白话理解 AI、模型、训练和生成",
        "第二步：拆开语言、图像、视频三个模型板块",
        "第三步：把模型能力放回 AI 漫剧和文旅 IP 项目判断",
      ],
    },
    2: {
      title: "AIGC 改变的是内容生产方式",
      core: "过去很多内容要从零手工做；现在可以先让模型生成小样，再由人筛选、修改、判断和发布。",
      bullets: [
        "过去：文案、图片、分镜、剪辑常常分散在不同岗位里慢慢推进",
        "现在：文本模型、图像模型、视频模型可以先把想法快速变成可看的版本",
        "人的价值从亲手做每一步，转向定方向、控质量、做审美和业务判断",
      ],
      visual: { type: "diagram", variant: "market_shift_anim", caption: "内容生产从手工串联，变成多模型协同生成与人工把关" },
    },
    3: {
      title: "这 2 小时会讲清三件事",
      core: "先听懂模型怎么生成，再知道它为什么会出错，最后判断它适合放进哪个业务环节。",
      bullets: [
        "基础：AI、模型、数据、参数、训练、推理这些词到底是什么意思",
        "原理：语言模型、AI 绘画、AI 视频分别在解决什么问题",
        "应用：AI 漫剧如何接到北京环球这类文旅 IP 的内容机会",
      ],
    },
    4: {
      title: "先给一个总判断",
      core: "AIGC 最大的变化，是把想法变成小样的速度大幅提高，让内容团队可以更早看见结果、验证方向。",
      bullets: [
        "创意策划：更快生成选题、人物关系、剧情方向和标题方案",
        "视觉资产：更快形成角色、场景、风格图和关键帧",
        "运营复盘：更快根据播放、互动、到访和打卡数据调整下一轮内容",
      ],
      visual: { type: "diagram", variant: "aigc_changes", caption: "AIGC 的核心价值：把创意、资产、样片和反馈连成更短的循环" },
    },
    5: {
      title: "AIGC 到底是什么",
      core: "AIGC 可以理解为：你给一个目标，模型根据训练经验，生成一段文字、一张图片、一段视频或一套方案。",
      bullets: [
        "它不是简单搜索资料，而是根据学到的规律重新生成内容",
        "它也不是完全自动创作，方向、审美、事实和合规仍然需要人来把关",
        "先把它看成“内容小样发动机”：快速出草稿，再让人判断能不能用",
        "数学骨架：目标输入 x 进入模型，模型用参数 θ 生成输出 y",
      ],
    },
    6: {
      title: "模型是什么",
      core: "模型就是一套被训练出来的计算系统：输入进来，它根据参数里的经验算出结果。",
      bullets: [
        "它不是素材仓库，不是把原图原文藏起来再复制出来",
        "训练会不断调整参数，让模型在大量样本上学会更稳定的规律",
        "使用时参数基本固定，模型根据新输入快速生成判断或内容",
        "数学骨架：y = f(x; θ)，x 是输入，θ 是训练后得到的参数",
      ],
    },
    7: {
      title: "数据是什么",
      core: "数据就是模型见过的例子。它见过什么，决定它更擅长什么，也决定它容易在哪里犯错。",
      bullets: [
        "文本、图片、视频、声音、标签和人工反馈都可以成为训练材料",
        "样本越丰富、描述越准确，模型越容易学到稳定规律",
        "如果训练里缺少某类场景，模型遇到类似需求时就容易乱编或画错",
        "数学骨架：训练数据越接近真实任务，模型越容易逼近目标分布",
      ],
    },
    8: {
      title: "参数是什么",
      core: "参数是模型训练后留下的经验权重。模型的能力不是藏在某一条规则里，而是藏在大量数字的协同里。",
      bullets: [
        "参数不是素材本身，而是训练中被反复调整出来的规律痕迹",
        "大量参数共同决定模型怎样理解输入、关联信息和生成结果",
        "参数越多不必然越好，但足够的数据、计算和训练会让规律更细",
        "数学骨架：θ = {w₁, w₂, ..., wₙ}",
      ],
    },
    9: {
      title: "训练是什么",
      core: "训练像反复做题：模型先给答案，再对照目标算误差，然后一点点调整参数。",
      bullets: [
        "第一步：模型根据当前参数做预测",
        "第二步：把预测和目标答案比较，得到 loss",
        "第三步：沿着让 loss 下降的方向更新参数，重复很多轮",
        "数学骨架：prediction → loss → update",
      ],
      visual: { type: "diagram", variant: "training_loop", caption: "训练循环：预测、计算误差、更新参数，很多轮之后能力逐渐稳定" },
    },
    10: {
      title: "推理是什么",
      core: "推理就是模型训练好之后的使用阶段：参数不再现场学习，只根据你的输入生成结果。",
      bullets: [
        "训练阶段像学习，推理阶段像考试现场作答",
        "你输入一句话、一张图或一个视频需求，模型按已有经验计算输出",
        "推理结果可以很快，但事实、审美、商业风险仍然要复核",
        "数学骨架：x + θ → y",
      ],
    },
    11: {
      title: "生成式 AI 和传统 AI 有什么不同",
      core: "传统 AI 更擅长判断和分类；生成式 AI 会继续往下补，生成新的文字、图片和视频。",
      bullets: [
        "传统 AI：判断这是什么、属于哪一类、风险有多高",
        "生成式 AI：根据目标继续补全文案、图像、镜头和方案",
        "AIGC 的关键变化，是让机器从“做判断”进入“产出内容草稿”",
        "数学骨架：classification → generation",
      ],
      visual: { type: "diagram", variant: "generation_modes", caption: "传统 AI 偏判断，生成式 AI 偏补全和创造" },
    },
    12: {
      title: "为什么 AI 看起来像懂了",
      core: "因为它在大量样本里学到了关系：词和词的关系、图和词的关系、动作和时间的关系。",
      bullets: [
        "它能回答问题，是因为学过大量表达结构和知识关联",
        "它能生成图像，是因为学过文字描述和视觉内容之间的对应",
        "它能生成视频，是因为学过动作、镜头和时间连续之间的规律",
        "数学骨架：pattern layers",
      ],
    },
    13: {
      title: "AIGC 的三个共同动作",
      core: "无论文字、图片还是视频，底层都绕不开三步：表示、关系、生成。",
      bullets: [
        "表示：把输入变成模型能计算的数字向量",
        "关系：计算哪些信息互相影响，谁应该参考谁",
        "生成：按目标一步步输出文字、图像、视频或方案",
        "数学骨架：representation → relation → generation",
      ],
    },
    14: {
      title: "第一章先记住这句话",
      core: "AIGC 是把训练经验压进模型，再把你的需求转成可计算表示，最后生成可被人修改和判断的内容草稿。",
      bullets: [
        "听懂这句话，后面讲 LLM、AI 绘画、AI 视频就不会散",
        "语言、图片、视频只是输入形式不同，底层都要变成数字再计算关系",
        "下一章开始看第一个具体模型：语言模型怎样理解一句中文",
        "数学骨架：input → representation → relation → generation",
      ],
    },
    18: {
      title: "机器第一步：切成 token，再变成向量",
      core: "模型先把一句话切成 token，再把每个 token 查成一串数字向量。文字到这一步，才真正进入可计算状态。",
      bullets: [
        "Token 是语言进入模型前的小块，可以是字、词，也可以是词的一部分",
        "Embedding 会把 token 映射成向量，向量里保存它在训练中学到的用法特征",
        "这一步只解决“每个小块是什么”，还没有解决“它出现在第几个位置”",
        "数学骨架：text → token → embedding vector",
      ],
      visual: { type: "diagram", variant: "token_to_vector", caption: "切词之后，每个 token 都会被映射成模型能计算的向量" },
    },
    19: {
      title: "向量不是字典，是语义坐标",
      core: "向量不是给每个词写一条解释，而是把它放进一个高维语义空间。用法相近的 token，会在训练中被拉得更近。",
      bullets: [
        "“蛇”“毒蛇”“有毒”经常在相近语境出现，向量位置会更接近",
        "“毒死”更偏动作和结果，位置会和实体名词拉开",
        "模型后面计算的不是汉字本身，而是这些向量之间的方向、距离和组合",
        "数学骨架：token id → E[id] ∈ Rᵈ",
      ],
      visual: { type: "diagram", variant: "vector_space", caption: "语义空间：相似用法在向量坐标里更接近" },
    },
    20: {
      title: "还要加入顺序向量",
      core: "Transformer 会把一整句 token 同时送进模型。为了让模型知道先后顺序，每个 token 向量还要加上位置向量。",
      bullets: [
        "同一个“毒”出现在不同位置，可能分别表示手段、动作、属性或结果",
        "位置向量像给每个 token 贴上座位号：第 1 个、第 2 个、第 3 个各不一样",
        "最终输入给模型的是“词义向量 + 位置向量”，这样才同时有内容和顺序",
        "数学骨架：xᵢ = embedding(tokenᵢ) + positionᵢ",
      ],
      visual: { type: "diagram", variant: "position_encoding", caption: "输入向量 = 词义向量 + 位置向量，模型才能同时看到内容和顺序" },
    },
    21: {
      title: "注意力权重：给上下文分配阅读预算",
      core: "理解当前 token 时，模型不会把全句平均看一遍，而是把更多权重分给更相关的位置。",
      bullets: [
        "比如判断“会不会被毒死”时，“毒蛇”“被毒死”通常比逗号更重要",
        "权重可以理解成阅读比例：0.45 表示重点参考，0.03 表示基本略过",
        "所有权重加起来等于 1，模型用这组比例决定当前 token 主要吸收哪些上下文",
        "数学骨架：weights = softmax(scores)",
      ],
      visual: { type: "diagram", variant: "attention_weight_budget", caption: "注意力权重把有限的阅读预算分给最相关的上下文" },
    },
    22: {
      title: "权重从哪里来：先问问题，再找标签",
      core: "每个 token 会生成一个 Query，像“我现在想找什么”；同时每个位置都有 Key，像“我这里有什么线索”。",
      bullets: [
        "Query 代表当前 token 的检索意图：我需要哪些上下文帮助理解",
        "Key 代表每个位置的索引标签：我能提供什么线索",
        "Query 和 Key 越匹配，相关性分数越高，后面分到的权重越大",
        "数学骨架：score = q · k",
      ],
      visual: { type: "diagram", variant: "library_match", caption: "Q 和 K 做匹配，先得到每个位置的相关性分数" },
    },
    23: {
      title: "分数变比例：再决定读多少",
      core: "相关性分数还不能直接用，softmax 会把它们转成一组比例。比例越高，那个位置的 Value 被带走得越多。",
      bullets: [
        "分数只说明谁更匹配，softmax 负责把分数统一成 0 到 1 之间的比例",
        "Value 是真正被汇总的信息内容，权重越大，被汇入当前表示的影响越大",
        "最后得到的新向量，已经融合了当前 token 该重点参考的上下文",
        "数学骨架：zᵢ = Σⱼ aᵢⱼ vⱼ",
      ],
      visual: { type: "diagram", variant: "library_read", caption: "softmax 把分数变成比例，再按比例读取 Value" },
    },
    34: {
      title: "提示词会参与每一步去噪",
      core: "提示词会变成条件信号，持续影响图像从噪声收敛到什么方向。",
      bullets: [
        "生成不是一次画完，而是每一步都判断该去掉哪些噪声",
        "提示词会告诉模型主体、风格、关系和画面目标",
        "提示词越复杂，越需要更强的多模态理解来拆解",
      ],
    },
    37: {
      core: "提示词失灵，通常是因为模型没有同时锁住语义、数量、位置和训练数据里的常见组合。",
      bullets: [
        "同一句提示词里，主体、动作、数量、空间关系可能互相拉扯",
        "模型会优先靠近训练里更常见、更容易成立的画面模式",
        "所以改提示词只是第一步，还需要布局控制、参考图、局部修正一起配合",
      ],
    },
    42: {
      title: "自动标注把图片变成结构化教材",
      core: "更细的图片描述，会让模型知道主体、位置、关系和风格分别是什么。",
      bullets: [
        "人工标注常常只有一句话，信息颗粒度太粗",
        "自动标注可以补充主体、动作、位置、材质、文字、风格",
        "训练材料越细，模型越容易把复杂提示词拆成可执行的画面约束",
      ],
    },
    44: {
      title: "让文字变稳，需要三层约束",
      core: "文字生成要同时解决位置、字形和可识别性。",
      bullets: [
        "先给位置：文字应该出现在画面的哪个区域",
        "再给字形：用模板或版式降低模型凭空猜字的难度",
        "最后复核：用 OCR 或规则判断字有没有写对，并把错误转成强化学习反馈",
      ],
      visual: { type: "diagram", variant: "text_render_pipeline", caption: "文字生成链路：位置约束、字形模板、OCR 复核和反馈校准" },
    },
    45: {
      title: "局部重绘不是贴图，而是局部重新生成",
      core: "遮罩圈定要改的地方，潜空间负责让新内容和原图自然融合。",
      bullets: [
        "遮罩决定哪里可以变，哪里必须锁住",
        "背景、光线、材质信息要继续参与局部生成",
        "这样新物体才不会像硬贴上去的素材",
      ],
    },
    54: {
      bullets: [
        "视频更像一块宽、高、时间一起存在的时空块",
        "不是一串独立图片，而是一个整体对象",
        "只有把时间放进同一个计算对象里，模型才有机会保持连续",
      ],
    },
    64: {
      title: "物理感靠标准答案和判别器校准",
      core: "视频模型需要知道什么运动符合世界规律，什么运动看起来假。",
      bullets: [
        "物理引擎可以生成更标准的运动轨迹",
        "判别器检查重力、碰撞、接触和惯性是否连续",
        "偏差会变成强化学习信号，推动模型减少漂浮、穿模和跳变",
      ],
    },
    65: {
      title: "镜头控制难在 CameraPose 和画面运动一起算",
      core: "推、拉、摇、移、环绕会同时改变主体、背景、遮挡和透视。",
      bullets: [
        "镜头移动不是把画面平移一下",
        "摄像机姿态参数 CameraPose 可以作为控制信号进入模型",
        "当镜头运动和物体运动分开控制，视频才更接近导演调度",
      ],
      visual: {
        type: "carousel",
        caption: "镜头控制：CameraPose、主体运动和背景透视必须一起计算",
        items: [
          { type: "gif", src: "assets/gifs_cropped/control_clip.gif", label: "镜头与动作控制" },
          { type: "diagram", variant: "pose_skeleton", label: "姿态骨架", maskSubtitles: false },
          { type: "diagram", variant: "camera_path", label: "CameraPose 路径", maskSubtitles: false },
        ],
      },
    },
    67: {
      title: "分段生成要让上一段接住下一段",
      core: "长视频不能只切段，还要把角色状态和场景状态传下去。",
      bullets: [
        "上一段最后几帧可以作为下一段的参考图",
        "角色脸、服装、场景光线都要继续沿用",
        "这样多镜头内容才不会每段都像换了一个世界",
      ],
    },
    73: {
      core: "AI 漫剧不是单个按钮生成成片，而是把剧本、角色、分镜、视频、声音和运营拆成一条生产线。",
      bullets: [
        "它是一种短内容生产方式，核心是把创意拆成可生成、可审核、可复用的环节",
        "文本模型负责故事，图像模型负责视觉资产，视频模型负责镜头动作",
        "真正的价值在于把每个环节做成可控、可复用、可复盘的流程",
      ],
    },
    74: {
      core: "不同模型各做一段工作，组合起来才形成完整内容生产能力。",
      bullets: [
        "LLM 负责选题、人物关系、剧情节奏和台词草稿",
        "图像模型负责角色设定、场景风格、海报和关键帧",
        "视频与后期工具负责镜头运动、配音、口型、字幕和剪辑",
      ],
    },
    75: {
      core: "选题阶段先判断故事值不值得做，再让模型扩展人物关系和分集节奏。",
      bullets: [
        "输入：目标人群、题材方向、IP边界和传播平台",
        "模型动作：生成故事钩子、主角目标、冲突和反转",
        "输出物：一句话梗概、人物关系表、分集大纲和风险提示",
      ],
    },
    76: {
      core: "角色和世界观设定的重点，是让后续每一张图、每一段视频都像同一个作品。",
      bullets: [
        "角色设定要固定长相、服装、性格、禁用元素和视觉风格",
        "场景设定要固定时代、色调、道具、建筑和光线规则",
        "这些设定会成为后续图像生成和视频生成的参考资产",
      ],
    },
    77: {
      core: "分镜把剧本拆成模型能执行的镜头任务，是从文字走向画面的关键桥梁。",
      bullets: [
        "每个镜头要写清景别、动作、角色位置、情绪和画面重点",
        "关键帧先解决“这一镜看起来是什么”，再进入视频化",
        "可复用素材库能减少角色漂移和风格漂移",
      ],
    },
    78: {
      core: "视频化不是让图片随便动，而是给关键帧加上镜头、动作和节奏。",
      bullets: [
        "关键帧决定画面起点，镜头参数决定怎么运动",
        "动作幅度、转场节奏和画面一致性决定可看性",
        "实际制作中通常先生成短镜头，再通过剪辑形成段落",
      ],
    },
    79: {
      core: "声音和后期决定短剧是否真正成立，画面只是完成度的一部分。",
      bullets: [
        "配音要贴合角色年龄、情绪和节奏",
        "口型、字幕、音效、BGM 会直接影响观看沉浸感",
        "后期剪辑负责把模型生成的镜头整理成有节奏的故事",
      ],
    },
    80: {
      title: "AI 漫剧真正节省的是试错成本",
      core: "AI 的优势不是一次生成完美成片，而是让内容团队更快测试方向。",
      bullets: [
        "前期可以低成本做出多个题材小样",
        "数据反馈能帮助团队判断哪个角色、剧情和场景更有传播性",
        "有效题材再进入标准化生产，避免一开始就重投入",
      ],
    },
    81: {
      core: "AI 漫剧进入商业场景，风险不只在技术，还在授权、合规和持续质量。",
      bullets: [
        "IP、肖像、音乐、字体和素材来源都要有授权边界",
        "AI 生成内容需要处理平台规则、标识要求和内容审核",
        "系列内容最怕角色、风格和世界观不稳定",
      ],
    },
    82: {
      core: "AI 漫剧的关键不是一键拍剧，而是把内容生产拆成多个可控环节逐步提效。",
      bullets: [
        "剧本、角色、分镜、视频、声音、发布都要有明确交付物",
        "每个环节都要能被检查、修改和复用",
        "流程稳定后，AI 才能真正变成内容产能",
      ],
    },
    83: {
      core: "文旅 IP 天然有场景、故事和打卡动机，适合用短剧把线上兴趣导向线下体验。",
      bullets: [
        "文旅内容不缺场景，缺的是能被持续传播的故事入口",
        "短剧可以把园区项目、角色关系和游客任务串起来",
        "AIGC 的作用是降低试错成本，让题材测试更轻",
      ],
    },
    84: {
      core: "微短剧已经成为重要内容入口，文旅项目要判断它是否能带来人群触达。",
      bullets: [
        "市场规模和用户时长说明短剧已经不是小众娱乐",
        "短剧用户更容易被强情节、强人设和强反转吸引",
        "文旅 IP 如果进入短剧，就要用内容逻辑而不是广告逻辑",
      ],
    },
    85: {
      core: "AI 让文旅短剧可以先做小样测试，再决定是否扩大投入。",
      bullets: [
        "传统内容试错成本高，前期很难同时测试多个题材",
        "AI 可以快速形成剧本、角色、分镜和动态样片",
        "先用小样验证用户反应，再决定制作规模和投放节奏",
      ],
    },
    86: {
      core: "文旅短剧的目标不是播放量本身，而是把内容兴趣转化为线下体验。",
      bullets: [
        "第一步是内容种草，让观众记住角色和场景",
        "第二步是到访打卡，让线上剧情变成线下任务",
        "第三步是 UGC 二次传播，让游客继续扩散内容",
      ],
    },
    87: {
      core: "北京环球的优势在于 IP、沉浸场景、游客流量和粉丝基础已经同时存在。",
      bullets: [
        "顶级 IP 自带世界观和角色记忆",
        "沉浸式场景天然适合做任务线和打卡点",
        "游客本身就是内容传播的种子用户",
      ],
    },
    88: {
      core: "题材选择要同时看短剧热度、IP适配度和线下转化可能。",
      bullets: [
        "魔法奇遇适合任务线和粉丝向传播",
        "恐龙冒险适合家庭用户和亲子情节",
        "英雄训练、好莱坞浪漫适合动作节奏和城市体验",
      ],
    },
    89: {
      core: "一日魔法师适合把游客身份变成剧情任务，让打卡行为变成故事推进。",
      bullets: [
        "开头：普通游客收到魔法任务",
        "中段：在园区不同点位完成挑战",
        "结尾：获得纪念物或隐藏身份，形成二次传播素材",
      ],
    },
    90: {
      core: "恐龙守护者适合把冒险、家庭协作和温情结尾放在同一条故事线里。",
      bullets: [
        "冲突来自恐龙异常、园区任务或意外发现",
        "亲子角色可以共同解决问题，增强家庭用户代入感",
        "结尾落到保护、陪伴和再次到访的情绪记忆",
      ],
    },
    91: {
      core: "特工训练营更适合短视频节奏，用训练、挑战和任务完成制造爽点。",
      bullets: [
        "开场建立训练营身份和任务目标",
        "中段用动作挑战、科技道具和倒计时推动节奏",
        "结尾形成可传播的英雄时刻或团队合照点",
      ],
    },
    92: {
      core: "文旅 IP 项目必须先处理授权、备案、平台审核和 AI 标识，合规不是最后一步。",
      bullets: [
        "IP 名称、角色、场景、音乐、字体都要确认使用边界",
        "微短剧投资额和发布平台会影响备案与审核路径",
        "AI 生成内容标识、内容安全和品牌调性要前置进入流程",
      ],
    },
    93: {
      core: "执行路径应先小规模验证，再做流程标准化，最后形成内容矩阵。",
      bullets: [
        "1-2 个月：培训工具、确定题材、完成 1-2 条样片",
        "3-6 个月：沉淀角色库、分镜库、审核机制和发布节奏",
        "6-12 个月：形成系列内容、UGC玩法和商业化测试",
      ],
    },
    94: {
      core: "成功不只靠生成能力，而靠选题、制作、审核、发布、复盘和线下转化连起来。",
      bullets: [
        "选题阶段看用户兴趣和 IP 适配",
        "制作阶段看风格稳定、合规安全和发布效率",
        "复盘阶段看播放、互动、到访、打卡和二次传播",
      ],
      visual: { type: "diagram", variant: "operation_loop", caption: "项目评估：内容吸引力、制作稳定性、合规安全和线下转化要一起成立" },
    },
    95: {
      core: "环球项目技术上可行、内容上适配，真正门槛在授权、审美、合规和持续运营。",
      bullets: [
        "技术可行：文本、图像、视频模型已经能支撑样片验证",
        "内容适配：IP、场景和游客任务天然适合故事化",
        "执行门槛：授权、审美标准、审核机制和长期运营能力",
      ],
    },
    96: {
      core: "今天的主线是：语言理解、视觉生成、时间连续，最后汇入内容生产。",
      bullets: [
        "LLM 解决文本理解和故事组织",
        "AI 绘画解决角色、场景和视觉资产",
        "AI 视频解决镜头、动作和时间一致性",
      ],
    },
    97: {
      core: "判断 AIGC 项目不能只问能不能生成，还要看内容、合规和运营。",
      bullets: [
        "技术：模型能力是否足够稳定",
        "内容：题材是否值得做，用户是否愿意看",
        "合规与运营：授权能否过，流程能否持续",
      ],
    },
    98: {
      core: "真正重要的是从会用工具，走到会判断每种模型适合落在哪个业务环节。",
      bullets: [
        "看懂模型能力，才能知道哪些环节可以交给 AI",
        "看懂模型边界，才能知道哪里必须人工审核",
        "看懂业务链路，才能把技术变成真实项目机会",
      ],
    },
  };

  Object.entries(v2TextRefresh).forEach(([id, fields]) => patch(Number(id), fields));

  insertLibraryExampleSlides();
  replaceImageChapterSlides();
  replaceVideoChapterSlides();
  renumberSlides();

  return slides;
}

function insertLibraryExampleSlides() {
  if (slides.some((slide) => slide.uid === "llm-library-token-human")) return;
  const insertIndex = slides.findIndex((slide) => slide.id === 24);
  if (insertIndex < 0) return;
  const base = {
    section: "第二章 LLM",
    sectionKey: "llm",
    layout: "media",
    source: "",
  };
  slides.splice(
    insertIndex,
    0,
    {
      ...base,
      uid: "llm-library-token-human",
      id: 24,
      eyebrow: "24 / 第二章 LLM",
      title: "图书馆例子：把一个人看成 token",
      core: "可以把每个 token 想象成走进图书馆的人。这个人身上带着一句话里的位置、角色和当前任务，进去之后要找最能帮助自己理解的书。",
      bullets: [
        "人就是当前 token：比如正在理解“被毒死”这个片段",
        "他已经带着自己的词义向量和位置向量，所以知道自己在句子里的座位",
        "接下来他要做的事，是在整句话里找最相关的线索，而不是把每本书都读同样久",
        "数学对应：当前 token 的表示 xᵢ 会生成 Query qᵢ",
      ],
      visual: { type: "diagram", variant: "library_person_token", caption: "当前 token 像一个带着任务进入图书馆的人" },
    },
    {
      ...base,
      uid: "llm-library-search-cards",
      id: 25,
      eyebrow: "25 / 第二章 LLM",
      title: "他先看书脊标签：谁和问题最相关",
      core: "图书馆里的每本书都有标签。对应到模型里，句子里每个位置都会提供一个 Key，当前 token 用 Query 去和这些 Key 匹配。",
      bullets: [
        "Query 是这个人的问题：我现在需要什么线索",
        "Key 是每本书的标签：我这里能提供什么信息",
        "匹配不是靠感觉，而是把 q 和 k 做点积，得到一串相关性分数",
        "数学对应：scoreᵢⱼ = qᵢ · kⱼ",
      ],
      visual: { type: "diagram", variant: "library_search_cards", caption: "Query 匹配 Key：先得到哪些书更值得读" },
    },
    {
      ...base,
      uid: "llm-library-read-return",
      id: 26,
      eyebrow: "26 / 第二章 LLM",
      title: "最后按比例读书，再带着信息回来",
      core: "分数经过 softmax 变成比例后，这个人会把更多时间给重要书，把更少时间给弱相关书。读完之后，他带回一份整理后的新理解。",
      bullets: [
        "softmax 把原始分数变成阅读比例，所有比例加起来等于 1",
        "Value 像书里的正文内容，真正会被读出来并带回去",
        "最终的新向量融合了多个位置的信息，当前 token 的含义就更清楚了",
        "数学对应：zᵢ = Σⱼ softmax(qᵢ·kⱼ) vⱼ",
      ],
      visual: { type: "diagram", variant: "library_read_return", caption: "权重决定读多少，Value 决定带回什么信息" },
    },
  );
}

function replaceImageChapterSlides() {
  const startIndex = slides.findIndex((slide) => slide.sectionKey === "image");
  const endIndex = slides.findIndex((slide, index) => index > startIndex && slide.sectionKey !== "image");
  if (startIndex < 0 || endIndex < 0) return;
  const base = { section: "第三章 AI 绘画", sectionKey: "image", source: "" };
  const chapter = [
    {
      ...base,
      uid: "image-chapter-opener",
      layout: "chapter",
      title: "AI 绘画的技术演化",
      core: "这一章按技术时代拆开看：每一代模型解决一个关键问题，同时也留下新的短板，下一代技术再继续补。",
      bullets: ["早期生成模型：能生成，但分辨率、语义和可控性都弱", "扩散与多模态：画质上来，提示词开始能控制画面", "当代图像模型：文字、布局、局部编辑和自然语言修图越来越稳"],
      visual: { type: "diagram", variant: "image_evolution_timeline", caption: "AI 绘画演化主线：从能生成，到能控制，再到能编辑" },
    },
    {
      ...base,
      uid: "image-era-map",
      layout: "deepdive",
      title: "先看一条主线：问题推动技术升级",
      core: "AI 绘画不是突然变强的。它每次升级，都是因为上一代暴露出一个明显问题：画不清、听不懂、布局乱、字写错、局部改不动。",
      bullets: ["第一类问题：画质和结构不稳，图像像噪声里长出来的拼图", "第二类问题：提示词不听话，复杂关系、数量和位置容易丢", "第三类问题：商业使用要求更高，需要文字准确、局部可改、角色稳定", "课程看法：图像模型的进步，本质是控制力越来越强"],
      visual: { type: "diagram", variant: "image_problem_solution_chain", caption: "每个时代都在补上一代留下的短板" },
    },
    {
      ...base,
      uid: "image-gan-vae-era",
      layout: "technical",
      title: "第一代：GAN / VAE 让机器开始会生成图",
      core: "早期代表模型是 VAE 和 GAN。它们证明了机器可以从数据分布里采样出新图像，但还不适合用一句复杂提示词精确指挥。",
      bullets: ["VAE：把图像压进潜空间再还原，优点是结构清楚、可解释；缺点是画面容易糊", "GAN：生成器和判别器对抗训练，优点是局部细节锐利；缺点是训练不稳定、容易模式坍塌", "这一代解决了“能不能生成”的问题，但没有解决“按自然语言精确生成”", "数学骨架：z → G(z)，从潜变量生成图像"],
      visual: { type: "diagram", variant: "gan_vae_compare", caption: "VAE 偏稳定，GAN 偏锐利，但都缺少强文本控制" },
      source: "Goodfellow et al., Generative Adversarial Nets, NeurIPS 2014",
    },
    {
      ...base,
      uid: "image-dalle-clip-era",
      layout: "technical",
      title: "第二代：DALL·E / CLIP 把文字接进图像",
      core: "DALL·E 这类模型把“文字到图像”变成主线，CLIP 则让文字和图片进入同一套语义空间。它们解决了文本控制的入口问题。",
      bullets: ["DALL·E：证明长文本可以驱动图像生成，优点是想象力强；缺点是早期分辨率和细节稳定性有限", "CLIP：把文字和图像对齐，优点是让提示词变成可计算约束；缺点是对数量、文字和空间关系仍然粗糙", "这一代解决了“提示词能不能指挥画面”的问题，但还没有真正稳住高质量细节", "数学骨架：text embedding ↔ image embedding"],
      visual: { type: "diagram", variant: "text_image_alignment", caption: "文字和图像先对齐，提示词才有机会控制画面" },
      source: "Radford et al., Learning Transferable Visual Models From Natural Language Supervision, ICML 2021",
    },
    {
      ...base,
      uid: "image-diffusion-era",
      layout: "deepdive",
      title: "第三代：扩散模型让画质实现跃迁",
      core: "扩散模型的思路是先学会给图片加噪，再学会一步步把噪声擦掉。生成时从随机噪声出发，逐步还原出符合提示词的图像。",
      bullets: ["代表模型：DDPM、Stable Diffusion", "优点：画质明显提升，生成过程稳定，风格和细节更丰富", "缺点：早期仍容易出现多手指、文字乱码、主体融合和布局漂移", "数学骨架：xₜ = √αₜx₀ + √(1-αₜ)ε，模型学习预测噪声 ε"],
      visual: { type: "carousel", caption: "扩散生成：从噪声出发，逐步靠近提示词对应的画面", items: [{ type: "gif", src: "assets/gifs_cropped/diffusion_clip.gif", label: "去噪过程" }, { type: "diagram", variant: "diffusion_formula", label: "公式骨架", maskSubtitles: false }, { type: "diagram", variant: "noise_to_image", label: "逐步收敛", maskSubtitles: false }] },
      source: "Ho et al., Denoising Diffusion Probabilistic Models, arXiv:2006.11239",
    },
    {
      ...base,
      uid: "image-unet-stable",
      layout: "technical",
      title: "扩散画质上来了，但结构控制仍然不够",
      core: "扩散模型能稳定生成高质量画面，但“画得漂亮”和“按指定结构生成”是两件事。姿势、边缘、构图和文字位置仍然需要更强约束。",
      bullets: [
        "U-Net 像一块去噪橡皮，每一步判断哪些噪声该擦掉、哪些结构该保留",
        "Stable Diffusion 把去噪放进潜空间，成本更低，所以创作者生态迅速长出来",
        "只靠提示词，姿势、边缘、构图和文字位置仍然不够精确",
        "更强控制的关键，是把结构信息直接交给模型",
        "数学骨架：εθ(xₜ, t, c)，c 是提示词条件",
      ],
      visual: { type: "diagram", variant: "unet_stable_pipeline", caption: "Stable Diffusion：提示词条件持续参与每一步去噪" },
      source: "Rombach et al., High-Resolution Image Synthesis with Latent Diffusion Models, CVPR 2022",
    },
    {
      ...base,
      uid: "image-controlnet-era",
      layout: "technical",
      title: "ControlNet：提示词说不清，就给结构图",
      core: "文字很难精确描述结构。ControlNet 的思路很直接：把姿态、边缘、深度或草图作为条件喂给模型，让生成结果按结构图展开。",
      bullets: [
        "代表模型：ControlNet、T2I-Adapter",
        "它解决的是结构控制：人物姿势、线稿、边缘、景深和构图更容易按计划生成",
        "它适合分镜、设计草图和角色动作，但会让工作流程变复杂",
        "结构控制解决了构图问题，角色和风格稳定还需要额外机制",
        "数学骨架：image = diffusion(noise | text, control map)",
      ],
      visual: { type: "diagram", variant: "controlnet_pipeline", caption: "控制图把“想要什么结构”直接交给模型" },
      source: "Zhang & Agrawala, Adding Conditional Control to Text-to-Image Diffusion Models, arXiv:2302.05543",
    },
    {
      ...base,
      uid: "image-sd-ecosystem-era",
      layout: "technical",
      title: "角色和风格稳定，依赖 LoRA 与参考图",
      core: "实际创作不是只做一张图，而是要让同一个角色、服装、产品和画风连续出现。LoRA 与参考图提供了更稳定的视觉锚点。",
      bullets: [
        "LoRA 用小参数包学习角色、服装、画风或产品风格，成本比完整训练低很多",
        "参考图给模型一个视觉锚点，让角色长相、服装和场景不至于每次都漂",
        "AI 绘画从单张出图，进入角色库、风格库和分镜工作流",
        "结构和风格稳定后，复杂语义仍可能在生成时互相冲突",
        "数学骨架：θ' = θ + Δθ，少量增量参数改变生成风格",
      ],
      visual: { type: "diagram", variant: "sd_ecosystem", caption: "Stable Diffusion 生态：基础模型、LoRA、ControlNet、局部编辑共同组成工作流" },
    },
    {
      ...base,
      uid: "image-prompt-problems",
      layout: "deepdive",
      title: "提示词失灵，本质是多个约束在打架",
      core: "复杂提示词不是关键词堆叠。主体、动作、数量、位置、风格和常识会同时进入生成过程，模型需要在多个约束之间做取舍。",
      bullets: ["同一句提示词里，主体、动作、数量、空间关系可能互相拉扯", "模型会优先靠近训练集中更常见、更容易成立的画面模式", "复杂图像要靠多重控制：文本理解、布局约束、参考图、局部修正一起配合", "典型问题：六个手指、文字乱码、主体融合、左和右分不清"],
      visual: { type: "carousel", caption: "早期生成图像的问题：结构、文字、手部细节都容易失稳", items: [{ type: "image", src: "assets/frames_cropped/image_bad_old.jpg", label: "早期生成效果" }, { type: "diagram", variant: "image_artifacts", label: "错误类型拆解", maskSubtitles: false }, { type: "diagram", variant: "prompt_mismatch", label: "提示词冲突", maskSubtitles: false }] },
    },
    {
      ...base,
      uid: "image-layout-era",
      layout: "deepdive",
      title: "画面布局：主体、背景、文字区先稳定",
      core: "复杂画面要先稳定布局。主体、背景、文字区、视线和留白关系成立后，材质、光影和风格细节才有发挥空间。",
      bullets: [
        "图像模型早期容易局部好看、整体散掉，因为每块区域缺少统一规划",
        "布局控制会先确定主体位置、画面层级、文字区域和视觉动线",
        "这也是商业设计里最重要的一步：结构稳定后，风格和细节才有意义",
        "全局注意力的价值，是让整张画布的区域关系一起参与计算",
      ],
      visual: { type: "diagram", variant: "layout_blocks", caption: "版式先行：主体、背景、文字区、视线和留白要同时成立" },
    },
    {
      ...base,
      uid: "image-dit-era",
      layout: "technical",
      title: "DiT：让整张画布互相看见",
      core: "布局问题的底层原因，是局部区域之间缺少全局沟通。DiT 把图像切成 patch，用 Transformer 的自注意力让远处区域也能互相影响。",
      bullets: ["代表模型：DiT、PixArt、Imagen 3 / Gemini 图像模型中的相关思路", "优点：全局关系更强，主体、背景、文字区和构图更容易同时考虑", "缺点：计算成本更高，对高质量数据和训练规模要求更高", "数学骨架：image patches → self-attention → denoising"],
      visual: { type: "carousel", caption: "全局布局能力让模型同时考虑远处区域和局部细节", items: [{ type: "gif", src: "assets/gifs_cropped/layout_clip.gif", label: "布局能力演示" }, { type: "diagram", variant: "dit_global_attention", label: "Patch 全局通信", maskSubtitles: false }, { type: "diagram", variant: "layout_blocks", label: "版式结构", maskSubtitles: false }] },
      source: "Peebles & Xie, Scalable Diffusion Models with Transformers, arXiv:2212.09748",
    },
    {
      ...base,
      uid: "image-multimodal-era",
      layout: "technical",
      title: "多模态理解：把自然语言拆成视觉约束",
      core: "图像生成不只需要画布内部通信，还需要理解用户意图。多模态大模型会把自然语言需求拆成主体、动作、位置、风格和禁用项。",
      bullets: [
        "过去：提示词像关键词列表，模型容易抓住风格词，却漏掉数量、位置和关系",
        "现在：多模态模型可以先把需求拆成结构化约束，再交给生成过程执行",
        "这会明显改善复杂提示词、中文文字、海报排版和多轮编辑",
        "数学骨架：instruction → structured constraints → generation",
      ],
      visual: { type: "diagram", variant: "multimodal_reasoning", caption: "多模态理解让模型先读懂需求，再约束画面生成" },
    },
    {
      ...base,
      uid: "image-data-caption-era",
      layout: "technical",
      title: "自动标注：把图片变成结构化教材",
      core: "理解能力来自训练材料。粗标签只能告诉模型“图里大概有什么”，结构化标注才能告诉模型“在哪里、什么关系、什么材质、有哪些文字”。",
      bullets: ["人工标签常常只写“一个人在街上”，颗粒度太粗", "自动标注可以补充主体、动作、位置、材质、文字、风格和空间关系", "OCR 与多模态模型参与标注后，图像数据变成更细的结构化教材", "数据更细，模型才更容易把复杂提示词拆成可执行的画面约束", "文字识别和文字生成由此成为单独的训练重点"],
      visual: { type: "diagram", variant: "structured_caption_pipeline", caption: "自动标注：从一句粗标签，变成可训练的结构化说明" },
    },
    {
      ...base,
      uid: "image-ocr-rl-era",
      layout: "technical",
      title: "文字生成最难：错一笔就错了",
      core: "数据更细以后，模型能理解更多画面关系，但图中文字仍然是硬题。文字不是普通纹理，必须可读、准确、在正确位置。",
      bullets: [
        "OCR 判别器像阅卷老师：检查文字是否可识别、是否和提示词一致",
        "版式约束像格子纸：先让标题、正文、标识站到正确位置",
        "反馈训练会把错误样本变成改进信号，让模型减少乱码、错字和跑位",
        "数学骨架：reward = readable × correct × in_layout",
      ],
      visual: { type: "diagram", variant: "ocr_reward_loop", caption: "OCR 判别和反馈训练：文字错误会变成模型改进信号" },
    },
    {
      ...base,
      uid: "image-text-render-era",
      layout: "technical",
      title: "文字生成开始变稳：位置、字形、语义一起约束",
      core: "稳定文字生成不能只靠模型凭感觉画字。位置、字形、语义和可识别性必须同时进入约束，海报标题才可能稳定可用。",
      bullets: ["早期问题：模型把文字当装饰纹理，容易生成乱码和伪字", "解决路线：位置编码、版式网格、字体模板、OCR 判别器、强化学习反馈一起上", "代表能力：Nano Banana 2 与 GPT Image 2 这类新模型，已经能更稳定生成海报文字和中文排版", "数学骨架：L = L_image + λ · L_OCR + μ · L_layout"],
      visual: { type: "diagram", variant: "text_render_evolution", caption: "文字生成链路：位置、字形、OCR 复核和反馈校准" },
    },
    {
      ...base,
      uid: "image-template-render-era",
      layout: "technical",
      title: "更务实的办法：先写对，再画好看",
      core: "如果目标是海报或招牌，只靠模型凭空写字风险仍然高。更务实的做法是先用传统排版给出正确字形，再让模型做风格化渲染。",
      bullets: [
        "模板负责准确：字形、笔画、位置先由确定性工具给出",
        "生成模型负责美术：材质、光影、透视、风格由图像模型完成",
        "这样能把“写对字”和“画得好看”拆开解决",
        "这种方法把文字准确性和画面风格化拆成两个更可控的步骤",
        "适合海报标题、招牌、封面字和品牌物料草案",
      ],
      visual: { type: "diagram", variant: "template_text_render", caption: "文字模板像镂空版：模型沿着正确字形做风格化渲染" },
    },
    {
      ...base,
      uid: "image-inpaint-edit",
      layout: "media",
      title: "局部编辑：生成完还要能改",
      core: "真实项目里，一张图很少一次定稿。图像模型必须能只修改指定区域，同时保留背景、光线、材质和整体风格。",
      bullets: ["遮罩决定哪里可以变，哪里必须锁住", "语义分割先找到主体边界，减少白边、穿帮和光影断裂", "潜空间编辑会保留背景、光线、材质关系，让新物体更像原图里长出来的", "代表能力：自然语言说“把杯子换成橘子、保留桌面光影”，模型直接执行"],
      visual: { type: "carousel", caption: "局部重绘：只锁定需要改的区域，保留整体一致性", items: [{ type: "image", src: "assets/frames_cropped/image_inpaint.jpg", label: "局部编辑" }, { type: "diagram", variant: "segmentation_mask", label: "先找修改范围", maskSubtitles: false }, { type: "diagram", variant: "latent_edit", label: "潜空间微调", maskSubtitles: false }] },
    },
    {
      ...base,
      uid: "image-edit-consistency",
      layout: "deepdive",
      title: "局部能改以后，真正难的是保持一致",
      core: "局部编辑看起来只是“换个东西”，但模型实际要同时保持桌面光影、遮挡关系、透视方向、材质反射和背景不变。",
      bullets: [
        "局部要变：被选中的物体形状、颜色、材质需要重新生成",
        "整体不能变：背景、灯光、视角、风格和其他物体要锁住",
        "好的编辑模型会在潜空间里改语义，同时把未选区域当作强约束",
        "这就是当代图像模型从“出图”走向“可反复修改”的关键",
      ],
      visual: { type: "diagram", variant: "edit_consistency", caption: "自然语言编辑：局部变化和整体一致必须同时成立" },
    },
    {
      ...base,
      uid: "image-current-models",
      layout: "deepdive",
      title: "当代模型：图像生成进入对话式工作流",
      core: "当代图像模型同时处理生成、编辑、文字、版式、角色一致和背景保持。用户用自然语言提出目标，模型在同一张图上持续迭代。",
      bullets: ["Google Nano Banana 2：正式名 Gemini 3.1 Flash Image，继承 Pro 级图像能力，同时强调更快编辑和迭代", "GPT Image 2：面向高质量图像生成与编辑，强调自然语言改图、文字渲染和对话式迭代", "共同进步：能读懂更复杂的视觉任务，也能在同一张图上连续修改", "仍需复核：品牌字体、真实产品、版权 IP、医学/法律/金融等高风险图像不能直接无审发布"],
      visual: { type: "diagram", variant: "current_image_models", caption: "当代图像模型：生成、编辑、文字、版式进入同一个对话流程" },
    },
    {
      ...base,
      uid: "image-course-conclusion",
      layout: "hero",
      title: "第三章结论：AI 绘画的核心进步是可控",
      core: "AI 绘画的进步不只是画质变好，更是控制力增强。结构、角色、布局、语义、文字、局部编辑，最终汇成自然语言图像工作流。",
      bullets: ["画质进步：从能生成，到高分辨率、细节丰富", "控制进步：从提示词粗控制，到布局、姿态、文字和局部编辑", "工作流进步：从玩具出图，到角色、场景、海报、分镜和营销素材生产"],
      visual: { type: "diagram", variant: "image_workflow", caption: "AI 绘画工作流：概念、角色、场景、局部编辑、交付检查" },
    },
  ];
  slides.splice(startIndex, endIndex - startIndex, ...chapter);
}

function replaceVideoChapterSlides() {
  const startIndex = slides.findIndex((slide) => slide.sectionKey === "video");
  const endIndex = slides.findIndex((slide, index) => index > startIndex && slide.sectionKey !== "video");
  if (startIndex < 0 || endIndex < 0) return;
  const base = { section: "第四章 AI 视频", sectionKey: "video", source: "" };
  const chapter = [
    {
      ...base,
      uid: "video-chapter-opener",
      layout: "chapter",
      title: "AI 视频的技术演化",
      core: "AI 视频的进步主线，是从“让图片动起来”走向“直接生成一段可导演的时空内容”。时间连续、动作真实、镜头可控、音画同步，是这一章的四个关键词。",
      bullets: ["早期方法：逐帧生成或给图像模型加时间层，容易闪烁和变形", "核心升级：把视频看成三维时空块，用扩散和 DiT 同时处理空间与时间", "当代方向：多参考输入、镜头控制、物理一致、音画联合和视频编辑"],
      visual: { type: "diagram", variant: "video_evolution_timeline", caption: "AI 视频演化主线：连续性、可控性、物理感、音画同步逐步补齐" },
    },
    {
      ...base,
      uid: "video-era-map",
      layout: "deepdive",
      title: "先看技术升级的主线",
      core: "视频比图片多了时间维度。只要人物长相、衣服、背景、光线、动作轨迹有一项在时间上断掉，观众会立刻感觉不自然。",
      bullets: [
        "第一类问题：逐帧生成导致闪烁、变脸、背景跳变",
        "第二类问题：视频虽然连续，但提示词、参考图和镜头指令不够可控",
        "第三类问题：物理、长镜头、多人互动和音画同步仍然容易失稳",
        "课程看法：AI 视频的进步，本质是把时间变成模型可以理解和控制的对象",
      ],
      visual: { type: "diagram", variant: "video_problem_solution_chain", caption: "每一代视频模型都在补一个更难的短板" },
    },
    {
      ...base,
      uid: "video-frame-era",
      layout: "media",
      title: "第一阶段：把图片模型硬改成视频模型",
      core: "早期做法很直接：沿用图像扩散模型的 U-Net，再加入时间层，让模型一帧一帧生成画面并尽量接起来。",
      bullets: [
        "代表路线：AnimateDiff、早期 image-to-video、给 2D U-Net 加 temporal layer",
        "优点：复用成熟图像模型，能让静态图产生短动作",
        "短板：每一帧都像重新画一次，脸、手、背景和光线容易在帧间抖动",
        "数学骨架：frameₜ = U-Net(image, t, prompt)",
      ],
      visual: { type: "carousel", caption: "早期视频问题：帧与帧之间缺少稳定关系", items: [{ type: "image", src: "assets/frames_cropped/video_broken.jpg", label: "早期视频问题" }, { type: "diagram", variant: "image_to_video_unet", label: "图像模型加时间层", maskSubtitles: false }, { type: "diagram", variant: "temporal_break", label: "帧间断裂", maskSubtitles: false }] },
    },
    {
      ...base,
      uid: "video-temporal-failure",
      layout: "deepdive",
      title: "逐帧生成最大的问题：每帧都像换了一个世界",
      core: "人眼对时间错误非常敏感。静态图里一个细节略微不准，观众可能还能接受；视频里同一个人的脸每秒变化十几次，违和感会被放大。",
      bullets: [
        "身份漂移：上一秒像同一个人，下一秒五官比例发生变化",
        "背景漂移：墙面、窗户、道具、光源位置突然跳动",
        "动作漂移：手没有真的抓住物体，脚步和地面接触不稳定",
        "技术原因：模型只看局部帧，很难记住远处时间点的信息",
      ],
      visual: { type: "diagram", variant: "temporal_error_board", caption: "视频错误不是单帧错误，而是时间上的连续错误" },
    },
    {
      ...base,
      uid: "video-spacetime-block",
      layout: "technical",
      title: "关键转向：视频是一整块时空内容",
      core: "更合理的做法，是不再把视频当作很多张图片拼起来，而是把它看成宽、高、时间同时存在的三维时空块。",
      bullets: [
        "图片只有两个主要维度：宽 W、高 H",
        "视频多了第三个维度：时间 T",
        "模型要学的是整块内容如何从噪声里出现，而不是只学单帧图像怎么变清楚",
        "数学骨架：Video ∈ R^(T×H×W×C)",
      ],
      visual: { type: "carousel", caption: "视频是一块连续时空：宽、高、时间必须一起建模", items: [{ type: "diagram", variant: "spacetime_cube", label: "W × H × T", maskSubtitles: false }, { type: "diagram", variant: "video_diffusion_3d", label: "3D 噪声去噪", maskSubtitles: false }, { type: "gif", src: "assets/gifs_cropped/spacetime_clip.gif", label: "时空块演示" }] },
    },
    {
      ...base,
      uid: "video-3d-diffusion",
      layout: "technical",
      title: "三维扩散：从一整块噪声里生成视频",
      core: "图像扩散从二维噪声生成图片，视频扩散则从三维噪声生成一段视频。每一步去噪都要同时考虑画面内容和时间连续。",
      bullets: [
        "训练时：给真实视频逐步加噪，让模型学习预测噪声",
        "生成时：从随机三维噪声开始，一步步擦出角色、场景、动作和镜头",
        "优点：视频作为整体生成，帧间一致性明显好于独立拼接",
        "数学骨架：xₜ = √αₜx₀ + √(1-αₜ)ε，其中 x₀ 是视频时空块",
      ],
      visual: { type: "diagram", variant: "video_diffusion_3d", caption: "视频扩散：噪声、画面、动作和时间一起收敛" },
      source: "Ho et al., Video Diffusion Models, arXiv:2204.03458",
    },
    {
      ...base,
      uid: "video-compute-explosion",
      layout: "technical",
      title: "视频变成三维后，计算量立刻爆炸",
      core: "图片只需要处理一张画布，视频要处理几十到上百张画布。分辨率、帧数、生成步数同时增加，显存和算力压力会快速放大。",
      bullets: [
        "一张 1024×1024 图像已经很大，一段 5 秒视频可能包含 120 帧以上",
        "像素数量近似按 T 倍增长，注意力计算还可能按 token 数平方增长",
        "模型必须把巨大时空块切小，才可能在合理成本下训练和生成",
        "数学骨架：tokens ≈ (T/t) × (H/h) × (W/w)",
      ],
      visual: { type: "diagram", variant: "video_compute_blowup", caption: "时间维度让数据规模和注意力成本同时上升" },
    },
    {
      ...base,
      uid: "video-unet-limit",
      layout: "technical",
      title: "第一道瓶颈：时空块太大，局部网络记不远",
      core: "三维扩散把视频当整体处理，但也带来新问题：整块视频太大，传统 U-Net 更擅长局部修细节，不擅长让远处时间点互相通信。",
      bullets: [
        "局部卷积像拿小窗口看世界，适合处理边缘、纹理和短距离结构",
        "视频需要跨时间记忆：第 1 帧的服装颜色，要影响第 80 帧的角色外观",
        "只靠局部窗口，模型容易出现“短距离清楚、长距离漂移”",
        "能力缺口：需要一种结构，让远处画面块也能互相看见",
      ],
      visual: { type: "diagram", variant: "unet_receptive_limit", caption: "局部感受野不足时，远处时间点的信息传不过来" },
    },
    {
      ...base,
      uid: "video-token-era",
      layout: "technical",
      title: "解决办法：把视频切成可计算的 token",
      core: "Transformer 不能直接吞下一整块视频，必须先把它切成很多小立方体。每个 token 都带着空间位置和时间位置，模型才知道“哪里、何时、发生了什么”。",
      bullets: [
        "图像 token：表示画布上的一个 patch",
        "视频 token：表示时空块里的一个小立方体 patch(x, y, t)",
        "切块以后，巨大视频被拆成一串可以参与注意力计算的单位",
        "数学骨架：zᵢ = PatchEmbed(video[x, y, t])",
      ],
      visual: { type: "carousel", caption: "视频 token 同时携带空间坐标和时间坐标", items: [{ type: "diagram", variant: "video_token_coords", label: "x / y / t 坐标", maskSubtitles: false }, { type: "diagram", variant: "video_tokens", label: "时空小块", maskSubtitles: false }, { type: "diagram", variant: "spatiotemporal_dit", label: "进入 DiT", maskSubtitles: false }] },
      source: "Peebles & Xie, Scalable Diffusion Models with Transformers, arXiv:2212.09748",
    },
    {
      ...base,
      uid: "video-dit-attention",
      layout: "technical",
      title: "DiT：让整段视频建立全局关系",
      core: "视频被切成 token 后，DiT 用自注意力计算 token 之间的关系。人物的脸、服装、道具、光线，即使相隔很多帧，也能在计算中互相影响。",
      bullets: [
        "相邻帧建立短距离关系，减少抖动和闪烁",
        "远距离帧建立长距离关系，减少变脸和场景漂移",
        "空间区域建立全局关系，让主体、背景和光线一起变化",
        "数学骨架：Attention(Q,K,V)=softmax(QKᵀ/√d)V",
      ],
      visual: { type: "diagram", variant: "spatiotemporal_dit", caption: "DiT 用自注意力把空间和时间里的小块连起来" },
    },
    {
      ...base,
      uid: "video-continuity",
      layout: "deepdive",
      title: "内部连续性：先让视频像同一个世界",
      core: "DiT 解决的是视频内部关系。视频看起来顺滑，不只是帧率高，而是身份、场景、运动三条轨道在时间上都能稳定延续。",
      bullets: [
        "身份一致：角色脸、发型、服装、体型不随时间漂移",
        "场景一致：背景结构、光源方向、道具位置不会突然跳变",
        "运动一致：速度、方向、接触、惯性符合观众的常识",
        "内部连续性解决“能不能像一段视频”，还没有解决“能不能按人想要的方式生成”",
      ],
      visual: { type: "diagram", variant: "consistency_tracks", caption: "身份、场景、动作是视频连续性的三条主线" },
    },
    {
      ...base,
      uid: "video-cross-attention",
      layout: "technical",
      title: "外部控制：连续之后，还要听指挥",
      core: "内部连续只能保证视频不容易崩。真实创作还需要指定人物、动作、风格、镜头和情绪，交叉注意力负责把这些外部条件接入去噪过程。",
      bullets: [
        "自注意力：视频 token 之间互相看，解决内部连续性",
        "交叉注意力：视频 token 看文字、图片、音频和参考片段，解决外部控制",
        "提示词控制主体、动作、风格、镜头和情绪，参考素材负责给更具体的锚点",
        "数学骨架：Attn(Q_video, K_cond, V_cond)",
      ],
      visual: { type: "diagram", variant: "video_cross_attention", caption: "交叉注意力让视频生成过程持续参考用户输入" },
    },
    {
      ...base,
      uid: "video-reference-control",
      layout: "media",
      title: "控制升级：从一句提示词到多参考素材",
      core: "一句提示词很难描述完整画面。文字、图片、视频、音频同时作为参考后，模型可以分别锁定角色外观、场景构图、动作节奏、镜头语言和声音风格。",
      bullets: [
        "图片参考：锁定角色长相、服装、产品和场景风格",
        "视频片段：提供动作节奏、镜头运动、转场和视觉效果",
        "音频参考：提供说话节奏、音乐氛围、环境音和情绪强度",
        "Seedance 2.0 官方说明支持混合输入：文本、图像、音频、视频四类模态",
      ],
      visual: { type: "carousel", caption: "多参考输入把创作从“写提示词”推进到“给素材导演”", items: [{ type: "diagram", variant: "all_round_reference", label: "多参考输入", maskSubtitles: false }, { type: "diagram", variant: "reference_lock", label: "角色身份证", maskSubtitles: false }, { type: "image", src: "assets/frames_cropped/video_control.jpg", label: "参考图控制" }] },
      source: "ByteDance Seed, Seedance 2.0 Official Launch, 2026-02-12",
    },
    {
      ...base,
      uid: "video-keyframe-control",
      layout: "technical",
      title: "首尾帧控制：先固定起点和终点",
      core: "多参考素材解决“长什么样”，首尾帧进一步解决“从哪里到哪里”。它适合做明确动作过渡，让模型在两个视觉锚点之间补出中间过程。",
      bullets: [
        "首帧定义起点：角色是谁、站在哪里、场景长什么样",
        "尾帧定义终点：动作结束在哪里、构图和姿态如何收束",
        "中间帧负责补动作：速度、转身、遮挡、光影过渡要自然",
        "数学骨架：video = diffusion(noise | frame_start, frame_end, prompt)",
      ],
      visual: { type: "diagram", variant: "keyframe_bridge", caption: "首尾帧像两个钉子，中间动作由模型补齐" },
    },
    {
      ...base,
      uid: "video-pose-motion",
      layout: "technical",
      title: "姿态与轨迹控制：把动作说清楚",
      core: "首尾帧只规定结果，复杂动作还需要中间过程。姿态骨架、深度图、运动轨迹可以把“跳舞、奔跑、转身”拆成更明确的运动约束。",
      bullets: [
        "姿态骨架：控制身体关键点的位置变化",
        "深度或光流：控制空间层次和运动方向",
        "轨迹线：控制主体在画面中的移动路径",
        "适用场景：分镜预演、角色动作、广告镜头、复杂互动镜头",
      ],
      visual: { type: "carousel", caption: "动作控制把“做什么动作”变成可计算的轨迹约束", items: [{ type: "diagram", variant: "pose_skeleton", label: "姿态骨架", maskSubtitles: false }, { type: "diagram", variant: "motion_trajectory", label: "运动轨迹", maskSubtitles: false }, { type: "diagram", variant: "video_control_stack", label: "动作控制栈", maskSubtitles: false }] },
    },
    {
      ...base,
      uid: "video-physics-hard",
      layout: "deepdive",
      title: "动作能控以后，物理问题会被放大",
      core: "当人物开始按计划运动，观众会更关注动作是否真实。视频模型看过大量视频，不等于真正理解重力、碰撞、摩擦、接触和惯性。",
      bullets: [
        "接触关系：手要真的抓住杯子，脚要真的踩在地面上",
        "重力与惯性：衣服、头发、物体下落要符合运动方向",
        "多主体互动：两个人推拉、跳跃、碰撞时，力量传递要合理",
        "物理感需要数据、模型结构和反馈训练一起提升",
      ],
      visual: { type: "diagram", variant: "physics_fail", caption: "物理错误常常不是画面不好看，而是世界规则不成立" },
    },
    {
      ...base,
      uid: "video-physics-solution",
      layout: "technical",
      title: "物理校准：给模型一套世界规则",
      core: "物理感不能只靠提示词补。更可靠的路线，是用物理引擎或高质量标注数据提供标准运动轨迹，再把生成错误转成训练信号。",
      bullets: [
        "物理引擎：Unity、Unreal Engine 等可以生成可控的合成运动数据",
        "判别器：检查接触、重力、碰撞、轨迹是否合理",
        "反馈训练：把不合理动作转成惩罚，推动模型减少物理穿帮",
        "数学骨架：L = L_video + λL_motion + μL_physics",
      ],
      visual: { type: "diagram", variant: "physics_engine_loop", caption: "物理数据和反馈训练帮助模型学习世界规则" },
    },
    {
      ...base,
      uid: "video-camera-control",
      layout: "technical",
      title: "镜头控制：真实运动之外，还要会运镜",
      core: "物理校准让主体运动更可信，但视频创作还需要镜头语言。推、拉、摇、移、环绕、跟拍，都要求模型理解摄像机姿态和画面透视变化。",
      bullets: [
        "物体运动：角色、车辆、道具在世界里怎么移动",
        "摄像机运动：机位、焦距、旋转、推拉如何改变画面",
        "CameraPose 可以把镜头位姿编码成控制信号，注入生成过程",
        "数学骨架：frame = render(scene, camera_poseₜ)",
      ],
      visual: { type: "carousel", caption: "镜头控制让 AI 视频更接近“可导演”的镜头语言", items: [{ type: "diagram", variant: "camera_pose_control", label: "CameraPose", maskSubtitles: false }, { type: "diagram", variant: "camera_path", label: "镜头路径", maskSubtitles: false }, { type: "gif", src: "assets/gifs_cropped/control_clip.gif", label: "镜头控制示意" }] },
    },
    {
      ...base,
      uid: "video-long-context",
      layout: "technical",
      title: "长内容问题：一个好镜头还不等于一段长片",
      core: "当单个镜头可以控制，新的瓶颈会转向长度。视频越长，token 数越多，显存和注意力成本越高，系统通常要把长视频拆成多个片段。",
      bullets: [
        "一次生成太长：计算量高，角色和场景更容易漂移",
        "分段生成：每段只处理有限长度，降低显存压力",
        "关键挑战：片段之间必须保持角色、服装、场景和故事状态一致",
        "数学骨架：segmentₙ = F(prompt, memoryₙ₋₁)",
      ],
      visual: { type: "carousel", caption: "长视频更像分段拍摄：每一段都要保留前一段状态", items: [{ type: "diagram", variant: "segmented_generation", label: "分段接力", maskSubtitles: false }, { type: "diagram", variant: "long_context", label: "长上下文记忆", maskSubtitles: false }, { type: "image", src: "assets/frames_cropped/video_long.jpg", label: "长视频分段" }] },
    },
    {
      ...base,
      uid: "video-memory-handoff",
      layout: "technical",
      title: "片段接力：让多个镜头保持同一状态",
      core: "分段生成降低计算压力，但片段之间不能重置。常见做法是把最后几帧、角色参考图、场景描述和动作状态作为条件输入，让新片段延续同一个世界。",
      bullets: [
        "最后几帧：提供角色姿态、镜头方向、光线和场景状态",
        "角色参考：提供外观锚点，减少多段生成里的变脸",
        "剧情状态：告诉模型事件发展到哪里，避免动作和关系重置",
        "数学骨架：memory = {last frames, reference, state}",
      ],
      visual: { type: "diagram", variant: "memory_handoff", caption: "片段之间传递视觉记忆，长视频才不容易断" },
    },
    {
      ...base,
      uid: "video-audio-sync",
      layout: "technical",
      title: "音画同步：长内容必须把声音一起算",
      core: "多个镜头能接起来之后，声音就成为下一个关键变量。如果先出画面再随便配音，口型、节奏、动作和环境声很容易错位。",
      bullets: [
        "口型同步：说话内容、嘴型开合、表情节奏要对齐",
        "动作同步：脚步声、碰撞声、衣料声要跟动作发生点一致",
        "氛围同步：音乐和环境音要服务画面情绪和剪辑节奏",
        "数学骨架：[video tokens, audio tokens] → joint attention",
      ],
      visual: { type: "carousel", caption: "原生音视频模型让声音和画面一起生成、一起对齐", items: [{ type: "diagram", variant: "audio_sync", label: "波形与口型", maskSubtitles: false }, { type: "diagram", variant: "native_av_tokens", label: "音视频 token", maskSubtitles: false }, { type: "diagram", variant: "native_video_model", label: "多模态视频模型", maskSubtitles: false }] },
    },
    {
      ...base,
      uid: "video-seedance-current",
      layout: "deepdive",
      title: "当代模型：把多种控制合进一个系统",
      core: "Seedance 2.0 代表了当代视频模型的综合方向：把文字、图像、视频、音频放进统一音视频生成架构里，让创作者用多种素材共同指挥一段视频。",
      bullets: [
        "官方信息：支持文本、图像、音频、视频四类输入，直接生成 4 到 15 秒音视频内容",
        "多参考能力：最多可参考多张图片、多个视频片段和多个音频片段，用来控制角色、构图、动作、镜头和声音",
        "重点进步：复杂运动稳定性、物理合理性、指令遵循、视频延展和编辑能力",
        "仍需复核：多主体一致性、文字渲染、复杂编辑、真实人物和版权 IP 使用风险",
      ],
      visual: { type: "diagram", variant: "seedance_multi_input", caption: "多参考生成：文本、图片、视频、音频共同约束输出" },
      source: "Team Seedance, Seedance 2.0: Advancing Video Generation for World Complexity, arXiv:2604.14148",
    },
    {
      ...base,
      uid: "video-workflow",
      layout: "deepdive",
      title: "进入生产：不只看画面，还要看流程能力",
      core: "当代模型能力很强，但公开课最终要落回内容生产判断。一个视频模型能不能用于真实项目，要看它能否被导演、被修改、被延展、被审核。",
      bullets: [
        "可导演：主体、动作、镜头、节奏、声音能被清楚控制",
        "可修改：局部镜头、角色动作、台词和音效能按指令调整",
        "可延展：短片段能接成长内容，角色和场景不轻易断掉",
        "可审核：版权、肖像、品牌调性、合规风险可以被流程化检查",
      ],
      visual: { type: "diagram", variant: "video_workflow_gates", caption: "从演示样片到内容生产，需要可控、可改、可延展、可审核" },
    },
    {
      ...base,
      uid: "video-course-conclusion",
      layout: "hero",
      title: "第四章结论：AI 视频的核心进步是可导演",
      core: "AI 视频从早期的帧间崩坏，发展到时空建模、多参考控制、物理校准、镜头控制和音画联合。真正的变化，是模型开始从“会生成片段”走向“能被创作者稳定指挥”。",
      bullets: [
        "技术主线：逐帧拼接 → 时空扩散 → DiT 全局通信 → 多模态音视频生成",
        "创作主线：随机出片 → 参考控制 → 镜头导演 → 多段延展与编辑",
        "落地主线：适合动态分镜、概念短片、广告预演、社媒短内容和 AI 漫剧试制",
      ],
      visual: { type: "diagram", variant: "video_workflow_use_cases", caption: "AI 视频能力最终要落回真实内容流程" },
    },
  ];
  slides.splice(startIndex, endIndex - startIndex, ...chapter);
}

function renumberSlides() {
  const sectionNames = new Map();
  for (const slide of slides) {
    if (!sectionNames.has(slide.sectionKey)) sectionNames.set(slide.sectionKey, slide.section || "");
  }
  slides.forEach((slide, index) => {
    slide.id = index + 1;
    const section = sectionNames.get(slide.sectionKey) || slide.section || "";
    slide.section = section;
    slide.eyebrow = `${String(slide.id).padStart(2, "0")} / ${section}`;
  });
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

function slideNumberOf(slide) {
  const index = slides.indexOf(slide);
  return index >= 0 ? index + 1 : slide.id;
}

function renderSlide(slide) {
  const titleTag = slide.id === 1 ? "h1" : "h2";
  const source = slide.source ? `<div class="source">参考：${escapeHtml(slide.source)}</div>` : "";
  return `
    <section class="slide layout-${slide.layout}" data-id="${slideNumberOf(slide)}">
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
  if (slide.layout === "chapter" && (!slide.bullets || slide.bullets.length === 0)) {
    return `<ul class="bullets">${chapterAgenda(slide.sectionKey).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
  }
  if (slide.layout === "hero" && slide.id !== 1) {
    return `<ul class="bullets">${slide.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
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
  const uidCustom = {
    "llm-library-token-human": { title: "图书馆类比", text: "当前 token 带着词义和位置进入上下文，准备主动检索线索。", formula: "qᵢ = Wq xᵢ" },
    "llm-library-search-cards": { title: "匹配标签", text: "Query 和 Key 匹配，得到每个上下文位置的相关性分数。", formula: "scoreᵢⱼ = qᵢ · kⱼ" },
    "llm-library-read-return": { title: "带回信息", text: "权重决定读多少，Value 决定带回什么，新向量融合上下文。", formula: "zᵢ = Σ aᵢⱼvⱼ" },
    "image-era-map": { title: "演化主线", text: "这一章按问题推进：画质、语义、布局、文字、编辑逐步被解决。", formula: "problem → method" },
    "image-gan-vae-era": { title: "早期生成", text: "VAE 和 GAN 证明机器能生成图，但缺少自然语言控制。", formula: "z → G(z)" },
    "image-dalle-clip-era": { title: "语义对齐", text: "文字和图像进入同一语义空间后，提示词才开始能指挥画面。", formula: "text ↔ image" },
    "image-diffusion-era": { title: "扩散模型", text: "扩散把直接作画改成逐步去噪，画质和稳定性明显提升。", formula: "xₜ = √αₜx₀ + √(1-αₜ)ε" },
    "image-unet-stable": { title: "画质之后", text: "扩散解决画质，精确结构需要额外控制信号。", formula: "quality → control" },
    "image-controlnet-era": { title: "结构控制", text: "ControlNet 把结构直接喂给模型，解决“只靠文字说不清”的问题。", formula: "text + map" },
    "image-sd-ecosystem-era": { title: "角色稳定", text: "结构能控后，还要用 LoRA 和参考图稳住角色、服装和风格。", formula: "θ' = θ + Δθ" },
    "image-prompt-problems": { title: "剩余问题", text: "工具变多后，复杂提示词仍会在语义、数量、位置之间冲突。", formula: "constraints conflict" },
    "image-layout-era": { title: "先控布局", text: "多约束冲突时先锁画面结构，主体和文字区稳定后再谈细节。", formula: "layout first" },
    "image-dit-era": { title: "全局通信", text: "DiT 用 patch 自注意力补足整张画布的全局关系。", formula: "patch attention" },
    "image-multimodal-era": { title: "读懂任务", text: "全局通信之外，还需要先把自然语言拆成可执行约束。", formula: "instruction → constraints" },
    "image-data-caption-era": { title: "数据支撑", text: "更强理解来自更细训练数据，自动标注把图片变成结构化教材。", formula: "image → caption+" },
    "image-ocr-rl-era": { title: "进入文字", text: "文字是最硬的局部细节，必须用 OCR 和反馈让模型知道错在哪里。", formula: "reward = readable" },
    "image-text-render-era": { title: "文字变稳", text: "位置、字形、语义一起约束，海报标题才开始可用。", formula: "L_image + L_OCR" },
    "image-template-render-era": { title: "工程解法", text: "模板负责写对字，扩散负责渲染风格，把准确和美术拆开。", formula: "template + diffusion" },
    "image-inpaint-edit": { title: "进入修改", text: "文字和布局可控后，真实工作流还要求生成完能局部修改。", formula: "mask + latent" },
    "image-edit-consistency": { title: "一致性", text: "局部能变，整体不变，是自然语言修图真正难的地方。", formula: "edit + preserve" },
    "image-current-models": { title: "最终形态", text: "当代模型把生成、编辑、文字、版式汇入图像对话流程。", formula: "generate → edit" },
    "video-era-map": { title: "演化主线", text: "视频模型围绕时间连续、控制能力、物理真实和音画同步逐步升级。", formula: "time → control" },
    "video-frame-era": { title: "早期路线", text: "图像模型加时间层能让图动起来，但跨帧记忆不足。", formula: "frameₜ = F(frameₜ₋₁)" },
    "video-temporal-failure": { title: "时间错误", text: "视频的错误会沿时间放大，身份、背景和动作都要连续。", formula: "identity(t) ≈ stable" },
    "video-spacetime-block": { title: "时空块", text: "视频不再是一叠图片，而是一整块 W×H×T 的连续内容。", formula: "V ∈ R^(T×H×W×C)" },
    "video-3d-diffusion": { title: "三维扩散", text: "从三维噪声生成整段视频，让画面和动作一起收敛。", formula: "xₜ = √αₜx₀ + √(1-αₜ)ε" },
    "video-compute-explosion": { title: "计算压力", text: "时间维度让 token 数激增，必须切块和分段计算。", formula: "N ≈ T·H·W / patch" },
    "video-unet-limit": { title: "U-Net 短板", text: "局部窗口适合细节，长距离时间一致需要全局通信。", formula: "local ≠ long memory" },
    "video-token-era": { title: "视频 token", text: "小立方体 token 同时记录空间位置和时间位置。", formula: "patch(x,y,t)" },
    "video-dit-attention": { title: "全局通信", text: "DiT 让远处帧和远处区域互相影响，减少变脸和闪烁。", formula: "softmax(QKᵀ/√d)V" },
    "video-continuity": { title: "一致性轨道", text: "身份、场景、动作三条轨道稳定，视频才像同一个世界。", formula: "ID + scene + motion" },
    "video-cross-attention": { title: "条件控制", text: "交叉注意力把文字、图像、音频、视频参考接入生成过程。", formula: "Attn(Qv,Kc,Vc)" },
    "video-reference-control": { title: "多参考", text: "参考素材给角色、动作、镜头和声音提供明确锚点。", formula: "text + image + video + audio" },
    "video-keyframe-control": { title: "首尾帧", text: "起点和终点固定后，中间动作由模型补齐。", formula: "start → motion → end" },
    "video-pose-motion": { title: "动作控制", text: "姿态、深度、轨迹把抽象动作变成可计算约束。", formula: "pose(t), flow(t)" },
    "video-physics-hard": { title: "物理难点", text: "重力、碰撞、接触和惯性要符合观众常识。", formula: "world rules" },
    "video-physics-solution": { title: "物理校准", text: "标准轨迹、判别器和反馈训练把物理错误变成学习信号。", formula: "L_video + λL_motion" },
    "video-camera-control": { title: "镜头控制", text: "物体运动和摄像机运动分开建模，镜头才可导演。", formula: "camera_poseₜ" },
    "video-long-context": { title: "长视频", text: "长内容通常分段生成，再用记忆条件接住状态。", formula: "segmentₙ = F(memory)" },
    "video-memory-handoff": { title: "片段接力", text: "最后几帧、角色参考和剧情状态共同维持连续性。", formula: "last frames + state" },
    "video-audio-sync": { title: "音画同步", text: "音频 token 与视频 token 联合计算，口型和动作更容易对齐。", formula: "[V,A] attention" },
    "video-seedance-current": { title: "当代方向", text: "Seedance 2.0 代表多参考、原生音视频和复杂运动控制的综合路线。", formula: "multi-input → video+audio" },
    "video-workflow": { title: "工作流判断", text: "能被导演、修改、延展和审核，才适合进入真实生产。", formula: "control + edit + extend" },
  };
  if (slide.uid && uidCustom[slide.uid]) return uidCustom[slide.uid];

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
    18: { title: "Token + 向量", text: "文字先切成小块，再映射成模型能计算的数字向量。", formula: "text → token → vector" },
    19: { title: "语义坐标", text: "向量空间记录的是用法关系，相似语境会更靠近。", formula: "E[id] ∈ Rᵈ" },
    20: { title: "位置向量", text: "词义向量还要加上顺序信息，模型才知道每个 token 坐在哪里。", formula: "xᵢ = eᵢ + pᵢ" },
    21: { title: "注意力权重", text: "权重是阅读预算：越相关的位置，对当前理解影响越大。", formula: "weights = softmax(scores)" },
    22: { title: "QK 匹配", text: "Query 提问，Key 提供标签，点积得到相关性分数。", formula: "score = q · k" },
    23: { title: "加权读取", text: "分数变成比例后，按比例读取 Value 并汇总成新表示。", formula: "z = Σ a·v" },
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
    market_shift_anim: `
      <div class="diagram">
        <div class="shift-stage">
          <div class="shift-side old">
            <b>过去</b>
            <span>人先想方案</span>
            <span>再找素材</span>
            <span>最后手工剪出来</span>
          </div>
          <div class="shift-flow">
            <i></i><i></i><i></i>
          </div>
          <div class="shift-side now">
            <b>现在</b>
            <span>一句需求</span>
            <span>多模型协作</span>
            <span>快速生成小样</span>
          </div>
        </div>
      </div>
    `,
    aigc_changes: `
      <div class="diagram">
        <div class="change-grid">
          <div class="change-center"><b>AIGC</b><span>把想法更快变成可验证的小样</span></div>
          <div class="change-card c1"><b>创意</b><span>选题、人设、剧情方向更快成稿</span></div>
          <div class="change-card c2"><b>资产</b><span>角色、场景、风格图更快成型</span></div>
          <div class="change-card c3"><b>样片</b><span>分镜、镜头、动态预览更快可看</span></div>
          <div class="change-card c4"><b>反馈</b><span>播放、互动、到访数据更快回流</span></div>
        </div>
      </div>
    `,
    generation_modes: `
      <div class="diagram">
        <div class="gen-modes">
          <div><b>传统 AI</b><span>判断、分类、打分</span><em>这是不是猫？</em></div>
          <div><b>生成式 AI</b><span>续写、绘图、做视频</span><em>请生成一只猫的海报</em></div>
          <i></i>
        </div>
      </div>
    `,
    tokens: arrowRow([
      ["文字", "用毒毒毒蛇"],
      ["Token", "切成可处理小块"],
      ["向量", "变成语义坐标"],
    ]),
    context_parse: weightedWords(["用", "毒", "毒蛇", "毒蛇", "会不会", "被毒死"], [0.35, 0.72, 0.95, 0.85, 0.56, 0.9], "上下文共同决定含义"),
    tokenization_anim: tokenStrip(["用", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒死", "？"]),
    token_to_vector: `
      <div class="diagram">
        <div class="token-vector-flow">
          <div class="tv-sentence">用毒毒毒蛇，毒蛇会不会被毒死？</div>
          <div class="tv-tokens">
            ${["用", "毒", "毒蛇", "，", "毒蛇", "会不会", "被", "毒死", "？"].map((token, i) => `<span style="--i:${i}">${escapeHtml(token)}</span>`).join("")}
          </div>
          <div class="tv-arrow">Embedding lookup</div>
          <div class="tv-vectors">
            ${[
              ["用", "[0.21, -0.08, 0.64, ...]"],
              ["毒蛇", "[0.77, 0.12, -0.35, ...]"],
              ["毒死", "[-0.18, 0.69, 0.41, ...]"],
            ].map(([token, vector], i) => `<div style="--i:${i}"><b>${escapeHtml(token)}</b><code>${escapeHtml(vector)}</code></div>`).join("")}
          </div>
        </div>
      </div>
    `,
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
    position_encoding: `
      <div class="diagram">
        <div class="position-panel">
          ${[
            ["用", "e₁", "p₁", "x₁"],
            ["毒", "e₂", "p₂", "x₂"],
            ["毒蛇", "e₃", "p₃", "x₃"],
            ["被毒死", "e₈", "p₈", "x₈"],
          ].map(([token, embed, pos, out], i) => `
            <div class="pos-row" style="--i:${i}">
              <span>${escapeHtml(token)}</span>
              <code>${escapeHtml(embed)}</code>
              <em>+</em>
              <code>${escapeHtml(pos)}</code>
              <em>=</em>
              <code>${escapeHtml(out)}</code>
            </div>
          `).join("")}
          <div class="position-formula">x<sub>i</sub> = embedding(token<sub>i</sub>) + position<sub>i</sub></div>
        </div>
      </div>
    `,
    attention_weights: weightedWords(["当前词", "前文", "毒蛇", "会不会", "被毒死"], [0.38, 0.42, 0.9, 0.68, 0.95], "权重越高，模型读得越重"),
    attention_weight_budget: `
      <div class="diagram">
        <div class="attention-budget">
          <div class="budget-focus">
            <span>当前判断</span>
            <b>会不会被毒死</b>
          </div>
          <div class="budget-bars">
            ${[
              ["用", 18],
              ["毒", 32],
              ["毒蛇", 78],
              ["，", 6],
              ["毒蛇", 64],
              ["被毒死", 92],
            ].map(([label, weight], i) => `
              <div class="budget-row" style="--i:${i};--w:${weight}">
                <span>${escapeHtml(label)}</span>
                <i></i>
                <code>${(weight / 100).toFixed(2)}</code>
              </div>
            `).join("")}
          </div>
          <div class="budget-sum">Σ weights = 1</div>
        </div>
      </div>
    `,
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
    library_person_token: `
      <div class="diagram">
        <div class="library-stage person-token">
          <div class="library-door">
            <b>图书馆</b>
            <span>整句话的上下文</span>
          </div>
          <div class="token-person">
            <i></i>
            <b>当前 token</b>
            <span>“被毒死”</span>
          </div>
          <div class="token-badge">
            <code>xᵢ = eᵢ + pᵢ</code>
            <span>词义 + 位置</span>
          </div>
          <div class="walk-line"><i></i></div>
        </div>
      </div>
    `,
    library_search_cards: `
      <div class="diagram">
        <div class="library-stage search-cards">
          <div class="query-card">
            <b>Query</b>
            <span>我现在要找什么线索？</span>
            <code>qᵢ</code>
          </div>
          <div class="book-shelf">
            ${[
              ["用", "k₁", 0.18],
              ["毒", "k₂", 0.32],
              ["毒蛇", "k₃", 0.81],
              ["会不会", "k₆", 0.54],
              ["被毒死", "k₈", 0.93],
            ].map(([label, key, score], i) => `
              <div class="book-card" style="--i:${i};--s:${score}">
                <b>${escapeHtml(label)}</b>
                <span>${escapeHtml(key)}</span>
                <code>${Number(score).toFixed(2)}</code>
              </div>
            `).join("")}
          </div>
          <div class="match-formula">score<sub>ij</sub> = q<sub>i</sub> · k<sub>j</sub></div>
        </div>
      </div>
    `,
    library_read_return: `
      <div class="diagram">
        <div class="library-stage read-return">
          <div class="reading-table">
            ${[
              ["毒蛇", "0.41", "v₃"],
              ["被毒死", "0.46", "v₈"],
              ["会不会", "0.10", "v₆"],
              ["逗号", "0.03", "v₄"],
            ].map(([label, weight, value], i) => `
              <div class="read-book" style="--i:${i};--w:${Number(weight)}">
                <b>${escapeHtml(label)}</b>
                <span>权重 ${escapeHtml(weight)}</span>
                <code>${escapeHtml(value)}</code>
              </div>
            `).join("")}
          </div>
          <div class="return-card">
            <span>带回的新理解</span>
            <b>zᵢ</b>
            <code>Σ aᵢⱼ vⱼ</code>
          </div>
        </div>
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
    image_evolution_timeline: imageEvolutionTimeline(),
    image_problem_solution_chain: imageProblemSolutionChain(),
    gan_vae_compare: modelCompare([
      ["VAE", "稳定、可解释", "图像偏糊，细节弱"],
      ["GAN", "细节锐利", "训练不稳，容易模式坍塌"],
    ]),
    text_image_alignment: arrowRow([
      ["文字", "一段提示词"],
      ["共享语义空间", "CLIP / 多模态对齐"],
      ["图像", "符合描述的视觉内容"],
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
    unet_stable_pipeline: `
      <div class="diagram">
        <div class="image-pipeline">
          <div><b>Prompt</b><span>文字条件 c</span></div>
          <i></i>
          <div><b>Latent Noise</b><span>xₜ</span></div>
          <i></i>
          <div><b>U-Net</b><span>预测噪声 εθ</span></div>
          <i></i>
          <div><b>Image</b><span>逐步还原</span></div>
        </div>
        <div class="formula-lite" style="margin-top:24px">ε<sub>θ</sub>(x<sub>t</sub>, t, c)</div>
      </div>
    `,
    controlnet_pipeline: `
      <div class="diagram">
        <div class="controlnet-panel">
          <div class="control-map"><b>控制图</b><span>姿态 / 边缘 / 深度 / 草图</span></div>
          <div class="control-plus">+</div>
          <div class="control-map prompt"><b>提示词</b><span>风格 / 主体 / 材质</span></div>
          <div class="control-arrow">→</div>
          <div class="control-output"><b>可控生成</b><span>结构按图走，风格按文本走</span></div>
        </div>
      </div>
    `,
    sd_ecosystem: `
      <div class="diagram">
        <div class="sd-ecosystem">
          <div class="sd-core"><b>Stable Diffusion</b><span>基础生成能力</span></div>
          ${[
            ["LoRA", "角色 / 画风微调"],
            ["ControlNet", "姿态 / 边缘 / 深度"],
            ["Inpaint", "局部重绘"],
            ["Reference", "参考图锁定风格"],
          ].map(([name, desc], i) => `<div class="sd-node n${i}" style="--i:${i}"><b>${escapeHtml(name)}</b><span>${escapeHtml(desc)}</span></div>`).join("")}
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
    dit_global_attention: `
      <div class="diagram">
        <div class="dit-grid">
          ${Array.from({ length: 36 }, (_, i) => `<span style="--i:${i}">${i % 7 === 0 ? "↔" : ""}</span>`).join("")}
          <b>DiT</b>
          <em>每个 patch 都能看见其他 patch</em>
        </div>
      </div>
    `,
    dataset_tags: tagCloud(["夜景", "近景", "侧脸", "金属材质", "中文招牌", "低角度", "暖光", "雨天"]),
    auto_caption: arrowRow([
      ["图片", "无结构素材"],
      ["自动描述", "主体 / 风格 / 位置"],
      ["训练样本", "图文对应更细"],
    ]),
    structured_caption_pipeline: `
      <div class="diagram">
        <div class="caption-pipeline">
          <div><b>原图</b><span>只有像素</span></div>
          <i></i>
          <div><b>OCR + VLM</b><span>识别文字、主体、位置</span></div>
          <i></i>
          <div><b>结构化标注</b><span>主体 / 动作 / 材质 / 布局</span></div>
          <i></i>
          <div><b>训练样本</b><span>图文对应更细</span></div>
        </div>
      </div>
    `,
    ocr_reward_loop: `
      <div class="diagram">
        <div class="ocr-loop">
          <div><b>生成海报</b><span>图像 + 文字</span></div>
          <i></i>
          <div><b>OCR 判别</b><span>能不能读、读得对不对</span></div>
          <i></i>
          <div><b>反馈训练</b><span>错字、跑位、乱码变成惩罚</span></div>
          <em>readable × correct × in_layout</em>
        </div>
      </div>
    `,
    text_render_pipeline: `
      <div class="diagram">
        <div class="arrow-row">
          <div class="node"><b>位置</b><span>文字区域和版式先确定</span></div>
          <div class="arrow">→</div>
          <div class="node"><b>字形</b><span>模板约束笔画结构</span></div>
          <div class="arrow">→</div>
          <div class="node"><b>复核</b><span>OCR 检查是否可读</span></div>
          <div class="arrow">→</div>
          <div class="node"><b>反馈</b><span>错误样本继续校准</span></div>
        </div>
        <div class="formula-lite" style="margin-top:28px">位置约束 + 字形模板 + OCR 判别 + 强化学习反馈</div>
      </div>
    `,
    text_render_evolution: `
      <div class="diagram">
        <div class="text-evolution-panel">
          <div class="bad-text"><b>A1 绘酉</b><span>早期：像字，但不可读</span></div>
          <div class="text-steps">
            <span>位置网格</span>
            <span>字形模板</span>
            <span>OCR 复核</span>
            <span>反馈训练</span>
          </div>
          <div class="good-text"><b>AI 海报标题</b><span>现在：文字、版式、语义一起控制</span></div>
        </div>
      </div>
    `,
    template_text_render: `
      <div class="diagram">
        <div class="template-render">
          <div class="template-box"><b>AI 海报</b><span>确定性字形模板</span></div>
          <div class="template-arrow">→</div>
          <div class="render-box"><b>AI 海报</b><span>金属 / 霓虹 / 石刻 / 水墨</span></div>
        </div>
      </div>
    `,
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
    current_image_models: `
      <div class="diagram">
        <div class="current-models">
          <div>
            <strong>Google</strong>
            <b>Nano Banana 2</b>
            <span>Gemini 3.1 Flash Image：Pro 级能力 + 更快编辑迭代</span>
          </div>
          <div>
            <strong>OpenAI</strong>
            <b>GPT Image 2</b>
            <span>自然语言生成与编辑、文字渲染、对话式迭代</span>
          </div>
          <em>输入一句需求 → 生成 → 继续说怎么改 → 保持画面一致</em>
        </div>
      </div>
    `,
    edit_consistency: `
      <div class="diagram">
        <div class="edit-consistency">
          <div class="edit-scene">
            <span class="locked">背景锁定</span>
            <span class="target">局部重绘</span>
            <span class="light">光影延续</span>
          </div>
          <div class="edit-rules">
            <div><b>改局部</b><span>主体形状、材质和颜色重新生成</span></div>
            <div><b>保整体</b><span>背景、透视、光照和风格继续一致</span></div>
            <div><b>听语言</b><span>用自然语言描述修改目标</span></div>
          </div>
        </div>
      </div>
    `,
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
    video_evolution_timeline: videoEvolutionTimeline(),
    video_problem_solution_chain: videoProblemSolutionChain(),
    image_to_video_unet: imageToVideoUnet(),
    temporal_error_board: temporalErrorBoard(),
    temporal_break: frameStrip(["角色正常", "脸变形", "背景跳变", "手部消失"], true),
    spacetime_cube: cubeDiagram(),
    video_diffusion_3d: videoDiffusion3d(),
    video_compute_blowup: videoComputeBlowup(),
    unet_receptive_limit: unetReceptiveLimit(),
    video_tokens: videoTokenCube(),
    video_token_coords: videoTokenCoords(),
    spatiotemporal_dit: spatiotemporalDit(),
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
    video_cross_attention: videoCrossAttention(),
    all_round_reference: allRoundReference(),
    reference_lock: referenceLockPanel(),
    keyframe_bridge: frameStrip(["首帧", "运动过渡", "动作变化", "尾帧"], false),
    pose_skeleton: skeletonDiagram(),
    motion_trajectory: motionTrajectory(),
    video_control_stack: videoControlStack(),
    camera_path: cameraPath(),
    physics_fail: riskPanel([
      ["接触", "手没有真正拿住物体"],
      ["重力", "物体漂浮或下落异常"],
      ["惯性", "动作突然停顿"],
    ]),
    physics_engine_loop: physicsEngineLoop(),
    physics_loss: formulaPanel("物理一致性", "L = L_video + λ · L_motion", [
      ["轨迹", "运动连续"],
      ["接触", "关系稳定"],
      ["世界", "规则一致"],
    ]),
    camera_pose_control: cameraPoseControl(),
    segmented_generation: segmentedGeneration(),
    long_context: timelineMemory(),
    memory_handoff: memoryHandoff(),
    audio_sync: audioWave(),
    native_av_tokens: nativeAvTokens(),
    native_video_model: orbitDiagram("原生视频模型", ["文字", "图像", "动作", "声音", "时间", "镜头"]),
    seedance_multi_input: seedanceMultiInput(),
    video_workflow_gates: videoWorkflowGates(),
    video_workflow_use_cases: videoWorkflowUseCases(),
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

function imageEvolutionTimeline() {
  const items = [
    ["GAN / VAE", "能生成", "画质与控制弱"],
    ["DALL·E / CLIP", "文字接入", "复杂关系不稳"],
    ["Diffusion", "画质跃迁", "手部和文字易错"],
    ["ControlNet", "结构可控", "流程更复杂"],
    ["DiT", "全局布局", "算力和数据要求高"],
    ["当代模型", "自然语言编辑", "仍需审核"],
  ];
  return `
    <div class="diagram">
      <div class="image-timeline">
        ${items.map(([t, v, p], i) => `<div style="--i:${i}"><strong>${escapeHtml(t)}</strong><b>${escapeHtml(v)}</b><span>${escapeHtml(p)}</span></div>`).join("")}
      </div>
    </div>
  `;
}

function imageProblemSolutionChain() {
  const items = [
    ["画不清", "GAN/VAE 证明能生成"],
    ["听不懂", "CLIP 对齐文字和图像"],
    ["细节弱", "扩散模型逐步去噪"],
    ["控不住", "ControlNet 加结构条件"],
    ["布局乱", "DiT 用全局注意力"],
    ["改不动", "自然语言局部编辑"],
  ];
  return `<div class="diagram"><div class="problem-chain">${items.map(([p, s], i) => `<div style="--i:${i}"><b>${escapeHtml(p)}</b><span>${escapeHtml(s)}</span></div>`).join("")}</div></div>`;
}

function modelCompare(items) {
  return `
    <div class="diagram">
      <div class="model-compare">
        ${items.map(([name, pros, cons], i) => `
          <div style="--i:${i}">
            <b>${escapeHtml(name)}</b>
            <span>优点：${escapeHtml(pros)}</span>
            <em>短板：${escapeHtml(cons)}</em>
          </div>
        `).join("")}
      </div>
    </div>
  `;
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

function videoEvolutionTimeline() {
  const items = [
    ["逐帧 / 时间层", "让图动起来", "闪烁、变脸、背景跳"],
    ["三维扩散", "整段视频一起去噪", "计算量迅速变大"],
    ["Video DiT", "时空 token 全局通信", "更依赖高质量数据"],
    ["条件控制", "提示词、参考图、首尾帧", "复杂动作仍难稳"],
    ["物理 / 镜头", "接触、重力、CameraPose", "世界模型仍在补课"],
    ["原生音视频", "画面和声音联合生成", "进入可导演工作流"],
  ];
  return `
    <div class="diagram">
      <div class="video-timeline">
        ${items.map(([t, v, p], i) => `<div style="--i:${i}"><strong>${escapeHtml(t)}</strong><b>${escapeHtml(v)}</b><span>${escapeHtml(p)}</span></div>`).join("")}
      </div>
    </div>
  `;
}

function videoProblemSolutionChain() {
  const items = [
    ["帧间崩坏", "把视频看成时空块"],
    ["算力爆炸", "切成视频 token"],
    ["记不住远处", "DiT 全局注意力"],
    ["不听指挥", "交叉注意力接入条件"],
    ["物理很假", "物理数据与反馈训练"],
    ["镜头难控", "CameraPose 分离镜头运动"],
    ["长片断掉", "分段生成与记忆接力"],
    ["音画错位", "音频视频 token 联合建模"],
  ];
  return `<div class="diagram"><div class="video-problem-chain">${items.map(([p, s], i) => `<div style="--i:${i}"><b>${escapeHtml(p)}</b><span>${escapeHtml(s)}</span></div>`).join("")}</div></div>`;
}

function imageToVideoUnet() {
  return `
    <div class="diagram">
      <div class="unet-video-panel">
        <div class="frame-stack">${["F1", "F2", "F3", "F4"].map((f, i) => `<span style="--i:${i}">${f}</span>`).join("")}</div>
        <div class="unet-core"><b>2D U-Net</b><span>+ temporal layer</span></div>
        <div class="frame-stack out">${["脸稳", "脸变", "光跳", "手漂"].map((f, i) => `<span style="--i:${i}">${escapeHtml(f)}</span>`).join("")}</div>
        <em>复用图片能力，但跨帧记忆不足</em>
      </div>
    </div>
  `;
}

function temporalErrorBoard() {
  const rows = [
    ["身份", "五官、发型、衣服每帧变化"],
    ["场景", "门窗、道具、光源位置跳动"],
    ["动作", "手脚接触、速度方向不连续"],
    ["镜头", "透视和景别突然漂移"],
  ];
  return `
    <div class="diagram">
      <div class="temporal-error-board">
        ${rows.map(([k, v], i) => `<div style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span><i></i></div>`).join("")}
      </div>
    </div>
  `;
}

function videoDiffusion3d() {
  return `
    <div class="diagram">
      <div class="video-diffusion-3d">
        <div class="noise-block">${Array.from({ length: 36 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
        <span>3D noise</span>
        <b>εθ(videoₜ, t, condition)</b>
        <span>video block</span>
        <div class="clean-block">${Array.from({ length: 16 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      </div>
    </div>
  `;
}

function videoComputeBlowup() {
  return `
    <div class="diagram">
      <div class="compute-blowup">
        <div><strong>图片</strong><b>H × W</b><span>一张画布</span></div>
        <i>× T</i>
        <div><strong>视频</strong><b>T × H × W</b><span>几十到上百张画布</span></div>
        <em>注意力成本近似随 token 数平方增长：O(N²)</em>
      </div>
    </div>
  `;
}

function unetReceptiveLimit() {
  return `
    <div class="diagram">
      <div class="receptive-limit">
        <div class="local-window"><b>局部窗口</b><span>纹理、边缘、短动作</span></div>
        <div class="far-frames">
          ${["第1帧", "第20帧", "第80帧"].map((f, i) => `<span style="--i:${i}">${escapeHtml(f)}</span>`).join("")}
        </div>
        <em>长距离身份和场景信息传不过去，就会漂移</em>
      </div>
    </div>
  `;
}

function videoTokenCoords() {
  return `
    <div class="diagram">
      <div class="token-coords">
        <b>patch(x, y, t)</b>
        <div class="coord-cube">
          <span class="axis-x">x</span>
          <span class="axis-y">y</span>
          <span class="axis-t">t</span>
          ${Array.from({ length: 18 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}
        </div>
        <p>每个 token 都知道自己在画面哪里、在哪个时间点。</p>
      </div>
    </div>
  `;
}

function spatiotemporalDit() {
  const nodes = ["脸", "服装", "手", "道具", "背景", "光线", "第1帧", "第80帧"];
  return `
    <div class="diagram">
      <div class="spatiotemporal-dit">
        <b>Video DiT</b>
        ${nodes.map((n, i) => `<span style="--i:${i};--n:${nodes.length}">${escapeHtml(n)}</span>`).join("")}
        <em>自注意力让远处区域和远处时间点互相通信</em>
      </div>
    </div>
  `;
}

function videoCrossAttention() {
  return `
    <div class="diagram">
      <div class="cross-attention-panel">
        <div><b>视频 token</b><span>Q：当前画面要生成什么</span></div>
        <i></i>
        <div><b>条件 token</b><span>K/V：提示词、图片、声音、参考视频</span></div>
        <em>Attn(Q_video, K_condition, V_condition)</em>
      </div>
    </div>
  `;
}

function allRoundReference() {
  const items = [
    ["文字", "主题、动作、风格"],
    ["图片", "角色、产品、场景"],
    ["视频", "动作、镜头、转场"],
    ["音频", "节奏、口型、氛围"],
  ];
  return `<div class="diagram"><div class="reference-wheel"><b>多参考输入</b>${items.map(([k, v], i) => `<span style="--i:${i};--n:${items.length}"><strong>${escapeHtml(k)}</strong><small>${escapeHtml(v)}</small></span>`).join("")}</div></div>`;
}

function motionTrajectory() {
  return `
    <div class="diagram">
      <div class="motion-trajectory">
        <span>起点</span><i></i><i></i><i></i><span>终点</span>
        <b>运动轨迹</b>
      </div>
    </div>
  `;
}

function videoControlStack() {
  return layerStack([
    ["Prompt", "主体、动作、风格"],
    ["Pose", "身体关键点"],
    ["Depth / Flow", "空间层次与运动方向"],
    ["Keyframe", "起点与终点"],
  ]);
}

function physicsEngineLoop() {
  return `
    <div class="diagram">
      <div class="physics-loop">
        <div><b>物理引擎</b><span>标准轨迹 / 碰撞 / 重力</span></div>
        <div><b>视频模型</b><span>生成动作和画面</span></div>
        <div><b>判别反馈</b><span>接触、惯性、轨迹评分</span></div>
        <em>L = L_video + λL_motion + μL_physics</em>
      </div>
    </div>
  `;
}

function cameraPoseControl() {
  return `
    <div class="diagram">
      <div class="camera-pose-panel">
        <div class="scene-object">主体运动</div>
        <div class="camera-rig"><b>CameraPoseₜ</b><span>position / rotation / focal</span></div>
        <i></i>
        <em>物体怎么动，镜头怎么看，分开控制</em>
      </div>
    </div>
  `;
}

function segmentedGeneration() {
  return `
    <div class="diagram">
      <div class="segment-chain">
        ${["片段 1", "片段 2", "片段 3", "片段 4"].map((s, i) => `<div style="--i:${i}"><b>${escapeHtml(s)}</b><span>4-15s</span></div>`).join("")}
        <em>每段生成有限长度，再通过记忆条件衔接</em>
      </div>
    </div>
  `;
}

function memoryHandoff() {
  return `
    <div class="diagram">
      <div class="memory-handoff">
        <div><b>上一段最后几帧</b><span>姿态 / 光线 / 构图</span></div>
        <div><b>角色参考</b><span>脸 / 服装 / 风格</span></div>
        <div><b>剧情状态</b><span>地点 / 事件 / 关系</span></div>
        <em>memory = last frames + reference + state</em>
      </div>
    </div>
  `;
}

function nativeAvTokens() {
  return `
    <div class="diagram">
      <div class="native-av">
        <div class="av-track video">${["V1", "V2", "V3", "V4", "V5"].map((t, i) => `<span style="--i:${i}">${t}</span>`).join("")}</div>
        <div class="av-track audio">${["A1", "A2", "A3", "A4", "A5"].map((t, i) => `<span style="--i:${i}">${t}</span>`).join("")}</div>
        <b>Joint Attention</b>
      </div>
    </div>
  `;
}

function seedanceMultiInput() {
  const items = [
    ["文本", "指令、剧情、镜头"],
    ["图像", "角色、场景、产品"],
    ["视频", "动作、转场、运镜"],
    ["音频", "口型、节奏、氛围"],
  ];
  return `
    <div class="diagram">
      <div class="seedance-panel">
        <div class="seed-inputs">${items.map(([k, v], i) => `<span style="--i:${i}"><b>${escapeHtml(k)}</b><small>${escapeHtml(v)}</small></span>`).join("")}</div>
        <div class="seed-core"><b>统一音视频生成</b><span>4-15 秒 · 多参考 · 可编辑</span></div>
        <div class="seed-output"><b>视频 + 声音</b><span>动作、镜头、音画同步</span></div>
      </div>
    </div>
  `;
}

function videoWorkflowGates() {
  return `<div class="diagram"><div class="workflow-gates">${[
    ["可导演", "主体、动作、镜头、节奏可控"],
    ["可修改", "局部镜头和声音能迭代"],
    ["可延展", "短片段能接成长内容"],
    ["可审核", "版权、肖像、品牌、合规可检查"],
  ].map(([k, v], i) => `<div style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}</div></div>`;
}

function videoWorkflowUseCases() {
  return `<div class="diagram"><div class="video-use-flow">${[
    ["动态分镜", "先验证镜头和节奏"],
    ["概念短片", "快速形成视觉提案"],
    ["广告预演", "低成本测试创意"],
    ["AI 漫剧", "短镜头组合成系列"],
  ].map(([k, v], i) => `<div style="--i:${i}"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("")}<em>能力落点：把创意更快变成可看的动态样片</em></div></div>`;
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
const requestedSlide = Number(new URLSearchParams(window.location.search).get("slide"));
const initialSlide = Math.max(0, Math.min(slides.length - 1, Number.isFinite(requestedSlide) ? requestedSlide - 1 : 0));
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
