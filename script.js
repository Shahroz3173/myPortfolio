const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const bars = document.querySelector('.fa-bars');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-styling');
    } else {
        navbar.classList.remove('navbar-styling');
    }
});

burger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0');
    bars.classList.toggle('fa-xmark');
});

let typed = new Typed('#typing', {
    strings: ['Developer', 'Videographer', 'Editor', 'Photographer', 'Coder'],
    typeSpeed: 30,
    loop: true,
    backDelay: 2000,
});
