// PILAS

//una pila es una estructura de datos llamada LIFO(Last in first out / El último en entrar es el primero en salir)
class Pila {
  //Pascal case "Pila"

  constructor() {
    //Es el que construye o da energía
    this.pila = {}; //el atributo de esta clase empieza vacio
    this.contador = 0; //el atributo de esta clase empieza en cero
  }
  //Push mete elemento al final de la fila
  push(element) {
    this.pila[this.contador] = element; //Push que recibe element
    this.contador++;
    return this.pila;
  }
  //Pop saca último elemento y lo devuelve
  pop() {
    this.contador--;
    const element = this.pila[this.contador];
    delete this.pila[this.contador];
    return element;
  }

  //Solo muestra el último elemento "un vistazo"
  peek() {
    return this.pila[this.contador - 1];
    // devuelve el tamaño de la pila
  }
  size() {
    return this.contador;
  }
  imprime() {
    console.log(this.pila);
  }
}
const miPila = new Pila();
console.log(miPila.size());
miPila.imprime();
console.log(miPila.push("La roca"));
miPila.imprime();
console.log(miPila.push(5));
console.log(miPila.pop());
miPila.imprime();
console.log(miPila.push(3));
miPila.imprime();
console.log(miPila.push(7));
miPila.imprime();
