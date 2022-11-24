import "../scss/main.scss";
import "./swiper.js";

let scrollUp = document.querySelector('.btnUP');
let menuBtn = document.querySelector('.menu-btn');
let submenu = document.querySelector('.submenu')
let plastickBtn = document.querySelector('#plastick-btn')
let allumBtn = document.querySelector('#allum-btn')
let allBtn = document.querySelector('#all-btn')


// фиксирует навбар при скролле
window.addEventListener('scroll', function () {
    scrollFunction()
    let windowPosition = document.body.scrollTop > 400 || document.documentElement.scrollTop > 300;
    submenu.classList.toggle('scrolling-active', windowPosition);
});

//переключение контента в блоке "features"
addEventListener('click',  function () {
    document.querySelector('.content-plastick').style.display = 'flex';
    document.querySelector('.content-allum').style.display = 'none';
    document.querySelector('.content-all').style.display = 'none';
});

addEventListener('click', function () {
    document.querySelector('.content-plastick').style.display = 'none';
    document.querySelector('.content-allum').style.display = 'flex';
    document.querySelector('.content-all').style.display = 'none';
});

addEventListener('click', function () {
    document.querySelector('.content-plastick').style.display = 'none';
    document.querySelector('.content-allum').style.display = 'none';
    document.querySelector('.content-all').style.display = 'flex';
});


// скролл вверх при клике на кнопку
scrollUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//показываем кнопку up при скролле
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnUP.classList.add('active')
    } else {
        btnUP.classList.remove('active')
    }
}

// Если размер меньше 992px появляется бургер
window.addEventListener('resize', function () {
    if (window.innerWidth < 993) {
        menuBtn.style.display = 'flex';
    } else if (window.innerWidth > 992) {
        menuBtn.style.display = 'none';
    }
});

scrollFunction();