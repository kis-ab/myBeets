const openButton = document.querySelector('.hamburger');
const modal = document.querySelector('.fullscreen-menu');
const closeButton = document.querySelector('.fullscreen-menu__close');
const menu = document.querySelector('.menu')
const body = document.querySelector('body');

openButton.addEventListener('click', () => {
    menu.classList.add('menu_vertical')
    modal.classList.add('fullscreen-menu_active')
    body.classList.add('body_closed')
})

closeButton.addEventListener('click', () => {
    menu.classList.remove('menu_vertical')
    modal.classList.remove('fullscreen-menu_active')
    body.classList.remove('body_closed')
    
})