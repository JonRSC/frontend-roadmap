// representan valores únicos y privados
// este tipo de dato no necesita la palabra reservada class
// suelen usarse como caraterísticas de objetos
// nos permiten crear identificadores de referencias
const mySymbol = Symbol();

console.log(mySymbol); // Symbol()

// se les puede agregar una descripción para que sean accesibles
// Create a global Symbol
const myGlobalSymbol = Symbol("myGlobalSymbol", { global: true });

console.log(myGlobalSymbol); // Symbol(myGlobalSymbol)

const NAME = Symbol("name"); // es una descripción del Symbol
const TALK = Symbol("talk");

// se usa como identificador único dentro del objeto
const person = {
  [NAME]: "Jon", // debe de ir entre corchetes para identificar que es un Symbol
};

person.NAME = "Jon Prueba";

console.log(person.NAME); // Jon Prueba
console.log(person[NAME]); // Jon

person[TALK] = function () {
  console.log("Hola");
};

person[TALK](); // Hola

//Listar propiedad Symbol
console.log(Object.getOwnPropertySymbols(person));
