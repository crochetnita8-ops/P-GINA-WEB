const carrusel = [
  "IMAGENES/c1.jpg",
  "IMAGENES/c2.jpg",
  "IMAGENES/c3.jpg",
  "IMAGENES/c4.jpg",
  "IMAGENES/c5.jpg",
  "IMAGENES/c6.jpg",
  "IMAGENES/c8.jpg",
];

let indice = 0;
let img;

function cambiarImagen() {
  indice = (indice + 1) % carrusel.length;
  img.src = carrusel[indice];
}

window.addEventListener("load", function () {

  img = document.getElementById("carrusel"); 
  
  setInterval(cambiarImagen, 2500);
});



const poncho_blanco_fotos = [
  "IMAGENES/Poncho_blanco_1.jpg", 
  "IMAGENES/Poncho_blanco_2.jpg", 
  "IMAGENES/Poncho_blanco_3.jpg"
];
let indice_blanco = 0;
let img_blanco;

function cambiarPonchoBlanco() {
  if (img_blanco) {
    indice_blanco = (indice_blanco + 1) % poncho_blanco_fotos.length;
    img_blanco.src = poncho_blanco_fotos[indice_blanco];
  }
}

window.addEventListener("load", function () {
  img_blanco = document.getElementById("poncho_blanco");
  setInterval(cambiarPonchoBlanco, 2500);
});



const poncho_multicolor_fotos = [
  "IMAGENES/Poncho_verano_1.1.1.jpg", 
  "IMAGENES/Poncho_verano_1.1.2.jpg", 
  "IMAGENES/Poncho_verano_1.1.3.jpg"
];
let indice_multicolor = 0;
let img_multicolor;

function cambiarPonchoMulticolor() {
  if (img_multicolor) {
    indice_multicolor = (indice_multicolor + 1) % poncho_multicolor_fotos.length;
    img_multicolor.src = poncho_multicolor_fotos[indice_multicolor];
  }
}

window.addEventListener("load", function () {
  img_multicolor = document.getElementById("poncho_multicolor");
  setInterval(cambiarPonchoMulticolor, 2500);
});

const gorro_verano_fotos = [
  "IMAGENES/Gorro_verano1.jpg", 
  "IMAGENES/Gorro_verano2.jpg",
  "IMAGENES/Gorro_verano7.jpg",
  "IMAGENES/Gorro_verano4.jpg",
  "IMAGENES/Gorro_verano5.jpg",
  "IMAGENES/Gorro_verano3.jpg"
];
let indice_gorro = 0;
let img_gorro;

function cambiarGorroVerano() {
  if (img_gorro) {
    indice_gorro = (indice_gorro + 1) % gorro_verano_fotos.length;
    img_gorro.src = gorro_verano_fotos[indice_gorro];
  }
}

window.addEventListener("load", function () {
  img_gorro = document.getElementById("gorro_verano");
  setInterval(cambiarGorroVerano, 2500);
});