import ShowBlock from './showBlock.js';

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
  const block = new ShowBlock('.tours__wrapper', '.tours__btn--show', '.tours__btn--minimize');
  block.init();
}

export function showBlockDirections() {
  const block = new ShowBlock('.directions__wrapper', '.directions__btn--show', '.directions__btn--minimize');
  block.init();
}