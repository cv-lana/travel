import { disableScroll, enableScroll } from '../modules/functions.js';

const toggleModal = () => {
  const btnModal = document.querySelectorAll('[data-btn=modal]');
  const modal = document.querySelector('.modal__overlay');

  const modalOpen = () => {
    modal.classList.add('modal__overlay--open');
    disableScroll();
  };

  const modalClose = () => {
    modal.classList.remove('modal__overlay--open');
    enableScroll();
  };

  btnModal.forEach(item => {
    item.addEventListener('click', modalOpen);
  });

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.modal__close') || target.matches('.modal__overlay')) {
      modalClose();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalClose();
    }
  });
};

export default toggleModal;