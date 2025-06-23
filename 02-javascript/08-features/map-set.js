/** SETS
 * Es una colección de valores únicos
 */

//Se puede crear e ir insertando valores, o pasar el array desde el constructor
const set = new Set([1, 2, 3, 4, 5, 6, 6, false, false]);

console.log(set); // Set(7) {1, 2, 3, 4, 5, …}

// para conocer la longitud del set
console.log(set.size); // 7

const set2 = new Set();

//Agregar valores al set
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
//Si son valores repetidos no lanza error, solo no los inserta
set2.add(4);

// para recorrer un set, se puede hacer con for of o forEach
for (item of set) {
  console.log(item);
}

set2.forEach((item) => console.log(item));

//Para convertir a un array
console.log(Array.from(set)); // (7) [1, 2, 3, 4, 5, 6, false]
// o crear una copia con destructuring
const array = [...set2];
console.log(array); // (4) [1, 2, 3, 4]

//Método para eliminar valores del set
set2.delete(4);
console.log(set2); // Set(3) {1, 2, 3}

//Método para comprobar si existe
console.log(set2.has(2)); // true

// para limpiar todo el conjunto
set2.clear();
console.log(set2); // Set(0) {size: 0}

/** MAPS
 * Es una colección de pares clave-valor
 */

const map = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
  [5, "cinco"],
]);

// modificar o agregar un elemento apartir de su clave
map.set(1, "uno modificado");

console.log(map); // Map(3) {1 => 'uno modificado', 2 => 'dos', 3 => 'tres'}

// obtener el valor de un elemento a partir de su clave
console.log(map.get(2)); // dos

// verificar si existe una calve
console.log(map.has(1)); // true

//sobreescribir
map.set(5, "cinco sobreescrito"); // Sobreescribe el anterior

// borrar del Map
map.delete(3);

// limpiar el map
//map.clear()

// convertir a un array
const entries = [...structuredClone(map)]; // se crea un array multidimensional
console.log(entries); // (3) [Array(2), Array(2), Array(2)]

// obtenemos un array de los puros valores
const values = [...map.values()];
console.log(values); // (3) ['uno modificado', 'dos', 'cinco sobreescrito']
// obtenemos un array de las claves
const keys = [...map.keys()];
console.log(keys); // (3) [1, 2, 5]
