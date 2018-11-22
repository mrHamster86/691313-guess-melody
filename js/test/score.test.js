import {assert} from 'chai';
import {getScore} from '../score.js';

const answers1 = [
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30}
];
const answers2 = [
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30}
];
const answers3 = [
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10},
  {correct: true, time: 10}
];
const answers4 = [
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: true, time: 30},
  {correct: false, time: 30},
  {correct: false, time: 30},
  {correct: false, time: 30}
];

describe(`Функция подсчёта набранных баллов игрока`, () => {
  
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается не пройденной и функция должна вернуть -1`, () => {
    assert.equal(getScore(answers1), -1);
  });
  it(`Если игрок ответил на все вопросы правильно и не быстро, и ни разу не ошибся, то функция должна вернуть 10 баллов`, () => {
    assert.equal(getScore(answers2), 10);
  });
  it(`Если игрок ответил на все вопросы правильно и быстро, и ни разу не ошибся, то функция должна вернуть 20 баллов`, () => {
    assert.equal(getScore(answers3), 20);
  });
  it(`Если игрок ошибся 3 раза, то функция должна вернуть -1`, () => {
    assert.equal(getScore(answers4), -1);
  });
  
});
