import { QueueNode } from "./QueueNode.mjs";

export class Queue {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  encole = (value) => {
    let puntero = this.head;
    if (puntero == null) {
      this.head = new QueueNode(value);
      this.tail = this.head;
    } else {
      /*
      for(; puntero.next != null; puntero = puntero.next);
      puntero.next = new QueueNode(value)
      this.tail = puntero.next
      */
      this.tail.next = new QueueNode(value);
      this.tail = this.tail.next;
    }
  };

  desencole = () => {
    let dato = this.head.value;
    if (this.head == null) {
      console.log("cola vacía");
      return -1;
    } else {
      if (this.head.next == null) {
        return value;
      } else {
        this.head = this.head.next;
      }
      return dato;
    }
  };

  toString = () => {
    let puntero = this.head;
    let salida = "\n";
    do {
      salida += " " + puntero.value.toString() + "\n";
      puntero = puntero.next;
    } while (puntero != null);
    return salida;
  };

  length = () => {
    let cuenta = 0;
    for (let i = this.head; i != null; i = i.next) {
      cuenta++;
    }
    return cuenta;
  };

  static fromArray = (array) => {
    let cola = new Queue()
    for(let item of array)
      cola.encole(item)
    return cola
  }
}
