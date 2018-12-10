import {changeLevel, changeLives} from '../game.js';
import {changeScreen, getParentHasClass} from '../util.js';
import {INITIAL_GAME, GAME_QUESTIONS} from '../data/data.js';
import WelcomeView from './welcome-screen/WelcomeView.js';
import GameView from './game-screen/GameView.js';
import GameArtistView from './game-screen/GameArtistView.js';
import GameGenreView from './game-screen/GameGenreView.js';
import GameHeaderView from './game-screen/GameHeaderView.js';
import ResultView from './result-screen/ResultView.js';

const LIVES_INCREMENT = 1;

export const changeGameScreen = (state) => {

  if (state.lives) {
    if (state.level < 9) {
      const newState = changeLevel(state, state.level + 1);
      changeScreen(gameScreen(newState).element);
    } else {
      changeScreen(resultScreen(state).element);
    }

  } else {
    changeScreen(resultScreen(state).element);
  }
};

export const welcomeScreen = () => {
  const screen = new WelcomeView(INITIAL_GAME);

  screen.onWelcomeBtn = (state) => {
    changeScreen(gameScreen(state).element);
  };

  return screen;
};

export const gameHeader = (state) => {
  const screen = new GameHeaderView(state);

  screen.onGameBackBtn = () => {
    changeScreen(welcomeScreen(INITIAL_GAME).element);
  };
  return screen;
};

export const gameArtist = (state) => {
  const screen = new GameArtistView(state);
  const currentLevel = GAME_QUESTIONS[state.level];

  screen.onAnswer = (element) => {
    if (element.querySelector(`img`).src === currentLevel.question.image) {
      state.answers.push({correct: true, bonusTime: 30});
      changeGameScreen(state);
    } else {
      const newState = changeLives(state, state.lives - LIVES_INCREMENT);
      state.answers.push({correct: false, bonusTime: 30});
      changeGameScreen(newState);
    }
  };

  return screen;
};

export const gameGenre = (state) => {
  const screen = new GameGenreView(state);

  screen.onAnswer = () => {
    const answersGame = GAME_QUESTIONS[state.level].question.map((it) => it.src);
    const checkbox = screen.element.querySelectorAll(`input:checked`);
    const answersUser = [];

    for (let i = 0; i < checkbox.length; i++) {
      let it = checkbox[i];
      const audioSrc = getParentHasClass(it, `track`).querySelector(`audio`).src;
      answersUser.push(audioSrc);
    }

    if (answersGame.join(`,`) === answersUser.join(`,`)) {
      state.answers.push({correct: true, bonusTime: 30});
      changeGameScreen(state);
    } else {
      const newState = changeLives(state, state.lives - LIVES_INCREMENT);
      state.answers.push({correct: false, bonusTime: 30});
      changeGameScreen(newState);
    }
  };

  return screen;
};

export const gameScreen = (state) => {
  const screen = new GameView(state);

  const currentLevel = GAME_QUESTIONS[state.level];
  const content = (currentLevel.type === `game--artist`) ? gameArtist(state).element : gameGenre(state).element;

  screen.element.insertAdjacentElement(`afterbegin`, gameHeader(state).element);
  screen.element.querySelector(`.game__screen`).insertAdjacentElement(`beforeend`, content);

  return screen;
};

export const resultScreen = (state) => {
  const screen = new ResultView(state);

  screen.onReplayBtn = () => {
    changeScreen(welcomeScreen(INITIAL_GAME).element);
  };

  return screen;
};
