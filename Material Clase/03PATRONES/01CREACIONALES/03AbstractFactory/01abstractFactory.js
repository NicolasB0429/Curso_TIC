function Canary() {
  this.type = "bird";
  this.size = "small";
}

function Eagle() {
  this.type = "bird";
  this.size = "large";
}

function Labrador() {
  this.type = "dog";
  this.size = "large";
}

function Pug() {
  this.type = "dog";
  this.size = "small";
}

function Ragdoll() {
  this.type = "cat";
  this.size = "large";
}

function Singapura() {
  this.type = "cat";
  this.size = "small";
}

function DogFactory() {
  this.createPet = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "pug") {
      dog = new Pug();
    }

    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\n\nType: " +
          dog.type +
          "\nBreed: " +
          dog.breed +
          "\nSize: " +
          dog.size
      );
    };

    return dog;
  };
}

function CatFactory() {
  this.createPet = function (breed) {
    let cat;

    if (breed === "ragdoll") {
      cat = new Ragdoll();
    } else if (breed === "singapura") {
      cat = new Singapura();
    }

    cat.breed = breed;
    cat.printInfo = function () {
      console.log(
        "\n\nType: " +
          cat.type +
          "\nBreed: " +
          cat.breed +
          "\nSize: " +
          cat.size
      );
    };

    return cat;
  };
}

function BirdFactory() {
  this.createPet = function (breed) {
    let bird;

    if (breed === "canary") {
      bird = new Canary();
    } else if (breed === "eagle") {
      bird = new Eagle();
    }

    bird.breed = breed;
    bird.printInfo = function () {
      console.log(
        "\n\nType: " +
          bird.type +
          "\nBreed: " +
          bird.breed +
          "\nSize: " +
          bird.size
      );
    };

    return bird;
  };
}

function run() {
  let pets = [];

  let catFactory = new CatFactory();
  let dogFactory = new DogFactory();
  let birdFactory = new BirdFactory();

  let petFactory = dogFactory;

  pets.push(petFactory.createPet("labrador"));
  pets.push(petFactory.createPet("pug"));

  petFactory = catFactory;

  pets.push(petFactory.createPet("ragdoll"));
  pets.push(petFactory.createPet("singapura"));

  petFactory = birdFactory;

  pets.push(petFactory.createPet("canary"));
  pets.push(petFactory.createPet("eagle"));

  for (var i = 0, len = pets.length; i < len; i++) {
    pets[i].printInfo();
  }
}

console.log(
  "El método Abstract Factory sube el nivel del método Factory al hacer que haya «factories» abstractas y," +
    "por tanto, sustituibles sin que el entorno de llamada conozca la factory exacta utilizada o su funcionamiento interno." +
    "El entorno de llamada sólo sabe que todas las «factories» tienen un conjunto de métodos comunes a los que puede llamar " +
    "para realizar la acción de instanciación. El patrón Abstract Factory facilita el intercambio de factories concretas," +
    "y ayuda a promover la uniformidad entre las factories y los productos creados."
);
run();
