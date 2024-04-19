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
