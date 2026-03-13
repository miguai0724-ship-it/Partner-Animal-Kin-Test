import { Score, AnimalTemplate, MatchResult, QuizResult } from '../types';

export const calculateEuclideanDistance = (v1: number[], v2: number[]): number => {
  return Math.sqrt(v1.reduce((sum, val, i) => sum + Math.pow(val - v2[i], 2), 0));
};

export const getVector = (score: Score): number[] => [
  score.expression, score.attachment, score.security, score.dominance,
  score.rational, score.adventure, score.loyalty, score.emotionality
];

export const normalizeScore = (raw: Score, theoreticalMax: number): Score => {
  // theoreticalMax is the max possible score for each dimension (e.g. 19 triggers * 2 = 38)
  const range = theoreticalMax * 2;
  const normalize = (val: number) => {
    // Clamp value to [-theoreticalMax, theoreticalMax]
    const clamped = Math.max(-theoreticalMax, Math.min(theoreticalMax, val));
    return (clamped + theoreticalMax) / range; // returns 0-1
  };

  return {
    expression: normalize(raw.expression),
    attachment: normalize(raw.attachment),
    security: normalize(raw.security),
    dominance: normalize(raw.dominance),
    rational: normalize(raw.rational),
    adventure: normalize(raw.adventure),
    loyalty: normalize(raw.loyalty),
    emotionality: normalize(raw.emotionality),
  };
};

export const findTopMatches = (userNormalizedScore: Score, animals: AnimalTemplate[]): QuizResult => {
  const userVec = getVector(userNormalizedScore);
  
  const matches: MatchResult[] = animals.map(animal => {
    const animalVec = getVector(animal.dimensions).map(v => v / 100);
    const distance = calculateEuclideanDistance(userVec, animalVec);
    // Similarity: 1 - (distance / maxPossibleDistance)
    // Max distance in 8D [0,1] space is sqrt(8) approx 2.828
    const maxDist = Math.sqrt(8);
    const similarity = Math.max(0, 1 - (distance / maxDist));
    return { animal, similarity };
  });

  const sortedMatches = matches.sort((a, b) => b.similarity - a.similarity);
  const top5 = sortedMatches.slice(0, 5);

  // Hybrid check: distance between top 1 and top 2 similarity < 5% (0.05)
  const isHybrid = top5.length > 1 && (top5[0].similarity - top5[1].similarity) < 0.05;

  // Balanced check: all dimensions between 40% and 60% (0.4 - 0.6)
  const isBalanced = userVec.every(v => v >= 0.4 && v <= 0.6);

  return {
    topMatches: top5,
    isHybrid,
    isBalanced,
    normalizedScore: userNormalizedScore
  };
};
