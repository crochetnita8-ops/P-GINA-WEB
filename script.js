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








const poncho_tricolor_fotos = [
  "IMAGEN_2/TRICOLOR_1.jpg",
  "IMAGEN_2/TRICOLOR_2.jpg",
  "IMAGEN_2/TRICOLOR_3.jpg",
  "IMAGEN_2/TRICOLOR_4.jpg",
  "IMAGEN_2/TRICOLOR_5.jpg"
];
let indice_poncho = 0;
let img_poncho;

function cambiarPonchoTricolor() {
  if (img_poncho) {
    indice_poncho = (indice_poncho + 1) % poncho_tricolor_fotos.length;
    img_poncho.src = poncho_tricolor_fotos[indice_poncho];
  }
}

window.addEventListener("load", function () {
  img_poncho = document.getElementById("poncho_tricolor");
  setInterval(cambiarPonchoTricolor, 2500);
});









const gorro_lana_fotos = [
  "GORRO_1/GORRO_2.jpg",
  "GORRO_1/GORRO_3.jpg",
  "GORRO_1/GORRO_4.jpg",
  "GORRO_1/GORRO_5.jpg",
  "GORRO_1/GORRO_6.jpg",
  "GORRO_1/GORRO_7.jpg",
  "GORRO_1/GORRO_8.jpg",
  "GORRO_1/GORRO_1.jpg"
];
let indice_gorro_lana = 0;
let img_gorro_lana;

function cambiarGorroLana() {
  if (img_gorro_lana) {
    indice_gorro_lana = (indice_gorro_lana + 1) % gorro_lana_fotos.length;
    img_gorro_lana.src = gorro_lana_fotos[indice_gorro_lana];
  }
}

window.addEventListener("load", function () {
  img_gorro_lana = document.getElementById("gorro_lana");
  setInterval(cambiarGorroLana, 2500);
});











    document.addEventListener("DOMContentLoaded", function () {
        const boton = document.getElementById('boton-pedido');
        const texto = document.getElementById('texto-pedido');

        boton.addEventListener('click', function (evento) {
            evento.preventDefault(); 
            texto.classList.toggle('mostrar'); 
        });
    });











  //formulario



  // 1. Guardamos tu enlace de Google en una variable (¡Exactamente como tú has dicho!)
const scriptURL = 'https://script.google.com/macros/s/AKfycbydh8DnSnEq4EUQak1ztxab6UDsRRnrLnez3df8xSt8HOZXF8A2wv_lIHIHN-zght-X/exec';

const form = document.getElementById('formulario-contacto');


form.addEventListener('submit', e => {
  // para que la página no se recargue o se vaya a otra pantalla
  e.preventDefault();
  
  // Cambiamos el texto del botón temporalmente
  const boton = form.querySelector('button[type="submit"]');
  const textoOriginal = boton.innerText;
  boton.innerText = "ENVIANDO...";
  boton.disabled = true;

  // 4. Mandamos los datos de tu formulario al Excel en segundo plano
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // Si todo va bien, avisamos al usuario, vaciamos el formulario y restauramos el botón
        alert('¡Gracias! Hemos recibido tu sugerencia correctamente en Crochet Nita.');
        form.reset(); 
        boton.innerText = textoOriginal;
        boton.disabled = false;
    })
    .catch(error => {
        // Si algo falla, avisamos del error por consola y devolvemos el botón a su estado original
        console.error('¡Error al enviar!', error.message);
        alert('Vaya, hubo un problema al enviar el formulario. Inténtalo de nuevo.');
        boton.innerText = textoOriginal;
        boton.disabled = false;
    });
});