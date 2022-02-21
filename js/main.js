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


//No scroll for modal window
const showDialog = () => {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.left = '0';
    body.style.right = '0';

};
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}


window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});


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

    //Переделать в нормальную валидацию!!! Либо остановиться на pattern.

    /*$(".modal-message").validate(
        {

            errorClass: "invalid",
            rules: {
                name: {
                    required: true,
                },

                telephone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },

            messages: {
                name: {
                    required: "Please specify your name",
                },

                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }

        });*/





});




