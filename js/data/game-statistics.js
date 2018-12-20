import {declination, timeConverter} from '../util';
import INITIAL_GAME from './data';

const MINUTES = [`минуту`, `минуты`, `минут`];
const SECONDS = [`секунду`, `секунды`, `секунд`];
const POINTS = [`балл`, `балла`, `баллов`];
const FAST = [`быстрый`, `быстрых`, `быстрых`];
const FAIL = [`ошибку`, `ошибки`, `ошибок`];

export const getGameStatistics = (result) => {
  const gameTime = INITIAL_GAME.time - result.time;
  const minutes = timeConverter(gameTime).minutes;
  const seconds = timeConverter(gameTime).seconds;
  const statistics = `За ${minutes > 0 ? `${minutes} ${declination(minutes, MINUTES)} и` : ``} ${seconds} ${declination(seconds, SECONDS)}
    вы набрали ${result.score} ${declination(result.score, POINTS)} (${result.fast} ${declination(result.fast, FAST)}),
    совершив ${result.fail} ${declination(result.fail, FAIL)}`;
  return statistics;
};
