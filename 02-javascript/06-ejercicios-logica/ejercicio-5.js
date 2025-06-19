/**
 * EJERCICIOS
 * 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 * 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

const convertBase = (number = "", base = 10) => {
  if (typeof number !== "string" && typeof number !== "number")
    return "Número inválido";
  if (![2, 10, 0].includes(base)) return "Base no soportada";

  return base === 10 || base === 0
    ? `Base 2: ${Number(number).toString(2)}`
    : `Base 10: ${parseInt(number, 2)}`;
};

console.log(convertBase(100, 10));

const applyDiscount = (amount, discount) => {
  if (isNaN(amount) || amount <= 0) return "Introduce un monto válido";

  if (isNaN(discount) || discount <= 0 || discount >= 100)
    return "Introduce un porcentaje válido";

  return amount - amount * (discount / 100);
};

console.log(applyDiscount(2000, 30));

const yearsBetweenCurrentDate = (date = new Date()) => {
  if (!(date instanceof Date) || isNaN(date)) return "Fecha no válida";

  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();

  return `${years} años`;
};

console.log(yearsBetweenCurrentDate(new Date(1984, 4, 23)));
