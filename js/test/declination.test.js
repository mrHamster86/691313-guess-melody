import {assert} from 'chai';
import {declination} from '../util';

const MINUTS = [`минута`, `минуты`, `минут`];

describe(`Склонение числительных`, () => {
  it(`Передаем в функцию значения 1, 21, 101, ожидаем результат минута`, () => {
    assert.equal(declination(1, MINUTS), MINUTS[0]);
    assert.equal(declination(21, MINUTS), MINUTS[0]);
    assert.equal(declination(101, MINUTS), MINUTS[0]);
  });

  it(`Передаем в функцию значения 3, 23, 103, ожидаем результат минуты`, () => {
    assert.equal(declination(3, MINUTS), MINUTS[1]);
    assert.equal(declination(23, MINUTS), MINUTS[1]);
    assert.equal(declination(103, MINUTS), MINUTS[1]);
  });

  it(`Передаем в функцию значения 5, 11, 25, 105, ожидаем результат минут`, () => {
    assert.equal(declination(5, MINUTS), MINUTS[2]);
    assert.equal(declination(11, MINUTS), MINUTS[2]);
    assert.equal(declination(25, MINUTS), MINUTS[2]);
    assert.equal(declination(105, MINUTS), MINUTS[2]);
  });
});
