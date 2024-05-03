import { Stack } from "./Stack.mjs";

let pila = new Stack()
pila.push(10)
pila.push(20)
pila.push(30)
pila.push(40);
pila.push(50);
console.log(pila.toString())

/*
console.log('primero',pila.pop())
console.log('segundo',pila.pop());
console.log('tercero',pila.pop());
console.log('cuarto',pila.pop());
console.log("cinco", pila.pop());
console.log("ultimo", pila.pop());
*/

/*
console.log(pila.toString());
console.log(pila.toStringPila());

console.log("length", pila.length());
console.log("search", pila.findElementos(50));
console.log("search", pila.findElementos(70));
*/

console.log('Primero',pila.toStringRecursivoPrimero())
console.log('Ultimo',pila.toStringRecursivoUltimo());