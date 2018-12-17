import {showModal, changeScreen} from '../util';
import ModalConfirmView from '../view/modal-confirm-view';
import GameView from '../view/game-view';
import HeaderView from '../view/game-header-view';
import GenreView from '../view/game-genre-view';
import ArtistView from '../view/game-artist-view';
import App from '../app';

export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.modalConfirm = new ModalConfirmView();
    this.view = new GameView(this.model.curentLevel);
    this.gameHeader = new HeaderView(this.model.state);
    this.gameContent = (this.model.isGameArtist()) ? new ArtistView(this.model.curentLevel) : new GenreView(this.model.curentLevel);

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
    this.audioClear();
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
    return element.querySelector(`.artist__input`).value.split(`-`)[1];
  }

  getAnswersGenre() {
    const checkbox = this.view.element.querySelectorAll(`input:checked`);
    const listAnswers = [];

    checkbox.forEach((it) => listAnswers.push(it.value.split(`-`)[1]));
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
    this.gameHeader.onGameBackBtn = () => {
      this.stopGame();
      showModal(this.modalConfirm.element);
    };
  }

  audioClear() {
    delete this.audio;
    delete this.btn;
  }

  audioPlaer(btn, audio) {
    if (btn.classList.contains(`track__button--play`)) {
      audio.play();
    } else {
      audio.pause();
    }
    btn.classList.toggle(`track__button--play`);
    btn.classList.toggle(`track__button--pause`);
  }

  audioControl(btn, audio) {
    if (this.audio && this.audio !== audio) {
      this.audioPlaer(this.btn, this.audio);
    }
    this.btn = btn;
    this.audio = audio;
    this.audioPlaer(this.btn, this.audio);
  }

  bind() {
    this.gameContent.onAnswer = (element) => this.answer(element);
    this.gameContent.onPlayPause = (btn, audio) => this.audioControl(btn, audio);

    this.gameContent.onCheckbox = () => {
      if (this.getAnswersGenre().length > 0) {
        this.element.querySelector(`.game__submit`).disabled = false;
      } else {
        this.element.querySelector(`.game__submit`).disabled = true;
      }
    };

    this.modalConfirm.onCancel = () => {
      this.startGame();
      this.modalConfirm.element.remove();
    };

    this.modalConfirm.onConfirm = () => {
      this.modalConfirm.element.remove();
      App.start();
    };

  }

  timeOut() {
    this.stopGame();
    this.endGame();
  }
}
