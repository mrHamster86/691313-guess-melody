const winnerContent = (score, statistics) => {
  const data = {};

  const newArr = statistics.map((it) => it.score);
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

export const getGameResult = (result, statistics) => {
  return (result.score > 0) ? winnerContent(result.score, statistics) : loserContent(result.time);
};
