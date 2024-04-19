class Stack {
  constructor(...items) {
    // Initialize the stack with any pre-populated items.
    this.items = items;
  }

  clear() {
    // Set the length of the items array to 0 to effectively clear the stack.
    this.items.length = 0;
  }

  clone() {
    // Use the spread operator to create a new stack with a copy of the current items.
    return new Stack(...this.items);
  }

  contains(item) {
    // Check if the item exists in the stack using `includes`.
    return this.items.includes(item);
  }

  peek() {
    // Get the last item in the stack without removing it (LIFO principle).
    return this.items[this.items.length - 1];
  }

  pop() {
    // Remove and return the last item from the stack (LIFO principle).
    return this.items.pop();
  }

  push(item) {
    // Add an item to the top of the stack.
    this.items.push(item);
    return item;
  }

  get length() {
    // Return the current size of the stack (number of items).
    return this.items.length;
  }
}
