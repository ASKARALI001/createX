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


let burger = document.querySelector('.burger')
let headerList =document.querySelector('.header__list')
// let headerBlock = document.querySelector('.header__block')

burger.onclick = function () {
    burger.classList.toggle('burger_active')
    headerList.classList.toggle('header__list_active')
    headerBlock.classList.toggle('header__block_active')
}



const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
} )


$(document).ready(function () {
    $('.studying__list-items').click(function () {
        const value = $(this).attr('data-filter');
        if(value == 'all'){;
            $('.studying__card').show('1000')
        }else{
            $('.studying__card').not('.'+value).hide('1000');
            $('.studying__card').filter('.'+value).show('1000');
        }
    })
})