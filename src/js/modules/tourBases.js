import getData from './getData.js';

const tourBases = () => {
  const wrapper = document.querySelector('.tourBases');

  const generateList = (data) => data.reduce((html, item) => html +
    `<li class="tourBases-inner__item">
      <a class="link tourBases-inner__link" href="${item.url}">${item.name}</a>
    </li>`,
    '');

  const createCard = (data) => {
    const { bases, description, image, name, url } = data;

    const div = document.createElement('div');
    div.classList.add('tourBases__card');

    div.innerHTML = `
        <img class="tourBases__image" src="${image}" alt="${name}">
        <div class="tourBases__content">
          <div class="tourBases-description">
            <h3 class="tourBases-description__title">${name}</h3>
              <p class="tourBases-description__text">${description}</p>
              <a class="tourBases-description__button" href="${url}">Подробней</a>
          </div>
          <div class="tourBases-inner">
            <h4 class="tourBases-inner__title">Турбазы</h4>
            <ul class="tourBases-inner__list">${generateList(bases)}</ul>
          </div>
        </div>
      `;

    return div;
  }

  const renderCards = (data) => {
    const cards = data.map(createCard);
    cards.forEach(card => {
      wrapper.append(card);
    })
  };

  if (wrapper) {
    getData().then(data => {
      renderCards(data.tourBases);
    });
  }
};
export default tourBases;