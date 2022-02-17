const scrollLinks = () => {
  const allLinks = document.querySelectorAll('[data-scroll=link]');
  const arrowTop = document.querySelector('.to-top');

  // const arrLinks = [...allLink];

  const windowScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      arrowTop.style.visibility = 'visible';
    } else {
      arrowTop.style.visibility = 'hidden';
    }
  };

  const smoothScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 15));
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

  arrowTop.addEventListener('click', smoothScroll);

  window.addEventListener('load', () => {
    windowScroll();
  });

  window.addEventListener('scroll', () => {
    windowScroll();
  });
};
export default scrollLinks;