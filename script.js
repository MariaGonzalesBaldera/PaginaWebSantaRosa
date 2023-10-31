const pulsar = () => {
  const mainMenuElement = document.getElementById('main-menu');
  mainMenuElement.classList.toggle('main-menu--show');
};


// div-header

const miDiv = document.getElementById('div-header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Agrega o quita la clase dependiendo de la posición de scroll
  if (scrollPosition > 50) {
    miDiv.classList.add('hovered');
  } else {
    miDiv.classList.remove('hovered');
  }
});


// modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}