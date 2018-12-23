import {changeScreen, showModal} from './util';
import {getGameResult} from './data/game-result';
import GameModel from './model/game-model';
import WelcomePresenter from './presenter/welcome-presenter';
import GamePresenter from './presenter/game-presenter';
import ResultPresenter from './presenter/result-presenter';
import ModalErrorView from './view/modal-error-view';
import Loader from './loader';

export default class App {

  static start() {
    this.load().catch(this.showError);
  }

  static async load() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
    try {
      this.gameQuestions = await Loader.loadData();
      this.audioList = Array.from(this.getAudioList(this.gameQuestions));
      this.audio = await Promise.all(this.audioList.map((it) => Loader.loadAudio(it)));
    } finally {
      welcome.onWelcomeBtnActive();
    }
  }

  static showGame(data) {
    const gameScreen = new GamePresenter(new GameModel(data));
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  static showResult(data) {
    const resultScreen = new ResultPresenter(data);
    changeScreen(resultScreen.element);
  }

  static getAudioList(gameQuestions) {
    const audioList = new Set();

    for (const level of gameQuestions) {
      if (level.type === `artist`) {
        audioList.add(level.src);
      } else {
        level.answers.forEach((answer) => audioList.add(answer.src));
      }
    }
    return audioList;
  }

  static async showStats(result) {
    this.result = result;

    if (this.result.score > 0) {
      try {
        await Loader.saveResults(this.result);
        this.result.data = getGameResult(this.result, await Loader.loadResults());
      } catch (e) {
        App.showError(e);
      }
    } else {
      this.result.data = getGameResult(this.result);
    }

    this.showResult(this.result);
  }

  static showError(error) {
    const errorView = new ModalErrorView(error);
    showModal(errorView.element);
  }

}
