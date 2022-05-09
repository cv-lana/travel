import { disableScroll, enableScroll } from '../modules/functions.js';

const toggleModal = () => {
  const btnModal = document.querySelectorAll('[data-btn=modal]');
  const modal = document.querySelectorAll('.modal');

  const modalOpen = () => {
    modal[0].style.display = 'block';
    disableScroll();
  };

  const modalClose = (item) => {
    item.style.display = 'none';
    enableScroll();
  };

  btnModal.forEach(item => {
    item.addEventListener('click', modalOpen);
  });

  modal.forEach(item => {
    item.addEventListener('click', (event) => {
      const target = event.target;
      if (target.matches('.modal__close') || target.matches('.modal__overlay') || target.matches('.modal__button--response')) {
        modalClose(item);
      }
    });
  })
};

export default toggleModal;