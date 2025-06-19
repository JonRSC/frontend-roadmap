/**
 * EJERCICIOS
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 * 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 * 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
 */

const getRandomNumber = () => Math.floor(Math.random() * 100) + 500;

console.log(getRandomNumber());

const isCapicua = (number = 0) => {
  if (isNaN(number)) return "introduce un número válido";

  const numberString = number.toString();
  const reverse = numberString.split("").reverse().join("");

  return reverse === numberString;
};

console.log(isCapicua(212.212));

const getFactorial = (number = null) => {
  if (isNaN(number) || number <= 0) return "Introduce un número válido";

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

console.log(getFactorial(6));
