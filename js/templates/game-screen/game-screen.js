import {renderScreen} from '../../util.js';
import {GAME_QUESTIONS} from '../../data/data.js';
import {gameArtist, gameGenre, gameHeader} from '../templates.js';

const getGameScreen = (screen) => `<section class="game ${screen.type}">
    <section class="game__screen">
      <h2 class="game__title">${screen.title}</h2>
    </section>
  </section>`;

export default (state) => {
  const currentLevel = GAME_QUESTIONS[state.level];

  const element = renderScreen(getGameScreen(currentLevel));
  const screen = element.querySelector(`.game`);
  const gameScreen = screen.querySelector(`.game__screen`);
  const content = (currentLevel.type === `game--artist`) ? gameArtist(state) : gameGenre(state);

  screen.insertAdjacentElement(`beforebegin`, gameHeader(state));
  gameScreen.insertAdjacentElement(`beforeend`, content);
  return element;
};
