var burger, phone_nav, b2d, phone_nav_bg;
burger = document.getElementById('burger');
phone_nav = document.getElementById('phone_nav');
// phone_nav_bg = document.getElementById('phone_nav_bg');

burger.addEventListener('click', function(){
    phone_nav.classList.toggle('show');
    // phone_nav_bg.classList.toggle('show2');
})

phone_nav.addEventListener('click', function(){
    phone_nav.classList.remove('show');
})