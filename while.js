// ---------------------------------
// While
let boletosDisponibles = 10;

// while (boletosDisponibles > 0) {
//   //Mientras haya boletos imprimira boleto comprado y restara 1
//   console.log("boleto comprado para el Corona Capital");
//   boletosDisponibles--; // Aqui resta 1
//   console.log("quedan " + boletosDisponibles);
//   console.log("******************************");
// }

// //Do while

do {
  console.log("boleto comprado para el Corona Capital");
  boletosDisponibles--; // Aqui resta 1
  console.log("quedan " + boletosDisponibles);
} while (boletosDisponibles > 0);

//-------------------------------
//ERROR HANDELING TRY CATCH FINALLY intenta captura y finalmente

try {
  // codigo suceptible a fallar
  balidarEdad(edad);
} catch (error) {
  console.info("balidarEdad no existe");
} finally {
  //Esto se ejecuta sin importar nada
  console.warn("finalmente tu crush no te entiende");
}
