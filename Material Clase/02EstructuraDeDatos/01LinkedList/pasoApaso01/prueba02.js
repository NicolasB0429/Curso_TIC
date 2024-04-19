import { LinkedListNode } from "./LinkedListNode.mjs";

let top = new LinkedListNode('uno')
/* console.log('valor:',top.value)
console.log('próximo',top.next) */
let nodo = new LinkedListNode(2)
/* console.log("valor:", nodo.value);
console.log("próximo", nodo.next); */
top.next = nodo
/* console.log("valor:", top.value);
console.log("próximo", top.next); */
nodo = new LinkedListNode('tres');
let puntero = top
// console.log(puntero.value)
puntero = puntero.next
/* console.log(puntero.value);
console.log(puntero.next); */
puntero.next = nodo
/* console.log(puntero)
console.log(puntero); */
nodo = new LinkedListNode(4)
puntero = top.next.next
// console.log(puntero)
puntero.next = nodo
// console.log(puntero);

let newNodo = new LinkedListNode('carro',null)
nodo = new LinkedListNode('casa',newNodo)
newNodo = new LinkedListNode('perro',nodo)
//console.log(newNodo)
// console.log(nodo) 

let nodoNuevo = new LinkedListNode('union',top)
/* console.log(newNodo)
console.log(nodoNuevo); */

let toStringDo = function(top) {
    let cadena = ''
    let puntero = top
    do {
        cadena += ' '+puntero.value
        puntero = puntero.next
    } while (puntero != null)
    return cadena
}

let toStringWhile = function (top) {
  let cadena = "";
  let puntero = top;
  while(puntero != null){
    cadena += " " + puntero.value;
    puntero = puntero.next;
  };
  return cadena;
};

let toStringFor = function (top) {
  let cadena = "";
  for (let puntero = top; puntero != null; 
    puntero = puntero.next) {
    cadena += " " + puntero.value;
  }
  return cadena;
};

console.log(toStringFor(newNodo))





