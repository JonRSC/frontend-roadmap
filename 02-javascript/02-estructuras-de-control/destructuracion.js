//El destructuring se basa en el índice de posición
const arr = [1, 2, 3];
const [a1, b, c] = arr;
console.log(a1, b, c); // 1 2 3

// Se pueden omitir valores

const [first, , third] = [10, 20, 30];

console.log(first, third);

//Se pueden crear valores por defecto
const [x = 0, y = 0] = [5]; // x = 5, y = 0

// destructuración de objetos
const persona = { nombre: "Jon", edad: 26 };
const { nombre, edad: edad2 } = persona;

//se pueden agregar alias
const { nombre: nombreCompleto } = persona;
console.log(nombreCompleto);
// valores por defecto
const { ciudad = "CDMX" } = persona;

// destructuración en parámetros de funciones
function saludar({ nombre, edad }) {
  console.log(`Hola ${nombre}, tienes ${edad}`);
}
saludar({ nombre: "Ana", edad: 30 });

//Casos de uso
function coordenadas() {
  return [19.4, -99.1];
}
// tomamos el índice
const [lat, lng] = coordenadas();

console.log(lat, lng);

//valores por defecto
function iniciarAnimacion({
  duracion = 1000,
  tipo = "ease-in-out",
  repetir = false,
  delay = 0,
} = {}) {
  console.log(`Animando por ${duracion}ms con easing ${tipo}`);
}

iniciarAnimacion(); //todos los valores serán por defecto
iniciarAnimacion({ tipo: "linear" }); //solo un tipo personalizado
iniciarAnimacion({ duracion: 300, repetir: true }); // combina prop
