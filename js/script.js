//инициализация Swiper
const swiperMainBlock = new Swiper('.main-block__swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        stopOnLastSlide: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    loop: true,
    speed: 600,
});
const swiperSliderHits = new Swiper('.slider-hits__container', {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
          
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        stopOnLastSlide: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    loop: true,
});
const swiperNewProducts = new Swiper('.new-products__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     dalay: 3000,
    //     stopOnLastSlide: false,
    // },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    
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
let catalogWP = document.querySelector('.catalog-wp');

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
    
    document.addEventListener('click', function(e){         
        console.log(e.target);

        if (!e.target.closest('.catalog-wrapper')){
            for (let i = 0; i < catalogLink.length; i++){
                catalogLink[i].classList.remove('_active-link');
               
            }
            for (let i = 0; i < catalogMenu.length; i++){
                catalogMenu[i].classList.remove('_open-menu');
            }
            
        }
    });
   
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