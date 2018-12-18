import ResultView from '../view/result-view';
import App from '../app';

export default class ResultPresenter {
  constructor(result) {
    this.result = result;
    this.view = new ResultView(this.result);
    this.bind();
  }

  get element() {
    return this.view.element;
  }

  bind() {
    this.view.onReplayBtn = () => App.showGame(App.gameQuestions);
  }
}
