import { Question, AnimalTemplate } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    scene: "在陌生的社交场合，你通常会",
    options: [
      { text: "主动寻找话题，成为焦点", scores: { expression: 2, dominance: 1, adventure: 0, attachment: 0, security: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "安静观察，等别人靠近", scores: { expression: -2, dominance: -1, adventure: 0, attachment: 0, security: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "只和认识的人交谈", scores: { expression: -1, dominance: 0, adventure: -1, attachment: 1, security: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "寻找出口，随时准备离开", scores: { expression: 0, dominance: 0, adventure: 0, attachment: -1, security: 2, rational: 0, loyalty: 0, emotionality: 0 } }
    ]
  },
  {
    id: 2,
    scene: "面对突如其来的危机，你的第一反应是",
    options: [
      { text: "立刻指挥大家行动", scores: { dominance: 2, rational: 1, expression: 0, attachment: 0, security: 0, adventure: 0, loyalty: 0, emotionality: 0 } },
      { text: "寻找最安全的躲避处", scores: { dominance: -2, rational: -1, expression: 0, attachment: 0, security: 2, adventure: 0, loyalty: 0, emotionality: 0 } },
      { text: "分析数据，寻找最优解", scores: { dominance: 0, rational: 2, expression: 0, attachment: 0, security: 1, adventure: 0, loyalty: 0, emotionality: -1 } },
      { text: "保护身边最亲近的人", scores: { dominance: 0, rational: -2, expression: 0, attachment: 2, security: 0, adventure: 0, loyalty: 1, emotionality: 1 } }
    ]
  },
  {
    id: 3,
    scene: "你如何看待未知的冒险？",
    options: [
      { text: "那是生命意义所在", scores: { adventure: 2, security: -2, rational: 0, expression: 1, dominance: 0, attachment: 0, loyalty: 0, emotionality: 0 } },
      { text: "除非有万全准备才去", scores: { adventure: -2, security: 2, rational: 1, expression: 0, dominance: 0, attachment: 0, loyalty: 0, emotionality: 0 } },
      { text: "更倾向于安稳的生活", scores: { adventure: -1, security: 1, rational: 0, expression: -1, dominance: 0, attachment: 1, loyalty: 0, emotionality: 0 } },
      { text: "随遇而安，顺其自然", scores: { adventure: 1, security: -1, rational: -1, expression: 0, dominance: 0, attachment: 0, loyalty: 0, emotionality: 1 } }
    ]
  },
  {
    id: 4,
    scene: "当朋友陷入困境，你会",
    options: [
      { text: "提供最坚定的情感支持", scores: { loyalty: 2, emotionality: 2, attachment: 0, expression: 0, dominance: 0, rational: 0, security: 0, adventure: 0 } },
      { text: "冷静分析，指出其错误", scores: { loyalty: -2, emotionality: -2, attachment: 0, expression: 0, dominance: 0, rational: 2, security: 0, adventure: 0 } },
      { text: "动用所有资源帮其解决", scores: { loyalty: 1, emotionality: 0, attachment: 2, expression: 0, dominance: 1, rational: 0, security: 0, adventure: 0 } },
      { text: "默默陪伴，不发一言", scores: { loyalty: -1, emotionality: 1, attachment: -1, expression: -1, dominance: 0, rational: 0, security: 1, adventure: 0 } }
    ]
  },
  {
    id: 5,
    scene: "在团队合作中，你更倾向于",
    options: [
      { text: "制定规则与方向", scores: { dominance: 2, rational: 1, security: 0, expression: 0, attachment: 0, adventure: 0, loyalty: 0, emotionality: 0 } },
      { text: "执行具体任务", scores: { dominance: -2, rational: -1, security: 1, expression: 0, attachment: 0, adventure: 0, loyalty: 0, emotionality: 0 } },
      { text: "调解成员间的矛盾", scores: { dominance: 0, rational: 0, security: 0, expression: 2, attachment: 2, adventure: 0, loyalty: 1, emotionality: 0 } },
      { text: "提供创意与灵感", scores: { dominance: 1, rational: 0, security: -1, expression: -2, attachment: -2, adventure: 2, loyalty: 0, emotionality: 0 } }
    ]
  },
  {
    id: 6,
    scene: "对于“承诺”，你的态度是",
    options: [
      { text: "一旦许下，绝不背叛", scores: { loyalty: 2, security: 1, attachment: 0, expression: 0, dominance: 0, rational: 0, adventure: 0, emotionality: 0 } },
      { text: "视情况而定，灵活处理", scores: { loyalty: -2, security: -1, attachment: 0, expression: 0, dominance: 0, rational: 1, adventure: 1, emotionality: 0 } },
      { text: "很少承诺，怕负担太重", scores: { loyalty: -1, security: 2, attachment: -1, expression: 0, dominance: 0, rational: 0, adventure: 0, emotionality: 0 } },
      { text: "承诺是维系关系的纽带", scores: { loyalty: 1, security: -2, attachment: 2, expression: 1, dominance: 0, rational: 0, adventure: 0, emotionality: 1 } }
    ]
  },
  {
    id: 7,
    scene: "独处时，你通常会感到",
    options: [
      { text: "自由自在，充满能量", scores: { attachment: -2, adventure: 1, expression: 1, dominance: 0, rational: 0, security: 0, loyalty: 0, emotionality: 0 } },
      { text: "孤独寂寞，渴望陪伴", scores: { attachment: 2, adventure: -1, expression: -1, dominance: 0, rational: 0, security: 0, loyalty: 0, emotionality: 0 } },
      { text: "平静安宁，适合思考", scores: { attachment: -1, adventure: 0, expression: -2, dominance: 0, rational: 2, security: 1, loyalty: 0, emotionality: 0 } },
      { text: "焦虑不安，想找点事做", scores: { attachment: 1, adventure: 2, expression: 2, dominance: 0, rational: -2, security: -1, loyalty: 0, emotionality: 0 } }
    ]
  },
  {
    id: 8,
    scene: "面对批评，你会",
    options: [
      { text: "反思并努力改进", scores: { rational: 2, emotionality: -1, dominance: 0, expression: 0, attachment: 0, security: 0, loyalty: 0, adventure: 0 } },
      { text: "据理力争，维护尊严", scores: { rational: -2, emotionality: 1, dominance: 1, expression: 1, attachment: 0, security: 0, loyalty: 0, adventure: 0 } },
      { text: "感到受伤，情绪低落", scores: { rational: -1, emotionality: 2, dominance: -1, expression: 0, attachment: 1, security: 0, loyalty: 0, adventure: 0 } },
      { text: "无所谓，不放在心上", scores: { rational: 1, emotionality: -2, dominance: 1, expression: -1, attachment: -1, security: 1, loyalty: 0, adventure: 0 } }
    ]
  },
  {
    id: 9,
    scene: "你更喜欢哪种旅行方式？",
    options: [
      { text: "说走就走的流浪", scores: { adventure: 2, security: -2, expression: 1, dominance: 0, attachment: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "计划详尽的深度游", scores: { adventure: -2, security: 2, expression: -1, dominance: 0, attachment: 0, rational: 1, loyalty: 0, emotionality: 0 } },
      { text: "和好友一起热闹旅行", scores: { adventure: 1, security: -1, expression: 2, dominance: 0, attachment: 2, rational: 0, loyalty: 1, emotionality: 0 } },
      { text: "独自一人安静探索", scores: { adventure: -1, security: 1, expression: -2, dominance: 0, attachment: -2, rational: 2, loyalty: -1, emotionality: 0 } }
    ]
  },
  {
    id: 10,
    scene: "在竞争中，你的心态是",
    options: [
      { text: "必须赢，证明自己", scores: { dominance: 2, expression: 1, adventure: 0, attachment: 0, security: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "重在参与，享受过程", scores: { dominance: -2, expression: -1, adventure: 0, attachment: 0, security: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "合作共赢才是目的", scores: { dominance: 1, expression: 0, adventure: -1, attachment: 2, security: 1, rational: 0, loyalty: 1, emotionality: 0 } },
      { text: "压力巨大，想逃避", scores: { dominance: -1, expression: -2, adventure: 1, attachment: -2, security: -1, rational: 0, loyalty: -1, emotionality: 0 } }
    ]
  },
  {
    id: 11,
    scene: "你如何处理压力？",
    options: [
      { text: "运动或大声宣泄", scores: { expression: 2, emotionality: 2, adventure: 1, dominance: 0, attachment: 0, rational: 0, security: 0, loyalty: 0 } },
      { text: "静坐冥想，自我调节", scores: { expression: -2, emotionality: -2, adventure: -1, dominance: 0, attachment: 0, rational: 1, security: 1, loyalty: 0 } },
      { text: "找朋友倾诉，寻求安慰", scores: { expression: 1, emotionality: 1, adventure: 0, dominance: -1, attachment: 2, rational: 0, security: 0, loyalty: 1 } },
      { text: "疯狂工作，转移注意力", scores: { expression: -1, emotionality: -1, adventure: 0, dominance: 2, attachment: -2, rational: 2, security: -1, loyalty: 0 } }
    ]
  },
  {
    id: 12,
    scene: "在陌生的城市迷路了，你会",
    options: [
      { text: "随性乱走，享受未知", scores: { adventure: 2, security: -2, rational: -1, expression: 1, dominance: 0, attachment: 0, loyalty: 0, emotionality: 0 } },
      { text: "立刻打开地图，精确导航", scores: { adventure: -2, security: 2, rational: 2, expression: -1, dominance: 0, attachment: 0, loyalty: 0, emotionality: 0 } },
      { text: "询问当地人，寻求指引", scores: { adventure: 0, security: 1, rational: 0, expression: 2, attachment: 2, dominance: 0, loyalty: 1, emotionality: 0 } },
      { text: "感到慌张，想立刻回家", scores: { adventure: -1, security: -1, rational: -2, expression: -2, dominance: -1, attachment: 1, loyalty: 0, emotionality: 2 } }
    ]
  },
  {
    id: 13,
    scene: "你如何看待“金钱”？",
    options: [
      { text: "实现梦想的工具", scores: { adventure: 1, dominance: 1, security: -1, expression: 1, attachment: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "安全感的来源", scores: { adventure: -1, dominance: -1, security: 2, expression: -1, attachment: 0, rational: 1, loyalty: 0, emotionality: 0 } },
      { text: "分享快乐的媒介", scores: { adventure: 0, dominance: 0, security: 0, expression: 2, attachment: 2, rational: -1, loyalty: 1, emotionality: 1 } },
      { text: "数字而已，并不重要", scores: { adventure: 2, dominance: -2, security: -2, expression: -2, attachment: -2, rational: 2, loyalty: -1, emotionality: -1 } }
    ]
  },
  {
    id: 14,
    scene: "当你的观点被挑战时，你会",
    options: [
      { text: "坚持己见，据理力争", scores: { dominance: 2, rational: 1, expression: 1, adventure: 0, attachment: 0, security: 0, loyalty: 0, emotionality: 0 } },
      { text: "虚心听取，修正错误", scores: { dominance: -2, rational: -1, expression: -1, adventure: 0, attachment: 0, security: 0, loyalty: 0, emotionality: 0 } },
      { text: "寻找共识，化解分歧", scores: { dominance: 0, rational: 0, expression: 2, adventure: -1, attachment: 2, security: 1, loyalty: 1, emotionality: 0 } },
      { text: "感到愤怒，情绪失控", scores: { dominance: 1, rational: -2, expression: 0, adventure: 1, attachment: -2, security: -1, loyalty: -1, emotionality: 2 } }
    ]
  },
  {
    id: 15,
    scene: "你更喜欢哪种工作环境？",
    options: [
      { text: "充满挑战与竞争", scores: { adventure: 2, dominance: 2, security: -2, expression: 1, attachment: 0, rational: 0, loyalty: 0, emotionality: 0 } },
      { text: "稳定且有保障", scores: { adventure: -2, dominance: -2, security: 2, expression: -1, attachment: 0, rational: 1, loyalty: 0, emotionality: 0 } },
      { text: "充满创意与自由", scores: { adventure: 1, dominance: 0, security: -1, expression: 2, attachment: 1, rational: -1, loyalty: 0, emotionality: 1 } },
      { text: "严谨且有逻辑", scores: { adventure: -1, dominance: 1, security: 1, expression: -2, attachment: -1, rational: 2, loyalty: 0, emotionality: -1 } }
    ]
  },
  {
    id: 16,
    scene: "远方传来雷声",
    options: [
      { text: "数着闪电与雷声的间隔，判断距离", scores: { expression: -1, attachment: -1, security: 1, dominance: 1, rational: 3, adventure: 1, loyalty: 0, emotionality: -3 } },
      { text: "寻找最近的避雨处，躲避风暴", scores: { expression: -1, attachment: 1, security: 3, dominance: -1, rational: 2, adventure: -2, loyalty: 1, emotionality: -1 } },
      { text: "站在高处，想要看清雷暴的全貌", scores: { expression: 2, attachment: -2, security: -3, dominance: 2, rational: -1, adventure: 3, loyalty: 0, emotionality: 2 } },
      { text: "给亲友发信息，提醒他们注意安全", scores: { expression: 2, attachment: 3, security: 1, dominance: 0, rational: 1, adventure: -1, loyalty: 3, emotionality: 2 } }
    ]
  },
  {
    id: 17,
    scene: "你站在空旷剧场的舞台中央",
    options: [
      { text: "开始即兴表演，享受回声", scores: { expression: 3, attachment: -1, security: -1, dominance: 2, rational: -2, adventure: 2, loyalty: 0, emotionality: 3 } },
      { text: "检查舞台的灯光和音响设备", scores: { expression: -1, attachment: -1, security: 1, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "感到局促不安，迅速走下舞台", scores: { expression: -3, attachment: 1, security: 3, dominance: -2, rational: 1, adventure: -3, loyalty: 1, emotionality: 1 } },
      { text: "闭上眼想象台下坐满了观众", scores: { expression: 2, attachment: 2, security: 0, dominance: 1, rational: -1, adventure: 1, loyalty: 1, emotionality: 3 } }
    ]
  },
  {
    id: 18,
    scene: "朋友递来一杯未知味道的酒",
    options: [
      { text: "豪爽地一饮而尽", scores: { expression: 2, attachment: 2, security: -2, dominance: 1, rational: -3, adventure: 3, loyalty: 2, emotionality: 2 } },
      { text: "先闻一闻，询问酒的名字和成分", scores: { expression: -1, attachment: 1, security: 2, dominance: 0, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } },
      { text: "抿一小口，仔细品味其中的层次", scores: { expression: 1, attachment: 1, security: 1, dominance: 0, rational: 2, adventure: 1, loyalty: 1, emotionality: 1 } },
      { text: "婉言谢绝，坚持只喝自己熟悉的", scores: { expression: -2, attachment: -1, security: 3, dominance: -1, rational: 2, adventure: -3, loyalty: 1, emotionality: -1 } }
    ]
  },
  {
    id: 19,
    scene: "一只受伤的鸟落在你脚边",
    options: [
      { text: "小心捧起它，带回家悉心照料", scores: { expression: 1, attachment: 3, security: 1, dominance: 1, rational: -1, adventure: -1, loyalty: 3, emotionality: 3 } },
      { text: "寻找附近的鸟巢，试图送它回去", scores: { expression: 1, attachment: 2, security: 1, dominance: 0, rational: 2, adventure: 1, loyalty: 2, emotionality: 1 } },
      { text: "观察它的伤势，判断是否需要专业救助", scores: { expression: -1, attachment: 1, security: 2, dominance: 1, rational: 3, adventure: 0, loyalty: 1, emotionality: -2 } },
      { text: "感叹生命的脆弱，默默走开", scores: { expression: 0, attachment: -3, security: 1, dominance: -1, rational: 1, adventure: -2, loyalty: -1, emotionality: 2 } }
    ]
  },
  {
    id: 20,
    scene: "旧照片从书页中滑落",
    options: [
      { text: "凝视照片，陷入漫长的回忆", scores: { expression: 1, attachment: 3, security: 1, dominance: -1, rational: -2, adventure: -2, loyalty: 3, emotionality: 3 } },
      { text: "翻看照片背面，寻找日期和地点", scores: { expression: -1, attachment: 1, security: 1, dominance: 0, rational: 3, adventure: -1, loyalty: 2, emotionality: -2 } },
      { text: "立刻联系照片中的人，分享这份惊喜", scores: { expression: 3, attachment: 3, security: -1, dominance: 1, rational: -1, adventure: 1, loyalty: 2, emotionality: 2 } },
      { text: "将照片重新夹好，继续阅读", scores: { expression: -2, attachment: -2, security: 2, dominance: 1, rational: 3, adventure: -1, loyalty: 1, emotionality: -3 } }
    ]
  },
  {
    id: 21,
    scene: "漫长旅途中出现陌生同行者",
    options: [
      { text: "主动攀谈，分享彼此的故事", scores: { expression: 3, attachment: 3, security: -1, dominance: 1, rational: -1, adventure: 2, loyalty: 1, emotionality: 2 } },
      { text: "保持礼貌的沉默，观察对方的言行", scores: { expression: -2, attachment: -1, security: 2, dominance: 0, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } },
      { text: "暗中戒备，确保自己的行李安全", scores: { expression: -1, attachment: -2, security: 3, dominance: 1, rational: 2, adventure: -1, loyalty: 0, emotionality: -1 } },
      { text: "提议分担旅途中的琐事，建立合作", scores: { expression: 1, attachment: 2, security: 1, dominance: 2, rational: 2, adventure: 1, loyalty: 2, emotionality: 0 } }
    ]
  },
  {
    id: 22,
    scene: "狂风吹乱帐篷",
    options: [
      { text: "冲进风中，拼命拉住支架", scores: { expression: 1, attachment: 1, security: -2, dominance: 2, rational: -2, adventure: 2, loyalty: 2, emotionality: 2 } },
      { text: "冷静指挥同伴，分工加固各个角落", scores: { expression: 2, attachment: 2, security: 2, dominance: 3, rational: 3, adventure: 1, loyalty: 2, emotionality: -1 } },
      { text: "寻找重物压住帐篷边缘", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 0, loyalty: 1, emotionality: -2 } },
      { text: "放弃帐篷，寻找更稳固的天然避难所", scores: { expression: -1, attachment: -2, security: 3, dominance: 1, rational: 2, adventure: 2, loyalty: 0, emotionality: -1 } }
    ]
  },
  {
    id: 23,
    scene: "有人对你微笑却沉默",
    options: [
      { text: "回以微笑，并主动打破沉默", scores: { expression: 3, attachment: 3, security: 1, dominance: 1, rational: -1, adventure: 1, loyalty: 1, emotionality: 2 } },
      { text: "揣摩对方微笑背后的深意", scores: { expression: -1, attachment: -1, security: 1, dominance: 0, rational: 3, adventure: 0, loyalty: 1, emotionality: 1 } },
      { text: "感到不安，避开对方的视线", scores: { expression: -2, attachment: 1, security: 3, dominance: -2, rational: 1, adventure: -2, loyalty: 1, emotionality: 2 } },
      { text: "也保持沉默，看谁先开口", scores: { expression: -1, attachment: -2, security: 2, dominance: 2, rational: 2, adventure: -1, loyalty: 0, emotionality: -1 } }
    ]
  },
  {
    id: 24,
    scene: "夜晚的钟声敲了十三下",
    options: [
      { text: "怀疑自己听错了，重新看表确认", scores: { expression: -1, attachment: -1, security: 2, dominance: 0, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } },
      { text: "感到脊背发凉，认为是不祥之兆", scores: { expression: 1, attachment: 1, security: -1, dominance: -1, rational: -3, adventure: 1, loyalty: 0, emotionality: 3 } },
      { text: "兴奋地寻找钟楼，想看看到底发生了什么", scores: { expression: 2, attachment: -1, security: -2, dominance: 1, rational: -1, adventure: 3, loyalty: 0, emotionality: 2 } },
      { text: "记录下这个时刻，作为日记的素材", scores: { expression: 2, attachment: 0, security: 1, dominance: 1, rational: 2, adventure: 1, loyalty: 1, emotionality: 1 } }
    ]
  },
  {
    id: 25,
    scene: "河流突然改道",
    options: [
      { text: "顺着新河道走，看看通向哪里", scores: { expression: 1, attachment: -2, security: -2, dominance: 1, rational: -1, adventure: 3, loyalty: 0, emotionality: 2 } },
      { text: "在旧河床寻找被遗留的宝藏或秘密", scores: { expression: 1, attachment: -1, security: 1, dominance: 1, rational: 2, adventure: 2, loyalty: 0, emotionality: 1 } },
      { text: "研究地形，分析改道的原因", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "在岸边筑起堤坝，试图引回原道", scores: { expression: 1, attachment: 1, security: 2, dominance: 3, rational: 2, adventure: -1, loyalty: 2, emotionality: 0 } }
    ]
  },
  {
    id: 26,
    scene: "高塔只允许一人攀登",
    options: [
      { text: "毫不犹豫地率先向上爬", scores: { expression: 2, attachment: -3, security: -2, dominance: 3, rational: 1, adventure: 3, loyalty: -2, emotionality: 1 } },
      { text: "把机会让给最渴望上去的同伴", scores: { expression: 1, attachment: 3, security: -1, dominance: -2, rational: -1, adventure: 0, loyalty: 3, emotionality: 2 } },
      { text: "在塔底守卫，等待攀登者归来", scores: { expression: -1, attachment: 2, security: 3, dominance: 1, rational: 2, adventure: -2, loyalty: 3, emotionality: 0 } },
      { text: "寻找高塔的结构弱点，评估安全性", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } }
    ]
  },
  {
    id: 27,
    scene: "你发现门没有上锁",
    options: [
      { text: "轻轻推开一条缝，向内窥视", scores: { expression: -1, attachment: -1, security: 1, dominance: 0, rational: 3, adventure: 2, loyalty: 0, emotionality: 0 } },
      { text: "大步走进去，询问是否有人在家", scores: { expression: 3, attachment: 1, security: -2, dominance: 2, rational: -1, adventure: 2, loyalty: 0, emotionality: 2 } },
      { text: "顺手帮主人把门锁好，然后离开", scores: { expression: -1, attachment: 1, security: 3, dominance: 1, rational: 2, adventure: -2, loyalty: 3, emotionality: -1 } },
      { text: "在门口留下一个标记，以防万一", scores: { expression: 0, attachment: -1, security: 2, dominance: 1, rational: 2, adventure: 1, loyalty: 1, emotionality: -1 } }
    ]
  },
  {
    id: 28,
    scene: "星空下有人邀请你跳舞",
    options: [
      { text: "欣然接受，在星光下尽情旋转", scores: { expression: 3, attachment: 3, security: -1, dominance: 1, rational: -2, adventure: 2, loyalty: 1, emotionality: 3 } },
      { text: "感到害羞，婉拒并坐在一旁观看", scores: { expression: -3, attachment: 1, security: 3, dominance: -2, rational: 1, adventure: -2, loyalty: 1, emotionality: 2 } },
      { text: "询问舞曲的名字，试图合上节拍", scores: { expression: 1, attachment: 2, security: 1, dominance: 0, rational: 3, adventure: 0, loyalty: 1, emotionality: 0 } },
      { text: "观察舞池中的其他人，学习舞步", scores: { expression: 0, attachment: 1, security: 2, dominance: 0, rational: 2, adventure: 1, loyalty: 1, emotionality: -1 } }
    ]
  },
  {
    id: 29,
    scene: "你握着一张单程车票",
    options: [
      { text: "满怀期待地登上列车，永不回头", scores: { expression: 2, attachment: -3, security: -3, dominance: 1, rational: -1, adventure: 3, loyalty: -2, emotionality: 2 } },
      { text: "在站台上徘徊，思念故乡的一切", scores: { expression: 1, attachment: 3, security: 2, dominance: -2, rational: -2, adventure: -3, loyalty: 3, emotionality: 3 } },
      { text: "仔细检查发车时间和目的地信息", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 0, loyalty: 1, emotionality: -2 } },
      { text: "试图将车票卖给别人，换取现金", scores: { expression: 0, attachment: -3, security: 3, dominance: 2, rational: 3, adventure: -1, loyalty: -3, emotionality: -3 } }
    ]
  },
  {
    id: 30,
    scene: "沙漏快要流尽",
    options: [
      { text: "拼命加快手头的工作，与时间赛跑", scores: { expression: 1, attachment: -1, security: -1, dominance: 2, rational: 2, adventure: 1, loyalty: 2, emotionality: 2 } },
      { text: "平静地看着最后一粒沙落下", scores: { expression: -2, attachment: 0, security: 2, dominance: -1, rational: 3, adventure: -1, loyalty: 1, emotionality: -3 } },
      { text: "翻转沙漏，试图重新开始", scores: { expression: 2, attachment: 1, security: -2, dominance: 2, rational: -2, adventure: 2, loyalty: 0, emotionality: 2 } },
      { text: "打碎沙漏，拒绝被时间掌控", scores: { expression: 3, attachment: -2, security: -3, dominance: 3, rational: -3, adventure: 3, loyalty: -1, emotionality: 3 } }
    ]
  },
  {
    id: 31,
    scene: "一只狼在远处注视你",
    options: [
      { text: "直视它的眼睛，展示你的无畏", scores: { expression: 2, attachment: -2, security: -2, dominance: 3, rational: 1, adventure: 3, loyalty: 0, emotionality: 1 } },
      { text: "慢慢后退，寻找可以攀爬的树木", scores: { expression: -2, attachment: 1, security: 3, dominance: -1, rational: 2, adventure: -2, loyalty: 1, emotionality: -1 } },
      { text: "准备好火把或武器，严阵以待", scores: { expression: -1, attachment: -1, security: 2, dominance: 2, rational: 3, adventure: 1, loyalty: 1, emotionality: -1 } },
      { text: "试图模仿狼嚎，与它建立某种联系", scores: { expression: 3, attachment: 1, security: -3, dominance: 1, rational: -2, adventure: 3, loyalty: 0, emotionality: 3 } }
    ]
  },
  {
    id: 32,
    scene: "你被推到聚光灯下",
    options: [
      { text: "张开双臂，迎接全场的掌声", scores: { expression: 3, attachment: 1, security: -1, dominance: 3, rational: -2, adventure: 2, loyalty: 0, emotionality: 3 } },
      { text: "用手遮住眼睛，寻找逃跑的出口", scores: { expression: -3, attachment: 1, security: 3, dominance: -2, rational: 1, adventure: -3, loyalty: 1, emotionality: 2 } },
      { text: "深呼吸，开始有条不紊地演讲", scores: { expression: 2, attachment: 1, security: 1, dominance: 2, rational: 3, adventure: 1, loyalty: 2, emotionality: -1 } },
      { text: "幽默地自嘲，缓解尴尬的气氛", scores: { expression: 3, attachment: 2, security: 1, dominance: 1, rational: 2, adventure: 1, loyalty: 1, emotionality: 1 } }
    ]
  },
  {
    id: 33,
    scene: "有人把秘密交给你",
    options: [
      { text: "发誓守口如瓶，绝不背叛这份信任", scores: { expression: -1, attachment: 3, security: 2, dominance: 1, rational: 1, adventure: -1, loyalty: 3, emotionality: 2 } },
      { text: "分析这个秘密的价值，看能否利用", scores: { expression: -1, attachment: -3, security: 1, dominance: 2, rational: 3, adventure: 1, loyalty: -3, emotionality: -3 } },
      { text: "感到压力巨大，想找个树洞倾诉", scores: { expression: 2, attachment: 2, security: -1, dominance: -1, rational: -2, adventure: 0, loyalty: 1, emotionality: 3 } },
      { text: "询问更多细节，试图拼凑出真相", scores: { expression: 1, attachment: 1, security: 0, dominance: 1, rational: 3, adventure: 2, loyalty: 1, emotionality: 0 } }
    ]
  },
  {
    id: 34,
    scene: "远方传来歌声",
    options: [
      { text: "闭上眼聆听，任由情感流淌", scores: { expression: 1, attachment: 2, security: 1, dominance: -1, rational: -3, adventure: -1, loyalty: 1, emotionality: 3 } },
      { text: "寻找歌声的来源，想看看是谁在唱", scores: { expression: 2, attachment: 1, security: -1, dominance: 1, rational: -1, adventure: 3, loyalty: 1, emotionality: 2 } },
      { text: "轻声跟着哼唱，加入这段旋律", scores: { expression: 3, attachment: 3, security: 1, dominance: 0, rational: -1, adventure: 1, loyalty: 2, emotionality: 2 } },
      { text: "分析歌词的含义，判断歌者的心情", scores: { expression: -1, attachment: 0, security: 1, dominance: 1, rational: 3, adventure: 0, loyalty: 1, emotionality: -1 } }
    ]
  },
  {
    id: 35,
    scene: "你在陌生城市迷路",
    options: [
      { text: "收起地图，随性地在小巷中穿梭", scores: { expression: 1, attachment: -2, security: -3, dominance: 1, rational: -1, adventure: 3, loyalty: 0, emotionality: 2 } },
      { text: "走进最近的咖啡馆，向当地人问路", scores: { expression: 2, attachment: 3, security: 1, dominance: 0, rational: 2, adventure: 0, loyalty: 1, emotionality: 1 } },
      { text: "寻找高大的地标建筑，重新定位", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "站在原地不动，等待同伴来找你", scores: { expression: -2, attachment: 3, security: 3, dominance: -2, rational: 1, adventure: -3, loyalty: 2, emotionality: 1 } }
    ]
  },
  {
    id: 36,
    scene: "一条船只能带走两个人",
    options: [
      { text: "把位置让给最年幼和最年长的人", scores: { expression: 1, attachment: 2, security: -3, dominance: -1, rational: -2, adventure: 0, loyalty: 3, emotionality: 3 } },
      { text: "通过投票或抽签来决定谁上船", scores: { expression: -1, attachment: 1, security: 1, dominance: 1, rational: 3, adventure: -1, loyalty: 2, emotionality: -2 } },
      { text: "利用自己的力量或权势抢占一个位置", scores: { expression: 2, attachment: -3, security: 3, dominance: 3, rational: 2, adventure: 1, loyalty: -3, emotionality: -2 } },
      { text: "提议大家轮流划船，或者寻找浮木", scores: { expression: 2, attachment: 2, security: 1, dominance: 2, rational: 3, adventure: 3, loyalty: 2, emotionality: 1 } }
    ]
  },
  {
    id: 37,
    scene: "你突然得到一笔巨额财富",
    options: [
      { text: "大肆挥霍，享受从未有过的奢华", scores: { expression: 3, attachment: -1, security: -2, dominance: 2, rational: -3, adventure: 3, loyalty: -1, emotionality: 3 } },
      { text: "匿名捐给慈善机构，帮助需要的人", scores: { expression: 1, attachment: 3, security: 1, dominance: 1, rational: 1, adventure: 0, loyalty: 3, emotionality: 2 } },
      { text: "制定周密的理财计划，让财富增值", scores: { expression: -1, attachment: -1, security: 3, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -3 } },
      { text: "藏在地下，不让任何人知道", scores: { expression: -3, attachment: -2, security: 3, dominance: 1, rational: 2, adventure: -2, loyalty: 0, emotionality: -2 } }
    ]
  },
  {
    id: 38,
    scene: "花在一夜之间全部盛开",
    options: [
      { text: "邀请所有人来欣赏这奇迹般的景色", scores: { expression: 3, attachment: 3, security: 1, dominance: 1, rational: -1, adventure: 1, loyalty: 2, emotionality: 2 } },
      { text: "采摘最美的一朵，送给心爱的人", scores: { expression: 2, attachment: 3, security: 0, dominance: 1, rational: -2, adventure: 1, loyalty: 3, emotionality: 3 } },
      { text: "研究土壤和气候，寻找盛开的原因", scores: { expression: -1, attachment: -1, security: 1, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "担心花期太短，开始忧虑凋谢的时刻", scores: { expression: 0, attachment: 1, security: 1, dominance: -1, rational: 1, adventure: -2, loyalty: 1, emotionality: 3 } }
    ]
  },
  {
    id: 39,
    scene: "有人迟迟未归",
    options: [
      { text: "在门口点亮一盏灯，彻夜守候", scores: { expression: 1, attachment: 3, security: 1, dominance: 0, rational: -2, adventure: -2, loyalty: 3, emotionality: 3 } },
      { text: "拿起武器，出门沿路寻找", scores: { expression: 2, attachment: 2, security: -2, dominance: 2, rational: -1, adventure: 3, loyalty: 3, emotionality: 2 } },
      { text: "联络所有可能知情的人，收集线索", scores: { expression: 2, attachment: 3, security: 1, dominance: 1, rational: 3, adventure: 1, loyalty: 2, emotionality: 1 } },
      { text: "强迫自己睡觉，相信对方能照顾好自己", scores: { expression: -2, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: -1, loyalty: 1, emotionality: -3 } }
    ]
  },
  {
    id: 40,
    scene: "风暴后只剩废墟",
    options: [
      { text: "在废墟中搜寻有用的物资，准备重建", scores: { expression: 1, attachment: 1, security: 2, dominance: 2, rational: 3, adventure: 1, loyalty: 2, emotionality: -1 } },
      { text: "坐在废墟上痛哭，哀悼失去的一切", scores: { expression: 2, attachment: 2, security: -2, dominance: -2, rational: -3, adventure: -2, loyalty: 1, emotionality: 3 } },
      { text: "背起行囊，寻找一片未受灾的土地", scores: { expression: 1, attachment: -2, security: -1, dominance: 1, rational: 2, adventure: 3, loyalty: 0, emotionality: 1 } },
      { text: "寻找幸存者，组织大家互相扶持", scores: { expression: 3, attachment: 3, security: 2, dominance: 3, rational: 2, adventure: 1, loyalty: 3, emotionality: 2 } }
    ]
  },
  {
    id: 41,
    scene: "你走进一间满是镜子的房间",
    options: [
      { text: "在镜子前摆出各种姿势，欣赏自己", scores: { expression: 3, attachment: -1, security: 1, dominance: 2, rational: -2, adventure: 1, loyalty: 0, emotionality: 3 } },
      { text: "试图寻找镜子背后的隐藏空间", scores: { expression: -1, attachment: -1, security: 1, dominance: 1, rational: 3, adventure: 3, loyalty: 0, emotionality: 0 } },
      { text: "感到眩晕，闭上眼摸着墙壁走出去", scores: { expression: -2, attachment: 1, security: 3, dominance: -2, rational: 1, adventure: -3, loyalty: 1, emotionality: 2 } },
      { text: "数一数房间里到底有多少面镜子", scores: { expression: -1, attachment: -1, security: 2, dominance: 0, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } }
    ]
  },
  {
    id: 42,
    scene: "地图上有一块空白区域",
    options: [
      { text: "立刻出发，想要亲手填补那块空白", scores: { expression: 1, attachment: -2, security: -3, dominance: 2, rational: -1, adventure: 3, loyalty: 0, emotionality: 2 } },
      { text: "查阅古籍，寻找关于那里的传说", scores: { expression: -1, attachment: 1, security: 1, dominance: 0, rational: 3, adventure: 1, loyalty: 2, emotionality: -1 } },
      { text: "警告别人不要靠近，认为那里充满危险", scores: { expression: 1, attachment: 2, security: 3, dominance: 1, rational: 2, adventure: -3, loyalty: 2, emotionality: 1 } },
      { text: "在空白处画上自己想象中的城市", scores: { expression: 3, attachment: 1, security: 0, dominance: 1, rational: -2, adventure: 2, loyalty: 0, emotionality: 3 } }
    ]
  },
  {
    id: 43,
    scene: "有人邀请你签下终身契约",
    options: [
      { text: "毫不犹豫地签下，渴望永恒的归属", scores: { expression: 1, attachment: 3, security: 3, dominance: -1, rational: -3, adventure: -3, loyalty: 3, emotionality: 3 } },
      { text: "仔细阅读每一条条款，寻找漏洞", scores: { expression: -1, attachment: -2, security: 2, dominance: 1, rational: 3, adventure: -1, loyalty: 1, emotionality: -3 } },
      { text: "拒绝被任何契约束缚，追求绝对自由", scores: { expression: 2, attachment: -3, security: -2, dominance: 2, rational: 2, adventure: 3, loyalty: -3, emotionality: 1 } },
      { text: "提议先试行一段时间，再做决定", scores: { expression: 1, attachment: 2, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 2, emotionality: -1 } }
    ]
  },
  {
    id: 44,
    scene: "你听见锁链断裂",
    options: [
      { text: "欢呼雀跃，奔向自由", scores: { expression: 3, attachment: -2, security: -3, dominance: 1, rational: -2, adventure: 3, loyalty: 0, emotionality: 3 } },
      { text: "警惕地拿起断裂的锁链作为武器", scores: { expression: -1, attachment: -1, security: 2, dominance: 2, rational: 2, adventure: 2, loyalty: 1, emotionality: -1 } },
      { text: "寻找是谁弄断了锁链，是敌是友", scores: { expression: 1, attachment: 1, security: 1, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: 0 } },
      { text: "感到迷茫，不知道失去束缚后该去哪", scores: { expression: -2, attachment: 3, security: 1, dominance: -2, rational: -1, adventure: -2, loyalty: 2, emotionality: 2 } }
    ]
  },
  {
    id: 45,
    scene: "月光洒在安静湖面",
    options: [
      { text: "脱下衣服，跳入湖中畅游", scores: { expression: 2, attachment: -1, security: -2, dominance: 1, rational: -2, adventure: 3, loyalty: 0, emotionality: 3 } },
      { text: "坐在岸边写诗或作画，记录美景", scores: { expression: 3, attachment: 1, security: 1, dominance: 0, rational: -1, adventure: -1, loyalty: 1, emotionality: 3 } },
      { text: "在湖边垂钓，享受孤独的宁静", scores: { expression: -2, attachment: -2, security: 2, dominance: -1, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } },
      { text: "寻找湖水中的倒影，审视内心", scores: { expression: 1, attachment: 1, security: 1, dominance: 0, rational: 2, adventure: 0, loyalty: 1, emotionality: 2 } }
    ]
  },
  {
    id: 46,
    scene: "你发现自己走在别人铺好的路上",
    options: [
      { text: "感到安心，感谢前人的指引", scores: { expression: -1, attachment: 3, security: 3, dominance: -2, rational: 2, adventure: -3, loyalty: 3, emotionality: 1 } },
      { text: "试图在路边开辟一条属于自己的小径", scores: { expression: 2, attachment: -1, security: -1, dominance: 2, rational: 1, adventure: 3, loyalty: 1, emotionality: 2 } },
      { text: "分析这条路的终点，看是否符合目标", scores: { expression: -1, attachment: -1, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "加快语速，想尽快走完这段路", scores: { expression: 1, attachment: -1, security: 1, dominance: 2, rational: 2, adventure: 1, loyalty: 1, emotionality: 1 } }
    ]
  },
  {
    id: 47,
    scene: "有人向你挑战",
    options: [
      { text: "毫不犹豫地接受，渴望证明自己", scores: { expression: 3, attachment: -1, security: -2, dominance: 3, rational: -1, adventure: 3, loyalty: 1, emotionality: 2 } },
      { text: "分析对方的实力，寻找必胜的策略", scores: { expression: -1, attachment: -1, security: 1, dominance: 2, rational: 3, adventure: 1, loyalty: 1, emotionality: -2 } },
      { text: "提议通过非暴力的竞赛来解决", scores: { expression: 2, attachment: 2, security: 1, dominance: 1, rational: 3, adventure: 0, loyalty: 2, emotionality: 1 } },
      { text: "不屑一顾，认为对方不配做你的对手", scores: { expression: 1, attachment: -3, security: 2, dominance: 3, rational: 2, adventure: -1, loyalty: -2, emotionality: -1 } }
    ]
  },
  {
    id: 48,
    scene: "深夜手机亮起",
    options: [
      { text: "立刻接听或查看，担心有紧急情况", scores: { expression: 1, attachment: 3, security: -1, dominance: 1, rational: -1, adventure: 1, loyalty: 3, emotionality: 3 } },
      { text: "看一眼来电显示，决定是否理会", scores: { expression: -1, attachment: 1, security: 2, dominance: 1, rational: 3, adventure: 0, loyalty: 1, emotionality: -2 } },
      { text: "直接关机，拒绝在休息时间被打扰", scores: { expression: -2, attachment: -3, security: 3, dominance: 2, rational: 2, adventure: -2, loyalty: -1, emotionality: -3 } },
      { text: "猜测是谁在这个时候联系你", scores: { expression: 1, attachment: 2, security: 1, dominance: 0, rational: 1, adventure: 1, loyalty: 1, emotionality: 2 } }
    ]
  },
  {
    id: 49,
    scene: "你收到一枚象征誓言的戒指",
    options: [
      { text: "立刻戴上，并许下同样的承诺", scores: { expression: 2, attachment: 3, security: 2, dominance: -1, rational: -3, adventure: -2, loyalty: 3, emotionality: 3 } },
      { text: "仔细端详戒指的材质和工艺", scores: { expression: -1, attachment: 1, security: 1, dominance: 0, rational: 3, adventure: -1, loyalty: 1, emotionality: -2 } },
      { text: "询问誓言的期限和具体内容", scores: { expression: 1, attachment: 2, security: 2, dominance: 1, rational: 3, adventure: 0, loyalty: 2, emotionality: -1 } },
      { text: "感到沉重，暂时收进盒子里", scores: { expression: -2, attachment: 1, security: 3, dominance: -2, rational: 2, adventure: -3, loyalty: 1, emotionality: 2 } }
    ]
  },
  {
    id: 50,
    scene: "天亮之前必须做出决定",
    options: [
      { text: "闭上眼，跟随直觉的第一反应", scores: { expression: 2, attachment: 1, security: -2, dominance: 1, rational: -3, adventure: 3, loyalty: 1, emotionality: 3 } },
      { text: "列出所有利弊，进行最后的权衡", scores: { expression: -1, attachment: 1, security: 2, dominance: 1, rational: 3, adventure: 1, loyalty: 2, emotionality: -2 } },
      { text: "寻找智者的建议，或者抛硬币决定", scores: { expression: 1, attachment: 3, security: 1, dominance: -1, rational: 1, adventure: 0, loyalty: 2, emotionality: 2 } },
      { text: "静静坐着，直到第一缕阳光照进窗户", scores: { expression: -2, attachment: 0, security: 3, dominance: 0, rational: 2, adventure: -1, loyalty: 1, emotionality: 1 } }
    ]
  }
];

export const ANIMALS: AnimalTemplate[] = [
  {
    name: "雪豹 (Snow Leopard)",
    description: "孤独的雪山隐士，拥有极高的自主性与冷静的观察力。",
    dimensions: { expression: 20, attachment: 15, security: 85, dominance: 40, rational: 90, adventure: 75, loyalty: 30, emotionality: 10 },
    symbolism: "在高寒荒野中独行，象征着极致的自我边界与对环境的深度掌控。它不依赖群体的喧嚣，而是在寂静中通过敏锐的直觉捕捉机会。",
    relationship: "在关系中，你像是一座移动的冰山，外表冷峻但内心深处有着极强的领地意识。你需要的不是时刻的粘腻，而是灵魂层面的默契与对彼此独立空间的绝对尊重。",
    conflict: "过度的理性可能导致你在情感交流中显得迟钝，甚至被伴侣视为冷漠。当你试图用逻辑去拆解感性的冲突时，往往会适得其反，加深彼此的隔阂。",
    idealPartner: "你需要一个同样独立且富有智慧的伴侣，他们能够读懂你的沉默，并在你偶尔下山寻找温暖时，给予你最恰到好处的包容与理解。"
  },
  {
    name: "灰狼 (Gray Wolf)",
    description: "严谨的秩序维护者，忠诚于群体且具备极强的战略思维。",
    dimensions: { expression: 45, attachment: 80, security: 70, dominance: 85, rational: 75, adventure: 60, loyalty: 95, emotionality: 40 },
    symbolism: "狼群的灵魂在于协作与等级，象征着对规则的敬畏与对家人的无限忠诚。它在荒野中奔跑，不仅是为了生存，更是为了守护背后的族群。",
    relationship: "你是关系中坚实的后盾，一旦认定对方，便会展现出惊人的忠诚与保护欲。你倾向于建立一套明确的相处规则，通过分担责任来表达爱意。",
    conflict: "强烈的支配欲和对秩序的执着可能让伴侣感到压抑。当你试图掌控关系的方向时，容易忽略对方的个性化需求，导致权力的失衡与隐秘的反抗。",
    idealPartner: "一个能够理解你的责任感，并愿意在你的保护伞下共同构建未来的伴侣。他们需要具备一定的服从性，同时也能在关键时刻给予你温柔的提醒。"
  },
  {
    name: "金雕 (Golden Eagle)",
    description: "高空的统治者，视野开阔，追求极致的自由与精准的打击。",
    dimensions: { expression: 30, attachment: 20, security: 50, dominance: 90, rational: 85, adventure: 95, loyalty: 40, emotionality: 15 },
    symbolism: "翱翔于万米高空，象征着超越凡尘的视野与对目标的绝对专注。它不屑于地面的琐碎，只在最关键的时刻俯冲，完成致命的一击。",
    relationship: "在感情中，你追求的是一种精神上的高度契合。你讨厌琐碎的束缚，更倾向于与伴侣一起探索未知的领域。你的爱是高傲且纯粹的，不容许任何平庸的妥协。",
    conflict: "极高的冒险精神和对自由的渴望可能让你显得难以捉摸，缺乏安全感。伴侣可能觉得你总是看向远方，而忽略了眼前的温存，导致情感的断层。",
    idealPartner: "一个同样渴望飞翔、拥有广阔胸襟的伴侣。他们能跟上你的节奏，在云端与你并肩作战，而不是试图用家庭的琐事将你拴在地面。"
  },
  {
    name: "海豚 (Dolphin)",
    description: "海洋的精灵，充满好奇心与同情心，擅长社交与情感联结。",
    dimensions: { expression: 95, attachment: 90, security: 40, dominance: 30, rational: 55, adventure: 80, loyalty: 70, emotionality: 85 },
    symbolism: "在波涛中跃动，象征着生命的活力与对万物的善意。它是海洋中的沟通者，通过复杂的声纳系统建立起深厚的情感网络。",
    relationship: "你是关系中的调色师，总能用幽默与温情化解尴尬。你极度渴望情感的回馈，倾向于通过分享秘密和共同体验来加深彼此的联结。",
    conflict: "过高的情绪化和对依恋的需求可能让你在关系中变得敏感多疑。当对方表现出疏离时，你会感到极大的不安，甚至通过过度的表达来寻求关注。",
    idealPartner: "一个能给予你充足情绪价值、愿意倾听你内心世界的伴侣。他们需要具备极强的共情能力，能陪你一起在情感的大海中嬉戏。"
  },
  {
    name: "大象 (Elephant)",
    description: "智慧的长者，拥有惊人的记忆力与深沉的家族情感。",
    dimensions: { expression: 40, attachment: 95, security: 90, dominance: 60, rational: 80, adventure: 20, loyalty: 98, emotionality: 65 },
    symbolism: "沉稳的步伐踏过大地，象征着历史的积淀与对生命的敬畏。它是智慧的化身，在漫长的岁月中守护着家族的传承与记忆。",
    relationship: "你的爱如大地般厚重且持久。在关系中，你是最可靠的守护者，愿意为了家庭的稳定付出一切。你重视传统与纪念日，通过点滴的积累构建安全感。",
    conflict: "对安全感的过度追求和对变动的恐惧可能让你显得保守固执。当生活需要改变时，你往往会表现出强烈的抵抗，甚至因此与伴侣产生长期的冷战。",
    idealPartner: "一个稳重、顾家且尊重传统的伴侣。他们能欣赏你的深情，并愿意与你一起在平淡的生活中建立起一座永恒的堡垒。"
  },
  {
    name: "狐狸 (Fox)",
    description: "机敏的变色龙，擅长在复杂环境中寻找最优解。",
    dimensions: { expression: 85, attachment: 40, security: 55, dominance: 50, rational: 92, adventure: 70, loyalty: 45, emotionality: 30 },
    symbolism: "穿梭于林间与村落，象征着灵活的智慧与对生存法则的深刻理解。它不拘泥于形式，总是能用最巧妙的方式达成目标。",
    relationship: "在关系中，你充满了魅力与变数。你擅长观察伴侣的需求并做出精准的反馈，但这种机敏有时也会被误解为缺乏真心。你追求的是一种智力上的博弈与平衡。",
    conflict: "过度的理性计算可能让你在情感中显得有些计较。当你习惯性地评估一段关系的“性价比”时，往往会伤害到那些纯粹的情感，导致信任的缺失。",
    idealPartner: "一个聪明、独立且能看穿你伪装的伴侣。他们能与你进行深度的思想交流，并在你试图逃避时，用真诚将你留住。"
  },
  {
    name: "猫头鹰 (Owl)",
    description: "黑夜的守望者，冷静、深邃，追求真理与逻辑的终极统一。",
    dimensions: { expression: 15, attachment: 25, security: 80, dominance: 35, rational: 98, adventure: 40, loyalty: 60, emotionality: 10 },
    symbolism: "静立于枝头，象征着对未知的洞察与对秩序的极致追求。它在黑暗中审视世界，不放过任何一个逻辑的漏洞。",
    relationship: "你的爱是克制且深沉的。在关系中，你更倾向于通过实际的行动而非甜言密语来表达。你需要的伴侣是能够理解你精神世界、不打扰你深度思考的人。",
    conflict: "极低的表达欲和过度的理性可能让伴侣感到窒息。你习惯于用沉默来应对冲突，这种“冷暴力”往往比激烈的争吵更具破坏性，让对方感到被排斥。",
    idealPartner: "一个安静、内敛且富有内涵的伴侣。他们能陪你一起在深夜读书，或者在无声的陪伴中感受到那种超越语言的默契。"
  },
  {
    name: "狮子 (Lion)",
    description: "天生的领袖，自信、威严，拥有极强的领地意识与保护欲。",
    dimensions: { expression: 70, attachment: 65, security: 60, dominance: 98, rational: 60, adventure: 75, loyalty: 85, emotionality: 55 },
    symbolism: "草原上的王者，象征着绝对的权威与对荣耀的追求。它的吼声震慑四方，不仅是为了宣示主权，更是为了保护它的领地与子民。",
    relationship: "在关系中，你慷慨且霸道。你愿意为伴侣提供最好的物质与精神支持，但同时也要求绝对的忠诚与尊重。你的爱是炽热的，带有强烈的占有欲。",
    conflict: "过强的支配欲和对自尊的敏感可能导致你在冲突中不愿低头。当你感到权威受到挑战时，会表现出极强的攻击性，甚至因此伤害到最亲近的人。",
    idealPartner: "一个既能欣赏你的光芒，又能温柔地安抚你骄傲灵魂的伴侣。他们需要具备一定的包容力，能在你的领地中找到属于自己的位置。"
  },
  {
    name: "天鹅 (Swan)",
    description: "优雅的完美主义者，追求纯粹的爱与高尚的人格。",
    dimensions: { expression: 60, attachment: 92, security: 75, dominance: 40, rational: 70, adventure: 30, loyalty: 99, emotionality: 75 },
    symbolism: "湖面上的倒影，象征着圣洁的忠贞与对美的不懈追求。它的一生只认定一个伴侣，这种执着是它生命中最动人的底色。",
    relationship: "你是浪漫主义的忠实信徒。在关系中，你追求极致的纯净与和谐。你愿意为了维持这段关系的完美而付出巨大的努力，对伴侣有着极高的道德期待。",
    conflict: "过度的完美主义可能让你在面对现实的琐碎时感到幻灭。当你发现伴侣并不如你想象中那样完美时，会产生强烈的失落感，甚至因此变得挑剔和刻薄。",
    idealPartner: "一个优雅、诚实且同样重视情感纯度的伴侣。他们能与你一起构建一个远离尘嚣的艺术世界，共同守护那份最初的纯真。"
  },
  {
    name: "章鱼 (Octopus)",
    description: "深海的智者，拥有多维的思考能力与极强的环境适应力。",
    dimensions: { expression: 50, attachment: 30, security: 45, dominance: 55, rational: 95, adventure: 85, loyalty: 20, emotionality: 25 },
    symbolism: "变幻莫测的触手，象征着解决问题的多样性与对复杂系统的掌控。它在深海中独处，用智慧化解每一个未知的危机。",
    relationship: "在关系中，你充满了神秘感。你倾向于保持一定的距离，通过智力上的碰撞来建立联结。你讨厌被预测，更喜欢给伴侣带来意想不到的惊喜或挑战。",
    conflict: "极低的忠诚度（在传统意义上）和对变动的渴望可能让你在长久关系中感到疲惫。当你觉得一段关系已经失去了探索的价值时，会冷酷地抽身离去。",
    idealPartner: "一个多才多艺、能不断给你带来新鲜感的伴侣。他们需要具备极强的心理素质，能跟上你跳跃的思维，并享受那种不确定的刺激。"
  },
  {
    name: "边境牧羊犬 (Border Collie)",
    description: "热情的执行者，极度聪明且渴望通过工作获得认同。",
    dimensions: { expression: 80, attachment: 85, security: 65, dominance: 50, rational: 88, adventure: 60, loyalty: 92, emotionality: 50 },
    symbolism: "穿梭于羊群之间，象征着精准的控制与对任务的无限热忱。它的价值在于被需要，在忙碌中寻找生命的意义。",
    relationship: "你是关系中最勤奋的经营者。你总是在思考如何让生活变得更好，通过解决实际问题来表达爱意。你极度渴望伴侣的肯定，那是你前进的最大动力。",
    conflict: "过度的责任感和对完美的追求可能让你变得焦虑。当你觉得伴侣没有按照你的计划行事时，会表现出强烈的挫败感，甚至通过不断的说教来施加压力。",
    idealPartner: "一个积极向上、能与你并肩奋斗的伴侣。他们需要懂得欣赏你的付出，并能及时给予你正向的反馈，让你感受到自己的价值。"
  },
  {
    name: "黑豹 (Black Panther)",
    description: "优雅的掠食者，潜伏在暗处，拥有惊人的爆发力与独立精神。",
    dimensions: { expression: 25, attachment: 20, security: 60, dominance: 80, rational: 82, adventure: 90, loyalty: 35, emotionality: 20 },
    symbolism: "暗夜中的幽灵，象征着力量的内敛与对机会的绝对掌控。它不轻易出手，一旦行动，必是雷霆万钧。",
    relationship: "在关系中，你充满了张力。你不需要时刻的陪伴，但要求在相处时拥有绝对的质量。你的爱是深沉且带有侵略性的，只有强者才能赢得你的尊重。",
    conflict: "极强的独立性和支配欲可能让你在关系中显得过于强势。你习惯于独自做决定，不屑于解释，这种傲慢往往会让伴侣感到被忽视和不被信任。",
    idealPartner: "一个强大、自信且能与你平起平坐的伴侣。他们不需要你的保护，而是能作为你的战友，在黑暗中与你一同守望。"
  },
  {
    name: "虎鲸 (Orca)",
    description: "海洋的霸主，拥有极高的智商与复杂的社会结构。",
    dimensions: { expression: 65, attachment: 88, security: 70, dominance: 92, rational: 90, adventure: 75, loyalty: 80, emotionality: 45 },
    symbolism: "黑白分明的身躯，象征着力量与智慧的完美结合。它是海洋中的顶级掠食者，通过精密的协作统治着广阔的水域。",
    relationship: "在关系中，你既是领导者也是守护者。你重视家族的荣耀与传承，倾向于构建一个稳固且高效的生活体系。你的爱是理智且富有策略的。",
    conflict: "过高的支配欲 and 对效率的追求可能让你在处理情感问题时显得有些冷酷。当你觉得伴侣的情绪影响了整体目标的达成时，会表现出明显的不耐烦。",
    idealPartner: "一个聪明、识大体且愿意融入你宏大计划的伴侣。他们需要具备极强的执行力，能与你一起在人生的海洋中乘风破浪。"
  },
  {
    name: "孔雀 (Peacock)",
    description: "华丽的表演者，渴望关注，通过展示美来获取安全感。",
    dimensions: { expression: 98, attachment: 60, security: 30, dominance: 65, rational: 40, adventure: 70, loyalty: 50, emotionality: 90 },
    symbolism: "开屏的瞬间，象征着自我的极度扩张与对赞美的渴望。它的美是它的武器，也是它脆弱灵魂的屏障。",
    relationship: "你是关系中的焦点。你渴望被赞美、被宠溺，通过不断的互动来确认自己的存在感。你的爱是热烈且富有戏剧性的，总能给生活带来惊喜。",
    conflict: "过度的表现欲和对安全感的缺失可能让你变得虚荣且情绪化。当你感到被冷落时，会通过极端的行为来博取关注，这往往会让伴侣感到疲惫不堪。",
    idealPartner: "一个情绪稳定、愿意作为你忠实观众的伴侣。他们需要具备极大的耐心，能包容你的小脾气，并时刻给予你最真诚的赞美。"
  },
  {
    name: "北极熊 (Polar Bear)",
    description: "坚韧的生存者，在极端环境下保持冷静与力量。",
    dimensions: { expression: 10, attachment: 20, security: 95, dominance: 70, rational: 85, adventure: 50, loyalty: 40, emotionality: 15 },
    symbolism: "漫步于冰原，象征着孤独的力量与对生存的极致专注。它不畏严寒，在寂静中积蓄着足以撼动世界的力量。",
    relationship: "你的爱是厚重且沉默的. 在关系中，你像是一座避风港，能为伴侣遮挡所有的风雨。你不需要华丽的辞藻，更倾向于通过稳定的物质保障来表达爱。",
    conflict: "极低的表达欲和对变动的恐惧可能让你显得死板。当你习惯了某种生活模式后，很难做出改变，这种僵化往往会成为关系进一步发展的阻碍。",
    idealPartner: "一个温柔、体贴且能带给你生活情趣的伴侣。他们能融化你内心的冰雪，引导你表达那些深藏在厚重外壳下的细腻情感。"
  },
  {
    name: "猫 (Cat)",
    description: "优雅的观察者，追求极致的舒适与精神的独立。",
    dimensions: { expression: 40, attachment: 35, security: 65, dominance: 45, rational: 75, adventure: 55, loyalty: 30, emotionality: 60 },
    symbolism: "游走于光影之间，象征着自我的边界与对感官享受的追求。它不依附于任何人，只在自己感到舒适时才展现温柔。",
    relationship: "在关系中，你充满了灵性与距离感。你讨厌被束缚，更倾向于一种“若即若离”的相处模式。你的爱是细腻且挑剔的，只有懂得尊重你空间的人才能赢得你的心。",
    conflict: "过度的自我中心和对忠诚度的淡漠可能让伴侣感到不安全。当你沉浸在自己的世界中时，往往会忽略对方的情感需求，让关系陷入一种单向的消耗。",
    idealPartner: "一个独立、优雅且懂得“分寸感”的伴侣。他们不需要你时刻的陪伴，而是能与你一起在午后的阳光下各自安好，互不打扰。"
  },
  {
    name: "金丝猴 (Golden Monkey)",
    description: "灵动的社交家，重视家族纽带，充满好奇心。",
    dimensions: { expression: 88, attachment: 92, security: 50, dominance: 35, rational: 45, adventure: 75, loyalty: 85, emotionality: 80 },
    symbolism: "跃动于林间，象征着生命的灵动与对群体的依赖。它是森林中的精灵，通过不断的互动维系着家族的和谐与繁荣。",
    relationship: "你是关系中的开心果。你极度重视家庭与亲友的认同，倾向于通过频繁的沟通与共同活动来增强情感。你的爱是纯真且富有感染力的。",
    conflict: "过高的依恋需求和情绪化可能让你在面对孤独时感到崩溃。当你觉得被群体或伴侣排斥时，会表现出极强的焦虑，甚至通过无理取闹来寻求安慰。",
    idealPartner: "一个开朗、顾家且愿意参与你社交生活的伴侣。他们需要能陪你一起玩闹，并在你情绪波动时，给予你最温暖的拥抱。"
  },
  {
    name: "猫头鹰 (Great Horned Owl)",
    description: "严谨的学者，在静谧中寻求逻辑的终极答案。",
    dimensions: { expression: 12, attachment: 22, security: 88, dominance: 42, rational: 99, adventure: 35, loyalty: 65, emotionality: 8 },
    symbolism: "深邃的目光，象征着对真理的渴求与对混乱的厌恶。它在黑夜中守护着逻辑的火种，不容许任何感性的侵蚀。",
    relationship: "在关系中，你追求的是一种极致的秩序与理智。你讨厌戏剧化的冲突，更倾向于通过理性的讨论来解决问题。你的爱是克制且长久的。",
    conflict: "极度的理性可能让你在伴侣需要情感支持时显得冷血。你习惯于分析问题而非感受情绪，这种“直男/直女思维”往往会成为情感沟通的最大障碍。",
    idealPartner: "一个理性、冷静且尊重逻辑的伴侣。他们能与你进行高水平的智力对话，并在平淡的生活中发现那种基于理解的深层浪漫。"
  },
  {
    name: "马 (Horse)",
    description: "奔腾的自由魂，追求速度、力量与广阔的疆域。",
    dimensions: { expression: 75, attachment: 55, security: 45, dominance: 60, rational: 50, adventure: 98, loyalty: 70, emotionality: 65 },
    symbolism: "驰骋于草原，象征着对束缚的反抗与对远方的向往。它的生命在于奔跑，在风中寻找自我的价值。",
    relationship: "在关系中，你充满了活力与激情。你渴望与伴侣一起去旅行、去冒险，共同体验生命的广度。你的爱是坦荡且富有感染力的。",
    conflict: "极高的冒险精神可能让你显得缺乏责任感。当你感到被家庭琐事束缚时，会产生强烈的逃避心理，甚至因此忽略了伴侣对稳定生活的渴望。",
    idealPartner: "一个勇敢、独立且愿意陪你浪迹天涯的伴侣。他们不需要你时刻守在身边，而是能与你并肩奔跑，共同追逐地平线上的夕阳。"
  },
  {
    name: "蜜獾 (Honey Badger)",
    description: "无畏的挑战者，不计后果地追求目标，拥有惊人的意志力。",
    dimensions: { expression: 35, attachment: 10, security: 20, dominance: 95, rational: 45, adventure: 99, loyalty: 15, emotionality: 70 },
    symbolism: "平头白发，象征着对恐惧的蔑视与对自我的绝对坚持。它不在乎对手是谁，只在乎自己的意志是否得到了贯彻。",
    relationship: "在关系中，你是一个极端的挑战者。你讨厌平庸与妥协，倾向于通过激烈的碰撞来确认对方的真心。你的爱是狂野且不计后果的。",
    conflict: "过强的支配欲和冒险精神可能让你在关系中变得极具破坏性。当你感到不满时，会选择最直接、最激烈的方式回击，往往会给彼此留下难以愈合的伤口。",
    idealPartner: "一个同样强悍、拥有钢铁般意志的伴侣。他们能接住你的招式，并在疯狂的博弈中与你达成一种只有强者才能理解的默契。"
  },
  {
    name: "大熊猫 (Giant Panda)",
    description: "平和的隐士，追求内心的宁静与生活的极简。",
    dimensions: { expression: 20, attachment: 70, security: 98, dominance: 20, rational: 65, adventure: 10, loyalty: 90, emotionality: 40 },
    symbolism: "坐于竹林，象征着对欲望的克制与对和平的向往. 它的慢生活是一种智慧，在喧嚣的世界中守护着自己的一方净土。",
    relationship: "你的爱如细水长流。在关系中，你是最温和的伴侣，不争不抢，只愿守护那份简单的幸福。你重视舒适感，通过陪伴与美食来表达爱意。",
    conflict: "极低的冒险精神和支配欲可能让你显得缺乏进取心。当生活面临危机需要你挺身而出时，你的退缩往往会让伴侣感到失望和无助。",
    idealPartner: "一个温柔、知足且同样热爱生活的伴侣。他们能陪你一起在竹林中虚度光阴，并在平凡的岁月中发现那些闪光的幸福瞬间。"
  },
  {
    name: "狐獴 (Meerkat)",
    description: "警觉的守护者，高度依赖群体，拥有极强的责任感。",
    dimensions: { expression: 70, attachment: 95, security: 92, dominance: 40, rational: 60, adventure: 30, loyalty: 96, emotionality: 60 },
    symbolism: "直立守望，象征着对危险的敏锐洞察与对同伴的无私奉献。它的安全感来自于群体，在协作中寻找自我的定位。",
    relationship: "在关系中，你是最尽责的伴侣。你时刻关注着家庭的动态，愿意为了大家的利益牺牲个人。你的爱是琐碎且温暖的，体现在每一个细微的关怀中。",
    conflict: "过高的安全需求和对群体的依赖可能让你变得焦虑多疑。当你感到伴侣不够投入时，会通过不断的询问和确认来寻求安心，这往往会产生反作用。",
    idealPartner: "一个稳重、顾家且能给你带来绝对安全感的伴侣。他们需要能理解你的焦虑，并用坚定的行动告诉你：别怕，有我在。"
  },
  {
    name: "虎 (Tiger)",
    description: "孤独的勇士，威严、独立，拥有无可匹敌的力量与意志。",
    dimensions: { expression: 30, attachment: 25, security: 55, dominance: 96, rational: 78, adventure: 92, loyalty: 45, emotionality: 35 },
    symbolism: "额头的王字，象征着天生的尊贵与对挑战的渴望。它在密林中独行，用力量书写着属于自己的传奇。",
    relationship: "在关系中，你充满了神秘感与压迫力。你不需要廉价的同情，只需要强者的共鸣。你的爱是深沉且带有保护色的，只有穿透你的外壳才能看到那颗炽热的心。",
    conflict: "极强的支配欲和独立性可能让你在关系中显得孤傲。你习惯于掌控一切，不屑于沟通，这种强硬往往会让伴侣感到窒息，甚至产生逃离的念头。",
    idealPartner: "一个强大、独立且能理解你孤独灵魂的伴侣。他们不需要依附于你，而是能作为你的对手或战友，在人生的丛林中与你并肩而立。"
  },
  {
    name: "信天翁 (Albatross)",
    description: "永恒的旅者，跨越重洋，追求极致的自由与灵魂的归宿。",
    dimensions: { expression: 20, attachment: 85, security: 40, dominance: 30, rational: 70, adventure: 99, loyalty: 98, emotionality: 50 },
    symbolism: "巨大的双翼，象征着对远方的执着与对承诺的坚守。它在风暴中穿行，只为寻找那个唯一的栖息地。",
    relationship: "你的爱是跨越时空的。在关系中，你既追求灵魂的自由，又坚守着最初的承诺。你愿意为了伴侣跨越千山万水，这种深情是你生命中最动人的诗篇。",
    conflict: "极高的冒险精神可能让你常年处于“在路上”的状态。当你沉浸在对远方的追求时，往往会忽略了眼前的陪伴，让伴侣在漫长的等待中感到孤独。",
    idealPartner: "一个同样热爱自由、拥有广阔胸怀的伴侣. 他们能理解你的远行，并愿意在港口为你点亮那盏回家的灯，等待你的归航。"
  }
];

export const DIMENSION_DESCRIPTIONS: Record<string, { label: string; description: string }> = {
  expression: {
    label: '表现力',
    description: '反映你向外界展示自我、表达情感的意愿和能力。高分者通常自信、善于社交，低分者则更内敛。'
  },
  attachment: {
    label: '依恋感',
    description: '代表你对亲密关系的渴望，以及在人际纽带中寻求归属感的程度。它决定了你与他人连接的紧密性。'
  },
  security: {
    label: '安全感',
    description: '衡量你在多大程度上感到环境是可控的，以及对稳定性和秩序的需求。影响你对风险的规避程度。'
  },
  dominance: {
    label: '支配欲',
    description: '体现你在群体中采取主动、控制局面或追求领导地位的倾向。高分者更具领袖气质。'
  },
  rational: {
    label: '理性度',
    description: '反映你依靠逻辑、数据和客观分析而非直觉做决定的深度。是衡量决策风格的重要指标。'
  },
  adventure: {
    label: '冒险精神',
    description: '代表你对未知领域的好奇心，以及挑战现状、寻求新鲜体验的渴望。决定了你对未知的开放度。'
  },
  loyalty: {
    label: '忠诚度',
    description: '衡量你对承诺的坚守程度，以及在关系和信念中的持久性。是性格稳定性的核心体现。'
  },
  emotionality: {
    label: '情绪化',
    description: '反映你情感波动的频率和强度，以及对内在感受的敏感度。高分者情感细腻，低分者更冷静。'
  }
};
