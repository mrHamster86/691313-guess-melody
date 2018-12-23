import INITIAL_GAME from '../data/data';
import WelcomeView from '../view/welcome-view';
import App from '../app';

export default class WelcomePresenter {
  constructor() {
    this.state = INITIAL_GAME;
    this.view = new WelcomeView(this.state);
    this.welcomeBtn = this.element.querySelector(`.welcome__button`);
    this.bind();
  }

  get element() {
    return this.view.element;
  }

  onWelcomeBtnActive() {
    this.welcomeBtn.disabled = false;
  }

  bind() {
    this.view.onWelcomeBtn = () => {
      if (!this.welcomeBtn.disabled) {
        App.showGame(App.gameQuestions);
      }
    }
  }
}
