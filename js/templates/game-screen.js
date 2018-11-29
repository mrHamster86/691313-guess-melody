import {renderScreen} from '../util.js';
import {GAME, gameArtist, gameGenre, gameHeader} from '../main.js';

const getGameScreen = (screen) => `<section class="game ${screen.type}">
    <section class="game__screen">
      <h2 class="game__title">${screen.title}</h2>
    </section>
  </section>`;

export default (state) => {
  const CURRENT_LEVEL = GAME[state.level];

  const element = renderScreen(getGameScreen(CURRENT_LEVEL));
  const screen = element.querySelector(`.game`);
  const gameScreen = screen.querySelector(`.game__screen`);
  const content = (CURRENT_LEVEL.type === `game--artist`) ? gameArtist(state) : gameGenre(state);

  screen.insertAdjacentElement(`beforebegin`, gameHeader(state));
  gameScreen.insertAdjacentElement(`beforeend`, content);
  return element;
};
