function Customer(name, age) {
  
  this.name = name;
  this.age = age;

  this.printInfo = function () {
    console.log("Customer:nName : " + this.name + " | Age: " + this.age);
  };
}

function DecoratedCustomer(customer, location) {
  
  this.name = customer.name;
  this.age = customer.age;
  
  this.customer = customer;
  this.location = location;

  this.printInfo = function () {
    console.log(
      "Decorated Customer:\nName: " +
        this.name +
        " | Age: " +
        this.age +
        " | Location: " +
        this.location
    );
  };
}

function run() {
  let customer = new Customer("John,", 25);
  customer.printInfo();

  let decoratedCustomer = new DecoratedCustomer(customer, "FL");
  decoratedCustomer.printInfo();
}

console.log(
  "El patrón Decorator ayuda a añadir nuevas funciones a los objetos existentes simplemente envolviéndolos " +
    "dentro de un nuevo objeto. Es similar a cómo se puede envolver una caja de regalo ya envuelta con papel de regalo nuevo " +
    "tantas veces como se quiera: Cada envoltorio permite añadir tantas funciones como quiera, así que es muy flexible." +
    "Desde un punto de vista técnico, no hay herencia, por lo que hay mayor libertad a la hora de diseñar la lógica empresarial.\n\n"
);

run();
