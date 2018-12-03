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




// const getGameScreen = (screen) => `<section class="game ${screen.type}">
//     <section class="game__screen">
//       <h2 class="game__title">${screen.title}</h2>
//     </section>
//   </section>`;

// export default (state) => {
//   const currentLevel = GAME_QUESTIONS[state.level];

//   const element = renderScreen(getGameScreen(currentLevel));
//   const screen = element.querySelector(`.game`);
//   const gameScreen = screen.querySelector(`.game__screen`);
//   const content = (currentLevel.type === `game--artist`) ? gameArtist(state) : gameGenre(state);

//   screen.insertAdjacentElement(`beforebegin`, gameHeader(state));
//   gameScreen.insertAdjacentElement(`beforeend`, content);
//   return element;
// };
