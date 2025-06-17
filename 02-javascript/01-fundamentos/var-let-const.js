/**
 * La principal diferencia entre var, let y const es la siguiente
 * var: puede ser redeclarado y reescrito, se hoistea
 * let: puede ser reescrito, tambien se hoistea, pero entra en la zona temporal muerta (TDZ)
 * const: debe ser inicializada al momento de declararse, no puede ser reescrito, tambien entra en la zona temporal muerta (TDZ)
 */

var x = "Hola mundo";

if (true) {
  // aqui la variable x es a nivel o ámbito de bloque
  let x = "Hola Jon";
  console.log(x); // Imprime ´Hola Jon´
}

// La variable está a nivel de función, por eso no imprime ´Hola Jon´, porque no está en su scope
console.log(x); // Imprime ´Hola mundo´

for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime del 0 al 4
}

// No está en el scope de ´i´, por lo tanto da error de referencia, la variable está en TDZ
console.log(i); // Imprime ´Uncaught ReferenceError: i is not defined´

// Aqui no da error porque la variable se hoistea como undefined, por lo tanto está en el scope
console.log(prueba); // Imprime ´undefined´

var prueba = "Hoisting";

// Las variables declaradas con ´const´ deben ser inicializadas y no pueden ser reescritas
const PI = 3.1416;

// Con los objetos es distinto, el identificador no puede mutar, su referencia sí
const obj = { a: 1 };
obj.a = 2; // válido
obj = {}; // Error

//esto pasa porque los arreglos y los objetos son valores compuestos donde se accede a la referencia del valor, no directamente al valor
