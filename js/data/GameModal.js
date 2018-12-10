import {INITIAL_GAME, GAME_QUESTIONS, tick, changeLevel, changeLives} from './data.js';

const getLevel = (state) => GAME_QUESTIONS[state.level];
const getType = (question) => question.type;

export default class GameModal {
  constructor() {
    this.restart();
  }
  // возвращает состояние
  get state() {
    return Object.freeze(this._state);
  }
  // сбрасывает состояние
  restart() {
    this._state = INITIAL_GAME;
  }
  // обновляет таймер
  tick() {
    this._state = tick(this._state);
  }
  // проверяет время
  isTimeOut() {
    return this._state.time > 0;
  }
  // определяет текущий уровень
  getCurentLevel() {
    return getLevel(this._state);
  }
  // возвращает тип уровня
  getLevelType() {
    return getType(this.getCurentLevel());
  }
  // проверяет какой это уровень
  isGameArtist() {
    return this.getLevelType() === 'game--artist';
  }
  // переключает уровень
  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }
  // изменяет количество жизней
  die() {
    this._state = changeLives(this._state, this._state.lives - 1);
  }
  // проверяет наличие жизней
  isDead() {
    return this._state.lives < 0;
  }
  // правильный ответ
  correctAnswer() {
    const question = this.getCurentLevel().question;
    return (this.isGameArtist()) ? question.image : question.map((it) => it.src).join(`,`);
  }
}
