
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu')

hamburgerBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

hamburgerBtn.addEventListener('click', () => { //evento para esconder o reaparecer cartas del quienessomos.html para que no se sobrepongan encima del menu
  if (sideMenu.classList.contains('open') || 
  !(sideMenu.classList.contains('open'))) {
    cardArray = document.querySelectorAll(".card");
    for (let i = 0; i < cardArray.length; i++) {
      cardArray[i].classList.toggle('hide');
    }
  }
})