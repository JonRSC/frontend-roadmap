/**
 * EJERCICIOS
 * 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 * 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
 * 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */
const isPrime = (number = 0) => {
  if (!Number.isInteger(number) || number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

console.log(isPrime(7));

const isEvenOrOdd = (number = 0) => {
  if (isNaN(number)) return "se debe introducir un número válido";

  return number % 2 !== 0 ? "impar" : "par";
};

console.log(isEvenOrOdd(29));

const convertDegrees = (number = 0, unit = null) => {
  if (isNaN(number) || unit.length !== 1 || !/C|F/.test(unit)) {
    return "Introduce opciones válidas";
  }

  const converted = unit === "C" ? number * 1.8 + 32 : (number - 32) / 1.8;
  return converted.toFixed(2);
};

console.log(convertDegrees(8, "F"));
