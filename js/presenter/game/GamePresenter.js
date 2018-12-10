import {getParentHasClass} from '../../util';
import {INITIAL_GAME, tick} from '../../data/data.js';
import GameView from '../../view/game/GameView';
import HeaderView from '../../view/game/HeaderView';
import GenreView from '../../view/game/GenreView';
import ArtistView from '../../view/game/ArtistView';
import App from '../../App';


export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.view = new GameView(this.model.state);
    this.gameHeader = new HeaderView(this.model.state);
    this.gameContent = (this.model.isGameArtist()) ? new ArtistView(this.model.state) : new GenreView(this.model.state);

    this.view.element.insertAdjacentElement(`afterbegin`, this.gameHeader.element);
    this.view.element.querySelector(`.game__screen`).insertAdjacentElement(`beforeend`, this.gameContent.element);

    this._timer = null;
    this.bind();
  }

  get element() {
    return this.view.element;
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.view.element.replaceChild(header.element, this.gameHeader.element);
    this.gameHeader = header;
    this.replaceGame();
  }

  _tick() {
    if (this.model.isTimeOut()) {
      this.model.tick();
      this.updateHeader();
      this._timer = setTimeout(() => this._tick(), 1000);
    } else {
      this.timeOut();
    }
  }

  startGame() {
    //this.changeLevel();

    this._tick();
  }

  stopGame() {
    clearInterval(this._timer);
  }

  replaceGame() {
    this.gameHeader.onGameBackBtn = () => App.showWelcome();
  }

  answerGameArtist(element) {
    if (element.querySelector(`img`).src === this.model.correctAnswer()) {
      this.model._state.answers.push({correct: true, bonusTime: 30});
    } else {
      this.model.die();
      this.model._state.answers.push({correct: false, bonusTime: 30});
    }
    this.model.nextLevel();
    console.log(this.model._state)
  }

  answerGameGenre() {

  }

  bind() {
    this.gameContent.onAnswer = (element) => (this.model.isGameArtist()) ? this.answerGameArtist(element) : this.answerGameGenre();
  }

  timeOut() {
    App.showStats(this.model.state);
  }
}
