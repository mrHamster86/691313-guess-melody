import INITIAL_GAME from '../data/data';
import {changeLevel, changeLives, changeTime} from '../data/gameplay';
import {getGameScore} from '../data/game-score';

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.newGame();
    this._answers = [];
  }
  // возвращает состояние
  get state() {
    return Object.freeze(this._state);
  }

  get curentLevel() {
    return this.data[this.state.level];
  }

  get result() {
    const result = {};
    result.score = getGameScore(this._answers);
    result.fast = this._answers.filter((it) => it.bonusTime <= this._state.bonusTime && it.correct === true).length;
    result.lives = this._state.lives;
    result.fail = INITIAL_GAME.lives - this._state.lives;
    result.time = this._state.time;
    return result;
  }
  // сбрасывает состояние
  newGame() {
    this._state = INITIAL_GAME;
  }

  // возвращает тип уровня
  isGameArtist() {
    return this.curentLevel.type === `artist`;
  }
  // переключает уровень
  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }
  // обновляет таймер
  tick() {
    this._state = changeTime(this._state, this._state.time - 1);
  }
  // проверяет время
  isTime() {
    return this._state.time > 0;
  }

  // изменяет количество жизней
  die(isDie) {
    if (isDie) {
      this._state = changeLives(this._state, this._state.lives - 1);
    }
  }
  // проверяет наличие жизней
  isDead() {
    return this._state.lives <= 0;
  }
  // правильный ответ
  answer(isCorrect, time) {
    this._answers.push({correct: isCorrect, bonusTime: time});
  }

  correctAnswer() {
    const number = [];
    this.curentLevel.answers.forEach((it, i) => {
      if (it.isCorrect) {
        number.push(i);
      }
    });
    return number.join(`,`);
  }

}
