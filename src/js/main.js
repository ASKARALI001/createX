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
    navigation: {
        nextEl: ".meet__btns-next",
        prevEl: ".meet__btns-prev",
    },
});