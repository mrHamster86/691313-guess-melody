import trackList from './track-list.js';

export const INITIAL_GAME = Object.freeze({
  level: 0,
  levels: 10,
  lives: 3,
  time: 300,
  bonusTime: 30,
  answers: []
});

export const GAME_QUESTIONS = [
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[0],
    answers: [trackList[0], trackList[1], trackList[2]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[1],
    answers: [trackList[1], trackList[0], trackList[3]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[2],
    answers: [trackList[2], trackList[1], trackList[3]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[3],
    answers: [trackList[3], trackList[4], trackList[0]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    question: trackList[4],
    answers: [trackList[4], trackList[3], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[0].genre} треки`,
    question: [trackList[0]],
    answers: [trackList[0], trackList[1], trackList[2], trackList[3]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[1].genre} треки`,
    question: [trackList[1]],
    answers: [trackList[1], trackList[0], trackList[4], trackList[2]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[2].genre} треки`,
    question: [trackList[2]],
    answers: [trackList[2], trackList[4], trackList[5], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[3].genre} треки`,
    question: [trackList[3]],
    answers: [trackList[3], trackList[1], trackList[2], trackList[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${trackList[4].genre} треки`,
    question: [trackList[4]],
    answers: [trackList[4], trackList[2], trackList[5], trackList[4]],
  }
];
