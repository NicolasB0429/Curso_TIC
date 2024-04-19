import { StackNode } from "./StackNode.mjs";

export class Stack {
  head;

  constructor() {
    this.head = null;
  }

  push = (value) => {
    if(this.head == null){
      this.head = new StackNode(value)
    } else {
      let puntero = this.head
      for(;puntero.next != null; puntero = puntero.next){
        //console.log("puntero", puntero.value);
      }
      puntero.next = new StackNode(value)
    }
  };

  pop = () => {
    let puntero = this.head
    if (puntero != null){
      if(puntero.next == null){ 
        this.head = null // pila vacía
        return puntero.value
      } else {
        for(; puntero.next.next != null; puntero = puntero.next);
        let dato = puntero.next.value
        puntero.next = null
        return dato
      }
    }
    return -1
  }

  toString = () => {
    let puntero = this.head;
    if(puntero == null){
      return 'empty stack';
    }
    let salida = "\n";
    do {
      salida += " " + puntero.value.toString() + "\n";
      // console.log(salida)
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
