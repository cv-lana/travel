const toggleMenu = () => {
  const promoLink = document.querySelector('.promo__link');

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
};
export default toggleMenu;