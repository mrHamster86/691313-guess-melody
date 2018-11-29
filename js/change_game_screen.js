import {changeLevel} from './game.js';
import {gameScreen, resultScreen} from './main.js';
import {changeScreen} from './util.js';

export default (state) => {
  if (state.level < 9) {
    const newLevel = state.level + 1;
    const newState = changeLevel(state, newLevel);
    changeScreen(gameScreen(newState));
  } else {
    changeScreen(resultScreen(state));
  }
};
