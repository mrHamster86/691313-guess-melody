const winner = (score, arrScore) => {
  const newArr = arrScore.slice();
  newArr.push(score);
  newArr.sort((a, b) => a - b);
  const procentWinner = Math.round((newArr.indexOf(score)) * 100 / newArr.length);
  return `Вы заняли ${newArr.indexOf(score)} место из ${newArr.length} игроков. Это лучше, чем у ${procentWinner}% игроков`; 
};

const loser = (time) => {
  const messageTime = `Время вышло! Вы не успели отгадать все мелодии`;
  const messageNote = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  return (time === 0) ? messageTime : messageNote;
};

export const getResult = (result, arrScore) => {
  return (result.score > 0) ? winner(result.score, arrScore) : loser(result.time);
};
