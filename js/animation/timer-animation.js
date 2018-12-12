import INITIAL_GAME from '../data/data.js';

const getCircumference = (radius) => Math.round(2 * Math.PI * radius);

export const getRadius = (ratioTime, radius) => {
  const dash = {};

  dash.stroke = getCircumference(radius);
  dash.offset = getCircumference(radius) - getCircumference(radius) * ratioTime;

  return dash;
};

export const getDash = (time) => {
  const RADIUS = 370;

  const ratioTime = time / INITIAL_GAME.time;
  return getRadius(ratioTime, RADIUS);
};

