import CardHorizontal from './cardHorizontal.js';
import CardVertical from './cardVertical.js';
import CardSquare from './cardSquare.js';

class CardsMain {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
  }

  renderCard(data) {
    const cardType = this.wrapper.dataset.cardType;

    if (cardType === 'vertical') {
      const type = new CardVertical();
      const cards = data.map(type.createCard);
      cards.forEach(card => {
        if (this.wrapper) {
          this.wrapper.append(card);
        }
      })
    }

    if (cardType === 'horizontal') {
      const type = new CardHorizontal();
      const cards = data.map(type.createCard);
      cards.forEach(card => {
        if (this.wrapper) {
          this.wrapper.append(card);
        }
      })
    }

    if (cardType === 'square') {
      const type = new CardSquare();
      const cards = data.map(type.createCard);
      cards.forEach(card => {
        if (this.wrapper) {
          this.wrapper.append(card);
        }
      })
    }
  }

  getData() {
    if (this.wrapper) {
      const catalog = this.wrapper.dataset.catalog;

      if (catalog) {
        fetch(`https://travel-d0bd7-default-rtdb.firebaseio.com/db/${catalog}.json`)
          .then((response) => {
            return response.json();
          })
          .then(data => {
            this.renderCard(data);
          })
      }
    }
  }

  init() {
    this.getData();
  }
}
export default CardsMain;