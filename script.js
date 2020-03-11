const MENU = document.getElementById('menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const GALLERY = document.querySelectorAll('#gallery');
const SUBMIT = document.getElementById('form__submit');
const MESSAGE = document.getElementById('message-block');
const CLOSE_BTN = document.getElementById('close-btn');
const RESULT = document.getElementById('result');
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

SUBMIT.addEventListener('click', event => {
  RESULT.textContent = 'HELLO'
  MESSAGE.classList.remove('hidden');
})

CLOSE_BTN.addEventListener('click', event => {
  MESSAGE.classList.add('hidden');
})

