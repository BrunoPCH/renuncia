for (let i = 0; i < 9; i += 2) {
  console.log(i);
}

console.log("A partir de aqui contara de 1 en 1 hasta llegar a 9");

for (let i = 0; i < 19; i++) {
  if (i % 2 != 0) {
    continue; // Si el resto de la division es diferente que cero... continua
  }
  if (i == 10) {
    break;
  }
  console.log(i);
}
console.log("aqui ya llego el break hasta 10");

var1 = null; // Los nulos no existen, no tienen un contenedor en la memoria
// var2 = empty;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);
// console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);

// EJERCICIO tengo una actividad para poner a prueba todo lo aprendido hoy u.u: "tomar 5 notas del ALUMNO entre 0 y 10, calcular el promedio y mostrar la nota más alta, nota media y nota menor" u.u

const ALUMNO1 = 10;
const ALUMNO2 = 5;
const ALUMNO3 = 8;
const ALUMNO4 = 7;
const ALUMNO5 = 9;

let calificaciones = [ALUMNO1, ALUMNO2, ALUMNO3, ALUMNO4, ALUMNO5];
console.log(calificaciones);

let promedio = 0;
for (let n of calificaciones) {
  promedio += n;
}
console.log(promedio); //Aqui suma todo

promedio = promedio / calificaciones.length; // Aqui lo divide entre el numero de items del arreglo
console.log(promedio);

// SACAR CALIFICACION MAXIMA

let calificacionMaxima = Math.max(calificaciones);
console.log(calificacionMaxima);

// SACAR CALIFICACION MEDIA

// SACAR CALIFICACION MINIMA
