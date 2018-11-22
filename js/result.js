const winner = (scope, arrScope) => {
  const newArr = arrScope.slice();
  newArr.push(scope);
  newArr.sort((a, b) => a - b);
  const procentWinner = Math.round((newArr.indexOf(scope)) * 100 / newArr.length);
  return `Вы заняли ${newArr.indexOf(scope)} место из ${newArr.length} игроков. Это лучше, чем у ${procentWinner}% игроков`; 
};

const loser = (time) => {
  const messageTime = `Время вышло! Вы не успели отгадать все мелодии`;
  const messageNote = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  return (time === 0) ? messageTime : messageNote;
};

export const getResult = (result, arrScope) => {
  return (result.scope > 0) ? winner(result.scope, arrScope) : loser(result.time);
};
