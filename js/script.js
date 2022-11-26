const menu = document.querySelector('#menu-icon');
const navBar = document.querySelector('nav > ul');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navBar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navBar.classList.remove('active');
};
