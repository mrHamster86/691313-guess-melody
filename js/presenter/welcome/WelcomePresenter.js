import {INITIAL_GAME} from '../../data/data.js';
import WelcomeView from '../../view/welcome/WelcomeView';
import App from '../../App';

export default class WelcomePresenter {
  constructor() {
    this.state = INITIAL_GAME;
    this.view = new WelcomeView(this.state);
    this.bind();
  }

  get element() {
    return this.view.element;
  }

  bind() {
    this.view.onWelcomeBtn = () => App.showGame();
  }
}
