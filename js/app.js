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
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);

    Loader.loadData()
      .then((data) => this.gameQuestions = data)
      .then(() => welcome.onWelcomeBtnActive())
      .catch(App.showError);
  }

  static showWelcome() {
    const gameScreen = new WelcomePresenter();
    changeScreen(gameScreen.element);
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

  static showStats(result) {
    this.result = {
      score: result.score,
      time: result.time
    };

    if (this.result.score > 0) {
      Loader.saveResults(this.result)
        .then(() => Loader.loadResults())
        .then((statistics) => this.result.data = getGameResult(this.result, statistics))
        .then(() => this.showResult(this.result))
        .catch(App.showError);
    } else {
      this.result.data = getGameResult(this.result);
      this.showResult(this.result);
    }
  }

  static showError(error) {
    const errorView = new ModalErrorView(error);
    showModal(errorView.element);
  }

}
