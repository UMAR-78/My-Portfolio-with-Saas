console.log('JavaScript code is running');

const menuBtn = document.querySelector('.menu_btn');
const hamburger = document.querySelector('.menu_btn__burger');
const nav = document.querySelector(".nav");
const menunav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.onclick = function() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menunav.classList.add('open');
    navItems.forEach(item=> item.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menunav.classList.remove('open');
    navItems.forEach(item=> item.classList.remove('open'));

    showMenu = false;
  }
};
