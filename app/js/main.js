$(function () {   
   
  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');


  hamburger.addEventListener('click', () => {
      headerMenu.classList.toggle('menu__list--active');
      hamburger.classList.toggle('menu__btn--open');
  })

  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          headerMenu.classList.remove('menu__list--active');
          hamburger.classList.remove('menu__btn--open');
      })
  })  
   
    
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
      });  
       
   $('.menu__item--product').hover( () => { 
    $('.menu__link-decor').toggleClass('menu__link-decor--rotate');
   });   
    
   $('.products__btn').on('click', () => { 
     $('.products__btn-text').slideToggle(); 
     $('.products__btn-decor').toggleClass('products__btn-decor--rotate');  
   }); 
    
   $('.products__btn-text').hide();  
     
});