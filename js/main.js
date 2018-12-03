import {changeScreen} from './util.js';
import {INITIAL_GAME} from './data/data.js';
import WelcomeView from './templates/welcome-screen/welcome-screen.js';
import GameView from './templates/game-screen/game-screen.js';

const welcomeScreen = new WelcomeView(INITIAL_GAME);

welcomeScreen.onWelcomeBtn = (state) => {
  const gameScreen = new GameView(state);
  changeScreen(gameScreen.element);
};

changeScreen(welcomeScreen.element);
