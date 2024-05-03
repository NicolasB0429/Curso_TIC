import { LinkedListNode } from "./LinkedListNode.mjs";

export class LinkedList {
  head;

  constructor(value, next = null) {
    this.head = new LinkedListNode(value, next);
  }

  push = (value) => {
    let nodo = new LinkedListNode(value);
    let temporal = this.head;
    this.head = nodo;
    this.head.next = temporal;
  };

  tail = (value) => {
    let nodo = new LinkedListNode(value);
    let i;
    for (i = this.head; i.next != null; i = i.next) {
      console.log("valor:", i.value);
    }
    i.next = nodo;
  };

  toString = () => {
    let puntero = this.head;
    let salida = "\n";
    do {
      salida += " " + puntero.value.toString() + "\n";
      puntero = puntero.next;
    } while (puntero.next != null);
    return salida;
  };

  length = () => {
    let cuenta = 0;
    for (let i = this.head; i != null; i = i.next) {
      cuenta++;
    }
    return cuenta;
  };

  findElements = (value) => {
    let puntero;
    for (puntero = this.head; puntero != null; puntero = puntero.next) {
      if (puntero.value == value) {
        break;
      }
    }
    return puntero;
  };

  searchObject = (value) => {
    let puntero = this.head;
    for (; puntero != null; puntero = puntero.next) {
      // console.log(puntero.toString())
      if (puntero.value.compareTo(value) == 0) {
        return 1;
      }
    }
    return -1;
  };

  resume = (callback,inicio) => {
    let referencia = inicio
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      referencia = callback(puntero.value,referencia);
    }
    return referencia
  };

  forEach = (callback) =>{
    for(let puntero = this.head; puntero != null; puntero = puntero.next){
      callback(puntero.value)
    }
  }
}
