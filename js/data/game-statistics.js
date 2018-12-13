import {declination, timeConverter} from '../util';

const MINUTES = [`минуту`, `минуты`, `минут`];
const SECONDS = [`секунду`, `секунды`, `секунд`];
const POINTS = [`балл`, `балла`, `баллов`];
const FAST = [`быстрый`, `быстрых`, `быстрых`];
const FAIL = [`ошибку`, `ошибки`, `ошибок`];

export const getGameStatistics = (result) => {
  const minutes = timeConverter(result.time).minutes;
  const seconds = timeConverter(result.time).seconds;
  const statistics = `За ${minutes} ${declination(minutes, MINUTES)} и ${seconds} ${declination(seconds, SECONDS)}
    вы набрали ${result.score} ${declination(result.score, POINTS)} (${result.fast} ${declination(result.fast, FAST)}),
    совершив ${result.fail} ${declination(result.fail, FAIL)}`;
  return statistics;
};
