/**
 * 🌀 Event Loop (Bucle de Eventos)
 * Pila de llamadas (Call stack) Aquí se ejecuta el código asíncrono, si está vacio, el Event loop puede tomar tareas de las colas.
 * Web APIs (Background tasks)
 * Cola de tareas (Task Queue) Donde van los setTimeout, eventos del DOM, etc.
 * Cola de microtareas (Microtask Queue) Donde van las .then() de las Promesas.
 * Flujo:
 * - Verifica si la **call stack está vacía**.
 * - Si lo está, **procesa primero los microtasks**.
 * - Luego mueve tareas de la **task queue** a la call stack.
 * - Repite esto indefinidamente.
 */

console.log("🚀 Inicio");

setTimeout(() => {
  console.log("⏰ Timeout 1");
}, 0);

queueMicrotask(() => {
  console.log("🌀 Microtask 1");
}); //

Promise.resolve().then(() => {
  console.log("⚡ Promesa 1");
});

(async () => {
  console.log("🔍 Async 1");
  await null;
  console.log("✅ Async 1 después del await");

  queueMicrotask(() => {
    console.log("🌀 Microtask 2");
  });

  setTimeout(() => {
    console.log("⏰ Timeout 2");
  }, 0);
})();

console.log("🏁 Fin");

/**
 ✅ FASE 1: Código síncrono (Call Stack)
Todo esto se ejecuta inmediatamente, línea por línea:

console.log("🚀 Inicio") → ✅ Se imprime primero

setTimeout(..., 0) → ⏳ Se envía a Task Queue

queueMicrotask(...) → 📥 Entra a Microtask Queue

Promise.then(...) → 📥 Entra a Microtask Queue

async IIFE se ejecuta:

console.log("🔍 Async 1") → ✅ Se imprime segundo

await null detiene la función (porque await siempre espera una microtarea), lo que deja el resto pendiente en la Microtask Queue

console.log("🏁 Fin") → ✅ Se imprime tercero

✅ FASE 2: Microtask Queue
Ahora se vacía la cola de microtareas antes de ejecutar los setTimeouts:

🌀 Microtask 1 → ✅ Cuarto

⚡ Promesa 1 → ✅ Quinto

✅ Async 1 después del await → ✅ Sexto

🌀 Microtask 2 → ✅ Séptimo (se añadió en tiempo de ejecución de la async)

✅ FASE 3: Task Queue (Timers)
Ahora el event loop ejecuta los setTimeouts:

⏰ Timeout 1 → ✅ Octavo

⏰ Timeout 2 → ✅ Noveno
 */
