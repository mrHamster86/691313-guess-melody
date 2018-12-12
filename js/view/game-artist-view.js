import AbstractView from './abstract-view';

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<div class="game__track">
  <button class="track__button track__button--play" type="button"></button>
  <audio src="${this.level.question.src}"></audio>
</div>
<form class="game__artist">
  ${this.level.answers.map((it, i) => `<div class="artist">
    <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
    <label class="artist__name" for="answer-${i}">
      <img class="artist__picture" src="${it.image}" alt="${it.artist}">
      ${it.artist}
    </label>
  </div>`).join(``)}
</form>`;
  }

  onAnswer() {}

  bind() {
    this.element.querySelectorAll(`.artist`).forEach((it) => {
      it.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onAnswer(it);
      });
    });
  }
}
