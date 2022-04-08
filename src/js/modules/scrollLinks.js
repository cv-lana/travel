const scrollLinks = () => {
  const allLinks = document.querySelectorAll('[data-scroll=link]');
  const arrowTop = document.querySelector('.to-top');

  const windowScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      arrowTop.style.visibility = 'visible';
    } else {
      arrowTop.style.visibility = 'hidden';
    }
  };

  allLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  })

  arrowTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', () => {
    windowScroll();
  });

  window.addEventListener('scroll', () => {
    windowScroll();
  });
};
export default scrollLinks;