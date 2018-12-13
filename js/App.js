import {changeScreen} from './util';
import GameModel from './model/game-model';
import WelcomePresenter from './presenter/welcome-presenter';
import GamePresenter from './presenter/game-presenter';
import ResultPresenter from './presenter/result-presenter';

export default class App {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
  }

  static showGame() {
    const gameScreen = new GamePresenter(new GameModel());
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  static showStats(result) {
    const statistics = new ResultPresenter(result);
    changeScreen(statistics.element);
  }

}
