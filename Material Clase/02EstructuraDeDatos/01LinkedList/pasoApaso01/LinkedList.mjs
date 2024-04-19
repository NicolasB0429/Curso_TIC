import { LinkedListNode } from "./LinkedListNode.mjs";

export class LinkedList {
  head;

  constructor(value) {
    this.head = new LinkedListNode(value);
  }

  static fromArray(array) {
    let lista = new LinkedList(array[0]);
    for (let i = 1; i < array.length; i++) {
      lista.push(array[i]);
    }
    return lista;
  }

  length = () => {
    let cuenta = 0;
    let nodo = this.head;
    while (nodo != null) {
      cuenta++;
      nodo = nodo.next;
    }
    return cuenta;
  };

  push = (value) => {
    let node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  };

  endList = () => {
    let nodo = this.head;
    while (nodo.next !== null) {
      nodo = nodo.next;
    }
    return nodo;
  };

  tail = (value) => {
    let newNode = new LinkedListNode(value);
    let finalNode = this.endList();
    finalNode.next = newNode;
  };

  toString = () => {
    let nodo = this.head;
    let salida = "\n" + nodo.value;
    do {
      nodo = nodo.next;
      salida += ' ' + nodo.value;
    } while (nodo.next !== null);
    return salida;
  };

  toStringV = () => {
    let nodo = this.head;
    let salida = "\n " + nodo.value + "\n";
    do {
      nodo = nodo.next;
      salida += " " + nodo.value + "\n";
    } while (nodo.next !== null);
    return salida;
  };
}
