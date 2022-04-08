const activeMenuH = document.querySelector('.header-right > a');
console.log(activeMenuH);

const menuHamburger = document.querySelector('.hamburger-menu');
console.log(menuHamburger);

const activeClose = document.querySelector('.close');

activeMenuH.addEventListener('click', function(){

  // Aggiungo la classe active ad menùHamburger
  const domHamburgerMenu = document.querySelector ('.hamburger-menu')
  domHamburgerMenu.classList.add('active');
})

activeClose.addEventListener('click', function(){
  menuHamburger.classList.remove('active');
})