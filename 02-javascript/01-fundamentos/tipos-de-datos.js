/******************* TIPOS DE DATOS PRIMITIVOS ***************************/

// STRINGS
let nombre = "Jonathan";

let lorem =
  "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales vitae erat ac rutrum. Pellentesque et porta sem. Vestibulum vitae volutpat nibh. Suspendisse et lorem mi. Praesent ut suscipit lorem. Aliquam at sem vel risus aliquet cursus. Pellentesque quis posuere ante. Cras efficitur semper diam, non rhoncus nulla cursus vel. Nullam ultricies lorem odio, sit amet condimentum turpis vulputate a. Nulla eget nibh convallis, venenatis lectus at, aliquam leo.     ";

// Sirve para medir la longitud de un string
let longitud = nombre.length;

// Pone el texto en mayúsculas
console.log(nombre.toUpperCase()); // imprime ´JONATHAN´

// Poner el texto en minúsculas
console.log(nombre.toLowerCase()); // imprime ´jonathan´

// busca una coincidencia en el string con el parámetro
console.log(nombre.includes("Jon")); // imprime ´true´

// omite los espacios iniciales y finales
console.log(lorem.trim());

// separa el string y genera un arreglo con el ´separador´ que pasemos como parametro
console.log(lorem.split(","));

/** TEMPLATE STRINGS */
let saludo = `Hola soy un Template String`;
console.log(saludo); //Imprime Hola soy un Template String

//strings multilínea
let mensaje = `No es quien seas en el interior,
tus actos son los que te definen...
Batman`;
console.log(mensaje);
/*
Imprime
No es quien seas en el interior,
tus actos son los que te definen...
Batman
*/

//variables en strings (interpolación)
let nombre2 = "Jonathan";
console.log(`Hola ${nombre}`); //Imprime Hola Jonathan

//ejecutar expresiones
console.log(`Hola ${nombre}, tienes ${30 + 2} años`); //Imprime Hola Jonathan, tienes 32 años

//ejecutar funciones
let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  ol = `<ol>
    ${estaciones
      .map(function (estacion) {
        return `<li>${estacion}</li>`;
      })
      .join("")}
  </ol>`;

console.log(ol); //Imprime <ol><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ol>

// NUMBERS
let a = 2;
let c = 7.19;

// indica los número decimales que tendrá el número
console.log(c.toFixed(1)); // 7.2
// solo devuelve la parte entera
console.log(parseInt(c)); // imprime ´7´
console.log(parseFloat(c)); // imprime ´7.19´

// BOOLEANS
let verdadero = true;
let falso = false;

// Truthy es un valor que es considerado verdadero cuando se evalúa en un contexto booelano
// Imprimen ´true ´
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(42));
console.log(Boolean("foo"));
console.log(Boolean(new Date()));
console.log(Boolean(-42));
console.log(Boolean(3.14));
console.log(Boolean(-3.14));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
// Falsy es un valor que es considerado falso cuando se evalúa en un contexto booelano
if (false) {
  console.log("no se imprime");
}

if (null) {
  console.log("no se imprime");
}

if (undefined) {
  console.log("no se imprime");
}

if (0) {
  console.log("no se imprime");
}

if (-0) {
  console.log("no se imprime");
}

if (0n) {
  console.log("no se imprime");
}

if (NaN) {
  console.log("no se imprime");
}

if ("") {
  console.log("no se imprime");
}
