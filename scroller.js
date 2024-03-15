const scrollUp = () => {
  const scrollUp = document.querySelector('.scroller');

  (this.scrollY <= 350) ? scrollUp.classList.add('hide-scroll') : scrollUp.classList.remove('hide-scroll');
}

window.addEventListener('scroll', scrollUp);