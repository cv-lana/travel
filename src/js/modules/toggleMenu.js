const toggleMenu = () => {
  const menu = document.querySelector('.header__menu');
  const menuOpen = document.querySelector('.header__button-menu');
  const menuClose = document.querySelector('.menu__close');

  menuOpen.addEventListener('click', () => {
    menu.style.cssText = `
      overflow: auto;
      transition: 1s;
      transform: translateX(0);
      background-color: #fff;
    `;
  });

  menuClose.addEventListener('click', () => {
    menu.style.cssText = `
    transition: 1s;
    transform: translateX(100%);
    `;
  });
};
export default toggleMenu;