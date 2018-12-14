const SECOND_PER_MINUTE = 60;
const BODY = document.querySelector(`body`);
const MAIN_ELEMENT = document.querySelector(`.main`);

export const showModal = (element) => BODY.appendChild(element);

export const changeScreen = (element) => {
  MAIN_ELEMENT.innerHTML = ``;
  MAIN_ELEMENT.appendChild(element);
};

export const getParentHasClass = (element, isHasClass) => {
  element = element.parentElement;
  while (!element.classList.contains(isHasClass)) {
    element = element.parentElement;
    if (!element) {
      break;
    }
  }
  return element;
};

export const timeConverter = (second) => {
  const time = {};

  const minutes = `${Math.floor(second / SECOND_PER_MINUTE)}`;
  const seconds = `${second % SECOND_PER_MINUTE}`;

  time.minutes = (minutes.length > 1) ? `${minutes}` : `0${minutes}`;
  time.seconds = (seconds.length > 1) ? `${seconds}` : `0${seconds}`;

  return time;
};

export const declination = (n, numeralArr) => {
  const key = [2, 0, 1, 1, 1, 2];
  return numeralArr[(n % 100 > 4 && n % 100 < 20) ? 2 : key[(n % 10 < 5) ? n % 10 : 5]];
};
