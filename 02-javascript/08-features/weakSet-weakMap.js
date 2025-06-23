/**
 * WeakSet
 * Solo pueden referencias débiles, es decir objetos (referencias)
 * - No se puede usar el método clear() ni usar la propiedad size
 * - No permite iterar sobre las claves o valores, no son iterables
 * - Si no se usa, el elemento se borra
 * - No se pueden insertar elementos repetidos
 */

// const ws = new WeakSet([1, 2, 3]); Uncaught TypeError: Invalid value used in weak set

let element = { name: "Manz" };

const set = new WeakSet();
set.add(element);
console.log(set); // WeakSet({ { name: "Manz" } })

setInterval(() => {
  console.log(set);
}, 1000);

setTimeout(() => {
  element = null;
}, 5000);

/**
 * WeakMap
 * Solo pueden referencias débiles como llaves o claves, es decir objetos (referencias)
 * - No se puede usar el método clear() ni usar la propiedad size
 * - No permite iterar sobre las claves o valores, no son iterables
 * - Si no se usa, el elemento se borra
 * - No se pueden insertar elementos repetidos
 */

//const map = new WeakMap([[1, "uno"]]); Uncaught TypeError: Invalid value used in weak map key
const map = new WeakMap([[{ id: 1, type: "number" }, "uno"]]);

//console.log(map); // WeakMap {{…} => 'uno'}

//Importante, cuando se nullifica una referencia, se borra del weakSet o weakMap
