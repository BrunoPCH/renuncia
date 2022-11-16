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
