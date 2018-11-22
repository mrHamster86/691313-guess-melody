import {assert} from 'chai';
import {getResult} from '../result.js'

const plaerResult1 = {scope: 10, note: 1, time: 10};
const plaerResult2 = {scope: -1, note: 1, time: 0};
const plaerResult3 = {scope: -1, note: 0, time: 40};

const statistics = [4, 5, 8, 10, 11];

describe(`Функция вывода результата игрока`, () => {
  
  it(`Если игрок выиграл`, () => {
    assert.equal(getResult(plaerResult1, statistics), `Вы заняли 3 место из 6 игроков. Это лучше, чем у 50% игроков`);
  });
  it(`Если время истекло`, () => {
    assert.equal(getResult(plaerResult2, statistics), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`Если закончились жизни`, () => {
    assert.equal(getResult(plaerResult3, statistics), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
