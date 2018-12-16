const QuestionType = {
  GENRE: `genre`,
  ARTIST: `artist`
};

const preprocessAnswers = (genre, answers) => answers.map((answer) => {
  return {
    src: answer.src,
    genre: answer.genre,
    isCorrect: answer.genre === genre
  };
});

export const adaptServerData = (data) => {
  for (const level of data) {
    if (level.type === QuestionType.GENRE) {
      level.answers = preprocessAnswers(level.genre, level.answers);
    }
  }
  return data;
};
