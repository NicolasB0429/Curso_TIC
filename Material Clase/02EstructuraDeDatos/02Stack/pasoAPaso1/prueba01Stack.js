import { Stack } from "./Stack.mjs";

let pila = new Stack()
pila.push(1)
pila.push(2)
pila.push(3)
console.log('length',pila.length())
console.log(pila.toString())
console.log(pila.pop())
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.toString());
