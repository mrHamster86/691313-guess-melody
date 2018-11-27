import {renderScreen} from '../util.js';
import {initialState, game} from '../data.js';
import header from './game-header.js';
import gameArtist from './game-artist.js';
import gameGenre from './game-genre.js';

const CURRENT_LEVEL = game[initialState.level];

const getGameScreen = (screen) => `<section class="game ${screen.type}">
    <section class="game__screen">
      <h2 class="game__title">${screen.title}</h2>
    </section>
  </section>`;

const element = renderScreen(getGameScreen(CURRENT_LEVEL));
const screen = element.querySelector('.game');
const gameScreen = screen.querySelector('.game__screen');
const content = (CURRENT_LEVEL.type === `game--artist`) ? gameArtist : gameGenre;

screen.insertAdjacentElement('beforebegin', header);
gameScreen.insertAdjacentElement('beforeend', content);

export default element;
