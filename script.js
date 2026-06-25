const carrusel = [
  "IMAGENES/c1.jpg",
  "IMAGENES/c2.jpg",
  "IMAGENES/c3.jpg",
  "IMAGENES/c4.jpg",
  "IMAGENES/c5.jpg",
  "IMAGENES/c6.jpg",
  "IMAGENES/c7.jpg",
];

let indice = 0;

const img = document.getElementById("carrusel");

function cambiarImagen() {
  indice = (indice + 1) % carrusel.length;
  img.src = carrusel[indice];
}

window.addEventListener("load", function () {
  setInterval(cambiarImagen, 2500);
});






const poncho_multicolor = [
  "IMAGENES/Poncho_verano_1.1.1.jpg",
  "IMAGENES/Poncho_verano_1.1.2.jpg",
  "IMAGENES/Poncho_verano_1.1.3.jpg",
];

let indice = 0;

const img = document.getElementById("poncho_multicolor");

function cambiarImagen() {
  indice = (indice + 1) % poncho_multicolor.length;
  img.src = poncho_multicolor[indice];
}
// espera a que cargue TODO el HTML
window.addEventListener("load", function () {
  setInterval(cambiarImagen, 2500);
});



const poncho_blanco = [
  "IMAGENES/Poncho_blanco_1.jpg",
  "IMAGENES/Poncho_blanco_2.jpg",
  "IMAGENES/Poncho_blanco_3.jpg",
];

let indice = 0;

const img = document.getElementById("poncho_blanco");

function cambiarImagen() {
  indice = (indice + 1) % poncho_blanco.length;
  img.src = poncho_blanco[indice];
}
// espera a que cargue TODO el HTML
window.addEventListener("load", function () {
  setInterval(cambiarImagen, 2500);
});