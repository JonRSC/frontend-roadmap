//Aunque null y undefined, sean un tipo de dato primitivo, lo explicamos a fondo en este archivo para ver las diferencias clave

/**
 * Undefined:
 * Significa que algo existe, pero no ha sido asignado todavia, no tiene un valor, es como declarar una variable, pero sin asignar un valor aún
 */

let myVar;
console.log(myVar); // imprime ´undefined´

/**
 * Null:
 * Representa la ausencia intencional de un valor
 */

let mySeat = null;
console.log(mySeat); // Imprime: ´undefined´

/**
 * NaN: Not A Number
 * Representa un valor que no es un número válido en operaciones matemáticas
 */
let result = 0 / 0;
console.log(result); // Imprime: ´NaN´
console.log(typeof result); // Imprime: ´number´
