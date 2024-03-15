const navMenu = document.querySelector('#nav-links');
const navBurger = document.getElementById('nav-burger');

navBurger.addEventListener('click', () => {

  navMenu.classList.toggle('hide-menu')
})