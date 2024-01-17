const hamburger = document.querySelector('#hamburger_nav');
const sidebar = document.querySelector('#side');

hamburger_nav.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});