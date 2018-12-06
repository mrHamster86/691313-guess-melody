import AbstractView from '../AbstractView.js';
import {GAME_QUESTIONS} from '../../data/data.js';

export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = GAME_QUESTIONS[state.level];
  }

  get template() {
    return `<section class="game ${this.level.type}">
  <section class="game__screen">
    <h2 class="game__title">${this.level.title}</h2>
  </section>
</section>`;
  }
}
