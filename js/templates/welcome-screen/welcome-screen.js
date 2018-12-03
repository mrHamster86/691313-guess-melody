import AbstractView from '../AbstractView.js';
import declination from '../../declination-numerals.js';

export default class WelcomeView extends AbstractView {
  constructor(initialState) {
    super();
    this.state = initialState;
  }

  get template() {
    return `<section class="welcome">
  <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
  <h2 class="welcome__rules-title">Правила игры</h2>
  <p class="welcome__text">Правила просты:</p>
  <ul class="welcome__rules-list">
    <li>За ${this.state.time / 60} ${declination(this.state.time / 60, [`минута`, `минуты`, `минут`])} нужно ответить на все вопросы.</li>
    <li>Можно допустить ${this.state.lives} ${declination(this.state.lives, [`ошибка`, `ошибки`, `ошибок`])}.</li>
  </ul>
  <p class="welcome__text">Удачи!</p>
</section>`
  }

  onWelcomeBtn() {}

  bind() {
    this.element.querySelector(`.welcome__button`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onWelcomeBtn(this.state);
    });
  }
};
