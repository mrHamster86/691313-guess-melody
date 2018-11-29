import {assert} from 'chai';
import declinationNumerals from '../declination-numerals.js';

const arr = [`минута`, `минуты`, `минут`];

describe(`Склонение числительных`, () => {
  it(`Передаем в функцию значения 1, 21, 101, ожидаем результат минута`, () => {
    assert.equal(declinationNumerals(1, arr), `минута`);
    assert.equal(declinationNumerals(21, arr), `минута`);
    assert.equal(declinationNumerals(101, arr), `минута`);
  });
  it(`Передаем в функцию значения 3, 23, 103, ожидаем результат минуты`, () => {
    assert.equal(declinationNumerals(3, arr), `минуты`);
    assert.equal(declinationNumerals(23, arr), `минуты`);
    assert.equal(declinationNumerals(103, arr), `минуты`);
  });
  it(`Передаем в функцию значения 5, 11, 25, 105, ожидаем результат минут`, () => {
    assert.equal(declinationNumerals(5, arr), `минут`);
    assert.equal(declinationNumerals(11, arr), `минут`);
    assert.equal(declinationNumerals(25, arr), `минут`);
    assert.equal(declinationNumerals(105, arr), `минут`);
  });
});
