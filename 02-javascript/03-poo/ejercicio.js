class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  presentarse() {
    console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`);
  }
}

class CuentaBancaria extends Persona {
  #saldo = 0;

  constructor(nombre, edad) {
    super(nombre, edad);
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(valor) {
    if (valor > 0) this.#saldo = valor;
  }

  depositar(monto) {
    if (monto > 0) this.#saldo += monto;
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) this.#saldo -= monto;
  }

  static banco() {
    return "Banco JS";
  }
}

const cliente = new CuentaBancaria("Jon", 26);
cliente.presentarse();

cliente.depositar(1000);
cliente.retirar(300);
console.log(cliente.saldo); // 700

cliente.saldo = -200; // ❌ no modifica
console.log(cliente.saldo); // 700

console.log(CuentaBancaria.banco()); // Banco JS
