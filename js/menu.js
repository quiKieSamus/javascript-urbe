const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu')

hamburgerBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
})