var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".testimonials__btns-next",
        prevEl: ".testimonials__btns-prev",
    },
});

var meetSwiper = new Swiper(".meetSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        676: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: ".meet__btns-next",
        prevEl: ".meet__btns-prev",
    },
});

