const MENU = document.getElementById('menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const PORTFOLIO_GAL = document.querySelector('.portfolio__gallery');
const GALLERY = document.querySelectorAll('#gallery');
const SUBMIT = document.getElementById('form__submit');
const MESSAGE = document.getElementById('popup');
const CLOSE_BTN = document.getElementById('close-btn');
const RESULT = document.getElementById('result');
const TEMA = document.getElementById('popup-subject');
const DESCRIPTION = document.getElementById('popup-description'),
      FORM_SUBJECT = document.getElementById('form-subject'),
      FORM_DESC = document.getElementById('form-description');
const PHONE_VERTICAL = document.querySelector('.home__btn_vertical'),
      PHONE_HORIZONTAL = document.querySelector('.home__btn_horizontal');
const BTN_LEFT = document.querySelector('.btn_left'),
      BTN_RIGHT = document.querySelector('.btn_right');
const slider_phone = document.querySelector('.slider__screen_phone');
let arr = [];
let onv = 0,
    onh = 0,
    left = 0;

//** Scroll **/
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curentPosition = window.scrollY;
  const section = document.querySelectorAll('.main>section');
  const header = document.querySelector('header');
  const menu = document.querySelectorAll('#menu a');

  // if (header.offsetTop <= curentPosition && (header.offsetTop + header.offsetHeight) > curentPosition) {
  //   menu.forEach((a) => {
  //     a.classList.remove('active');
  //     let href = a.getAttribute('href').substring(1);
  //     if (header.getAttribute('id') === href){
  //       a.classList.add('active');
  //     }
  //   });      
  // }

  section.forEach((el) => {
    if (el.offsetTop <= curentPosition && (el.offsetTop + el.offsetHeight) > curentPosition) {
      menu.forEach((a) => {
        a.classList.remove('active');
        let href = a.getAttribute('href').substring(1);
        if (el.getAttribute('id') === href){
          a.classList.add('active');
        }
      });      
    }
  })
  
}


/*** Меню HEADER***/
// MENU.addEventListener('click', event => {
//   if (event.target.classList.contains('navigation_btn')) {
//   MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
//   event.target.classList.add('active');
//   }
// })

/*** SLIDER ***/

BTN_LEFT.addEventListener('click', event => {
  let slider_scroll = document.querySelector('.slider-scroll');

  left = left - 1200;
  if (left < -1200){
    left = 0;
  }
  
  slider_scroll.style.left = left+'px';
})

BTN_RIGHT.addEventListener('click', event => {
  let slider_scroll = document.querySelector('.slider-scroll');

  left = left + 1200;
  if (left > 1200){
    left = 0;
  }
  
  slider_scroll.style.left = left+'px';

})


/*** PHONE SCREEN BLACK***/
PHONE_VERTICAL.addEventListener('click', event => {
  if (onv == 0) {
    document.querySelector('.slider__screen_black').style.visibility = 'visible';
    onv = 1;
  } else if (onv = 1) {
    document.querySelector('.slider__screen_black').style.visibility = 'hidden';
    onv = 0;
  }
})

PHONE_HORIZONTAL.addEventListener('click', event => {
  if (onh == 0) {
    document.querySelector('.slider__screen_rotate').style.visibility = 'visible';
    onh = 1;
  } else if (onh = 1) {
    document.querySelector('.slider__screen_rotate').style.visibility = 'hidden';
    onh = 0;
  }
})


/*** Рандомно меняет изображения  ***/
PORTFOLIO_MENU.addEventListener('click', event => {
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(arr)


  console.log(arr);
  if (event.target.classList.contains('portfolio__button') & !event.target.classList.contains('active')) {
    PORTFOLIO_GAL.querySelectorAll('.gallery__img').forEach(el => el.classList.remove('active_border'));
    PORTFOLIO_MENU.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let n = 0;
    for (let i = 0; i < GALLERY.length; i++) {
      let IMG = GALLERY[i].children;
      for (let j = 0; j < IMG.length; j++) {
        //let n = Math.floor(Math.random() * 12) + 1;
        IMG[j].setAttribute('src', `./assets/img/portfolio${arr[n]}.png`);
        n++;
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
FORM_NAME = document.getElementById('form-name');
FORM_EMAIL = document.getElementById('form-email');
FORM = document.querySelector('.form');

FORM.addEventListener("submit", event => {
  event.preventDefault();
  if (FORM_NAME.checkValidity() && FORM_EMAIL.checkValidity()) {
    if (FORM_SUBJECT.value !== '' ) {
      TEMA.textContent = `Тема: ${FORM_SUBJECT.value}`; 
    }
    if (FORM_DESC.value !== '' ) {
      DESCRIPTION.textContent =  `Описание: ${FORM_DESC.value}`;
    }
    MESSAGE.classList.remove('hidden');
    FORM_SUBJECT.value = '';
    FORM_DESC.value = '';
    
  }
  
})

CLOSE_BTN.addEventListener('click', event => {
  TEMA.textContent = 'Без темы';
  DESCRIPTION.textContent = 'Без описания';
  MESSAGE.classList.add('hidden');
})

