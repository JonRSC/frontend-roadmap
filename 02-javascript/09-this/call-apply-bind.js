//Para conservar la referencia de un scope en particular podemos usar los metodos call(), apply() y bind()

"use strict";

console.log(this); // Window

this.lugar = "Contexto global";

function greet(greet, name) {
  console.log(`${greet} desde ${this.lugar}, ${name}`);
}

//greet("Hola", "Jon"); // Contexto global

const obj1 = {
  lugar: "Contexto Objeto 1",
};

//En call y apply solo cambia la forma en cómo se pasan los parámetros, en apply en es un array
greet.call(obj1, "Hola", "Call"); // Hola desde Contexto Objeto 1, Call
greet.apply(obj1, ["Hola", "Apply"]); // Hola desde Contexto Objeto 1, Apply

//Si se usa null o no se pasa el parámetro de this, se usará el contexto global
//greet.call(null, "Hola", "Jon"); // Hola desde Contexto global, Jon

const person = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hola: ${this.nombre}`);
  },
};

person.saludar();

const otherPerson = {
  saludar: person.saludar.bind(person), // Enlaza el contexto del objeto person
};

otherPerson.saludar();
