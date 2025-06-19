/**
 * EJERCICIOS
 * 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 * 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 * 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

const getPowOfNumbers = (arrayNumbers = []) => {
  if (!Array.isArray(arrayNumbers)) return "Debes ingresar un array de números";

  if (arrayNumbers.length <= 0) return "Debe ingresar un array con elementos";

  if (arrayNumbers.filter((element) => isNaN(element)).length > 0) {
    return "Debe ser un array de números";
  }

  if (!arrayNumbers.every(Number.isFinite)) {
    return "Debe ser un array de números válidos";
  }

  return arrayNumbers.map((n) => n ** 2);
};

console.log(getPowOfNumbers([1, 4, 5]));

const getMinMax = (arrayNumbers = []) => {
  if (!Array.isArray(arrayNumbers)) return "Debes ingresar un array de números";

  if (arrayNumbers.length <= 0) return "Debe ingresar un array con elementos";

  if (arrayNumbers.filter((element) => isNaN(element)).length > 0) {
    return "Debe ser un array de números";
  }

  if (!arrayNumbers.every(Number.isFinite)) {
    return "Debe ser un array de números válidos";
  }

  const max = Math.max(...arrayNumbers);
  const min = Math.min(...arrayNumbers);
  return [max, min];
};

console.log(getMinMax([1, 4, 5, 99, -60]));

const getOddAndEvenFromArray = (arrayNumbers = []) => {
  if (!Array.isArray(arrayNumbers)) return "Debes ingresar un array de números";

  if (arrayNumbers.length <= 0) return "Debe ingresar un array con elementos";

  if (arrayNumbers.filter((element) => isNaN(element)).length > 0) {
    return "Debe ser un array de números";
  }

  if (!arrayNumbers.every(Number.isFinite)) {
    return "Debe ser un array de números válidos";
  }

  return {
    pares: arrayNumbers.filter((n) => n % 2 === 0),
    impares: arrayNumbers.filter((n) => n % 2 !== 0),
  };
};

console.log(getOddAndEvenFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
