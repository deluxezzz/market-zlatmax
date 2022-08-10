//инициализация Swiper
const swiper = new Swiper('.slider-hits__container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        dalay: 1000,
        stopOnLastSlide: false,
        
    }
});
//попап с телефонами
let popupButton = document.querySelector('.header-body__arrow');
let popupMenu = document.querySelector('.header-body__popup');
let header = document.querySelector('.header');

if (popupButton){
    popupButton.addEventListener('click', function(){
        popupMenu.classList.toggle('_popup-active');
        popupButton.classList.toggle('_popup-active');
    });
}
//меню-каталог
let catalogLink = document.querySelectorAll('.catalog__link');
let catalogMenu = document.querySelectorAll('.menu-catalog');

if (catalogLink){
    for (let i = 0; i < catalogLink.length; i++){
        catalogLink[i].addEventListener('click', function(event){
            for (let y = 0; y < catalogLink.length; y++){
                catalogLink[y].classList.remove('_active-link');
                let openMenu = document.querySelectorAll('._open-menu');
                if(openMenu.length > 0){
                    catalogMenu[y].classList.remove('_open-menu');
                }
                
            }
            catalogLink[i].classList.toggle('_active-link');
            catalogMenu[i].classList.toggle('_open-menu');
            event.preventDefault();
        });
    }
    
}
//бургер
let headerNav = document.querySelector('.header-top__nav');

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    headerNav.classList.toggle('_open-nav');
    
});
// перемещение иконок при адаптиве
let headerIconFavourites = document.querySelector('._svg-favourites');
let headerIconCart = document.querySelector('._svg-cart');
let headerTop = document.querySelector('.header-top__account');
let headerBodyCart = document.querySelector('.header-body__cart');
let headerBodyAction = document.querySelector('.header-body__action');

if (headerIconFavourites || headerIconCart){
    window.addEventListener('resize', function(){
        if (window.innerWidth <= 992){
            headerTop.append(headerIconFavourites);
            headerTop.append(headerIconCart);
        }
        else {
            headerBodyAction.append(headerIconFavourites);
            headerBodyCart.append(headerIconCart);
        }
    });
    if (window.innerWidth <= 992){ 
        headerTop.append(headerIconFavourites);
        headerTop.append(headerIconCart);
    }
    else {
        headerBodyAction.append(headerIconFavourites);
        headerBodyCart.append(headerIconCart);
    }
}

let catalogWP = document.querySelector('.catalog-wp');
let catalogMobile = document.querySelector('.catalog-mobile');
let catalogWrapper = document.querySelector('.catalog-wrapper');

if (catalogWP){
    window.addEventListener('resize', function(){
        if (window.innerWidth <= 768){
            catalogMobile.append(catalogWrapper);
        }
        else {
            catalogWP.append(catalogWrapper);
        }
    });
    if (window.innerWidth <= 768){
        catalogMobile.append(catalogWrapper);
    }
    else {
        catalogWP.append(catalogWrapper);
    }
}