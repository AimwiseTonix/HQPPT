window.COURSE_SLIDES = [
  {
    "id": 1,
    "section": "开场",
    "sectionKey": "opening",
    "title": "AIGC 原理与文旅内容新机会",
    "core": "从语言模型、图像生成、视频生成，到 AI 漫剧与文旅 IP 内容运营。",
    "layout": "hero",
    "eyebrow": "01 / 开场",
    "bullets": [
      "语言模型负责理解与组织文字",
      "图像模型负责角色、场景、风格资产",
      "视频模型负责镜头、动作与时间连续性"
    ],
    "visual": {
      "type": "diagram",
      "variant": "network"
    },
    "source": ""
  },
  {
    "id": 2,
    "section": "开场",
    "sectionKey": "opening",
    "title": "AIGC 正在重塑内容生产",
    "core": "内容生产正在从“单点工具辅助”走向“多模型协同工作流”。",
    "layout": "deepdive",
    "eyebrow": "02 / 开场",
    "bullets": [
      "从单张图、单段文案，升级为剧本、资产、镜头、后期的连续流程。",
      "模型能力越成熟，内容团队越需要理解“怎么拆流程、怎么控质量”。",
      "真正的价值来自稳定产出、低成本试错和可复盘运营。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "market_shift",
      "caption": "内容生产从单点工具走向多模型协同"
    },
    "source": ""
  },
  {
    "id": 3,
    "section": "开场",
    "sectionKey": "opening",
    "title": "课程全景导航",
    "core": "AI 基础、语言模型、AI 绘画、AI 视频、AI 漫剧、北京环球文旅 IP 机会六个模块。",
    "layout": "deepdive",
    "eyebrow": "03 / 开场",
    "bullets": [
      "第一部分：AI 基础与语言模型，建立共同语言。",
      "第二部分：AI 绘画与 AI 视频，理解视觉生成原理。",
      "第三部分：AI 漫剧与文旅 IP，判断实际项目机会。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "course_map",
      "caption": "六个模块逐步展开：基础、语言、图像、视频、漫剧、文旅 IP"
    },
    "source": ""
  },
  {
    "id": 4,
    "section": "开场",
    "sectionKey": "opening",
    "title": "核心判断：模型能力进入内容产业链",
    "core": "AIGC 把创意策划、视觉资产、镜头生成、后期制作、分发复盘连接成可迭代流程。",
    "layout": "plain",
    "eyebrow": "04 / 开场",
    "bullets": [
      "创意策划：更快生成选题、人物关系和故事结构。",
      "资产生产：更快形成角色、场景、分镜和视觉风格。",
      "运营复盘：用数据判断内容是否带来到访、打卡和二次传播。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "industry_chain",
      "caption": "AIGC 能力进入内容产业链的多个环节"
    },
    "source": ""
  },
  {
    "id": 5,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "AI 到底是什么",
    "core": "AI 可以理解为一套会从大量例子里学规律、再把规律用到新问题上的系统。",
    "layout": "chapter",
    "eyebrow": "05 / 第一章 AI 基础",
    "bullets": [
      "先认清 AI、模型、数据、参数这几个词",
      "再区分训练和推理",
      "最后建立后面三类生成模型共用的理解框架",
      "数学骨架：输出 y = f(x; θ)，x 是输入，θ 是训练后得到的参数。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "basic_loop"
    },
    "source": ""
  },
  {
    "id": 6,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "模型是什么",
    "core": "模型可以理解为“被训练出来的经验系统”：输入一个东西，它根据经验给出判断或生成。",
    "layout": "plain",
    "eyebrow": "06 / 第一章 AI 基础",
    "bullets": [
      "模型可以理解为“被训练出来的经验系统”",
      "模型本身是一套计算规则，训练完以后会把经验固定在参数里",
      "数学骨架：输出 y = f(x; θ)",
      "这一页只要记住：模型负责算，参数负责记忆。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "model_box",
      "caption": "模型像一个经验函数：输入进来，参数参与计算，输出结果"
    },
    "source": ""
  },
  {
    "id": 7,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "数据是什么",
    "core": "数据就是模型见过的例子。文本、图片、视频、声音都可以成为训练素材。",
    "layout": "plain",
    "eyebrow": "07 / 第一章 AI 基础",
    "bullets": [
      "数据就是模型见过的例子",
      "文本、图片、视频、声音都可以成为训练素材",
      "训练数据决定模型见识到什么",
      "样本越丰富，模型越容易学到稳定规律。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "data_evidence_wall",
      "caption": "训练数据像样本库：文本、图像、视频、声音和反馈共同提供例子"
    },
    "source": ""
  },
  {
    "id": 8,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "参数是什么",
    "core": "参数是模型训练后留下的经验权重。大量参数组合在一起，决定模型如何判断和生成。",
    "layout": "deepdive",
    "eyebrow": "08 / 第一章 AI 基础",
    "bullets": [
      "参数是模型训练后留下的经验权重",
      "参数不是素材库，而是训练中压缩出来的规律痕迹",
      "数学骨架：θ = {w₁, w₂, ..., wₙ}",
      "很多能力藏在大量参数的组合方式里。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "parameter_deepdive",
      "caption": "参数是模型内部可训练的权重，训练过程会不断调整这些数字"
    },
    "source": "Kaplan et al., Scaling Laws for Neural Language Models, arXiv:2001.08361"
  },
  {
    "id": 9,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "训练是什么",
    "core": "训练像反复做题：模型先答，再对答案，再改错，重复很多次。",
    "layout": "plain",
    "eyebrow": "09 / 第一章 AI 基础",
    "bullets": [
      "训练像反复做题：先答、对答案、改错",
      "核心动作是预测、计算误差、更新参数",
      "训练通常要重复很多轮",
      "数学骨架：loss ↓，参数朝更优方向更新。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "training_loop",
      "caption": "训练循环：预测、计算误差、更新参数"
    },
    "source": ""
  },
  {
    "id": 10,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "推理是什么",
    "core": "推理是训练结束后的使用阶段：参数固定，用户输入问题，模型给出结果。",
    "layout": "plain",
    "eyebrow": "10 / 第一章 AI 基础",
    "bullets": [
      "推理是训练结束后的使用阶段",
      "参数固定后，模型根据用户输入给出结果",
      "这时候模型不再重新学习，只是在调用已经学到的经验",
      "数学骨架：x + θ → y。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "inference_path",
      "caption": "推理路径：参数固定后，根据输入生成结果"
    },
    "source": ""
  },
  {
    "id": 11,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "生成式 AI 和传统 AI 有什么不同",
    "core": "传统 AI 更像判断题；生成式 AI 会补全文本、生成图片、生成视频。",
    "layout": "plain",
    "eyebrow": "11 / 第一章 AI 基础",
    "bullets": [
      "传统 AI 更像判断题，生成式 AI 会继续补内容",
      "文字、图像、视频都可以被看成“继续生成”",
      "它不只会分类，还会输出新的内容",
      "数学骨架：continuation。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "traditional_vs_generative",
      "caption": "传统 AI 偏判断，生成式 AI 偏补全和创造"
    },
    "source": ""
  },
  {
    "id": 12,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "为什么 AI 会“看起来像懂了”",
    "core": "因为它在海量样本中学到了关系：词和词的关系、图和词的关系、动作和时间的关系。",
    "layout": "plain",
    "eyebrow": "12 / 第一章 AI 基础",
    "bullets": [
      "模型在海量样本中学到了关系",
      "词和词、图和词、动作和时间都会形成模式",
      "看起来像懂了，是因为关系模式足够丰富",
      "数学骨架：pattern layers。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "pattern_layers",
      "caption": "模型看起来像懂了，是因为学到了多层关系模式"
    },
    "source": ""
  },
  {
    "id": 13,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "AIGC 的三个共同动作",
    "core": "先把输入变成数字表示，再计算关系，最后生成新的内容。文本、图像、视频都绕不开这三步。",
    "layout": "plain",
    "eyebrow": "13 / 第一章 AI 基础",
    "bullets": [
      "AIGC 共同动作是表示、关系、生成",
      "文本、图像、视频都绕不开这三步",
      "不同模态只是输入形式不同",
      "数学骨架：表示 → 关系 → 生成。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "aigc_three_steps",
      "caption": "AIGC 共同动作：表示、计算关系、生成内容"
    },
    "source": ""
  },
  {
    "id": 14,
    "section": "第一章 AI 基础",
    "sectionKey": "basics",
    "title": "这一章只记住一句话",
    "core": "AI 使用训练好的经验，把输入转成可计算的表示，再一步步生成输出。",
    "layout": "hero",
    "eyebrow": "14 / 第一章 AI 基础",
    "bullets": [
      "AI 使用训练好的经验，把输入转成可计算的表示",
      "模型负责计算，参数负责保留经验",
      "后面三章都会沿着这条主线展开",
      "数学骨架：AI = 经验函数。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "basic_loop"
    },
    "source": ""
  },
  {
    "id": 15,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "语言为什么难",
    "core": "一句话要靠上下文理解。同一个词换了位置，角色和含义都会变。",
    "layout": "chapter",
    "eyebrow": "15 / 第二章 LLM",
    "bullets": [
      "语言模型先解决的不是“懂不懂”，而是“当前词该看谁”",
      "这页只抓三件事：token、向量、注意力",
      "下一页用中文歧义句，把上下文依赖讲清楚"
    ],
    "visual": {
      "type": "diagram",
      "variant": "tokens"
    },
    "source": ""
  },
  {
    "id": 16,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "中文案例：用毒毒毒蛇，毒蛇会不会被毒死？",
    "core": "用这个例句说明：同一个“毒”，可能是手段、动作、属性、结果的一部分。",
    "layout": "media",
    "eyebrow": "16 / 第二章 LLM",
    "bullets": [
      "同一个“毒”，在不同位置扮演不同角色",
      "模型看的是位置关系，不是单字解释",
      "这个例子正好说明：语义要靠上下文来定"
    ],
    "visual": {
      "type": "diagram",
      "variant": "case_sentence",
      "caption": "中文歧义案例：同一个字在不同位置承担不同角色"
    },
    "source": ""
  },
  {
    "id": 17,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "人为什么能看懂",
    "core": "人会自动看上下文：前后词、语法位置、常识关系共同决定含义。",
    "layout": "concept",
    "eyebrow": "17 / 第二章 LLM",
    "bullets": [
      "人读句子时，会自动把语法、常识和语境一起拿来用",
      "我们不是逐字扫描，而是连着关系理解",
      "模型要学的，就是这种连续判断能力"
    ],
    "visual": {
      "type": "diagram",
      "variant": "context_parse",
      "caption": "人类理解语言时，会自动结合上下文、语法和常识"
    },
    "source": ""
  },
  {
    "id": 18,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "机器第一步：把句子切成小块",
    "core": "Token 是模型处理语言的基本单位；有时是字，有时是词，有时是词的一部分。",
    "layout": "concept",
    "eyebrow": "18 / 第二章 LLM",
    "bullets": [
      "Token 是模型处理语言的最小单位",
      "有时是字，有时是词，有时是词的一部分",
      "切分方式会直接影响后面的所有计算"
    ],
    "visual": {
      "type": "diagram",
      "variant": "tokenization_anim",
      "caption": "Token 化：把句子切成模型能处理的小块"
    },
    "source": ""
  },
  {
    "id": 19,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "机器第二步：把文字变成数字",
    "core": "模型不能直接理解文字，需要把 token 变成数字向量。",
    "layout": "concept",
    "eyebrow": "19 / 第二章 LLM",
    "bullets": [
      "文字先变成编号，再查出向量",
      "向量不是意思本身，而是可计算的语义坐标",
      "从这一刻开始，语言进入数学空间"
    ],
    "visual": {
      "type": "diagram",
      "variant": "embedding_numbers",
      "caption": "文字进入模型前，会先变成可计算的数字向量"
    },
    "source": ""
  },
  {
    "id": 20,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "向量可以理解成语义地图坐标",
    "core": "相似用法在向量空间里更接近，这种位置关系来自训练过程中的大量样本。",
    "layout": "concept",
    "eyebrow": "20 / 第二章 LLM",
    "bullets": [
      "相近的用法会被训练到相近的位置",
      "向量空间像一张语义地图，不是人工写出来的词典",
      "接下来还要把顺序信息补进去"
    ],
    "visual": {
      "type": "diagram",
      "variant": "vector_space",
      "caption": "语义空间：相似含义在坐标中更接近"
    },
    "source": ""
  },
  {
    "id": 21,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "机器第三步：判断该看谁",
    "core": "模型理解一个词时，会给不同上下文分配不同权重，重要信息读得更重。",
    "layout": "media",
    "eyebrow": "21 / 第二章 LLM",
    "bullets": [
      "注意力不是平均看全句，而是给不同位置分配不同权重",
      "当前词会优先参考和自己最相关的上下文",
      "这一步决定了模型到底在看谁"
    ],
    "visual": {
      "type": "diagram",
      "variant": "attention",
      "caption": "课程图解：注意力是在上下文中分配关注度"
    },
    "source": "Vaswani et al., Attention Is All You Need, arXiv:1706.03762"
  },
  {
    "id": 22,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "图书馆类比：每个词都带着问题找资料",
    "core": "当前词像带着问题进图书馆，去匹配最有帮助的“书”。",
    "layout": "media",
    "eyebrow": "22 / 第二章 LLM",
    "bullets": [
      "当前词像带着问题进图书馆",
      "先找最相关的线索，再决定理解路径",
      "Q 负责提问，K 负责被找到，V 负责提供内容"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/transformer_library.jpg",
      "caption": "图书馆类比：从海量资料中找到最相关的线索"
    },
    "source": ""
  },
  {
    "id": 23,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "图书馆类比：重要资料读得更久",
    "core": "重要信息多读，不重要信息少读；这就是注意力的直觉。",
    "layout": "media",
    "eyebrow": "23 / 第二章 LLM",
    "bullets": [
      "相关性分数要先经过 softmax 变成比例",
      "比例越高，那个位置被读得越多",
      "这一步把“谁更重要”变成可计算的权重"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/transformer_qkv.jpg",
      "caption": "Q / K / V 直觉：带着问题去匹配最相关的信息"
    },
    "source": ""
  },
  {
    "id": 24,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "LLM 到底在生成什么",
    "core": "它根据前文和上下文关系，预测下一个最合理的 token。",
    "layout": "concept",
    "eyebrow": "24 / 第二章 LLM",
    "bullets": [
      "LLM 的输出方式很朴素：一次猜一个 token",
      "前一个词给线索，后一个词接着往下补",
      "总结、问答、改写，本质上都是连续预测"
    ],
    "visual": {
      "type": "diagram",
      "variant": "next_token",
      "caption": "大语言模型的生成，本质是连续预测下一个 token"
    },
    "source": ""
  },
  {
    "id": 25,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "为什么 LLM 能写总结、回答问题",
    "core": "因为它不只学词，还学到了大量表达结构、知识关联和任务格式。",
    "layout": "concept",
    "eyebrow": "25 / 第二章 LLM",
    "bullets": [
      "它不只学词，还学到大量任务格式",
      "会写总结，往往是因为见过很多总结模板",
      "能力来自结构迁移，不只是记忆词汇"
    ],
    "visual": {
      "type": "diagram",
      "variant": "task_formats",
      "caption": "总结、问答、改写，是语言结构和任务格式的迁移"
    },
    "source": ""
  },
  {
    "id": 26,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "LLM 的边界在哪里",
    "core": "它可能编造、不知道最新事实、对复杂现实缺乏真实经验，所以需要校验和约束。",
    "layout": "concept",
    "eyebrow": "26 / 第二章 LLM",
    "bullets": [
      "LLM 会编造，也会不知道最新事实",
      "它擅长语言组织，不等于擅长现实校验",
      "关键场景里必须接资料、接规则、接人工判断"
    ],
    "visual": {
      "type": "diagram",
      "variant": "llm_limits",
      "caption": "LLM 边界：事实、时效、现实经验都需要外部校验"
    },
    "source": ""
  },
  {
    "id": 27,
    "section": "第二章 LLM",
    "sectionKey": "llm",
    "title": "从文本到图像的桥",
    "core": "如果文字能变成向量，那么图片也能变成向量；下一章就看文字如何控制图像。",
    "layout": "hero",
    "eyebrow": "27 / 第二章 LLM",
    "bullets": [
      "文字和图片都能映射到向量空间里",
      "一旦语义坐标接上，文本就能开始影响图像",
      "下一章进入图像生成"
    ],
    "visual": {
      "type": "diagram",
      "variant": "text_image_bridge",
      "caption": "从文字到图像：先把不同模态放进同一语义空间"
    },
    "source": ""
  },
  {
    "id": 28,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "AI 绘画如何从提示词生成新图像",
    "core": "AI 绘画会把提示词转成生成条件，再一步步生成一张新图像。",
    "layout": "chapter",
    "eyebrow": "28 / 第三章 AI 绘画",
    "bullets": [
      "AI 绘画不是找图拼贴，而是从噪声里生成新画面",
      "早期问题主要是结构、手部和文字都不稳",
      "这章先看它为什么怪，再看它怎么变稳"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/image_bad_old.jpg",
      "caption": "早期图像生成常见问题：结构混乱、细节漂移"
    },
    "source": ""
  },
  {
    "id": 29,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "早期 AI 绘画为什么很怪",
    "core": "画面糊、结构乱、文字错，是因为模型还不能稳定理解语义和空间关系。",
    "layout": "deepdive",
    "eyebrow": "29 / 第三章 AI 绘画",
    "bullets": [
      "早期模型常常连主体都摆不稳",
      "手指、文字、边缘、形状都容易漂",
      "这些问题说明它还没有真正学会全局结构"
    ],
    "visual": {
      "type": "diagram",
      "variant": "image_artifacts",
      "caption": "典型错误：手部多指、文字乱码、结构漂移和物体融合"
    },
    "source": ""
  },
  {
    "id": 30,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "图像生成的核心难题",
    "core": "一张图同时有主体、背景、构图、光影、材质、文字、风格，约束非常多。",
    "layout": "deepdive",
    "eyebrow": "30 / 第三章 AI 绘画",
    "bullets": [
      "一张图要同时满足主体、背景、构图、风格、文字",
      "约束越多，模型越容易在局部偷懒",
      "所以图像生成的关键一直是全局控制"
    ],
    "visual": {
      "type": "diagram",
      "variant": "image_constraints",
      "caption": "一张图同时受主体、布局、光影、文字和风格约束"
    },
    "source": ""
  },
  {
    "id": 31,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "扩散模型的直觉",
    "core": "先把清晰图片加噪声，再训练模型学会一步步去噪。",
    "layout": "deepdive",
    "eyebrow": "31 / 第三章 AI 绘画",
    "bullets": [
      "扩散模型的核心是两个方向：加噪和去噪",
      "训练时学会还原噪声，生成时从噪声慢慢还原图像",
      "这比直接画出来更稳定"
    ],
    "visual": {
      "type": "diagram",
      "variant": "diffusion_formula",
      "caption": "扩散模型：加噪与去噪的数学骨架"
    },
    "source": "Ho et al., Denoising Diffusion Probabilistic Models, arXiv:2006.11239"
  },
  {
    "id": 32,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "生成时从噪声开始",
    "core": "AI 绘画通常从随机噪声出发，逐步去掉噪声，得到符合提示词的画面。",
    "layout": "media",
    "eyebrow": "32 / 第三章 AI 绘画",
    "bullets": [
      "生成时先从随机噪声开始",
      "每一步只修一点，直到画面和提示词靠近",
      "这也是 diffusion gif 最直观的地方"
    ],
    "visual": {
      "type": "gif",
      "src": "assets/gifs_cropped/diffusion_clip.gif",
      "caption": "动态示意：从随机噪声逐步收敛到清晰图像"
    },
    "source": ""
  },
  {
    "id": 33,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "U-Net 像一台图像修复器",
    "core": "它每一步都判断：当前画面里哪些是噪声，哪些应该保留。",
    "layout": "media",
    "eyebrow": "33 / 第三章 AI 绘画",
    "bullets": [
      "U-Net 的作用像修复器",
      "先看整体，再补细节，再把中间结果整合回来",
      "所以它特别适合一步步去噪"
    ],
    "visual": {
      "type": "diagram",
      "variant": "unet",
      "caption": "U-Net 图解：先看整体，再补回局部细节"
    },
    "source": ""
  },
  {
    "id": 34,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "提示词是一组生成方向",
    "core": "prompt 会被转成向量，用来影响去噪过程，让图像往目标语义靠近。",
    "layout": "technical",
    "eyebrow": "34 / 第三章 AI 绘画",
    "bullets": [
      "提示词不是命令书，而是方向盘",
      "它会影响生成朝哪个语义方向收敛",
      "同一句提示词，不同权重会得到完全不同的结果"
    ],
    "visual": {
      "type": "diagram",
      "variant": "prompt_guidance",
      "caption": "提示词会变成语义方向，影响每一步去噪"
    },
    "source": ""
  },
  {
    "id": 35,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "文本和图像要先对齐",
    "core": "模型需要知道“文字描述”和“视觉内容”如何对应，否则提示词再精确也指挥不动图像。",
    "layout": "media",
    "eyebrow": "35 / 第三章 AI 绘画",
    "bullets": [
      "文字和图像要先站在同一套语义坐标里",
      "CLIP 这类模型做的就是把文字翻译成图像能懂的约束",
      "对齐越好，提示词就越听话"
    ],
    "visual": {
      "type": "diagram",
      "variant": "clip",
      "caption": "语义空间：文字和图像用同一套坐标对齐"
    },
    "source": "Rombach et al., Latent Diffusion Models, arXiv:2112.10752"
  },
  {
    "id": 36,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "CLIP/多模态模型像翻译官",
    "core": "它把文字翻译成图像模型能理解的语义信号。",
    "layout": "media",
    "eyebrow": "36 / 第三章 AI 绘画",
    "bullets": [
      "多模态理解不是装饰，而是控制力",
      "它让模型先读懂“你想要什么”，再开始画",
      "这样复杂需求才有机会被正确执行"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/image_diffusion.jpg",
      "caption": "多模态翻译：把文字意图转成图像约束"
    },
    "source": ""
  },
  {
    "id": 37,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "为什么早期提示词不听话",
    "core": "文字和图像只是粗略关联，复杂关系、数量、空间位置容易丢失。",
    "layout": "deepdive",
    "eyebrow": "37 / 第三章 AI 绘画",
    "bullets": [
      "提示词不听话，通常不是一句话写得不够长",
      "更常见的是语义、布局和数据分布冲突",
      "模型先天没学会的关系，光靠加字很难补上"
    ],
    "visual": {
      "type": "diagram",
      "variant": "prompt_mismatch",
      "caption": "提示词不听话，常见原因是语义、布局和数据分布冲突"
    },
    "source": ""
  },
  {
    "id": 38,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "多模态大模型让提示词更可控",
    "core": "更强的文本理解能力，让模型能处理更复杂的描述和关系。",
    "layout": "technical",
    "eyebrow": "38 / 第三章 AI 绘画",
    "bullets": [
      "更强的多模态理解，让复杂描述变得可执行",
      "模型能把主体、动作、风格、位置拆成更明确的约束",
      "这也是文本控制图像越来越稳的原因"
    ],
    "visual": {
      "type": "diagram",
      "variant": "multimodal_reasoning",
      "caption": "多模态理解让模型先读懂需求，再约束画面生成"
    },
    "source": ""
  },
  {
    "id": 39,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "画面布局为什么会乱",
    "core": "局部去噪容易只看眼前区域，缺少全局结构意识。",
    "layout": "deepdive",
    "eyebrow": "39 / 第三章 AI 绘画",
    "bullets": [
      "布局乱，本质上是全局关系没锁住",
      "主体、背景、文字、视线一旦打架，画面就散",
      "所以这页重点是结构先于细节"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/image_layout.jpg",
      "caption": "布局约束：主体、背景、文字和视线关系必须同时成立"
    },
    "source": ""
  },
  {
    "id": 40,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "DiT/全局注意力解决什么",
    "core": "让图像中的不同区域互相建立关系，画面布局更统一。",
    "layout": "media",
    "eyebrow": "40 / 第三章 AI 绘画",
    "bullets": [
      "全局注意力让不同区域互相知道彼此存在",
      "画面布局不再只看眼前一小块",
      "这就是 DiT 类方法能稳住结构的原因"
    ],
    "visual": {
      "type": "gif",
      "src": "assets/gifs_cropped/layout_clip.gif",
      "caption": "动态示意：全局布局能力如何影响画面稳定性"
    },
    "source": "Peebles & Xie, Scalable Diffusion Models with Transformers, arXiv:2212.09748"
  },
  {
    "id": 41,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "为什么数据标注很重要",
    "core": "高质量图文标注会告诉模型图片里有什么、在哪里、是什么风格。",
    "layout": "deepdive",
    "eyebrow": "41 / 第三章 AI 绘画",
    "bullets": [
      "高质量标注会告诉模型这张图到底有什么",
      "主体、位置、风格、关系越细，模型越容易学稳",
      "标注本质上是在给模型建教材"
    ],
    "visual": {
      "type": "diagram",
      "variant": "dataset_tags",
      "caption": "数据标注越细，模型越容易学到可控关系"
    },
    "source": ""
  },
  {
    "id": 42,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "AI 自动标注让训练材料更细",
    "core": "用更强模型给图片写详细描述，提升模型对复杂提示词的理解。",
    "layout": "technical",
    "eyebrow": "42 / 第三章 AI 绘画",
    "bullets": [
      "自动标注把图片变成更细的说明书",
      "原来一张图只有一句描述，现在可以变成一整段结构化信息",
      "训练材料越细，模型越可控"
    ],
    "visual": {
      "type": "diagram",
      "variant": "auto_caption",
      "caption": "自动标注把图片变成更细的训练说明书"
    },
    "source": ""
  },
  {
    "id": 43,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "为什么 AI 以前写不好字",
    "core": "图中文字要求笔画、位置和语义同时准确，错一笔就会影响识别。",
    "layout": "deepdive",
    "eyebrow": "43 / 第三章 AI 绘画",
    "bullets": [
      "图中文字最难，因为它同时要求笔画、位置和语义都对",
      "一笔错了，就不像字",
      "所以这块一直是生成式模型的硬骨头"
    ],
    "visual": {
      "type": "diagram",
      "variant": "text_fail",
      "caption": "图中文字难，是因为字形同时要求语义、笔画和空间位置"
    },
    "source": ""
  },
  {
    "id": 44,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "文字生成的改进思路",
    "core": "与其让模型凭空猜字形，不如给它更明确的位置、版式或模板约束。",
    "layout": "technical",
    "eyebrow": "44 / 第三章 AI 绘画",
    "bullets": [
      "解决文字问题，不能只靠随机生成",
      "更明确的位置、版式和模板约束更有效",
      "让模型先知道字该站哪儿，再谈写得像不像"
    ],
    "visual": {
      "type": "diagram",
      "variant": "glyph_grid",
      "caption": "文字生成改进：从字形结构、位置约束和局部修正入手"
    },
    "source": ""
  },
  {
    "id": 45,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "局部重绘解决什么",
    "core": "不用整张图重画，只修改被圈定的区域，让修改更稳定。",
    "layout": "media",
    "eyebrow": "45 / 第三章 AI 绘画",
    "bullets": [
      "局部重绘的价值是只改需要改的地方",
      "不用整张重来，效率和稳定性都更好",
      "这也是实际工作流里最常用的修图方式之一"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/image_inpaint.jpg",
      "caption": "局部重绘：只改需要修改的区域"
    },
    "source": ""
  },
  {
    "id": 46,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "语义分割让模型知道改哪里",
    "core": "自动识别主体边界，减少传统抠图白边和光影不一致。",
    "layout": "deepdive",
    "eyebrow": "46 / 第三章 AI 绘画",
    "bullets": [
      "语义分割先解决哪里该改的问题",
      "先找到主体边界，再决定修改范围",
      "这样才能减少白边和光影不一致"
    ],
    "visual": {
      "type": "diagram",
      "variant": "segmentation_mask",
      "caption": "语义分割：先知道哪里是主体，再决定改哪里"
    },
    "source": ""
  },
  {
    "id": 47,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "潜空间编辑为什么更自然",
    "core": "在抽象空间里修改材质、光线和结构，比直接改像素更容易保持一致。",
    "layout": "technical",
    "eyebrow": "47 / 第三章 AI 绘画",
    "bullets": [
      "在潜空间里改图，往往比在像素里直接改更自然",
      "因为它动的是更抽象的语义层",
      "结构保住了，风格就更容易平滑变化"
    ],
    "visual": {
      "type": "diagram",
      "variant": "latent_edit",
      "caption": "潜空间编辑：在压缩语义层移动，画面会更自然"
    },
    "source": ""
  },
  {
    "id": 48,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "AI 绘画从玩具变成工作流",
    "core": "文生图、图生图、局部重绘、风格统一、角色设定共同组成生产链。",
    "layout": "technical",
    "eyebrow": "48 / 第三章 AI 绘画",
    "bullets": [
      "AI 绘画真正进入工作流，是从概念、角色、场景一路接到交付",
      "它不再只是出图玩具，而是前期提案和资产生产工具",
      "流程化之后，产出才可复用"
    ],
    "visual": {
      "type": "diagram",
      "variant": "image_workflow",
      "caption": "AI 绘画工作流：概念、角色、场景、局部编辑、交付检查"
    },
    "source": ""
  },
  {
    "id": 49,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "AI 绘画适合做什么",
    "core": "概念图、海报草图、角色设定、分镜、视觉风格探索、营销素材。",
    "layout": "technical",
    "eyebrow": "49 / 第三章 AI 绘画",
    "bullets": [
      "适合做概念图、海报草图、角色探索和分镜",
      "这些任务更看重速度、方向和风格探索",
      "它特别适合前期试错"
    ],
    "visual": {
      "type": "diagram",
      "variant": "image_use_cases",
      "caption": "适合场景：概念图、分镜、角色探索、视觉提案"
    },
    "source": ""
  },
  {
    "id": 50,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "AI 绘画不适合直接交付什么",
    "core": "强版权 IP、绝对精确文字、严肃商业物料仍需要人工审核和后期。",
    "layout": "deepdive",
    "eyebrow": "50 / 第三章 AI 绘画",
    "bullets": [
      "不适合直接交付的，是强版权、强准确和强合规场景",
      "品牌物料和正式商业稿件还是要人工复核",
      "AI 在这里更多是提速，不是替代审稿"
    ],
    "visual": {
      "type": "diagram",
      "variant": "image_delivery_risk",
      "caption": "交付风险：版权、文字、细节准确性和品牌一致性"
    },
    "source": ""
  },
  {
    "id": 51,
    "section": "第三章 AI 绘画",
    "sectionKey": "image",
    "title": "这一章的结论",
    "core": "AI 绘画的进步体现在语义理解、布局控制、局部修改越来越稳定。",
    "layout": "hero",
    "eyebrow": "51 / 第三章 AI 绘画",
    "bullets": [
      "这章真正的进步，不是更炫，而是更稳",
      "语义理解、布局控制、局部修改都开始可用",
      "到了这里，AI 绘画才算从演示走向生产"
    ],
    "visual": {
      "type": "diagram",
      "variant": "diffusion"
    },
    "source": ""
  },
  {
    "id": 52,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "AI 视频为什么比 AI 绘画难很多",
    "core": "视频多了时间：同一个人、同一个物体，要在连续画面中保持一致。",
    "layout": "chapter",
    "eyebrow": "52 / 第四章 AI 视频",
    "bullets": [
      "视频多了时间：同一个人、同一个物体要连续存在",
      "一帧好看不等于一段视频好看",
      "这章重点看时间、一致性和可导演性"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/video_broken.jpg",
      "caption": "早期 AI 视频常见问题：闪烁、变形、前后不一致"
    },
    "source": ""
  },
  {
    "id": 53,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "早期 AI 视频为什么崩坏",
    "core": "如果逐帧生成，每一帧都像单独画图，人物和场景会闪烁、变形、跳变。",
    "layout": "deepdive",
    "eyebrow": "53 / 第四章 AI 视频",
    "bullets": [
      "视频比图片难，因为它多了时间维度",
      "同一个人、同一件衣服、同一盏灯都要持续一致",
      "这一章先看为什么视频更容易崩"
    ],
    "visual": {
      "type": "diagram",
      "variant": "temporal_break",
      "caption": "早期视频问题：逐帧看像图，连起来就会跳变"
    },
    "source": ""
  },
  {
    "id": 54,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "视频是一块连续的时空整体",
    "core": "更合理的理解是：视频是一块包含宽、高、时间的三维时空块。",
    "layout": "media",
    "eyebrow": "54 / 第四章 AI 视频",
    "bullets": [
      "视频更像一块宽、高、时间一起存在的时空块",
      "不是一串独立图片，而是一个整体对象",
      "这就是为什么 GIF 能帮人一下看懂"
    ],
    "visual": {
      "type": "gif",
      "src": "assets/gifs_cropped/spacetime_clip.gif",
      "caption": "动态示意：视频是宽、高、时间组成的三维块"
    },
    "source": ""
  },
  {
    "id": 55,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "三维时空块的直觉",
    "core": "模型会同时考虑当前画面和前后帧关系，让运动更连续。",
    "layout": "deepdive",
    "eyebrow": "55 / 第四章 AI 视频",
    "bullets": [
      "模型要同时看当前帧和前后帧",
      "只看单帧，运动就容易断",
      "把时间也纳入计算，才会有连续感"
    ],
    "visual": {
      "type": "diagram",
      "variant": "spacetime_cube",
      "caption": "三维时空块：宽、高、时间必须一起建模"
    },
    "source": ""
  },
  {
    "id": 56,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "视频 token 是什么",
    "core": "把视频切成很多小块，每个小块都变成模型能计算的 token。",
    "layout": "deepdive",
    "eyebrow": "56 / 第四章 AI 视频",
    "bullets": [
      "视频 token 是把时空切成可计算的小块",
      "每个小块既有位置，也有时间",
      "这样模型才能开始处理视频"
    ],
    "visual": {
      "type": "diagram",
      "variant": "video_tokens",
      "caption": "视频 token：每个小块都带有 x、y、t 坐标"
    },
    "source": ""
  },
  {
    "id": 57,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "自注意力让画面建立全局关系",
    "core": "不同时间、不同位置的视频块互相交换信息，减少闪烁和变脸。",
    "layout": "deepdive",
    "eyebrow": "57 / 第四章 AI 视频",
    "bullets": [
      "跨帧注意力的作用，是让前后画面互相记住彼此",
      "人物、衣服、场景不能每一帧都重置",
      "这一页是视频稳定性的核心"
    ],
    "visual": {
      "type": "diagram",
      "variant": "video_attention",
      "caption": "跨帧通信：让前后画面记住同一个角色和场景"
    },
    "source": ""
  },
  {
    "id": 58,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "流畅的关键是帧间一致性",
    "core": "人脸、衣服、场景、光线不能每一帧都重新随机生成。",
    "layout": "deepdive",
    "eyebrow": "58 / 第四章 AI 视频",
    "bullets": [
      "帧间一致性决定视频是不是像同一段内容",
      "脸、衣服、背景、光线都要沿时间延续",
      "只要其中一个漂了，观感就会崩"
    ],
    "visual": {
      "type": "diagram",
      "variant": "consistency_tracks",
      "caption": "帧间一致性：脸、衣服、背景、动作都要沿时间延续"
    },
    "source": ""
  },
  {
    "id": 59,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "提示词如何控制视频",
    "core": "交叉注意力让视频块参考文字或参考图，从而生成指定内容。",
    "layout": "media",
    "eyebrow": "59 / 第四章 AI 视频",
    "bullets": [
      "参考图是最直接的控制信号之一",
      "它能先锁角色、风格和场景",
      "比纯文字更容易把结果拉稳"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/video_control.jpg",
      "caption": "参考图控制：用角色、场景和动作约束生成结果"
    },
    "source": ""
  },
  {
    "id": 60,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "参考图为什么重要",
    "core": "它能锁定角色长相、服装、风格，减少每段视频都变一个人的问题。",
    "layout": "deepdive",
    "eyebrow": "60 / 第四章 AI 视频",
    "bullets": [
      "参考图的价值是锁定身份，不让人物每段都变样",
      "角色长相、服装和风格都能被固定住",
      "这是做系列内容时特别重要的一步"
    ],
    "visual": {
      "type": "diagram",
      "variant": "reference_lock",
      "caption": "参考图锁定角色和风格，减少生成漂移"
    },
    "source": ""
  },
  {
    "id": 61,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "首尾帧控制是什么",
    "core": "给模型明确开头和结尾，帮助它生成中间过渡动作。",
    "layout": "deepdive",
    "eyebrow": "61 / 第四章 AI 视频",
    "bullets": [
      "首尾帧控制就是给模型一个明确起点和终点",
      "中间动作靠它去补过渡",
      "比完全自由发挥更容易得到可用结果"
    ],
    "visual": {
      "type": "diagram",
      "variant": "keyframe_bridge",
      "caption": "首尾帧控制：用关键画面约束中间运动"
    },
    "source": ""
  },
  {
    "id": 62,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "姿态控制解决什么",
    "core": "用动作骨架、镜头参数、运动轨迹告诉模型“怎么动”。",
    "layout": "deepdive",
    "eyebrow": "62 / 第四章 AI 视频",
    "bullets": [
      "姿态控制解决的是怎么动，而不只是画什么",
      "骨架、轨迹和镜头参数都可以进入约束",
      "这页已经开始接近导演思维了"
    ],
    "visual": {
      "type": "diagram",
      "variant": "pose_skeleton",
      "caption": "姿态控制：先锁定动作骨架，再生成画面细节"
    },
    "source": ""
  },
  {
    "id": 63,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "物理感为什么难",
    "core": "光靠视频数据，模型很难真正理解重力、碰撞、速度和惯性。",
    "layout": "deepdive",
    "eyebrow": "63 / 第四章 AI 视频",
    "bullets": [
      "物理感难，是因为模型只看数据，不是真的懂世界",
      "重力、惯性、碰撞、接触都要连续",
      "少一个条件，动作就会假"
    ],
    "visual": {
      "type": "diagram",
      "variant": "physics_fail",
      "caption": "物理感难点：重力、碰撞、惯性和接触关系必须连续"
    },
    "source": ""
  },
  {
    "id": 64,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "物理一致性的训练思路",
    "core": "用模拟数据、判别器或强化学习，让模型更接近真实物理规律。",
    "layout": "deepdive",
    "eyebrow": "64 / 第四章 AI 视频",
    "bullets": [
      "物理一致性的思路，是把运动约束写进训练目标",
      "让轨迹、接触和世界规则一起优化",
      "这样视频才不会一动就穿帮"
    ],
    "visual": {
      "type": "diagram",
      "variant": "physics_loss",
      "caption": "物理一致性训练：让运动轨迹和世界规律更接近"
    },
    "source": ""
  },
  {
    "id": 65,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "镜头控制为什么是高级能力",
    "core": "推、拉、摇、移、环绕会同时改变主体、背景和透视关系。",
    "layout": "deepdive",
    "eyebrow": "65 / 第四章 AI 视频",
    "bullets": [
      "镜头控制不是简单平移，而是主体、背景和透视一起变化",
      "推、拉、摇、移、环绕每一个都很难",
      "这就是视频生成真正高级的地方"
    ],
    "visual": {
      "type": "gif",
      "src": "assets/gifs_cropped/control_clip.gif",
      "caption": "动态示意：镜头与动作控制让视频更可导演"
    },
    "source": ""
  },
  {
    "id": 66,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "长视频为什么难生成",
    "core": "时间越长，计算量越大，角色和场景越容易漂移。",
    "layout": "deepdive",
    "eyebrow": "66 / 第四章 AI 视频",
    "bullets": [
      "长视频的难点，是时间越长越容易记不住",
      "角色、场景和事件都会逐步漂移",
      "所以长视频通常要分段做"
    ],
    "visual": {
      "type": "diagram",
      "variant": "long_context",
      "caption": "长视频难点：模型要记住更长时间里的角色和事件"
    },
    "source": ""
  },
  {
    "id": 67,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "分段生成如何保持一致",
    "core": "用上一段最后画面、角色参考、场景参考，约束下一段继续生成。",
    "layout": "media",
    "eyebrow": "67 / 第四章 AI 视频",
    "bullets": [
      "分段生成要靠上一段最后的状态来接力",
      "角色参考和场景参考必须继续沿用",
      "这样才能把长内容串起来"
    ],
    "visual": {
      "type": "image",
      "src": "assets/frames_cropped/video_long.jpg",
      "caption": "长视频生成：分段生成后保持角色和场景一致"
    },
    "source": ""
  },
  {
    "id": 68,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "音画同步为什么关键",
    "core": "真正的短剧不只是画面，还需要台词、口型、情绪和节奏同步。",
    "layout": "deepdive",
    "eyebrow": "68 / 第四章 AI 视频",
    "bullets": [
      "音画同步是短剧能不能看的关键",
      "台词、口型、动作和情绪要对齐",
      "只看画面不够，声音也要跟上"
    ],
    "visual": {
      "type": "diagram",
      "variant": "audio_sync",
      "caption": "音画同步：声音节奏、口型和动作要同时对齐"
    },
    "source": ""
  },
  {
    "id": 69,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "原生多模态视频的方向",
    "core": "未来的视频模型会把画面、声音、动作节奏一起建模。",
    "layout": "deepdive",
    "eyebrow": "69 / 第四章 AI 视频",
    "bullets": [
      "原生多模态视频的方向，是画面和声音一起建模",
      "不是先出画面，再单独补配音",
      "这会让内容生产更完整"
    ],
    "visual": {
      "type": "diagram",
      "variant": "native_video_model",
      "caption": "原生多模态视频：文字、图像、声音、动作共同进入模型"
    },
    "source": ""
  },
  {
    "id": 70,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "AI 视频适合做什么",
    "core": "概念短片、动态分镜、广告预演、社媒短内容、虚拟角色内容。",
    "layout": "deepdive",
    "eyebrow": "70 / 第四章 AI 视频",
    "bullets": [
      "视频模型最适合的，是动态分镜、概念短片和广告预演",
      "这些场景更需要快速试版",
      "先让创意跑起来，比一次做死更重要"
    ],
    "visual": {
      "type": "diagram",
      "variant": "video_use_cases",
      "caption": "适合场景：动态分镜、概念短片、广告预演、社媒内容"
    },
    "source": ""
  },
  {
    "id": 71,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "AI 视频当前不适合什么",
    "core": "长篇稳定叙事、复杂多人互动、严格动作连续、强 IP 商用仍需谨慎。",
    "layout": "deepdive",
    "eyebrow": "71 / 第四章 AI 视频",
    "bullets": [
      "现在的视频模型还不适合长篇叙事和复杂多人互动",
      "强 IP 商用也要格外谨慎",
      "技术能做不代表业务能直接上"
    ],
    "visual": {
      "type": "diagram",
      "variant": "video_limits",
      "caption": "当前限制：长篇叙事、复杂多人互动和严格连续动作仍需谨慎"
    },
    "source": ""
  },
  {
    "id": 72,
    "section": "第四章 AI 视频",
    "sectionKey": "video",
    "title": "这一章的结论",
    "core": "AI 视频的核心能力是让角色、场景和动作在时间里保持逻辑一致。",
    "layout": "hero",
    "eyebrow": "72 / 第四章 AI 视频",
    "bullets": [
      "AI 视频的核心能力，是让角色、场景和动作沿时间保持逻辑一致",
      "能动只是第一步，能稳定才有生产价值",
      "后面开始把文本、图像、视频连成漫剧工作流"
    ],
    "visual": {
      "type": "diagram",
      "variant": "spacetime"
    },
    "source": ""
  },
  {
    "id": 73,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "AI 漫剧是什么",
    "core": "用 AIGC 参与剧本、角色、分镜、画面、视频、配音、剪辑的短内容生产方式。",
    "layout": "chapter",
    "eyebrow": "73 / 第五章 AI 漫剧",
    "bullets": [
      "用 AIGC 参与剧本、角色、分镜、画面、视频、配音、剪辑的短内容生产方式",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "pipeline",
      "caption": "AI 漫剧生产线：从剧本到分镜再到视频化"
    },
    "source": ""
  },
  {
    "id": 74,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "AI 漫剧是一条多模型生产线",
    "core": "它是 LLM、AI 绘画、AI 视频、配音、剪辑、运营共同组成的工作流。",
    "layout": "plain",
    "eyebrow": "74 / 第五章 AI 漫剧",
    "bullets": [
      "它是 LLM、AI 绘画、AI 视频、配音、剪辑、运营共同组成的工作流",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "comic_tool_chain",
      "caption": "AI 漫剧由文本、图像、视频、后期多个模型环节组成"
    },
    "source": ""
  },
  {
    "id": 75,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "第一步：选题和故事框架",
    "core": "用 LLM 辅助生成题材方向、人物关系、冲突结构和集数规划。",
    "layout": "plain",
    "eyebrow": "75 / 第五章 AI 漫剧",
    "bullets": [
      "用 LLM 辅助生成题材方向、人物关系、冲突结构和集数规划",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "story_map",
      "caption": "故事框架：题材、人物关系、冲突和集数节奏"
    },
    "source": ""
  },
  {
    "id": 76,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "第二步：角色和世界观设定",
    "core": "用图像模型生成角色形象、服装、场景、视觉风格。",
    "layout": "plain",
    "eyebrow": "76 / 第五章 AI 漫剧",
    "bullets": [
      "用图像模型生成角色形象、服装、场景、视觉风格",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "character_bible",
      "caption": "角色设定：形象、服装、性格和世界观保持一致"
    },
    "source": ""
  },
  {
    "id": 77,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "第三步：分镜和画面资产",
    "core": "把剧本拆成镜头，生成关键画面，形成可复用素材库。",
    "layout": "plain",
    "eyebrow": "77 / 第五章 AI 漫剧",
    "bullets": [
      "把剧本拆成镜头，生成关键画面，形成可复用素材库",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "storyboard_grid",
      "caption": "分镜资产：把剧本拆成可生成、可复用的镜头"
    },
    "source": ""
  },
  {
    "id": 78,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "第四步：视频化和镜头运动",
    "core": "用 AI 视频把关键帧变成短镜头，再通过剪辑形成节奏。",
    "layout": "plain",
    "eyebrow": "78 / 第五章 AI 漫剧",
    "bullets": [
      "用 AI 视频把关键帧变成短镜头，再通过剪辑形成节奏",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "shot_motion",
      "caption": "视频化：关键帧、镜头运动和剪辑节奏共同决定可看性"
    },
    "source": ""
  },
  {
    "id": 79,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "第五步：声音和后期",
    "core": "配音、口型、音效、字幕、BGM 决定短剧是否真正可看。",
    "layout": "plain",
    "eyebrow": "79 / 第五章 AI 漫剧",
    "bullets": [
      "配音、口型、音效、字幕、BGM 决定短剧是否真正可看",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "audio_post",
      "caption": "声音和后期：配音、口型、音效、字幕、BGM 补齐完成度"
    },
    "source": ""
  },
  {
    "id": 80,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "AI 漫剧的优势",
    "core": "降低试错成本、缩短制作周期、提高选题测试速度。",
    "layout": "plain",
    "eyebrow": "80 / 第五章 AI 漫剧",
    "bullets": [
      "降低试错成本、缩短制作周期、提高选题测试速度",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "cost_time",
      "caption": "优势：降低试错成本、缩短制作周期、提高选题测试速度"
    },
    "source": ""
  },
  {
    "id": 81,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "AI 漫剧的风险",
    "core": "版权、IP 授权、肖像、内容合规、AI 标识、质量稳定性。",
    "layout": "plain",
    "eyebrow": "81 / 第五章 AI 漫剧",
    "bullets": [
      "版权、IP 授权、肖像、内容合规、AI 标识、质量稳定性",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "risk_stack",
      "caption": "风险：授权、肖像、内容合规、AI 标识和质量稳定性"
    },
    "source": ""
  },
  {
    "id": 82,
    "section": "第五章 AI 漫剧",
    "sectionKey": "comic",
    "title": "这一章的结论",
    "core": "AI 漫剧把内容生产拆成选题、剧本、角色、分镜、视频、后期等可控环节。",
    "layout": "hero",
    "eyebrow": "82 / 第五章 AI 漫剧",
    "bullets": [
      "AI 漫剧把内容生产拆成选题、剧本、角色、分镜、视频、后期等可控环节",
      "把前面学过的模型能力拆进真实内容生产环节。",
      "核心流程：选题 → 剧本 → 角色 → 分镜 → 视频 → 配音 → 剪辑 → 发布复盘。",
      "价值落点：先用低成本样片测试题材，再把有效内容做成系列。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "pipeline"
    },
    "source": ""
  },
  {
    "id": 83,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "为什么文旅 IP 适合 AIGC 漫剧",
    "core": "文旅内容天然有场景、人物、故事、打卡动机，适合短剧传播。",
    "layout": "chapter",
    "eyebrow": "83 / 第六章 北京环球机会",
    "bullets": [
      "文旅内容天然有场景、人物、故事、打卡动机，适合短剧传播",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "tourism",
      "caption": "文旅内容转化：内容种草、线下体验、二次传播"
    },
    "source": ""
  },
  {
    "id": 84,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "微短剧已经是内容消费入口",
    "core": "行业资料显示：市场规模、用户规模、使用时长，说明短剧已经成为主流内容形态。",
    "layout": "deepdive",
    "eyebrow": "84 / 第六章 北京环球机会",
    "bullets": [
      "行业资料显示：市场规模、用户规模、使用时长，说明短剧已经成为主流内容形态",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "stats",
      "caption": "行业资料整理：微短剧市场、用户规模与使用时长"
    },
    "source": "行业资料整理：微短剧市场规模、用户规模与使用时长"
  },
  {
    "id": 85,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "AI 降低了内容试错成本",
    "core": "行业资料显示：成本降低、周期缩短、团队规模缩小，说明可用小成本测试选题。",
    "layout": "media",
    "eyebrow": "85 / 第六章 北京环球机会",
    "bullets": [
      "行业资料显示：成本降低、周期缩短、团队规模缩小，说明可用小成本测试选题",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "aigc_efficiency",
      "caption": "AIGC 试错效率：更低成本、更短周期、更快验证题材"
    },
    "source": "行业资料整理：AIGC 内容生产效率提升案例"
  },
  {
    "id": 86,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "文旅短剧的转化链路",
    "core": "内容种草 → 场景认知 → 到访打卡 → 消费转化 → UGC 二次传播。",
    "layout": "business",
    "eyebrow": "86 / 第六章 北京环球机会",
    "bullets": [
      "内容种草 → 场景认知 → 到访打卡 → 消费转化 → UGC 二次传播",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "conversion_funnel",
      "caption": "文旅短剧转化链路：内容种草到线下体验再到二次传播"
    },
    "source": ""
  },
  {
    "id": 87,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "北京环球的天然优势",
    "core": "顶级 IP、沉浸式场景、游客流量、粉丝基础，让它适合做故事化内容。",
    "layout": "business",
    "eyebrow": "87 / 第六章 北京环球机会",
    "bullets": [
      "顶级 IP、沉浸式场景、游客流量、粉丝基础，让它适合做故事化内容",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "universal_assets",
      "caption": "北京环球优势：IP、沉浸场景、游客流量和粉丝基础"
    },
    "source": ""
  },
  {
    "id": 88,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "适合环球的四类题材",
    "core": "穿越奇遇、冒险探索、英雄成长、浪漫邂逅，对应哈利波特、侏罗纪、变形金刚、好莱坞大道。",
    "layout": "business",
    "eyebrow": "88 / 第六章 北京环球机会",
    "bullets": [
      "穿越奇遇、冒险探索、英雄成长、浪漫邂逅，对应哈利波特、侏罗纪、变形金刚、好莱坞大道",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "topic_quadrants",
      "caption": "四类题材：魔法、冒险、英雄、浪漫与城市体验"
    },
    "source": ""
  },
  {
    "id": 89,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "示例选题：一日魔法师",
    "core": "游客进入魔法世界完成一日任务，适合亲子和粉丝群体。",
    "layout": "business",
    "eyebrow": "89 / 第六章 北京环球机会",
    "bullets": [
      "游客进入魔法世界完成一日任务，适合亲子和粉丝群体",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "magic_day",
      "caption": "一日魔法师：任务线、打卡点和粉丝传播点"
    },
    "source": ""
  },
  {
    "id": 90,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "示例选题：恐龙守护者",
    "core": "侏罗纪场景结合冒险和温情，适合家庭用户和社媒传播。",
    "layout": "business",
    "eyebrow": "90 / 第六章 北京环球机会",
    "bullets": [
      "侏罗纪场景结合冒险和温情，适合家庭用户和社媒传播",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "dino_guardian",
      "caption": "恐龙守护者：冒险、温情和家庭用户传播"
    },
    "source": ""
  },
  {
    "id": 91,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "示例选题：特工训练营",
    "core": "变形金刚/科技英雄方向，适合动作感强的短视频内容。",
    "layout": "business",
    "eyebrow": "91 / 第六章 北京环球机会",
    "bullets": [
      "变形金刚/科技英雄方向，适合动作感强的短视频内容",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "agent_training",
      "caption": "特工训练营：动作挑战、科技感和短视频节奏"
    },
    "source": ""
  },
  {
    "id": 92,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "合规是准入门槛",
    "core": "投资额、备案、平台审核、AI 生成标识、IP 授权都必须前置考虑。",
    "layout": "deepdive",
    "eyebrow": "92 / 第六章 北京环球机会",
    "bullets": [
      "投资额、备案、平台审核、AI 生成标识、IP 授权都必须前置考虑",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "compliance_gate",
      "caption": "合规闸门：授权、备案、审核、标识要前置处理"
    },
    "source": "行业资料整理：网络微短剧备案与内容合规要求"
  },
  {
    "id": 93,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "三阶段执行路径",
    "core": "1-2个月培训试点；3-6个月流程标准化；6-12个月内容矩阵和商业化探索。",
    "layout": "media",
    "eyebrow": "93 / 第六章 北京环球机会",
    "bullets": [
      "1-2个月培训试点；3-6个月流程标准化；6-12个月内容矩阵和商业化探索",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "timeline",
      "caption": "三阶段执行路径：试点、放量、生态化"
    },
    "source": ""
  },
  {
    "id": 94,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "成功的关键是运营闭环",
    "core": "选题、制作、审核、发布、数据复盘、线下转化必须连起来。",
    "layout": "business",
    "eyebrow": "94 / 第六章 北京环球机会",
    "bullets": [
      "选题、制作、审核、发布、数据复盘、线下转化必须连起来",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "operation_loop",
      "caption": "运营闭环：选题、制作、审核、发布、复盘、转化"
    },
    "source": ""
  },
  {
    "id": 95,
    "section": "第六章 北京环球机会",
    "sectionKey": "universal",
    "title": "环球项目的可行性判断",
    "core": "技术上可行，内容上适配，商业上有机会；真正门槛在授权、审美、合规和持续运营。",
    "layout": "hero",
    "eyebrow": "95 / 第六章 北京环球机会",
    "bullets": [
      "技术上可行，内容上适配，商业上有机会；真正门槛在授权、审美、合规和持续运营",
      "判断维度：市场入口、IP 适配、场景转化、合规边界、执行节奏。",
      "运营闭环：内容种草 → 到访打卡 → 消费转化 → UGC 二次传播 → 数据复盘。",
      "项目落点：先小样试错，再标准化流程，最后形成内容矩阵。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "business_loop"
    },
    "source": ""
  },
  {
    "id": 96,
    "section": "结尾",
    "sectionKey": "closing",
    "title": "回到今天的主线",
    "core": "LLM 解决文本理解，AI 绘画解决视觉生成，AI 视频解决时间连续，AI 漫剧把它们串成内容生产。",
    "layout": "chapter",
    "eyebrow": "96 / 结尾",
    "bullets": [
      "LLM 解决文本理解，AI 绘画解决视觉生成，AI 视频解决时间连续，AI 漫剧把它们串成内容生产",
      "判断顺序：先看模型能力，再看业务场景，最后看执行条件。",
      "完整框架：能力、边界、场景、合规、运营价值。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "network"
    },
    "source": ""
  },
  {
    "id": 97,
    "section": "结尾",
    "sectionKey": "closing",
    "title": "判断 AIGC 项目要看四件事",
    "core": "技术能不能做、内容值不值得做、合规能不能过、运营能不能持续。",
    "layout": "plain",
    "eyebrow": "97 / 结尾",
    "bullets": [
      "技术能不能做、内容值不值得做、合规能不能过、运营能不能持续",
      "判断顺序：先看模型能力，再看业务场景，最后看执行条件。",
      "完整框架：能力、边界、场景、合规、运营价值。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "four_checks",
      "caption": "AIGC 项目判断：技术、内容、合规、运营"
    },
    "source": ""
  },
  {
    "id": 98,
    "section": "结尾",
    "sectionKey": "closing",
    "title": "最后一页：从会用工具，到会判断机会",
    "core": "真正重要的是理解每种模型的能力、边界和适合进入的业务环节。",
    "layout": "hero",
    "eyebrow": "98 / 结尾",
    "bullets": [
      "真正重要的是理解每种模型的能力、边界和适合进入的业务环节",
      "判断顺序：先看模型能力，再看业务场景，最后看执行条件。",
      "完整框架：能力、边界、场景、合规、运营价值。"
    ],
    "visual": {
      "type": "diagram",
      "variant": "network"
    },
    "source": ""
  }
];
window.COURSE_REFS = [
  {
    "label": "Attention Is All You Need",
    "url": "https://arxiv.org/abs/1706.03762"
  },
  {
    "label": "Denoising Diffusion Probabilistic Models",
    "url": "https://arxiv.org/abs/2006.11239"
  },
  {
    "label": "High-Resolution Image Synthesis with Latent Diffusion Models",
    "url": "https://arxiv.org/abs/2112.10752"
  },
  {
    "label": "Scalable Diffusion Models with Transformers",
    "url": "https://arxiv.org/abs/2212.09748"
  }
];
