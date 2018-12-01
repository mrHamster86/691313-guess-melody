import declination from './declination-numerals.js';

const winnerContent = (score, arrScore) => {
  const data = {};
  const newArr = arrScore.slice();
  newArr.push(score);
  newArr.sort((a, b) => a - b);
  const procentWinner = Math.round((newArr.indexOf(score)) * 100 / newArr.length);

  data.title = `Вы настоящий меломан!`;
  data.content = `Вы заняли ${newArr.length - newArr.indexOf(score)} место из ${newArr.length} игроков. Это лучше, чем у ${procentWinner}% игроков`;

  return data;
};

const loserContent = (time) => {
  const data = {};
  const titleTime = `Увы и ах!`;
  const titleLives = `Какая жалость!`;
  const contentTime = `Время вышло! Вы не успели отгадать все мелодии`;
  const contentLives = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;

  data.title = (time === 0) ? titleTime : titleLives;
  data.content = (time === 0) ? contentTime : contentLives;

  return data;
};

export const getGameResult = (result, arrScore) => {
  return (result.score > 0) ? winnerContent(result.score, arrScore) : loserContent(result.time);
};

export const getGameStatistics = (result) => {
  const minutes = Math.floor(result.time / 60);
  const seconds = result.time % 60;
  const statistics = `За ${minutes} ${declination(minutes, [`минуту`, `минуты`, `минут`])} и ${seconds} ${declination(minutes, [`секунду`, `секунды`, `секунд`])}
    вы набрали ${result.score} ${declination(result.score, [`балл`, `балла`, `баллов`])} (8 быстрых),
    совершив ${result.fail} ${declination(result.fail, [`ошибка`, `ошибки`, `ошибок`])}`;
  return statistics;
};
