import {INITIAL_GAME} from '../../data/data.js';
import ResultView from '../../view/result/ResultView';
import App from '../../App';

export default class ResultPresenter {
  constructor(state) {
    this.state = state;
    this.view = new ResultView(this.state);
    this.bind();
  }

  get element() {
    return this.view.element;
  }

  bind() {
    this.view.onReplayBtn = () => App.showWelcome();
  }
}
