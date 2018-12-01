import {changeScreen} from './util.js';
import {INITIAL_GAME} from './data/data.js';
import {welcomeScreen} from './templates/templates.js';

changeScreen(welcomeScreen(INITIAL_GAME));
