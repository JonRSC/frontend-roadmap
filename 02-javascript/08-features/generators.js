/**
 * Generators: Son una alternativa a los iteradores, permite definir un algoritmo iterativo al escribir una sola función que ppuede mantener su propio estado, es decir, se puede pausar y reanudar su ejecución.
 * yield: pausa la función del generator en ese punto y devuelve el valor al invocador, cuando se vuelve a llamar a next(), la ejecución continua desde el último yield
 */

// el asterisco indica que una función es un generator
function* generadorDeNumeros() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generadorDeNumeros();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
