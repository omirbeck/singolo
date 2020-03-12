const MENU = document.getElementById('menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const PORTFOLIO_GAL = document.querySelector('.portfolio__gallery');
const GALLERY = document.querySelectorAll('#gallery');
const SUBMIT = document.getElementById('form__submit');
const MESSAGE = document.getElementById('popup');
const CLOSE_BTN = document.getElementById('close-btn');
const RESULT = document.getElementById('result');
const TEMA = document.getElementById('popup-tema');
const DESCRIPTION = document.getElementById('popup-description'),
      FORM_SUBJECT = document.getElementById('form-subject'),
      FORM_DESC = document.getElementById('form-description');
const PHONE_VERTICAL = document.querySelector('.slider__vertical'),
      PHONE_HORIZONTAL = document.querySelector('.slider__horizontal'),
let arr = [];

/*** Меню HEADER***/
MENU.addEventListener('click', event => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

/*** SLIDER ***/
PHONE_VERTICAL.addEventListener('click', event => {
  document.querySelector('.slider__screen_rotate').style.visibility = 'visible';
})



/*** Рандомно меняет изображения  ***/
PORTFOLIO_MENU.addEventListener('click', event => {
  console.log(event.target.classList)
  if (event.target.classList[0] == 'portfolio__button' & event.target.classList[1] !== 'active') {
    PORTFOLIO_GAL.querySelectorAll('.gallery__img').forEach(el => el.classList.remove('active_border'));
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


PORTFOLIO_GAL.addEventListener('click', event => {
  console.log(event.target.classList)
  if (event.target.classList[0] == 'gallery__img') {
    PORTFOLIO_GAL.querySelectorAll('.gallery__img').forEach(el => el.classList.remove('active_border'));
    event.target.classList.add('active_border');
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

