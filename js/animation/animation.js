import {INITIAL_GAME} from '../data/data.js';

const RADIUS = 370;
const TIMER_LINE = document.querySelector(`.timer__line`);

const getCircumference = (radius) => Math.round(2 * Math.PI * radius);

export const getRadius = (ratioTime, radius) => {
  const dash = {};

  dash.stroke = getCircumference(radius);
  dash.offset = getCircumference(radius) - getCircumference(radius) * ratioTime;

  return dash;
};

export const getDash = (time) => {
  const ratioTime = time / INITIAL_GAME.time;
  const dashState = getRadius(ratioTime, RADIUS);

  TIMER_LINE.setAtribute(`stroke-dasharray`, dashState.stroke);
  TIMER_LINE.setAtribute(`stroke-dashoffset`, dashState.offset);
};
