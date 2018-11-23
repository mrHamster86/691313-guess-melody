const GAME = {
  lives: 2,
  numberQuestion: 10,
  bonusTime: 30
};
const LOSING_SCORE = -1;
const INCORRECT_POINTS = -2;

const correctPoints = (time, bonusTime) => {
  return (time >= bonusTime) ? 1 : 2;
};

const calculateScore = (answers) => {
  let lives = GAME.lives;
  let bonusTime = GAME.quickAnswer
  let result = 0;

  for (const it of answers) {
    result += (!it.correct) ? INCORRECT_POINTS : correctPoints(it.time, bonusTime);
    lives += (!it.correct) ? -1 : 0;
    if (lives < 0) break;
  }
  return (lives < 0) ? LOSING_SCORE : result;
};

export const getScore = (answers) => {
  return (answers.length < GAME.numberQuestion) ? LOSING_SCORE : calculateScore(answers);
};
