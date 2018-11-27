import {renderScreen, changeScreen} from '../util.js';
import {initialState, game} from '../data.js';
import gameScreen from './game-screen.js';

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

const element = renderScreen(getGameGenre(game[initialState.level]));

element.querySelector(`.game__submit`).addEventListener(`click`, () => {
  initialState.level++;
  changeScreen(gameScreen);
});

export default element;
