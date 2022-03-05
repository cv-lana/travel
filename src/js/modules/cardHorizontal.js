class CardHorizontal {
  createCard(data) {
    const div = document.createElement('div');
    div.classList.add('vw-card');

    div.innerHTML = `
      <img class="vw-card__image" src="${data.image}" alt="${data.name}" width="352" height="352">
      <div class="vw-card__content">
        <h3 class="vw-card__title">${data.name}</h3>
        <p class="vw-card__text">${data.description}</p>
        ${data.details ? `<p class="vw-card__text">${data.details}</p>` : ''}
        ${data.duration || data.season ?
        `<div class="vw-card__details">
            <div class="vw-card__details-wrapper">
            ${data.duration ? `
              <p class="vw-card__details-duration">
                <span class="vw-card__details-text">Продолжительность:</span> ${data.duration}
              </p>` : ''}
            ${data.season ? `
              <p class="vw-card__details-season">
                <span class="vw-card__details-text">Время проведения:</span> ${data.season}
              </p>` : ''}
              <p class="vw-card__details-price">
                <span class="vw-card__details-text">Стоимость:</span> от ${data.price} руб. с человека
              </p>
            </div>
              <a class="vw-card__button" href="${data.url}">Подробней</a>
          </div>`
        : `<a class="vw-card__button" href="${data.url}">Подробней</a>`}
      </div>
    `;

    return div;
  }
}

export default CardHorizontal;