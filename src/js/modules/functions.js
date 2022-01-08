export function disableScroll() {
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
}

export function enableScroll() {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  });
}

export function showBlock() {
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
