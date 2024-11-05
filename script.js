const formContainer = document.getElementById('form-container');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const data = document.getElementById('data');


formContainer.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = [
    document.querySelector(".name"),
    document.querySelector(".date"),
    document.querySelector(".address"),
    document.querySelector(".e-mail"),
    document.querySelector(".telegram"),
  ];

  fields.forEach((input) => {
    input.style.borderColor = '';
    input.nextElementSibling.textContent = '';
  });

  const fullNameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]{1,20} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  const addressRegex = /^м\. [А-ЯІЇЄҐа-яіїєґ]{2,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  const telegramRegex = /^@[A-Za-z_]\w{4,20}$/;

  let incorrectCounter = 0;

  if (!fullNameRegex.test(fields[0].value.trim())) {
    fields[0].style.borderColor = 'red';
    fields[0].nextElementSibling.textContent = "ПІБ повинен бути у форматі: Прізвище І.Б.";
    incorrectCounter++;
  }

  if (!birthDateRegex.test(fields[1].value.trim())) {
    fields[1].style.borderColor = 'red';
    fields[1].nextElementSibling.textContent = "Дата народження повинна бути у форматі: ДД.ММ.РРРР";
    incorrectCounter++;
  }

  if (!addressRegex.test(fields[2].value.trim())) {
    fields[2].style.borderColor = 'red';
    fields[2].nextElementSibling.textContent = "Адреса повинна починатися з 'м.' і містити назву міста";
    incorrectCounter++;
  }

  if (!emailRegex.test(fields[3].value.trim())) {
    fields[3].style.borderColor = 'red';
    fields[3].nextElementSibling.textContent = "Неправильний формат e-mail";
    incorrectCounter++;
  }

  if (!telegramRegex.test(fields[4].value.trim())) {
    fields[4].style.borderColor = 'red';
    fields[4].nextElementSibling.textContent = "Telegram повинен починатися з '@'";
    incorrectCounter++;
  }

  if (!incorrectCounter) {
    data.innerHTML = `
      <bold>ПІБ:</bold> ${fields[0].value}<br>
      <strong>Дата народження:</strong> ${fields[1].value}<br>
      <strong>Адреса:</strong> ${fields[2].value}<br>
      <strong>e-mail:</strong> ${fields[3].value}<br>
      <strong>Telegram:</strong> ${fields[4].value}
    `;

    modal.style.display = 'flex';
  }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
});
