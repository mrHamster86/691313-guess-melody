import {assert} from 'chai';
import {getGameResult} from '../data/game-result';

const plaerResult1 = {score: 19, lives: 1, time: 10};
const plaerResult2 = {score: -1, lives: 1, time: 0};
const plaerResult3 = {score: -1, lives: 0, time: 40};

const statistics = [
  {score: 12},
  {score: 20},
  {score: 19},
  {score: 10},
  {score: 18}
];

describe(`Функция вывода результата игрока`, () => {
  it(`Если игрок выиграл`, () => {
    assert.equal(getGameResult(plaerResult1, statistics).content, `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
  });
  it(`Если время истекло`, () => {
    assert.equal(getGameResult(plaerResult2, statistics).content, `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`Если закончились жизни`, () => {
    assert.equal(getGameResult(plaerResult3, statistics).content, `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
