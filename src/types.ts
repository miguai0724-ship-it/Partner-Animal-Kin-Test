import { Type } from "@google/genai";

export interface Score {
  expression: number;
  attachment: number;
  security: number;
  dominance: number;
  rational: number;
  adventure: number;
  loyalty: number;
  emotionality: number;
  [key: string]: number;
}

export interface Option {
  text: string;
  scores: Score;
}

export interface Question {
  id: number;
  scene: string;
  options: [Option, Option, Option, Option];
}

export interface AnimalTemplate {
  name: string;
  description: string;
  dimensions: Score; // 0-100 range
  symbolism: string;
  relationship: string;
  conflict: string;
  idealPartner: string;
}

export interface DetailedAnalysis {
  corePersonality: string;
  animalSymbolism: string;
  relationshipPattern: string;
  potentialConflicts: string;
  idealPartnerStructure: string;
  similarAnimalComparison: string;
}

export interface MatchResult {
  animal: AnimalTemplate;
  similarity: number;
}

export interface QuizResult {
  topMatches: MatchResult[];
  isHybrid: boolean;
  isBalanced: boolean;
  normalizedScore: Score;
  analysis?: DetailedAnalysis;
}
