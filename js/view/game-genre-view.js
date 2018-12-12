import AbstractView from './abstract-view';

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
    <div class="game__answer">
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
      <label class="game__check" for="answer-${i}">Отметить</label>
    </div>
  </div>`).join(``)}
  <button class="game__submit button" type="submit">Ответить</button>
</form>`;
  }

  onAnswer() {}

  bind() {
    this.element.querySelector(`.game__submit`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswer();
    });
  }
}
