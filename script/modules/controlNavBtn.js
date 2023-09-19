const navButtons = document.querySelectorAll('.nav__btn');

export const controlNavBtn = () => {
  navButtons.forEach(btn => {        
    btn.addEventListener('click', () => {        
      navButtons.forEach(btnInner => {
        btnInner.classList.remove('nav__btn_active');
      });
      btn.classList.add('nav__btn_active');      
    });    
  });    
};
