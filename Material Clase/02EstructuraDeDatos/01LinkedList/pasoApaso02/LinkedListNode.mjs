export class LinkedListNode {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString = () => {
    return `value: ${this.value} next: ${this.next == null ? null : 'object'}`
  };
}
