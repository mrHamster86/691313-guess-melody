import {renderScreen, changeScreen} from '../util.js';
import declination from '../declination-numerals.js';
import {initialState} from '../data.js';
import gameScreen from './game-screen.js';

const getWelcomeScreen = (state) => `<section class="welcome">
  <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
  <h2 class="welcome__rules-title">Правила игры</h2>
  <p class="welcome__text">Правила просты:</p>
  <ul class="welcome__rules-list">
    <li>За ${state.time / 60} ${declination(state.time / 60, [`минута`, `минуты`, `минут`])} нужно ответить на все вопросы.</li>
    <li>Можно допустить ${state.lives} ${declination(state.lives, [`ошибка`, `ошибки`, `ошибок`])}.</li>
  </ul>
  <p class="welcome__text">Удачи!</p>
</section>`;

const element = renderScreen(getWelcomeScreen(initialState));

const welcomeBtn = element.querySelector(`.welcome__button`);

welcomeBtn.addEventListener(`click`, () => {
  changeScreen(gameScreen);
});

export default element;

