import AbstractView from './abstract-view';
import {DEBUG, DEBUG_STYLE} from '../settings';

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<div>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${this.level.src}"></audio>
  </div>
  <form class="game__artist">
    ${this.level.answers.map((it, i) => `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
      <label class="artist__name" for="answer-${i}" >
        <img class="artist__picture" src="${it.image.url}" alt="${it.title}" ${(DEBUG && it.isCorrect) ? DEBUG_STYLE : ``}>
        ${it.title}
      </label>
    </div>`).join(``)}
  </form>
</div>`;
  }

  onAnswer() {}

  onPlayPause() {}

  bind() {
    this.element.querySelectorAll(`.artist`).forEach((it) => {
      it.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onAnswer(it);
      });
    });
    this.element.querySelector(`.track__button`).addEventListener(`click`, (evt) => {
      const btn = evt.target;
      const audio = this.element.querySelector(`audio`);

      evt.preventDefault();
      this.onPlayPause(btn, audio);
    });
  }
}
