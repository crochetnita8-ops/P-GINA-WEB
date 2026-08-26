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
  "IMAGEN/Gorro_verano1.jpg", 
  "IMAGEN/Gorro_verano2.jpg",
  "IMAGEN/Gorro_verano7.jpg",
  "IMAGEN/Gorro_verano4.jpg",
  "IMAGEN/Gorro_verano5.jpg",
  "IMAGEN/Gorro_verano3.jpg"
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


const camiseta_verano_fotos = [
  "DEGRADADO_R_M_N/DEG_1.jpg",
  "DEGRADADO_R_M_N/DEG_2.jpg", 
  "DEGRADADO_R_M_N/DEG_3.jpg",
  "DEGRADADO_R_M_N/DEG_4.jpg",
  "DEGRADADO_R_M_N/DEG_5.jpg",
  "DEGRADADO_R_M_N/DEG_6.jpg"
];
let indice_camiseta = 0;
let img_camiseta;

function cambiarCamisetaVerano() {
  if (img_camiseta) {
    indice_camiseta = (indice_camiseta + 1) % camiseta_verano_fotos.length;
    img_camiseta.src = camiseta_verano_fotos[indice_camiseta];
  }
}

window.addEventListener("load", function () {
  img_camiseta = document.getElementById("camiseta_verano");
  setInterval(cambiarCamisetaVerano, 2500);
});


const camiseta_entretiempo_fotos = [
  "CAMISETA_NEG_FLO/Flor_1.jpg",
  "CAMISETA_NEG_FLO/Flor_2.jpg",
  "CAMISETA_NEG_FLO/Flor_3.jpg",
  "CAMISETA_NEG_FLO/Flor_4.jpg",
  "CAMISETA_NEG_FLO/Flor_5.jpg"
];
let indice_entretiempo = 0;
let img_entretiempo;

function cambiarCamisetaEntretiempo() {
  if (img_entretiempo) {
    indice_entretiempo = (indice_entretiempo + 1) % camiseta_entretiempo_fotos.length;
    img_entretiempo.src = camiseta_entretiempo_fotos[indice_entretiempo];
  }
}

window.addEventListener("load", function () {
  img_entretiempo = document.getElementById("camiseta_entretiempo");
  setInterval(cambiarCamisetaEntretiempo, 2500);
});



window.addEventListener("load", function () {
  img_blusa = document.getElementById("blusa_veraniega");
  setInterval(cambiarBlusaVeraniega, 2500);
});


const blusa_veraniega_fotos = [
  "DEGRADADO_R_M_N/BL_1.jpg",
  "DEGRADADO_R_M_N/BL_2.jpg", 
  "DEGRADADO_R_M_N/BL_3.jpg",
  "DEGRADADO_R_M_N/BL_4.jpg",
  "DEGRADADO_R_M_N/BL_5.jpg"
];
let indice_blusa = 0;
let img_blusa;

function cambiarBlusaVeraniega() {
  if (img_blusa) {
    indice_blusa = (indice_blusa + 1) % blusa_veraniega_fotos.length;
    img_blusa.src = blusa_veraniega_fotos[indice_blusa];
  }
}

window.addEventListener("load", function () {
  img_blusa = document.getElementById("blusa_veraniega");
  setInterval(cambiarBlusaVeraniega, 2500);
});




const chaleco_verde_fotos = [
  "CAMISETA_NEG_FLO/c.verde (1).jpg",
  "CAMISETA_NEG_FLO/c.verde (2).jpg", 
  "CAMISETA_NEG_FLO/c.verde (3).jpg",
  "CAMISETA_NEG_FLO/c.verde (4).jpg"
];
let indice_chaleco = 0;
let img_chaleco;

function cambiarChalecoVerde() {
  if (img_chaleco) {
    indice_chaleco = (indice_chaleco + 1) % chaleco_verde_fotos.length;
    img_chaleco.src = chaleco_verde_fotos[indice_chaleco];
  }
}

window.addEventListener("load", function () {
  img_chaleco = document.getElementById("chaleco_verde");
  setInterval(cambiarChalecoVerde, 2500);
});




document.addEventListener('DOMContentLoaded', function() {


    const formulario = document.getElementById('mi-formulario');
    const emailInput = document.getElementById('campo-email');

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {

            if (!emailInput.checkValidity()) {
                evento.preventDefault(); 
                alert('¡Por favor, pon un correo electrónico válido!');
            }
        });
    }
});



    document.addEventListener("DOMContentLoaded", function () {
        const boton = document.getElementById('boton-pedido');
        const texto = document.getElementById('texto-pedido');

        boton.addEventListener('click', function (evento) {
            evento.preventDefault(); 
            texto.classList.toggle('mostrar'); 
        });
    });