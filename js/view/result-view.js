import AbstractView from './abstract-view';
import {getGameStatistics} from '../data/game-statistics';

const statistics = [4, 5, 8, 10, 11];

export default class ResultScreen extends AbstractView {
  constructor(result) {
    super();
    this.result = result;
  }

  get template() {
    return `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">${this.result.data.title}</h2>
  <p class="result__text">${this.result.data.content}</p>
  ${(this.result.score > 0) ? `<p class="result__total">${getGameStatistics(this.result, statistics)}</p>` : ``}
  <button class="result__replay" type="button">${(this.result.score > 0) ? `Сыграть ещё раз` : `Попробовать ещё раз`}</button>
</section>`;
  }

  onReplayBtn() {}

  bind() {
    this.element.querySelector(`.result__replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onReplayBtn(this.state);
    });
  }
}
