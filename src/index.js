const toggleModal = () => {
  const btnModal = document.querySelector('.header-contact__btn');
  const modal = document.querySelector('.modal__overlay');

  const modalOpen = () => {
    modal.classList.add('modal__overlay--open');
  };

  const modalClose = () => {
    modal.classList.remove('modal__overlay--open');
  };

  btnModal.addEventListener('click', modalOpen);

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
toggleModal();

