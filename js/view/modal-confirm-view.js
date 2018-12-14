import AbstractView from './abstract-view';

export default class ModalConfirmView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="modal">
    <button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
    <h2 class="modal__title">Подтверждение</h2>
    <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
    <div class="modal__buttons">
      <button class="modal__button button confirm">Ок</button>
      <button class="modal__button button cancel">Отмена</button>
    </div>
  </section>`;
  }

  onConfirm() {}

  onCancel() {}

  bind() {
    this.element.querySelector(`.modal__close`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onCancel();
    });

    this.element.querySelector(`.cancel`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onCancel();
    });

    this.element.querySelector(`.confirm`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onConfirm();
    });
  }

}
