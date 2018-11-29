import {renderScreen} from '../util.js';
import {GAME} from '../main.js';
import changeGameScreen from '../change_game_screen.js';

const getGameGenre = (screen) => `<form class="game__tracks">
  ${screen.answers.map((it, i) => `<div class="track">
    <button class="track__button track__button--play" type="button"></button>
    <div class="track__status">
      <audio src="${it.src}"></audio>
    </div>
    <div class="game__answer">
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
      <label class="game__check" for="answer-${i}">Отметить</label>
    </div>
  </div>`).join(``)}
    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;

export default (state) => {
  const currentLevel = GAME[state.level];
  const element = renderScreen(getGameGenre(currentLevel));

  element.querySelector(`.game__submit`).addEventListener(`click`, () => {
    changeGameScreen(state);
  });
  return element;
};
