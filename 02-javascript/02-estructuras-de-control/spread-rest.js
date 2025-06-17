// Operador de expansión o recolección ...
// la diferencia fundamental es el uso
// REST operator (...nombre) → recolecta parámetros y destructuración

//parámetros REST en una función
function sumar(...numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}
sumar(1, 2, 3, 4); // 10

//desestructuración REST en un array
const pares = [2, 4, 6, 8, 10];
const [primero, ...resto] = pares;
console.log(primero); // ´2´
console.log(resto); // ´[4,6,8 ,10]´

//desestructuración REST en un objeto
const { nombre: name, ...datos } = { nombre: "Jon", edad: 26, rol: "admin" };
// nombre = "Jon", datos = { edad: 26, rol: "admin" }

//SPREAD operator (...) → expande llamadas, arrays y objetos

//expandir un array
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [...array1, ...array2]; // [1, 2, 3, 4]

//pasar elementos a una función
const numeros2 = [10, 20, 30];
console.log(Math.max(...numeros2)); // 30

//expandir propiedades de objetos
const base = { rol: "user" };
const final = { ...base, rol: "admin" }; // rol = admin
