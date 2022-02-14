const toggleMenu = () => {
  const menu = document.querySelector('.header__menu');
  const menuOpen = document.querySelector('.header__button-menu');
  const menuClose = document.querySelector('.menu__close');

  menuOpen.addEventListener('click', () => {
    menu.style.cssText = `
      overflow: auto;
      transition: 0.5s ease-out;
      transform: translateX(0);
    `;
  });

  menuClose.addEventListener('click', () => {
    menu.style.cssText = `
    transition: 0.5s ease-out;
    transform: translateX(100%);
    `;
  });
};
export default toggleMenu;