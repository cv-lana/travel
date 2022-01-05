import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerColumnFill: 'column',
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: '.gallery__btn--next',
      prevEl: '.gallery__btn--prev',
    },
  });
};

export default slider;