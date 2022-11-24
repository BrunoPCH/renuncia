function moverPositionRandom(elm) {
  elm.style.position = "absolute";
  elm.style.top =
    Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";
  elm.style.transition = "top .2s ease-in-out, left .2s ease-in-out";
}
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let mrBeanCrying = document.getElementById("mr_bean_crying");
let divModoPlaya = document.getElementsByClassName("modo_playa")[0];

btnNo.addEventListener("mouseenter", function (e) {
  moverPositionRandom(e.target);
});
btnNo.addEventListener("onTouchstart", function (e) {
  moverPositionRandom(e.target);
});
btnSi.addEventListener("click", function (e) {
  alert(
    "Era INEVITABLE ¡Vamonos un mes a la playa 🌊 🌊 😁! ¿Entonces qué? ¿A la aventura?"
  );
  mrBeanCrying.style.display = "none !important";
  divModoPlaya.style.margin = "0 !important";
  divModoPlaya.style.display = "flex";
  divModoPlaya.style["z-index"] = "1000";

  const CANCION_PLAYA = new Audio("audios\\calma-editado.mp3");
  CANCION_PLAYA.play();
});

// //SUPLANTA un HTML cuando escucha un click en el div Modo playa
// divModoPlaya.addEventListener("click", function (e) {
//   divModoPlaya.innerHTML =
//     "<div><h2>Esto es un subtitulo insertado cada vez que da click</h2><p>Esto es un parrafo insertado cada vez que haces click</p></div> ";
// });
// Agrega un elemento HTML IMG cada vez que hace click
divModoPlaya.addEventListener("click", function (e) {
  const img = document.createElement("img");
  img.src = "images/mr-bean-mr-bean-holiday.gif";
  divModoPlaya.appendChild(img);
});

botones = document.getElementsByTagName("button");
console.log(botones[1]);

///para poner advertencia antes de cerrar
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});
