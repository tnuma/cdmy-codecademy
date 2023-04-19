const appearanceButton = document.getElementById("appearance");
const appearanceIcon = document.getElementsByClassName("material-symbols-outlined")[0];
const menuIcon = document.getElementsByClassName("menu-icon")[0];
const menuButton = document.getElementById("menu");
const nav = document.getElementsByTagName('nav')[0];

const toggleAppearance = () => {
	document.body.classList.toggle("light-mode");
	document.body.classList.toggle("dark-mode");
  if (appearanceIcon.textContent === 'light_mode') {
    appearanceIcon.textContent = 'dark_mode';
    appearanceIcon.style.color = 'darkgray';
  } else {
    appearanceIcon.textContent = 'light_mode'
    appearanceIcon.style.color = 'lightgrey';
  }
};

const toggleNav = () => {
  nav.classList.toggle('show');
  if (menuIcon.textContent === 'menu') {
    menuIcon.textContent = 'menu_open';
  } else {
    menuIcon.textContent = 'menu'
  }
}


appearanceButton.addEventListener("click", toggleAppearance);
menuButton.addEventListener('click', function () {
  toggleNav()

});