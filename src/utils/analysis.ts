import { Score, AnimalTemplate, DetailedAnalysis, MatchResult } from '../types';
import { DIMENSION_DESCRIPTIONS } from '../data';

export const generateDetailedAnalysis = (
  userScore: Score,
  topMatches: MatchResult[]
): DetailedAnalysis => {
  const primaryMatch = topMatches[0].animal;
  const secondaryMatch = topMatches[1]?.animal;

  // Sort dimensions to find Dominant, Secondary, and Inhibited
  const sortedDims = Object.entries(userScore)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .map(([key, val]) => ({ key, val: val as number }));

  const dominant = sortedDims.slice(0, 2);
  const secondary = sortedDims.slice(2, 5);
  const inhibited = sortedDims.slice(6, 8);

  // 1. Core Personality Analysis (120-200 words)
  const corePersonality = `你展现出极其鲜明的【${DIMENSION_DESCRIPTIONS[dominant[0].key].label} + ${DIMENSION_DESCRIPTIONS[dominant[1].key].label}】核心人格结构。这种组合意味着你倾向于通过${dominant[0].val > 0.7 ? '极强的外部驱动力' : '深沉的内在逻辑'}来构建你的世界观。在日常决策中，你表现出明显的${DIMENSION_DESCRIPTIONS[secondary[0].key].label}特质，这作为你性格的缓冲带，平衡了主导维度的锋芒。值得注意的是，你的${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}与${DIMENSION_DESCRIPTIONS[inhibited[1].key].label}维度处于相对抑制状态，这说明你在面对冲突或压力时，往往会刻意回避情绪化的表达或过度的依赖，转而寻求一种更为稳健、自洽的处理方式。这种性格结构使你在群体中既能保持独立的判断，又不失必要的协作精神。`;

  // 2. Animal Symbolism (Why this animal)
  const animalSymbolism = `为什么你的灵魂图腾是“${primaryMatch.name}”？在灵境系统中，${primaryMatch.name}的象征意义远超其生物本能，它代表的是一种“${dominant[0].key === 'dominance' ? '秩序与掌控' : '探索与自由'}”的深层结构。你的${DIMENSION_DESCRIPTIONS[dominant[0].key].label}评分高达${Math.round(dominant[0].val * 100)}%，这与${primaryMatch.name}在自然界中表现出的${primaryMatch.symbolism}高度共鸣。这不仅仅是性格的重合，更是生命能量频率的对齐。你的每一个选择，都在无意识中勾勒出这种生物在荒野中生存、竞争与繁衍的逻辑。`;

  // 3. Relationship Pattern
  const relationshipPattern = `在亲密关系中，你表现出一种“${dominant[1].key === 'attachment' ? '深层联结型' : '独立守望型'}”的行为模式。${primaryMatch.relationship}。这意味着你更倾向于成为关系中的稳定支点，通过${DIMENSION_DESCRIPTIONS[secondary[1].key].label}来维系长久的和谐。然而，由于你的${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}维度较低，你可能在表达脆弱或请求帮助时感到迟疑。你习惯于独自承担决策的重量，这种坚强虽然令人安心，但有时也会在伴侣心中筑起一道无形的墙。`;

  // 4. Potential Conflicts
  const potentialConflicts = `性格的阴影往往藏在最强的光芒之下。${primaryMatch.conflict}。由于你极高的${DIMENSION_DESCRIPTIONS[dominant[0].key].label}，当环境失去控制或逻辑出现偏差时，你容易陷入一种“过度补偿”的焦虑中。在与人互动时，你可能会无意识地忽略他人的${DIMENSION_DESCRIPTIONS[inhibited[1].key].label}需求，转而用冷冰冰的逻辑或强硬的指令来替代共情。这种“理性的傲慢”或“掌控的执念”是你未来需要觉察并转化的核心课题。`;

  // 5. Ideal Partner & Growth Path
  const growthPath = `你的人格进化方向在于对【${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}】的适度整合。长期以来，你可能为了维持${DIMENSION_DESCRIPTIONS[dominant[0].key].label}的优势，而压抑了${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}的自然流露。尝试在安全的环境中放下防御，允许自己表现出${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}的一面，这不会削弱你的力量，反而会让你的人格更具弹性。`;

  const idealPartnerStructure = `基于你的维度分布，最能与你产生灵魂共振的伴侣通常拥有“互补型”的结构。${primaryMatch.idealPartner}。他们往往在${DIMENSION_DESCRIPTIONS[inhibited[0].key].label}和${DIMENSION_DESCRIPTIONS[inhibited[1].key].label}维度上有更出色的表现，能够在你紧绷的${DIMENSION_DESCRIPTIONS[dominant[0].key].label}结构中注入柔性力量。这种组合不仅能平衡你的性格盲区，更能引导你探索那些被你长期忽视的情感领地，实现人格的完整性。\n\n${growthPath}`;

  // 6. Similar Animal Comparison
  let similarAnimalComparison = "在你的性格光谱中，没有其他动物能像主图腾那样精准地捕捉你的本质。";
  if (secondaryMatch) {
    similarAnimalComparison = `虽然你与“${secondaryMatch.name}”也有一定的相似性，但核心差异在于${DIMENSION_DESCRIPTIONS[dominant[0].key].label}的纯度。${secondaryMatch.name}更偏向于${DIMENSION_DESCRIPTIONS[secondary[0].key].label}的表达，而你的结构则更加强调${DIMENSION_DESCRIPTIONS[dominant[0].key].label}的绝对主导。这种细微的偏差决定了你在关键时刻的抉择：你更倾向于${primaryMatch.name}式的决绝，而非${secondaryMatch.name}式的妥协。`;
  }

  return {
    corePersonality,
    animalSymbolism,
    relationshipPattern,
    potentialConflicts,
    idealPartnerStructure,
    similarAnimalComparison,
  };
};
