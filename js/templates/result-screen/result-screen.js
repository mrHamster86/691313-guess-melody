import {welcomeScreen} from '../templates.js';
import {renderScreen, changeScreen} from '../../util.js';
import {getScore} from '../../score.js';
import {INITIAL_GAME} from '../../data/data.js';
import {getGameResult, getGameStatistics} from '../../result.js';

const getResultScreen = (data) => `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${data.title}</h2>
    <p class="result__text">${data.content}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;

const statistics = [4, 5, 8, 10, 11];

export default (state) => {
  const result = {};
  result.score = getScore(state.answers);
  result.lives = state.lives;
  result.time = state.time;
  result.fail = INITIAL_GAME.lives - state.lives;

  const resultData = getGameResult(result, statistics);
  const element = renderScreen(getResultScreen(resultData));

  if (result.score > 0) {
    const title = element.querySelector(`.result__title`);
    const gameStatistics = `<p class="result__total">${getGameStatistics(result)}</p>`;

    title.insertAdjacentElement(`afterend`, renderScreen(gameStatistics));
  }
  const replayBtn = element.querySelector(`.result__replay`);

  replayBtn.addEventListener(`click`, () => {
    changeScreen(welcomeScreen(INITIAL_GAME));
  });

  return element;
};
