/**
 * EJERCICIO
 * 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

const numberOfVocalsAndConsonants = (string = "") => {
  if (typeof string !== "string" || !string.trim())
    return "Debes introducir un texto válido";

  const letterRegex = /[a-zA-Z]/g;

  const vocalsRegex = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/;

  const letters = string.match(letterRegex);

  const vocals = letters.filter((char) => vocalsRegex.test(char));

  const consonants = letters.length - vocals.length;

  return `Vocales: ${vocals.length}, Consonantes: ${consonants}`;
};

console.log(numberOfVocalsAndConsonants("Carlos esta jugando"));
