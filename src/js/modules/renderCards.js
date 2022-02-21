import CardHorizontal from './CardHorizontal.js';
import CardVertical from './CardVertical.js';
import CardSquare from './CardSquare.js';
import getData from './getData.js';

const renderCards = () => {
  const placesInterest = () => {
    const cards = new CardHorizontal('placesInterest');

    getData().then(data => {
      cards.renderCard(data.placesInterest);
    });
  };
  placesInterest();

  const huntFish = () => {
    const cards = new CardHorizontal('huntingFishing');

    getData().then(data => {
      cards.renderCard(data.huntFish);
    });
  };
  huntFish();

  const allExcursions = () => {
    const cards = new CardVertical('allExcursions');

    getData().then(data => {
      cards.renderCard(data.allExcursions);
    });
  };
  allExcursions();

  const extremeTours = () => {
    const cards = new CardVertical('extremeTours');

    getData().then(data => {
      cards.renderCard(data.extremeTours);
    });
  };
  extremeTours();

  const shipsYaсhts = () => {
    const cards = new CardSquare('shipsYachts');

    getData().then(data => {
      cards.renderCard(data.shipsYaсhts);
    });
  };
  shipsYaсhts();

  const transportServices = () => {
    const cards = new CardSquare('transportServices');

    getData().then(data => {
      cards.renderCard(data.transportServices);
    });
  };
  transportServices();

  const catalogGoryachinsk = () => {
    const cards = new CardVertical('catalog-goryachinsk');

    getData().then(data => {
      cards.renderCard(data.goryachinsk);
    });
  };
  catalogGoryachinsk();

  const hotelsUlanUde = () => {
    const cards = new CardVertical('hotelsUlanUde');

    getData().then(data => {
      cards.renderCard(data.ulanUde);
    });
  };
  hotelsUlanUde();

  const catalogBaikalpriboy = () => {
    const cards = new CardVertical('catalog-baikalpriboy');

    getData().then(data => {
      cards.renderCard(data.baikalPriboy);
    });
  };
  catalogBaikalpriboy();

  const catalogGremyachinsk = () => {
    const cards = new CardVertical('catalog-gremyachinsk');

    getData().then(data => {
      cards.renderCard(data.gremyachinsk);
    });
  };
  catalogGremyachinsk();

  const catalogKultushnaya = () => {
    const cards = new CardVertical('catalog-kultushnaya');

    getData().then(data => {
      cards.renderCard(data.kultushnaya);
    });
  };
  catalogKultushnaya();

  const catalogLemasovo = () => {
    const cards = new CardVertical('catalog-lemasovo');

    getData().then(data => {
      cards.renderCard(data.lemasovo);
    });
  };
  catalogLemasovo();
};
export default renderCards;