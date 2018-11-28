import {renderScreen, changeScreen} from '../util.js';
import {initialState, game} from '../data.js';
import gameScreen from './game-screen.js';

const getGameArtist = (screen) => `<div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${screen.question.src}"></audio>
  </div>
  <form class="game__artist">
    ${screen.answers.map((it, i) => `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
      <label class="artist__name" for="answer-${i}">
        <img class="artist__picture" src="${it.image}" alt="${it.artist}">
        ${it.artist}
      </label>
    </div>`).join(``)}
  </form>`;

export default () => {
  const CURRENT_LEVEL = game[initialState.level];
  const element = renderScreen(getGameArtist(CURRENT_LEVEL));

  element.querySelectorAll(`.artist`).forEach((it) => {
    it.addEventListener(`click`, () => {
      initialState.level++;
      changeScreen(gameScreen());
    });
  });
  return element
};
