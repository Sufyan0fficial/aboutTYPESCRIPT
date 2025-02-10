function analyzeScores(scores: number[]): void {
  if (scores.length === 0) {
    console.log("The array is empty.");
    return;
  }
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  let countAboveMax = 0;
  let countBelowMin = 0;

  for (const score of scores) {
    if (score > maxScore) {
      countAboveMax++;
    }
    if (score < minScore) {
      countBelowMin++;
    }
  }

  console.log(countAboveMax);
  console.log(countBelowMin);
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
analyzeScores(scores);
