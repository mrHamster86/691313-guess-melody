const mainElement = document.querySelector(`.main`);
const SECOND_PER_MINUTE = 60;

export const renderScreen = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
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
