import {timeConverter} from '../util';
import {getDash} from '../animation/timer-animation';
import AbstractView from './abstract-view';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.timer = timeConverter(state.time);
    this.dashState = getDash(state.time);
  }

  get template() {
    return `<header class="game__header">
  <a class="game__back" href="#">
    <span class="visually-hidden">Сыграть ещё раз</span>
    <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
  </a>

  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle class="timer__line" cx="390" cy="390" r="370" stroke-dasharray="${this.dashState.stroke}" stroke-dashoffset="${this.dashState.offset}" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
  </svg>

  <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer__mins">${this.timer.minutes}</span>
    <span class="timer__dots">:</span>
    <span class="timer__secs">${this.timer.seconds}</span>
  </div>

  <div class="game__mistakes">
    ${new Array(this.state.lives).fill(`<div class="wrong"></div>`).join(``)}
  </div>
</header>`;
  }

  onGameBackBtn() {}

  bind() {
    this.element.querySelector(`.game__back`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onGameBackBtn();
    });
  }

}
