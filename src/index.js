const playVideo = () => {
  const btnPlay = document.querySelector('.aboutBaikal-info__button');
  const modalVideo = document.querySelector('.aboutBaikal-video');
  let player;

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
      events: {
        'onReady': onPlayerReady,
      }
    });
  };

  const modalOpen = () => {
    modalVideo.style.display = 'block';
    disableScroll();
  };

  const modalClose = () => {
    modalVideo.style.display = 'none';
    enableScroll();
  };

  btnPlay.addEventListener('click', () => {
    modalOpen();
    onYouTubeIframeAPIReady();
  });

  modalVideo.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.aboutBaikal-video__button') || target.matches('.aboutBaikal-video__content')) {
      modalClose();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalClose();
    }
  });

};
playVideo();

const toggleModal = () => {
  const btnModal = document.querySelector('.header__contact-btn');
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

