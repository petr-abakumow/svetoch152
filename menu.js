const openMenu = document.querySelector('.menu-icon');
const blockIcon = document.querySelector('.fixed-box');
const menuMobile = document.querySelector('.menu-mobile-container');
const closeMenu = document.querySelector('.closed_mod');

openMenu.addEventListener('click', () => {
  blockIcon.classList.add('closed');
  menuMobile.classList.add('opened');
})

closeMenu.addEventListener('click', () => {
  blockIcon.classList.remove('closed');
  menuMobile.classList.remove('opened');
})

const menuLink = document.querySelectorAll('.menu-item_link');

menuLink.forEach((e) =>{
  e.addEventListener('click', () =>{
    blockIcon.classList.remove('closed');
    menuMobile.classList.remove('opened');
  })
})
