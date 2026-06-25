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







const poncho_blanco_fotos = [
  "IMAGENES/Poncho_blanco_1.jpg",
  "IMAGENES/Poncho_blanco_2.jpg",
  "IMAGENES/Poncho_blanco_3.jpg"
];
let indice_blanco = 0;
const img_blanco = document.getElementById("poncho_blanco");

function cambiarPonchoBlanco() {
  if (img_blanco) {
    indice_blanco = (indice_blanco + 1) % poncho_blanco_fotos.length;
    img_blanco.src = poncho_blanco_fotos[indice_blanco];
  }
}


const poncho_multicolor_fotos = [
  "IMAGENES/Poncho_verano_1.1.1.jpg",
  "IMAGENES/Poncho_verano_1.1.2.jpg", // Asegúrate de que estos nombres existan
  "IMAGENES/Poncho_verano_1.1.3.jpg"
];
let indice_multicolor = 0;
const img_multicolor = document.getElementById("poncho_multicolor");

function cambiarPonchoMulticolor() {
  if (img_multicolor) {
    indice_multicolor = (indice_multicolor + 1) % poncho_multicolor_fotos.length;
    img_multicolor.src = poncho_multicolor_fotos[indice_multicolor];
  }
}

// TEMPORIZADORES AL CARGAR LA PÁGINA ---
window.addEventListener("load", function () {
  setInterval(cambiarPonchoBlanco, 2500);
  setInterval(cambiarPonchoMulticolor, 2500);
});