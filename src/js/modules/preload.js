const preload = () => {
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('preloader-hide');
      setInterval(() => {
        preloader.classList.add('preloader-hidden');
      }, 900);
    }
  });
};

export default preload;