import {changeLevel} from './game.js';
import {gameScreen, resultScreen} from './templates/templates.js';
import {changeScreen} from './util.js';

export default (state) => {

  if (state.lives) {
    if (state.level < 9) {
      const newState = changeLevel(state, state.level + 1);
      changeScreen(gameScreen(newState));
    } else {
      changeScreen(resultScreen(state));
    }

  } else {

    changeScreen(resultScreen(state));
  }
};
