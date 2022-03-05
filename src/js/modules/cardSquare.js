class CardSquare {
  createCard(data) {
    const div = document.createElement('div');
    div.classList.add('sq-card');

    div.innerHTML = `
      <a class="sq-card__link" href="${data.url}">
        <img class="sq-card__image" src="${data.image}" alt="${data.name}" width="544" height="352">
        <span class="sq-card__text">${data.name}</span>
        ${data.price ? `<span class="sq-card__price">1 час по городу – ${data.price} руб.</span>` : ''}
      </a>
    `;

    return div;
  }
}

export default CardSquare;