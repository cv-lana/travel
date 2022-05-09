const sendForm = () => {
  const form = document.querySelectorAll('form');
  const formPopup = document.getElementById('popup');
  const responseModalMessage = document.getElementById('responseMessage');

  let isValidate = false;

  const postData = (sendMessage) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendMessage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  };

  if (form) {
    form.forEach(item => {
      item.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(item);
        const sendMessage = {};

        formData.forEach((val, key) => {
          sendMessage[key] = val;
        });

        for (let elem of item.elements) {
          if (!elem.classList.contains('form__checkbox') && elem.tagName !== 'BUTTON' && elem.required) {
            if (elem.value === '') {
              elem.nextElementSibling.textContent = 'Данное поле не заполнено';
              isValidate = false;
            } else {
              elem.nextElementSibling.textContent = '';
              isValidate = true;
            }
          }
        }

        if (isValidate) {
          if (item.querySelector('[type=checkbox]').checked) {
            if (item.closest('#popup')) {
              formPopup.style.display = 'none';
            }
            postData(sendMessage);
            responseModalMessage.style.display = 'block';
            item.reset();
          }
          else {
            alert('Необходимо согласие на обработку персональных данных');
          }
        }
      })
    })
  }
};

export default sendForm;