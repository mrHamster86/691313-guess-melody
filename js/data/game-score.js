import INITIAL_GAME from './data';

const LEVELS = INITIAL_GAME.levels;
const BONUS_TIME = INITIAL_GAME.bonusTime;
const LOSING_SCORE = -1;
const INCORRECT_POINTS = -2;

const correctPoints = (time) => {
  return (time >= BONUS_TIME) ? 1 : 2;
};

const calculateScore = (answers) => {
  let lives = INITIAL_GAME.lives;
  let result = 0;

  for (const it of answers) {
    result += (!it.correct) ? INCORRECT_POINTS : correctPoints(it.time);
    lives += (!it.correct) ? -1 : 0;

    if (lives <= 0) {
      break;
    }
  }

  return (lives <= 0) ? LOSING_SCORE : result;
};

export const getGameScore = (answers) => {
  return (answers.length < LEVELS) ? LOSING_SCORE : calculateScore(answers);
};
