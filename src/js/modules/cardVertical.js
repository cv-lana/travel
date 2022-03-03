class CardVertical {
  createCard(data) {
    const div = document.createElement('div');
    div.classList.add('vh-card');

    div.innerHTML = `
      <a class="vh-card__link" href="${data.url}">
        <div class="vh-card__image">
          <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="vh-card__content">
          <h3 class="vh-card__title">${data.name}</h3>
          ${data.duration ? `
            <div class="vh-card__info">
              <p class="vh-card__duration">Продолжительность: ${data.duration}</p>
              <p class="vh-card__season">Время проведения: ${data.season}</p>
              <p class="vh-card__price">Стоимость: от ${data.price} руб. с человека</p>
            </div>
            ` : `
            <p class="vh-card__price">Стоимость номеров от ${data.price} руб.</p>
            `}
          
        </div>
      </a>
    `;

    return div;
  }
}

export default CardVertical;