import {renderScreen, changeScreen} from '../util.js';
import {getScore} from '../score.js';
import {INITIAL_GAME, welcomeScreen} from '../main.js';
import winnerScreen from './result_winner.js';

const getResultScreen = () => `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;

export default (state) => {
  const result = {};
  result.score = getScore(state.answers);
  result.lives = state.lives;
  result.time = state.time;

  const element = renderScreen(getResultScreen());
  const logo = element.querySelector(`.result__logo`);

  const content = (result.score > 0) ? winnerScreen(result) : winnerScreen(result);
  const replayBtn = element.querySelector(`.result__replay`);

  logo.insertAdjacentElement(`afterend`, content);

  replayBtn.addEventListener(`click`, () => {
    changeScreen(welcomeScreen(INITIAL_GAME));
  });

  return element;
};
