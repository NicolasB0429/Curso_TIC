function SingletonFoo() {
    
  let fooInstance = null;

  // For our reference, let's create a counter that will track the number of active instances
  let count = 0;

  function printCount() {
    console.log("Number of instances: " + count);
  }

  function init() {
    // For our reference, we'll increase the count by one whenever init() is called
    count++;

    // Do the initialization of the resource-intensive object here and return it
    return {};
  }

  function createInstance() {
    if (fooInstance == null) {
      fooInstance = init();
    }
    else{
      console.log("Inizilize: clase instanciada");
    }
    return fooInstance;
  }

  function closeInstance() {
    count--;
    fooInstance = null;
  }

  return {
    initialize: createInstance,
    close: closeInstance,
    printCount: printCount,
  };
}

let foo = SingletonFoo();

foo.printCount(); 

foo.initialize();
foo.printCount(); 

foo.initialize();
foo.printCount(); 

foo.initialize();
foo.printCount(); 

foo.close();
foo.printCount(); 

foo.initialize();
foo.printCount(); 
