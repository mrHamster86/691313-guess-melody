import AbstractView from './abstract-view';

export default class GameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game game--${this.level.type}">
  <section class="game__screen">
    <h2 class="game__title">${this.level.question}</h2>
  </section>
</section>`;
  }
}
