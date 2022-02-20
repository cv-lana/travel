class CardSquare {
  constructor(wrapper) {
    this.wrapper = document.getElementById(wrapper);
  }

  createCard(data) {
    const div = document.createElement('div');
    div.classList.add('sq-card');

    div.innerHTML = `
      <a class="sq-card__link" href="${data.url}">
        <img class="sq-card__image" src="${data.image}" alt="${data.name}">
        <span class="sq-card__text">${data.name}</span>
        ${data.price ? `<span class="sq-card__price">1 час по городу – ${data.price} руб.</span>` : ''}
      </a>
    `;

    return div;
  }

  renderCard(data) {
    const cards = data.map(this.createCard);
    cards.forEach(card => {
      if (this.wrapper) {
        this.wrapper.append(card);
      }
    })
  }
}

export default CardSquare;