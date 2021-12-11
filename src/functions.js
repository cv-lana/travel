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