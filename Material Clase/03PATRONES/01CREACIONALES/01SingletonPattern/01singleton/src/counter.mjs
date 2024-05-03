let instance;
let counter = 0;

class Counter {
  
  constructor() {
    // Si instancia no es null y no esta definido
    if (instance) {
      console.log("Solo se puede crear una instancia");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
