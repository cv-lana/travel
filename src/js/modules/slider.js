import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerColumnFill: 'column',
    navigation: {
      nextEl: '.gallery__btn--next',
      prevEl: '.gallery__btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    }
  });
};

export default slider;