import AbstractView from '../AbstractView.js';
import {GAME_QUESTIONS} from '../../data/data.js';

export default class GameGenre extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = GAME_QUESTIONS[state.level];
  }

  template() {
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

  onAnswer(answer) {}

  bind() {
    this.element..querySelector(`.game__submit`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswer(answer);
    });
  }
}

// const getGameGenre = (screen) => `<form class="game__tracks">
//   ${screen.answers.map((it, i) => `<div class="track">
//     <button class="track__button track__button--play" type="button"></button>
//     <div class="track__status">
//       <audio src="${it.src}"></audio>
//     </div>
//     <div class="game__answer">
//       <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
//       <label class="game__check" for="answer-${i}">Отметить</label>
//     </div>
//   </div>`).join(``)}
//     <button class="game__submit button" type="submit">Ответить</button>
//   </form>`;

// export default (state) => {
//   const currentLevel = GAME_QUESTIONS[state.level];
//   const element = renderScreen(getGameGenre(currentLevel));

//   element.querySelector(`.game__submit`).addEventListener(`click`, () => {
//     const answersGame = GAME_QUESTIONS[state.level].question.map((it) => it.src);
//     const checkbox = element.querySelectorAll(`input:checked`);
//     const answersUser = [];

//     for (let i = 0; i < checkbox.length; i++) {
//       let it = checkbox[i];
//       const audioSrc = getParentHasClass(it, `track`).querySelector(`audio`).src;
//       answersUser.push(audioSrc);
//     }

//     if (answersGame.join(`,`) === answersUser.join(`,`)) {
//       state.answers.push({correct: true, bonusTime: 30});
//       changeGameScreen(state);
//     } else {
//       state.answers.push({correct: false, bonusTime: 30});
//       changeGameScreen(changeLives(state, state.lives - 1));
//     }

//   });
//   return element;
// };
