// clases en js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

class Empleado extends Persona {
  constructor(nombre, puesto) {
    super(nombre); // llama al constructor de Persona
    this.puesto = puesto;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre}, ${this.puesto}`);
  }
}

console.log(new Empleado("Jon", "Programador").nombre); // hereda el constructor con super, 'Jon'

//Setters y getters

class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get getNombre() {
    return this._nombre.toUpperCase();
  }

  set setPrecio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this._precio = nuevoPrecio;
    }
  }
}

// al llamar al método get, se ejecuta como si fuera un atributo
console.log(new Producto("Perfume", 1000).getNombre); // PERFUME

// Atributos privados con '#'
class Cuenta {
  #saldo = 0;

  constructor(nombre) {
    this.nombre = nombre;
  }

  depositar(cantidad) {
    if (cantidad > 0) this.#saldo += cantidad;
  }

  verSaldo() {
    return this.#saldo;
  }
}

console.log(new Cuenta().saldo); // undefined

// métodos estáticos: no se requiere una instancia de la clase
class Utilidad {
  static suma(a, b) {
    return a + b;
  }
}

console.log(Utilidad.suma(2, 3)); // 5
