/**
 * EJERCICIOS
 * 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

const stringRevert = (string) =>
  typeof string === "string"
    ? string.split("").reverse().join("")
    : "se debe introducir un string válido";

console.log(stringRevert("Hola mundo"));

const wordRepeat = (string = "", search = "") => {
  if (typeof string !== "string" || typeof search !== "string") {
    return "Se deben introducir valores válidos";
  }

  return string.split(" ").filter((value) => value.includes(search)).length;
};

console.log(wordRepeat("Hola mundo adios mundo", "mundo"));

const isPalindrome = (string = "") =>
  typeof string === "string"
    ? string.toLowerCase() === stringRevert(string).toLowerCase()
    : "debes introducir un string válido";

console.log(isPalindrome("salas"));

const replaceText = (string = "", value = "") => {
  if (typeof string !== "string" && typeof value !== "string")
    return "Ingresa un string válido";

  return string.split(value).join("");
};

console.log(replaceText("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
