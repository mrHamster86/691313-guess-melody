import trackList from './track-list.js';

export const INITIAL_GAME = Object.freeze({
  level: 0,
  levels: 10,
  lives: 3,
  time: 10,
  bonusTime: 30,
  answers: []
});

export const GAME_QUESTIONS = [
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[0],
    answers: [trackList[0], trackList[1], trackList[2]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[1],
    answers: [trackList[1], trackList[0], trackList[3]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[2],
    answers: [trackList[2], trackList[1], trackList[3]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[3],
    answers: [trackList[3], trackList[4], trackList[0]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[4],
    answers: [trackList[4], trackList[3], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[0].genre} треки`,
    question: [trackList[0]],
    answers: [trackList[0], trackList[1], trackList[2], trackList[3]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[1].genre} треки`,
    question: [trackList[1]],
    answers: [trackList[1], trackList[0], trackList[4], trackList[2]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[2].genre} треки`,
    question: [trackList[2]],
    answers: [trackList[2], trackList[4], trackList[5], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[3].genre} треки`,
    question: [trackList[3]],
    answers: [trackList[3], trackList[1], trackList[2], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[4].genre} треки`,
    question: [trackList[4]],
    answers: [trackList[4], trackList[2], trackList[5], trackList[4]],
  }
];

export const tick = (state) => {
  const newSate = Object.assign({}, state, {
    time: state.time - 1
  });
  return newSate;
};

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
