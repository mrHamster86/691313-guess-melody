'use strict';
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainElement = document.querySelector(`.main`);
const app = document.querySelector(`.app`);
const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen.cloneNode(true));
};

let current = 0;
const selectScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  renderScreen(screens[current]);
};

const arrows = document.createElement(`div`);
arrows.className = `arrows_wrap`;
arrows.innerHTML = `<style>
  .arrows__wrap {
    position: absolute;
    top: 135px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
    position: relative;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>`;

app.appendChild(arrows);
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      selectScreen(current + 1);
      break;
    case LEFT_ARROW:
      selectScreen(current - 1);
      break;
  }
});
arrows.querySelectorAll(`.arrows__btn`).forEach((it) => {
  switch (it.textContent) {
    case `->`:
      it.addEventListener(`mousedown`, () => selectScreen(current + 1));
      break;
    case `<-`:
      it.addEventListener(`mousedown`, () => selectScreen(current - 1));
      break;
  }
});

selectScreen(0);
