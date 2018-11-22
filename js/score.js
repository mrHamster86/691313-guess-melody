const GAME = {
  lives: 2,
  numberQuestion: 10,
  quickAnswer: 30
};

const getScore = (answers) => {
  const calculate = () => {
    let lives = GAME.lives;
    let result = 0;
    let i = 0;
    
    while (i < answers.length) {
      result += (!answers[i].correct) ? -2 :
                (answers[i].time >= GAME.quickAnswer) ? 1 : 2;
      lives += (!answers[i].correct) ? -1 : 0;
      if (lives < 0) break;
      i++;
    }
    return (lives < 0) ? -1 : result;
  };
  return (answers.length < GAME.numberQuestion) ? -1 : calculate();
};
