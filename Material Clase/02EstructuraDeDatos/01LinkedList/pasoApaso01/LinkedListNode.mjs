export class LinkedListNode {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    if (this.next != null) {
      this.next.toString();
    } else {
      return `${this.value}`;
    }
  }
}
/* 
let nodo1 = new LinkedListNode(100)
let nodo2 = new LinkedListNode(200);
nodo1.next = nodo2
console.log(nodo1)
 */