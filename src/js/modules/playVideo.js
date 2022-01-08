import { disableScroll, enableScroll } from './functions.js';

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

  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      modalOpen();
      onYouTubeIframeAPIReady();
    });
  }

  if (modalVideo) {
    modalVideo.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.aboutBaikal-video__button') || target.matches('.aboutBaikal-video__content')) {
        modalClose();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalClose();
    }
  });

};

export default playVideo;