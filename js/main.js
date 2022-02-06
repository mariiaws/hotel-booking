const swiper = new Swiper('.hotel-grid__swiper', {
// Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slide-button--next',
        prevEl: '.slide-button--prev',

    },

});


new Swiper('.reviews-swiper', {
// Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.button-slide-next',
        prevEl: '.button-slide-prev',

    },

});


new Swiper('.watching-swiper', {

    /*   //Automatic scrolling For _also-watching
       speed: 2000,
       autoplay: true,*/


// Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.button-slide-next',
        prevEl: '.button-slide-prev',

    },

});


let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
    document
        .querySelector(".nav")
        .classList.toggle("nav--visible");
    document
        .querySelector(".menu-button")
        .classList.toggle("change");

});

/*Прокрутки нет на самой меню, позади меню прокрутка должна быть отключена*/


$(document).ready(function () {

    let modalButton = $("[data-toggle=modal]");
    modalButton.on("click", openModal);

    function openModal() {
        let modalWindow = $(".modal");
        modalWindow.addClass("modal--visible");

    }


    let modalClose = $(".modal__close");
    modalClose.on("click", closeModal);

    function closeModal() {
        let modalWindowClose = $(".modal");
        modalWindowClose.removeClass("modal--visible");

    }

});

