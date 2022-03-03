import maskPhone from './maskPhone.js';
import datepicker from 'js-datepicker';
import getData from './getData.js';

const validateForm = () => {
  const inputAll = document.querySelectorAll('input');
  const message = document.querySelector('textarea');
  const wrapperInputLocality = document.querySelector('.form__input-group--locality');
  const wrapperListLocality = document.querySelector('.form__input-content');

  const regName = /[А-Яа-яЁё ]+/;
  const regEmail = /[a-z]+@[a-z]+.+\.[a-z]{2,3}$/;
  const regMessage = /[А-Яа-яЁё0-9 -\W]/g;

  const bookingPhone = new maskPhone('#booking-phone');
  const modalPhone = new maskPhone('#modal-phone');

  const createCard = (data) => {
    const li = document.createElement('li');
    li.classList.add('locality__item');

    li.innerHTML = `${data.name}`;
    return li;
  };

  const renderList = (data) => {
    const cards = data.map(createCard);
    cards.forEach(card => {
      if (wrapperListLocality) {
        wrapperListLocality.append(card);
      }
    })
  };

  const datepickerInput = (elem) => {
    const picker = datepicker(elem, {
      startDay: 1,
      customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      disableYearOverlay: true,
      minDate: new Date(),
      showAllDates: true,
      formatter: (input, date) => {
        const value = date.toLocaleDateString();
        input.value = value;
      }
    });
  };

  const validateInput = (elem) => {
    if (elem.name === 'name') {
      if (!regName.test(elem.value)) {
        elem.nextElementSibling.textContent = 'Только кирилица';
      } else {
        elem.value = elem.value.match(regName);
        elem.value = elem.value.trim().replace(/\s+/g, ' ');
        elem.value = elem.value.replace(/( |^)[а-яё]/g, item => item.toUpperCase());
        elem.nextElementSibling.textContent = '';
      }
    }

    if (elem.name === 'email') {
      if (!regEmail.test(elem.value) || elem.value === '') {
        elem.nextElementSibling.textContent = 'Введите корректный email';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }
  };

  inputAll.forEach(elem => {
    elem.addEventListener('blur', () => {
      validateInput(elem);
    })

    if (elem.dataset.input) {
      datepickerInput(elem);
    }
  })

  if (message) {
    message.addEventListener('blur', () => {
      if (!regMessage.test(message.value)) {
        message.nextElementSibling.textContent = 'Только кирилица';
      } else {
        message.value = message.value.trim().replace(/\s+/g, ' ');
        message.value = message.value.replace(/^[а-яё]/g, item => item.toUpperCase());
        message.value = message.value.replace(/-{2,}/g, '-');
        message.nextElementSibling.textContent = '';
      }
    })
  }

  if (wrapperInputLocality) {
    wrapperInputLocality.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.form__input')) {
        wrapperListLocality.classList.toggle('locality--open');
      }

      if (target.closest('.locality__item')) {
        const formInputLocality = document.getElementById('locality');
        formInputLocality.value = target.textContent;
        wrapperListLocality.classList.remove('locality--open');
      }
    });
  }

  getData().then(data => {
    renderList(data.tourBases);
  });
};
export default validateForm;