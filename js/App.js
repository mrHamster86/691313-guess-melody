import {changeScreen, showModal} from './util';
import GameModel from './model/game-model';
import WelcomePresenter from './presenter/welcome-presenter';
import GamePresenter from './presenter/game-presenter';
import ResultPresenter from './presenter/result-presenter';
import ModalErrorView from './view/modal-error-view';
import {adaptServerData} from './data/adapt-server-data';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameQuestions;

export default class App {

  static start() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);

    window.fetch(`https://es.dump.academy/guess-melody/questions`)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => gameQuestions = adaptServerData(data))
      .catch((error) => App.showError(error))
      .then(() => welcome.onWelcomeBtnActive());
  }

  static showGame(data) {
    const gameScreen = new GamePresenter(new GameModel(data));
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  static showStats(result) {
    const statistics = new ResultPresenter(result);
    changeScreen(statistics.element);
  }

  static showError(error) {
    const errorView = new ModalErrorView(error);
    showModal(errorView.element);
  }

  static getGameQuestions() {
    return gameQuestions;
  }

}
