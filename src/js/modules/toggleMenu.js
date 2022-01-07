const toggleMenu = () => {
  const promoLink = document.querySelector('.promo__link');
  const menu = document.querySelector('.header__menu');
  const menuOpen = document.querySelector('.header__button-menu');
  const menuClose = document.querySelector('.menu__close');

  if (promoLink) {
    promoLink.addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.target.getAttribute('href').substr(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  menuOpen.addEventListener('click', () => {
    menu.classList.add('header__menu--visible');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('header__menu--visible');
  });
};
export default toggleMenu;