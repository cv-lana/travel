const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  })
};

const toggleMenu = () => {
  const promoLink = document.querySelector('.promo__link');

  promoLink.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href').substr(1);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
};
toggleMenu();

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