const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();