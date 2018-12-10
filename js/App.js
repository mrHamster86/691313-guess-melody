import {INITIAL_GAME} from './data/data.js';
import {changeScreen} from './util';
import GameModal from './data/GameModal';
import WelcomePresenter from './presenter/welcome/WelcomePresenter';
import GamePresenter from './presenter/game/GamePresenter';
import ResultPresenter from './presenter/result/ResultPresenter';

export default class App {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
  }

  static showGame() {
    const gameScreen = new GamePresenter(new GameModal());
    changeScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(stats) {
    console.log('!!!!!!!')
    const statistics = new ResultPresenter(stats);
    changeScreen(statistics.element);
  }

}
