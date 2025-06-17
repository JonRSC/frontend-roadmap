"use strict";

// son una forma más clara y concisa de escribir funciones anónimas
const sumar2 = (a, b) => a + b;

// sintaxis básica
// si no tiene parámetros, debe llevar paréntesis
const saludar2 = () => console.log("hola");

// con un parámetro
// al llevar un parámetro podemos omitir los paréntesis (prettier pone por defecto el paréntesis)
const cuadrado = (x) => x * x;

// con múltiples parámetros
const dividir = (x, y) => x / y;

// si el cuerpo de la función es de más de una linea se tiene que usar {} y el return explícito
const resta = (a, b) => {
  const result = a - b;
  return result;
};

//Caso especial con 'this'

//en esta func
const jonathan = {
  name: "Jonathan",
  age: 25,
  greet: function () {
    console.log(`Hola ${this.name}`); // hereda el this del objeto
  },
  greet2: () => {
    console.log(`Hola ${this.name}`); // window ya que hereda el this léxico externo
  },

  greet3: function () {
    setTimeout(() => {
      console.log(`Hola ${this.name}`); //En ese caso hereda el this del método greet3 (el objeto)
    }, 100);
  },

  greet4: function () {
    setTimeout(function () {
      console.log(`Hola ${this.name}`); // this apunta al objeto global
    }, 100);
  },
};

jonathan.greet(); // Hola Jon
jonathan.greet2(); // Hola
jonathan.greet3(); // Hola Jon
jonathan.greet4(); // Hola
