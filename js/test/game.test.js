import {assert} from 'chai';
import {INITIAL_GAME, changeLevel, changeLives, changeTime} from '../gameState';

describe(`Проверка смены уровня`, () => {
  it(`Проверка изменения уровня`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
  });
  it(`Уровень не может иметь отрицательное значение`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, 0);
  });
  it(`Уровень не может иметь отрицательное значение`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, 0);
  });
  it(`Уровень не может иметь значение больще колличества уровней`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, 11).level, 0);
  });
});

describe(`Управление колличеством жизней игрока`, () => {
  it(`Проверка изменения колличества жизней`, () => {
    assert.equal(changeLives(INITIAL_GAME, 1).lives, 1);
    assert.equal(changeLives(INITIAL_GAME, 0).lives, 0);
  });
  it(`Количество жизней не может иметь отрицательное значение`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, -1).lives, 0);
  });
  it(`Количество жизней не может иметь отрицательное значение`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, []).lives, 0);
  });
  it(`Количество жизней не может иметь значение больще значения в начале`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, 11).lives, 0);
  });
});

describe(`Управление таймером`, () => {
  it(`Проверка изменения колличества секунд`, () => {
    assert.equal(changeTime(INITIAL_GAME, 100).time, 1);
    assert.equal(changeTime(INITIAL_GAME, 0).time, 0);
  });
  it(`Таймер не может иметь отрицательное значение`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, -1).time, 0);
  });
  it(`Таймер не может иметь отрицательное значение`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, []).time, 0);
  });
  it(`Таймер не может иметь значение больще значения в начале`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, 11).time, 0);
  });
});
