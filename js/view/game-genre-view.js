import AbstractView from './abstract-view';
import {DEBUG, DEBUG_STYLE} from '../settings';

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<form class="game__tracks">
  ${this.level.answers.map((it, i) => `<div class="track">
    <button class="track__button track__button--play" type="button"></button>
    <div class="track__status">
      <audio src="${it.src}"></audio>
    </div>
    <div class="game__answer" ${(DEBUG && it.isCorrect) ? DEBUG_STYLE : ``}>
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
      <label class="game__check" for="answer-${i}">Отметить</label>
    </div>
  </div>`).join(``)}
  <button class="game__submit button" type="submit" disabled>Ответить</button>
</form>`;
  }

  onAnswer() {}

  onCheckbox() {}

  bind() {
    this.element.querySelectorAll(`.game__input`).forEach((it) => {
      it.addEventListener(`change`, () => {
        this.onCheckbox();
      });
    });

    this.element.querySelector(`.game__submit`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswer();
    });
  }
}
