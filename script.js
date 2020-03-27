const MENU = document.getElementById('menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const PORTFOLIO_GAL = document.querySelector('.portfolio__gallery');
const GALLERY = document.querySelector('#gallery');
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

let left = 0;


/*** Burger Menu ***/

const burger_btn = document.querySelector('.burger-btn');
const burger_overlay = document.querySelector('.burger-overlay');
const burger_menu = document.querySelector('.burger-menu');

function burgerVisible() {
  burger_btn.classList.toggle('burger-btn_active');
  burger_menu.classList.toggle('burger_visible');
  burger_overlay.classList.toggle('burger_visible');
}

burger_btn.addEventListener('click', event => {
  burgerVisible();
})

burger_overlay.addEventListener('click', event => {
  burgerVisible();
})


/*** Scroll ***/
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curentPosition = window.scrollY;
  const section = document.querySelectorAll('.main > section');
  const header = document.querySelector('header');
  const menu = document.querySelectorAll('#menu li a');

  section.forEach((el) => {
    if (el.offsetTop - header.clientHeight <= curentPosition && (el.offsetTop + el.offsetHeight) > curentPosition) {
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
  document.querySelector('.slider__screen_black').classList.toggle('visible');
})

PHONE_HORIZONTAL.addEventListener('click', event => {
  document.querySelector('.slider__screen_rotate').classList.toggle('visible');
})


/*** Рандомно генерирует изображение для блока Portfolio  ***/
PORTFOLIO_MENU.addEventListener('click', event => {
  let arr = [];
  const gallery = document.querySelector('#gallery');

  if (event.target.classList.contains('portfolio__button') & !event.target.classList.contains('active')) {
    PORTFOLIO_MENU.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    gallery.querySelectorAll('.gallery__img').forEach(element => {        
      arr.push(element);
      element.remove();     
    });

    arr.sort(() => Math.random() - 0.5);
    
    arr.forEach(element => {
      gallery.appendChild(element);
    })

  }
})


PORTFOLIO_GAL.addEventListener('click', event => {
  if (event.target.classList[0] == 'gallery__img') {
    if (event.target.classList[1] == 'active_border') {
      event.target.classList.toggle('active_border');
    } else {
      PORTFOLIO_GAL.querySelectorAll('.gallery__img').forEach(el => el.classList.remove('active_border'));
      event.target.classList.toggle('active_border');
    }
   
  }
})

/*** POP UP ***/
const FORM_NAME = document.getElementById('form-name');
const FORM_EMAIL = document.getElementById('form-email');
const FORM = document.querySelector('.form');

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
  }
  
})

CLOSE_BTN.addEventListener('click', event => {
  TEMA.textContent = 'Без темы';
  DESCRIPTION.textContent = 'Без описания';
  MESSAGE.classList.add('hidden');
  FORM_SUBJECT.value = '';
  FORM_DESC.value = '';
  FORM_NAME.value = '';
  FORM_EMAIL.value = '';
})

