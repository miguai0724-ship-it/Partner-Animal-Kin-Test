import { Score, AnimalTemplate } from '../types';
import { calculateEuclideanDistance, getVector } from './matching';

export const calculateDistanceMatrix = (animals: AnimalTemplate[]) => {
  const matrix: number[][] = [];
  for (let i = 0; i < animals.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < animals.length; j++) {
      const v1 = getVector(animals[i].dimensions);
      const v2 = getVector(animals[j].dimensions);
      matrix[i][j] = calculateEuclideanDistance(v1, v2);
    }
  }
  return matrix;
};

export const validateAnimals = (animals: AnimalTemplate[]) => {
  const matrix = calculateDistanceMatrix(animals);
  let minDistance = Infinity;
  let minPair = [0, 0];

  for (let i = 0; i < animals.length; i++) {
    for (let j = i + 1; j < animals.length; j++) {
      if (matrix[i][j] < minDistance) {
        minDistance = matrix[i][j];
        minPair = [i, j];
      }
    }
  }

  return {
    minDistance,
    minPair: [animals[minPair[0]].name, animals[minPair[1]].name],
    matrix
  };
};

export const getDimensionStats = (questions: any[]) => {
  const stats: Record<string, { pos: number; neg: number; total: number }> = {};
  const dimensions = ['expression', 'attachment', 'security', 'dominance', 'rational', 'adventure', 'loyalty', 'emotionality'];
  
  dimensions.forEach(d => stats[d] = { pos: 0, neg: 0, total: 0 });

  questions.forEach(q => {
    q.options.forEach((opt: any) => {
      Object.entries(opt.scores).forEach(([dim, val]) => {
        if (val as number > 0) stats[dim].pos++;
        if (val as number < 0) stats[dim].neg++;
        if (val as number !== 0) stats[dim].total++;
      });
    });
  });

  return stats;
};
