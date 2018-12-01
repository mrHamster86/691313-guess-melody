import {renderScreen} from '../../util.js';
import {GAME_QUESTIONS} from '../../data/data.js';
import changeGameScreen from '../../change_game_screen.js';
import {changeLives} from '../../game.js';

const getGameArtist = (screen) => `<div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${screen.question.src}"></audio>
  </div>
  <form class="game__artist">
    ${screen.answers.map((it, i) => `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
      <label class="artist__name" for="answer-${i}">
        <img class="artist__picture" src="${it.image}" alt="${it.artist}">
        ${it.artist}
      </label>
    </div>`).join(``)}
  </form>`;

export default (state) => {
  const currentLevel = GAME_QUESTIONS[state.level];
  const element = renderScreen(getGameArtist(currentLevel));

  element.querySelectorAll(`.artist`).forEach((it) => {
    it.addEventListener(`click`, () => {
      if (it.querySelector(`img`).src === currentLevel.question.image) {
        state.answers.push({correct: true, bonusTime: 30});
        changeGameScreen(state);
      } else {
        state.answers.push({correct: false, bonusTime: 30});
        changeGameScreen(changeLives(state, state.lives - 1));
      }
    });
  });
  return element;
};
