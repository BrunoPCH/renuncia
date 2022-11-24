let lista = [];

// TIPOS DE DATOS
let variable = 42; // número
console.log(typeof variable);
(variable = "42"), // string
  console.log(typeof variable);
variable = 42; //número
console.log(variable + variable);
variable = true; //booleano
console.log(variable);
variable = !false; // booleano (doble negación)
console.log(variable);
variable = !0; //cualquier valor diferente a cero es true, en este caso es true
console.log(variable);
variable = !1; //cualquier valor diferente a cero es true, en este caso es true
console.log(variable);

//OPERADORES

let x = 5;
let y = 10;

//Asignacion de adición
x += y; // es exactamente que esto x = x + y ( 15)
console.log(x);
x += y; // aqui x ya vale 25

console.log(x);
lista.push(x);
console.log(lista);

//Asignacion de resta
y -= x; //  10 -25 = -15
console.log(y);
lista.push(y);
console.log(lista);

//Asignacion de multiplicación

x *= y; // 25 * -15= 375
console.log(x);
console.log("X = " + x);
lista.push(x);
console.log(lista);

// REASIGNAR VALKORES DE VARIABLES
(x = 5), (y = 10);

x <<= y; //operador lógico desplazamiento a la izquierda bit a bit
// Tiene que ver con numeros binarios y se desplazan posiciones de 0 a la izquierda
console.log(x);
// REASIGNAR VALKORES DE VARIABLES
(x = 5), (y = 11);
lista.push(x);
console.log(lista);

// Asignacion de módulo o residuo
console.log(y % x); //residuo de una division entrera 11 / 5 = 2 y sobra 1 (5 x 2 =10)

y %= x;
console.log("Y = " + y); //Concatenado de string con el valor de 'y'
lista.push(y);
console.log(lista);

//LISTAS
// lista.push(x);
// console.log(lista);

// ESTRUCTURA DE CONTROL
let var1 = 3;
let var2 = 4;

// Operador igual
if (var1 == "3") {
  console.log("son iguales");
} else {
  console.log("No son iguales (Operadoir '==' y tiene un string)");
}

// operador estrictamente igual
if (var1 === "3") {
  console.log("son iguales");
} else {
  console.log(
    "No son iguales (Operadoir '===') porque hay un string y lo compara con un numero"
  );
}

// OPERADOR DESIGUALDAD
if (var1 != var2) {
  console.log("Son Diferentes");
} else {
  console.log("No son Diferentes");
}

// OPERADOR DESIGUALDAD ESTRICTA
if (var1 !== "3") {
  console.log("Son Diferentes");
} else {
  console.log("No son Diferentes");
}
// MAYOR QUE
console.log(var1 > var2);
console.log(23 < 23);
console.log(23 <= 23);
console.log(23 >= 23);
