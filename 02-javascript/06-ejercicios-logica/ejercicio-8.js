/**
 * EJERCICIOS
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 * 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const sortedArray = (arrayOfNumbers = []) => {
  if (!Array.isArray(arrayOfNumbers))
    return "Debes ingresar un array de números";

  if (arrayOfNumbers.length <= 0) return "Debe ingresar un array con elementos";

  if (!arrayOfNumbers.every(Number.isFinite)) {
    return "Debe ser un array de números válidos";
  }

  const desc = [...arrayOfNumbers].sort((a, b) => a - b);
  const asc = [...arrayOfNumbers].sort((a, b) => b - a);
  return {
    asc,
    desc,
  };
};

console.log(sortedArray([7, 5, 7, 8, 6]));

const ArrayOfUniques = (array = []) => {
  if (!Array.isArray(array)) return "Debes ingresar un array de números";

  if (array.length <= 0) return "Debe ingresar un array con elementos";

  return [...new Set(array)];
};

console.log(ArrayOfUniques(["x", 10, "x", 2, "10", 10, true, true]));

const getAVG = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers))
    return "Debes ingresar un array de números";

  if (arrayOfNumbers.length <= 0) return "Debe ingresar un array con elementos";

  if (!arrayOfNumbers.every(Number.isFinite)) {
    return "Debe ser un array de números válidos";
  }

  const sumOfValues = arrayOfNumbers.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  return +(sumOfValues / arrayOfNumbers.length).toFixed(1);
};

console.log(getAVG([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
