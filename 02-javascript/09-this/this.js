/**
 * This: Apunta al objeto que está llamando a la función, se le llama 'Contexto'.
 * Cuando se llama a una en una función en el ámbito global, this hace referencia de forma predeterminada al objeto global 'Window'
 *
 */

console.log(this === window); //This

this.nombre = "Contexto global";

console.log(this.nombre); // Contexto global

//Función en el ámbito global
function imprimir() {
  console.log(this.nombre);
}

imprimir(); // Contexto global

const obj = {
  nombre: "Contexto del Objeto",
  imprimir: function () {
    console.log(this.nombre); // hace referencia al contexto del objeto
  },
};

obj.imprimir(); // Contexto del Objeto

const obj2 = {
  nombre: "Contexto objeto 2",
  imprimir,
};

//Imprime lo de objeto, ya que se está llamando desde el contexto del obj2
obj2.imprimir(); // Contexto objeto 2

const obj3 = {
  nombre: "Contexto del Objeto",
  imprimir: () => {
    console.log(this.nombre); // hace referencia al contexto del objeto
  },
};

//Imprime el contexto global porque la arrow function mantiene el enlace del contexto en el que ha sido creado el objeto donde aparece, es decir, la arrow function no maneja su propio scope, no crea su propio scope
obj3.imprimir(); // Contexto global

// Clousures
function Persona(nombre) {
  this.nombre = nombre;

  //Como solución, ejecutaremos una arrow function para que herede el contexto
  return () => console.log(this.nombre);

  //Clousure: función que se envuelve en otra función y se retorna
  return function () {
    console.log(this.nombre);
  };
}

let jon = new Persona("Jon");

// Cada función crea un contexto (excepto las arrow function que lo heredan)
// entonces en el clousure, no se ejecuta correctamente porque crea su propio scope
jon(); //Contexto global

//Ejemplo de this
const jonathan = {
  nombre: "Jonathan",
  age: 25,
  greet: function () {
    console.log(`Hola ${this.nombre}`); // hereda el this del objeto
  },

  greet2: () => {
    console.log(`Hola ${this.nombre}`); // window ya que hereda el this léxico externo
  },

  greet3: function () {
    setTimeout(() => {
      console.log(`Hola ${this.nombre}`); //En ese caso hereda el this del método greet3 (el objeto)
    }, 100);
  },

  greet4: function () {
    setTimeout(function () {
      console.log(`Hola ${this.nombre}`); // this apunta al objeto global
    }, 100);
  },
};

jonathan.greet(); //Hace referencia al contexto del objeto
jonathan.greet2(); //Hereda el contexto global al ser arrow function
jonathan.greet3(); //hereda el contexto del objeto al estar en un settime out y ser arrow function
jonathan.greet4(); //apunta al objeto global porque crea un nuevo contexto
