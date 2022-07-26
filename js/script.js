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
let catalogWrapper = document.querySelectorAll('.catalog-wrapper');

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
let headerIcons = [document.querySelector('._svg-favourites'), document.querySelector('._svg-cart')];
let headerTop = document.querySelector('.header-top__account');

if (headerIcons){
    window.addEventListener('resize', function(){
        if (window.innerWidth <= 922){ 
    
            for (let i=0; i < headerIcons.length; i++){
                headerTop.append(headerIcons[i]);
            }
        }
    });
    if (window.innerWidth <= 922){ 
    
        for (let i=0; i < headerIcons.length; i++){
            headerTop.append(headerIcons[i]);
        }
    }
}

