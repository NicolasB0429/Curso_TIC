function Labrador() {
  this.sheddingLevel = 4;
  this.coatLength = "short";
  this.coatType = "double";
}

function Bulldog() {
  this.sheddingLevel = 3;
  this.coatLength = "short";
  this.coatType = "smooth";
}

function GoldenRetriever() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function GermanShepherd() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function Criollo() {
  this.sheddingLevel = 0;
  this.coatLength = "medium";
  this.coatType = "double";
}

function Factory() {
  
  this.createDog = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "bulldog") {
      dog = new Bulldog();
    } else if (breed === "golden retriever") {
      dog = new GoldenRetriever();
    } else if (breed === "german shepherd") {
      dog = new GermanShepherd();
    } else if (breed === "criollo") {
      dog = new Criollo();
    }


    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\n\nBreed: " +
          dog.breed +
          "\nShedding Level (out of 5): " +
          dog.sheddingLevel +
          "\nCoat Length: " +
          dog.coatLength +
          "\nCoat Type: " +
          dog.coatType
      );
    };

    return dog;
  };
}

function run() {
  let dogs = [];
  let factory = new Factory();

  dogs.push(factory.createDog("labrador"));
  dogs.push(factory.createDog("bulldog"));
  dogs.push(factory.createDog("golden retriever"));
  dogs.push(factory.createDog("german shepherd"));
  dogs.push(factory.createDog("criollo"));

  for (var i = 0, len = dogs.length; i < len; i++) {
    dogs[i].printInfo();
  }
}

console.log(
  'El método Factory también es uno de los patrones de diseño más populares.'+
  'El problema que pretende resolver el método Factory es crear objetos sin utilizar el constructor convencional. '+
  'En su lugar, toma la configuración (o descripción) del objeto que se desea y devuelve el objeto recién creado.' +
  'El patrón de diseño Factory controla cómo se crearán los objetos y proporciona una forma rápida de crear nuevos objetos,'+
  'así como una interfaz uniforme que define las propiedades que tendrán los objetos.'+
  'Se puede añadir tantas razas de perros como se requiera, siempre que los métodos y propiedades expuestos por los tipos de'+
  'razas sigan siendo los mismos, funcionará a la perfección.'
);

run();
