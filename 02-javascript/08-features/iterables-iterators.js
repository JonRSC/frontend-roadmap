/**
 * Iterators: Es un objeto que permite recorrer una colección y devolver un valor al terminar
 * funciona con todos los tipos de datos iterables (Sets, Strings, Arrays, Maps)
 */

const iterable = [1, 2, 3, 4, 5];

//Accedemos all iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterador);

console.log(iterador.next());

/**
 * Devuelve un objeto con dos propiedades:
 * value: el siguiente valor de la iteración
 * done: es true si el siguiente valor en la secuencia ya ha sido consumido
 */
