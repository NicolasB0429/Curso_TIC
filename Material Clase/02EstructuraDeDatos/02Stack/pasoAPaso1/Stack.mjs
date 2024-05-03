import { StackNode } from "./StackNode.mjs";

export class Stack {
  head;

  constructor() {
    this.head = null;
  }

  push = (value) => {
    if (this.head == null) {
      this.head = new StackNode(value);
    } else {
      let puntero = new StackNode(value);
      puntero.next = this.head;
      this.head = puntero;
    }
  };

  pop = () => {
    if (this.head == null) {
      return -1;
    }
    if (this.head.next == null) {
      let dato = this.head.value;
      this.head = null;
      return dato;
    }
    let dato = this.head.value;
    this.head = this.head.next;
    return dato;
  };

  adddItem = (value) => {
    if (this.head == null) {
      this.head = new StackNode(value);
    } else {
      let puntero = this.head;
      for (; puntero.next != null; puntero = puntero.next) {
        //console.log("puntero", puntero.value);
      }
      puntero.next = new StackNode(value);
    }
  };

  deleteItem = () => {
    let puntero = this.head;
    if (puntero != null) {
      if (puntero.next == null) {
        this.head = null; // pila vacía
        return puntero.value;
      } else {
        for (; puntero.next.next != null; puntero = puntero.next);
        let dato = puntero.next.value;
        puntero.next = null;
        return dato;
      }
    }
    return -1;
  };

  toString = () => {
    let puntero = this.head;
    if (puntero == null) {
      return "empty stack";
    }
    let salida = "\n";
    do {
      salida += " " + puntero.value.toString() + "\n";
      // console.log(salida)
      puntero = puntero.next;
    } while (puntero != null);
    return salida;
  };

  toStringPila = () => {
    let puntero = this.head;
    if (puntero == null) {
      return "empty stack";
    }
    let salida = "\n";
    let flag = true;
    let final = null;
    final = this.head;
    for (; final.next != null; final = final.next);
    while (flag == true) {
      flag = false;
      for (; puntero.next != final; puntero = puntero.next);
      salida += puntero.next.value + "\n";
      final = puntero;
      puntero = this.head;
      if (final != this.head) flag = true;
      if (final == this.head) salida += puntero.value;
    }
    return salida;
  };

  toStringRecursivoUltimo = (puntero = this.head, salida = "") => {
    if (puntero.next != null) {
      salida = this.toStringRecursivoUltimo(puntero.next);
    }
    salida += puntero.value + " ";
    return salida;
  };

  toStringRecursivoPrimero = (puntero = this.head, salida = "") => {
    salida += puntero.value + " ";
    if (puntero.next != null) {
      salida += this.toStringRecursivoPrimero(puntero.next);
    }
    return salida;
  };

  length = () => {
    let cuenta = 0;
    for (let i = this.head; i != null; i = i.next) {
      cuenta++;
    }
    return cuenta;
  };

  findElementos = (value) => {
    let puntero;
    for (puntero = this.head; puntero != null; puntero = puntero.next) {
      if (puntero.value == value) {
        break;
      }
    }
    return puntero;
  };
}
