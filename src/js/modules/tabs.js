const tabs = () => {
  const tabs = document.querySelectorAll('.hits__tab');
  const hitsInner = document.querySelectorAll('.hits__inner');

  const toggleHitsInner = (arr, value) => {
    arr.forEach(elem => {
      if (elem.dataset.tabsField === value) {
        elem.classList.add('hits__inner--active');
      } else {
        elem.classList.remove('hits__inner--active');
      }
    })
  };

  if (tabs) {
    tabs.forEach(tabsBtn => {
      tabsBtn.addEventListener('click', (e) => {
        const dataValue = tabsBtn.dataset.tabsHandler;
        toggleHitsInner(hitsInner, dataValue);

        tabs.forEach(btn => {
          if (btn === e.target) {
            btn.classList.add('hits__tab--active');
          } else {
            btn.classList.remove('hits__tab--active');
          }
        })
      })
    })
  }
};
export default tabs;