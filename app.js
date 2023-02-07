const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Animations
gsap.registerPlugin(ScrollTrigger)
gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.4,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img-services', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-preferences', {
    scrollTrigger: '.animate-preferences',
    duration: 0.3,
    opacity: 1,
    x: -150,
    stagger: 0.08
});

gsap.from('.animate-img-preferences', {
    scrollTrigger: '.animate-preferences',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-why', {
    scrollTrigger: '.animate-why',
    duration: 0.4,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img-why', {
    scrollTrigger: '.animate-why',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-review', {
    scrollTrigger: '.animate-review',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-contact', {
    scrollTrigger: '.animate-contact',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});