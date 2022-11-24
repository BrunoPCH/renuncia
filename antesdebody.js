let encabezados = "";
window.onclick = function () {
  //crea una serie de elements por cada tag encontrado
  let encabezados = document.createElement("h1");
  const text = document.createTextNode(
    "Esto es un texto creado por javascript"
  );
  console.log(encabezados);
  console.log(text);

  encabezados.appendChild(text);
  document.body.appendChild(encabezados);
};

///Dar advertencia antes de cerrar

// window.onclose = function () {
//   let confirmation = false;
//   if (!confirmation && true) {
//     const message = "Espera no cierres aun ¿Estas seguro?";
//   }
// };

///Dar advertencia antes de cerrar
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});

// //INSERTAR COSAS
// // encabezados se declara arriba de la funcion window.onclick
// encabezados.appendChild("<h2>Esto es un 'H2 creado por un appenchild'</h2>");
