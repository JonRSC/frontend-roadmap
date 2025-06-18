/**
 * EJERCICIOS:
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
 * 2) Programa una función que te devuelva el texto recortado según el número de caracteres     indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 * 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 * 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

const countCharacters = (string = "") =>
  typeof string === "string"
    ? string.length
    : console.warn("No ingresaste una cadena de texto");

console.log(countCharacters("Hola mundo"));

const trimText = (string, count = 0) =>
  typeof string === "string" && typeof count === "number"
    ? string.slice(0, count)
    : console.warn("Valores inválidos");

console.log(trimText("Hola mundo", 4));

const splitText = (string, separator = undefined) =>
  typeof string === "string" && separator !== undefined
    ? string.split(separator)
    : console.warn("Debes proporcionar un string y un separador válido");

console.log(splitText("Hola que tal", " "));

const repeatText = (string, count = 1) =>
  typeof string === "string" && typeof count === "number" && count > 0
    ? string.repeat(count)
    : console.warn("Valores inválidos");

console.log(repeatText("Hola mundo", 3));
