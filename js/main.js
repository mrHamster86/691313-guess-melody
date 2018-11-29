import {changeScreen} from './util.js';
import {INITIAL_GAME, GAME} from './data.js';
import welcomeScreen from './templates/welcome-screen.js';
import gameScreen from './templates/game-screen.js';
import gameArtist from './templates/game-artist.js';
import gameGenre from './templates/game-genre.js';
import gameHeader from './templates/game-header.js';
import resultScreen from './templates/result_screen.js';

export {
  INITIAL_GAME,
  GAME,
  welcomeScreen,
  gameScreen,
  gameArtist,
  gameGenre,
  gameHeader,
  resultScreen
};

changeScreen(welcomeScreen(INITIAL_GAME));
