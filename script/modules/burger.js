const navItems = document.querySelectorAll('.nav__item');
const sectionList = document.querySelectorAll('section');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const navList = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.burger__btn');
let isOpen = false;

const navButtons = document.querySelectorAll('.nav__btn');

const controlNavBtn = () => {
  navButtons.forEach(btn => {        
    btn.classList.remove('nav__btn_active');
    btn.addEventListener('click', () => {        
      navButtons.forEach(btnInner => {
        btnInner.classList.remove('nav__btn_active-burger');                
      });
      btn.classList.add('nav__btn_active-burger');
    });    
  });    
};

const closeMenu = () => {
  isOpen = false;
  overlay.classList.remove('active');
  // burger.classList.remove('burger__btn_open');
  burgerBtn.classList.add('burger__btn');
  burgerBtn.classList.remove('burger__btn_open');
  nav.classList.remove('header__nav_active');    

}

const openMenu = () => {
  isOpen = true;
  burgerBtn.classList.remove('burger__btn');
  burgerBtn.classList.add('burger__btn_open');
  // burger.classList.add('burger__btn_open');
  nav.classList.add('header__nav_active');
  overlay.classList.add('active');  
  // controlNavBtn();
}

navItems.forEach(elem => {
  elem.addEventListener('click', () => {  
    const classActive = elem.dataset.name;
    closeMenu();
    sectionList.forEach(section => {
      section.classList.add('main_notactive');                       
    });
    document.querySelector(`.${classActive}`).classList.remove('main_notactive'); 
  })
})

export const controlMenu = () => {
  burger.addEventListener('click', () => {    
    if (!isOpen) {
      openMenu();
    }  else {
      closeMenu();
    }
  });
  
  overlay.addEventListener('click', () => {  
    closeMenu();
  })
};

const widthWindow = window.matchMedia('(max-width: 850px')
widthWindow.addListener(closeMenu);