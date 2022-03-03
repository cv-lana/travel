import CardsMain from './cardsMain.js';

const renderCards = () => {
  const cards = new CardsMain('.content__wrapper');
  cards.init();

  const cardsCatalog = new CardsMain('.catalog__wrapper');
  cardsCatalog.init();
};
export default renderCards;