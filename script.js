const imagenes = [
  "IMAGENES/Poncho_verano_1.1.1.jpg",
  "IMAGENES/Poncho_verano_1.1.2.jpg",
  "IMAGENES/Poncho_verano_1.1.3.jpg",
];

let indice = 0;

const img = document.getElementById("imagen");

function cambiarImagen() {
  indice = (indice + 1) % imagenes.length;
  img.src = imagenes[indice];
}
// espera a que cargue TODO el HTML
window.addEventListener("load", function () {
  setInterval(cambiarImagen, 2500);
});