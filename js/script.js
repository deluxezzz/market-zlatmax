// alert(window.innerWidth);
let popupButton = document.querySelector('.header-body__arrow');
let popupMenu = document.querySelector('.header-body__popup');
let header = document.querySelector('.header');

if (popupButton){
    popupButton.addEventListener('click', function(){
        popupMenu.classList.toggle('_popup-active');
        popupButton.classList.toggle('_popup-active');
    });
}