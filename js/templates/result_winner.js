import {renderScreen} from '../util.js';
import {getResult} from '../result.js';
import {INITIAL_GAME} from '../main.js';
import declination from '../declination-numerals.js';

const statistics = [4, 5, 8, 10, 11];

const getWinnerScreen = (result) => {
  const minutes = (INITIAL_GAME.time - result.time) / 60;
  return `<h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${minutes} ${declination(minutes, [`минута`, `минуты`, `минут`])} и 25 секунд вы набрали ${result.score} баллов (8 быстрых), совершив ${INITIAL_GAME.lives - result.lives} ошибки</p>
  <p class="result__text">${getResult(result, statistics)}</p>`;
};

export default (result) => {
  const element = renderScreen(getWinnerScreen(result));
  return element;
};
