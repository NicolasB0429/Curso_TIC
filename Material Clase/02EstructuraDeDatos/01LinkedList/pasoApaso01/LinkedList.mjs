import { LinkedListNode } from "./LinkedListNode.mjs";

export class LinkedList {
  head;

  constructor(value) {
    this.head = new LinkedListNode(value);
  }

  addItem = (value) => {
    let puntero = this.head;
    if (puntero.next == null) {
      puntero.next = new LinkedListNode(value);
    } else {
      for (; puntero.next != null; puntero = puntero.next);
      puntero.next = new LinkedListNode(value);
    }
  };

  findItem = (value) => {
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      if (puntero.value == value) return puntero;
    }
    return -1;
  };

  toString = () => {
    let salida = "\nLista: \n";
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      salida += puntero.value + "\n";
    }
    return salida;
  };

  toStringH = () => {
    let salida = "\nLista: ";
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      salida += puntero.value + " ";
    }
    return salida;
  };

  findBeforeItem = (value) => {
    for (
      let puntero = this.head;
      puntero.next != null;
      puntero = puntero.next
    ) {
      // console.log(puntero)
      if (puntero.next.value == value) {
        return puntero;
      }
    }
    return -1;
  };

  findAfterItem = (value) => {
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      if (puntero.value == value) return puntero.next;
    }
    return -1;
  };

  deleteItem = (value) => {
    if (this.head.value == value) {
      this.head = this.head.next;
    } else {
      let puntero = this.findBeforeItem(value);
      if (puntero == -1) {
        console.log("Item NO encontrado");
      } else {
        puntero.next = puntero.next.next;
        return 1;
      }
    }
    return -1;
  };

  static fromArray(array) {
    let lista = new LinkedList(array[0]);
    for (let i = 1; i < array.length; i++) {
      lista.addItem(array[i]);
    }
    return lista;
  }

  length = () => {
    let cuenta = 0;
    for (let puntero = this.head; puntero != null; puntero = puntero.next) {
      cuenta++;
    }
    return cuenta;
  };

  push = (value) => {
    let puntero = new LinkedListNode(value);
    puntero.next = this.head;
    this.head = puntero;
  };

  /*
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
  */
}
