export function disableScroll() {
  const header = document.querySelector('.header');
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
  header.style.cssText = `
    right: ${widthScroll}px;
  `;
}

export function enableScroll() {
  const header = document.querySelector('.header');
  document.body.style.cssText = '';
  header.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  });
}

export function showBlockTours() {
  const blockWrapper = document.querySelector('.tours__wrapper');
  const btnShow = document.querySelector('.tours__btn--show');
  const btnMinimize = document.querySelector('.tours__btn--minimize');

  if (btnShow) {
    btnShow.addEventListener('click', () => {
      blockWrapper.classList.add('tours__wrapper--opened');
      btnShow.classList.add('tours__btn--show-hidden');
      btnMinimize.classList.add('tours__btn--minimize-active');
    });
  }

  if (btnMinimize) {
    btnMinimize.addEventListener('click', () => {
      blockWrapper.classList.remove('tours__wrapper--opened');
      btnShow.classList.remove('tours__btn--show-hidden');
      btnMinimize.classList.remove('tours__btn--minimize-active');
    });
  }
}

export function showBlockDirections() {
  const blockWrapper = document.querySelector('.directions__wrapper');
  const btnShow = document.querySelector('.directions__btn--show');
  const btnMinimize = document.querySelector('.directions__btn--minimize');

  if (btnShow) {
    btnShow.addEventListener('click', () => {
      blockWrapper.classList.add('directions__wrapper--opened');
      btnShow.classList.add('directions__btn--show-hidden');
      btnMinimize.classList.add('directions__btn--minimize-active');
    });
  }

  if (btnMinimize) {
    btnMinimize.addEventListener('click', () => {
      blockWrapper.classList.remove('directions__wrapper--opened');
      btnShow.classList.remove('directions__btn--show-hidden');
      btnMinimize.classList.remove('directions__btn--minimize-active');
    });
  }
}