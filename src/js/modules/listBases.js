class ListBases {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
  }

  createItem(data) {
    const li = document.createElement('li');
    li.className = 'bases__item';

    li.innerHTML = `
      <a class="link bases__link" href="${data.url}">${data.name}</a>
    `;

    return li;
  }

  renderList(data) {
    const cards = data.map(this.createItem);
    cards.forEach(card => {
      this.wrapper.append(card);
    })
  }

  getData() {
    if (this.wrapper) {
      const list = this.wrapper.dataset.bases;

      fetch(`https://travel-d0bd7-default-rtdb.firebaseio.com/db/${list}.json`)
        .then((response) => {
          return response.json();
        })
        .then(data => {
          this.renderList(data);
        })
    }
  }

  init() {
    this.getData();
  }
}
export default ListBases;