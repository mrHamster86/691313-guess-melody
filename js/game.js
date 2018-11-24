export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 2,
  time: 300,
  levels: 10
});

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  if (level > game.levels) {
    throw new Error(`Lives not be greater than the original value - ${game.levels}`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export const changeLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lives not be negative value`);
  }
  if (lives > game.lives) {
    throw new Error(`Lives not be greater than the original value - ${game.lives}`);
  }
  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};

export const changeTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time not be negative value`);
  }
  if (time > game.time) {
    throw new Error(`Time not be greater than the original value - ${game.time}`);
  }
  const newGame = Object.assign({}, game, {
    time
  });
  return newGame;
};
