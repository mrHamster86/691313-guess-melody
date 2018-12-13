import {getParentHasClass} from '../util';
import GameView from '../view/game-view';
import HeaderView from '../view/game-header-view';
import GenreView from '../view/game-genre-view';
import ArtistView from '../view/game-artist-view';
import App from '../app';

import {changeScreen} from '../util';

export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.view = new GameView(this.model.state);
    this.gameHeader = new HeaderView(this.model.state);
    this.gameContent = (this.model.isGameArtist()) ? new ArtistView(this.model.curentLevel()) : new GenreView(this.model.curentLevel());

    this.view.element.insertAdjacentElement(`afterbegin`, this.gameHeader.element);
    this.view.element.querySelector(`.game__screen`).insertAdjacentElement(`beforeend`, this.gameContent.element);

    this._timer = null;
    this._bonusTime = null;
    this.bind();
    this.restart();
  }

  get element() {
    return this.view.element;
  }

  startGame() {
    this._tick();
  }

  stopGame() {
    clearInterval(this._timer);
  }

  endGame() {
    App.showStats(this.model.result);
  }

  changeLevel() {
    if (this.model.state.level < this.model.state.levels) {
      const gameScreen = new GamePresenter(this.model);
      gameScreen.startGame();
      changeScreen(gameScreen.element);
    } else {
      this.endGame();
    }
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.view.element.replaceChild(header.element, this.gameHeader.element);
    this.gameHeader = header;
    this.restart();
  }

  _tick() {
    if (this.model.isTime()) {
      this.model.tick();
      this._bonusTime++;
      this.updateHeader();
      this._timer = setTimeout(() => this._tick(), 1000);
    } else {
      this.timeOut();
    }
  }

  getAnswerArtist(element) {
    return element.querySelector(`img`).src;
  }

  getAnswersGenre() {
    const checkbox = this.view.element.querySelectorAll(`input:checked`);
    const listAnswers = [];
    for (let i = 0; i < checkbox.length; i++) {
      let it = checkbox[i];
      const audioSrc = getParentHasClass(it, `track`).querySelector(`audio`).src;
      listAnswers.push(audioSrc);
    }
    return listAnswers.join(`,`);
  }

  answer(element) {
    const answer = (this.model.isGameArtist()) ? this.getAnswerArtist(element) : this.getAnswersGenre();
    const isCorrect = answer === this.model.correctAnswer();

    this.stopGame();
    this.model.answer(isCorrect, this._bonusTime);
    this.model.die(!isCorrect);

    if (!this.model.isDead()) {
      this.model.nextLevel();
      this.changeLevel();
    } else {
      this.endGame();
    }
  }

  restart() {
    this.gameHeader.onGameBackBtn = () => App.showWelcome();
  }

  bind() {
    this.gameContent.onAnswer = (element) => this.answer(element);
  }

  timeOut() {
    this.stopGame();
    this.endGame();
  }
}
