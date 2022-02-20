class ListBases {
  constructor(wrapper) {
    this.wrapper = document.getElementById(wrapper);
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
      if (this.wrapper) {
        this.wrapper.append(card);
      }
    })
  }
}
export default ListBases;