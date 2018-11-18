import welcomeScreen from './welcome_screen.js';
import {renderScreen, changeScreen} from './util.js';

const template = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const element = renderScreen(template);

const replayBtn = element.querySelector(`.result__replay`);

replayBtn.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});

export default element;
