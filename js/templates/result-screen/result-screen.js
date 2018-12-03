import AbstractView from '../AbstractView.js';
import {INITIAL_GAME} from '../../data/data.js';
import {getGameResult, getGameStatistics} from '../../result.js';

const statistics = [4, 5, 8, 10, 11];

export default class ResultScreen {
  constructor(state) {
    super();
    this.result = {};
    this.result.score = getScore(state.answers);
    this.result.lives = state.lives;
    this.result.time = state.time;
    this.result.fail = INITIAL_GAME.lives - state.lives;

    this.resultData = getGameResult(this.result, statistics);
  }

  get template() {
    return `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">${this.resultData.title}</h2>
  <p class="result__text">${this.resultData.content}</p>
  ${(this.result.score) ? `<p class="result__total">${getGameStatistics(this.result)}</p>` : ``}
  <button class="result__replay" type="button">${(this.result.score) ? `Сыграть ещё раз` : `Попробовать ещё раз`}</button>
</section>`;
  }

  onReplayBtn() {}

  bind() {
    this.element.querySelector(`.result__replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onReplayBtn(this.state);
    });
  }
};
// import {welcomeScreen} from '../templates.js';
// import {renderScreen, changeScreen} from '../../util.js';
// import {getScore} from '../../score.js';


// const getResultScreen = (data) => `<section class="result">
//     <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
//     <h2 class="result__title">${data.title}</h2>
//     <p class="result__text">${data.content}</p>
//     <button class="result__replay" type="button">Сыграть ещё раз</button>
//   </section>`;

//

// export default (state) => {
//   const result = {};
//   result.score = getScore(state.answers);
//   result.lives = state.lives;
//   result.time = state.time;
//   result.fail = INITIAL_GAME.lives - state.lives;

//   const resultData = getGameResult(result, statistics);
//   const element = renderScreen(getResultScreen(resultData));

//   if (result.score > 0) {
//     const title = element.querySelector(`.result__title`);
//     const gameStatistics = `<p class="result__total">${getGameStatistics(result)}</p>`;

//     title.insertAdjacentElement(`afterend`, renderScreen(gameStatistics));
//   }
//   const replayBtn = element.querySelector(`.result__replay`);

//   replayBtn.addEventListener(`click`, () => {
//     changeScreen(welcomeScreen(INITIAL_GAME));
//   });

//   return element;
// };
