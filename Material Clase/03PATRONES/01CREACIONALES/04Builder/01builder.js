function PizzaBuilder() {
  let name;
  let base;
  let sauce;
  let cheese;
  let toppings = [];

  function Pizza(name, base, sauce, cheese, toppings) {
    this.name = name;
    this.base = base;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;

    this.printInfo = function () {
      console.log(
        "This pizza " +
          this.name + 
          " has " +
          this.base +
          " base with " +
          this.sauce +
          " sauce " +
          (this.cheese !== undefined ? "with cheese. " : "without cheese. ") +
          (this.toppings.length !== 0
            ? "It has the following toppings: " + toppings.toString()
            : "")
      );
    };
  }

  return {
    addName: function(namep) {
      name = namep
      return this;
    },
    addFlatbreadBase: function () {
      base = "flatbread";
      return this;
    },
    addTomatoSauce: function () {
      sauce = "tomato";
      return this;
    },
    addAlfredoSauce: function () {
      sauce = "alfredo";
      return this;
    },
    addCheese: function () {
      cheese = "parmesan";
      return this;
    },
    addOlives: function () {
      toppings.push("olives");
      return this;
    },
    addJalapeno: function () {
      toppings.push("jalapeno");
      return this;
    },
    addPinneAple: function () {
      toppings.push("pinneapple");
      return this;
    },
    cook: function () {
      if (base === null) {
        console.log("No se puede hacer una pizza sin base");
        return;
      }
      return new Pizza(name, base, sauce, cheese, toppings);
    },
  };
}

function PizzaShop() {
  return {
    makePizzaMargherita: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaMargherita = pizzaBuilder
        .addName('Margherita')
        .addFlatbreadBase()
        .addTomatoSauce()
        .addCheese()
        .addOlives()
        .cook();
      return pizzaMargherita;
    },
    makePizzaAlfredo: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaAlfredo = pizzaBuilder
        .addName('Alfredo')
        .addFlatbreadBase()
        .addAlfredoSauce()
        .addCheese()
        .addJalapeno()
        .cook();
      return pizzaAlfredo;
    },
    makePizzaMarinara: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaMarinara = pizzaBuilder
        .addName('Marinara')
        .addFlatbreadBase()
        .addTomatoSauce()
        .addOlives()
        .cook();
      return pizzaMarinara;
    },
  };
}

function run() {
  let pizzaShop = new PizzaShop();

  let pizzaMargherita = pizzaShop.makePizzaMargherita();
  pizzaMargherita.printInfo();

  let pizzaAlfredo = pizzaShop.makePizzaAlfredo();
  pizzaAlfredo.printInfo();

  let pizzaMarinara = pizzaShop.makePizzaMarinara();
  pizzaMarinara.printInfo();

  let chef = PizzaBuilder();
  let customPizza = chef
    .addFlatbreadBase()
    .addTomatoSauce()
    .addCheese()
    .addOlives()
    .addJalapeno()
    .cook();
  customPizza.printInfo();
}

console.log(
  "El patrón Builder es uno de los patrones de diseño creacionales de JavaScript más complejos y flexibles." +
    "Permite construir una a una las características del producto, proporcionando un control total sobre" +
    "cómo se construye el objeto, al tiempo que abstrae los detalles internos.\n\n"
);

run();
