const MENU = document.getElementById('menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const GALLERY = document.querySelectorAll('#gallery');
const SUBMIT = document.getElementById('form__submit');
const MESSAGE = document.getElementById('popup');
const CLOSE_BTN = document.getElementById('close-btn');
const RESULT = document.getElementById('result');
const TEMA = document.getElementById('popup-tema');
const DESCRIPTION = document.getElementById('popup-description'),
      FORM_SUBJECT = document.getElementById('form-subject'),
      FORM_DESC = document.getElementById('form-description');
let arr = [];

/*** Меню HEADER***/
MENU.addEventListener('click', event => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

/*** Рандомно меняет изображения  ***/
PORTFOLIO_MENU.addEventListener('click', event => {
  if (event.target.classList[0] == 'portfolio__button') {
    PORTFOLIO_MENU.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    for (let i = 0; i < GALLERY.length; i++) {
      let IMG = GALLERY[i].children;
      for (let j = 0; j < IMG.length; j++) {
        let n = Math.floor(Math.random() * 12) + 1;
        IMG[j].setAttribute('src', `./assets/img/portfolio${n}.png`);
      }
    }
  }
})


/*** POP UP***/
SUBMIT.addEventListener('click', event => {
  //console.log(FORM_SUBJECT.value);
  if (FORM_SUBJECT.value !== '' ) {
    TEMA.textContent = `Тема: ${FORM_SUBJECT.value}`; 
  }
  if (FORM_DESC.value !== '' ) {
    DESCRIPTION.textContent =  `Описание: ${FORM_DESC.value}`;
  }

  MESSAGE.classList.remove('hidden');
  FORM_SUBJECT.value = '';
  FORM_DESC.value = '';
})

CLOSE_BTN.addEventListener('click', event => {
  TEMA.textContent = 'Без темы';
  DESCRIPTION.textContent = 'Без описания';
  MESSAGE.classList.add('hidden');
})

