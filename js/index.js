// Saludo inicial
let nombre = prompt("Por favor, ingresa tu nombre:");
if (nombre) {
    alert("Hola " + nombre + ", bienvenido!");
} else {
    alert("No ingresaste ningún nombre.");
}

// Verificar si el navegador soporta LocalStorage y actualizar contador
if (typeof(Storage) !== "undefined") {
    if (localStorage.visitas) {
        localStorage.visitas = Number(localStorage.visitas) + 1;
    } else {
        localStorage.visitas = 1;
    }
    document.getElementById("contador").innerHTML = `Número de visitas: ${localStorage.visitas}`;
} else {
    console.log("Lo siento, tu navegador no soporta Web Storage...");
}

// Lógica del carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000);
