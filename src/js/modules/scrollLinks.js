const scrollLinks = () => {
  const allLinks = document.querySelectorAll('[data-scroll=link]');
  const arrowTop = document.querySelector('.to-top');

  const arrLinks = [...allLinks, arrowTop];

  const windowScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      arrowTop.style.visibility = 'visible';
    } else {
      arrowTop.style.visibility = 'hidden';
    }
  };

  arrLinks.forEach(link => {
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

  window.addEventListener('load', () => {
    windowScroll();
  });

  window.addEventListener('scroll', () => {
    windowScroll();
  });
};
export default scrollLinks;