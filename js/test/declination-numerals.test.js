import {assert} from 'chai';
import {declinationNumerals} from '../declination-numerals.js';

const arr = [`минута`, `минуты`, `минут`];

describe(`Склонение числительных`, () => {
  it(`Минута`, () => {
    assert.equal(declinationNumerals(1, arr), `минута`);
    assert.equal(declinationNumerals(21, arr), `минута`);
    assert.equal(declinationNumerals(101, arr), `минута`);
  });
  it(`Минуты`, () => {
    assert.equal(declinationNumerals(3, arr), `минуты`);
    assert.equal(declinationNumerals(23, arr), `минуты`);
    assert.equal(declinationNumerals(103, arr), `минуты`);
  });
  it(`Минут`, () => {
    assert.equal(declinationNumerals(5, arr), `минут`);
    assert.equal(declinationNumerals(25, arr), `минут`);
    assert.equal(declinationNumerals(105, arr), `минут`);
  });
});
