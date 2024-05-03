
function Robot() {

  this.walk = function (numberOfSteps) {
    console.log("walked " + numberOfSteps + " steps");
  };

  this.sit = function () {
    console.log("sit");
  };
}


function AdvancedRobot(botName) {

  this.name = botName;

  this.sit = function () {
    console.log("sit");
  };

  this.rightStepForward = function () {
    console.log("paso derecho");
  };

  this.leftStepForward = function () {
    console.log("paso izquierdo");
  };
}

function RobotAdapter(botName) {
  
  const robot = new AdvancedRobot(botName);

  this.walk = function (numberOfSteps) {
    for (let i = 0; i < numberOfSteps; i++) {
      if (i % 2 === 0) {
        robot.rightStepForward();
      } else {
        robot.leftStepForward();
      }
    }
  };

  this.sit = robot.sit;
}

function run() {
  let robot = new Robot();

  robot.sit();

  robot.walk(5);


  robot = new RobotAdapter("my bot");

  robot.sit();

  robot.walk(5);

}

console.log(
  "Los patrones de diseño estructurales ayudan a organizar la lógica de negocio proporcionando" +
    "formas probadas de estructurar las clases. Existe una gran variedad de patrones de diseño estructural que se adaptan" +
    "a casos de uso únicos."
);

console.log(
  "Un problema habitual al crear aplicaciones es permitir la colaboración entre clases incompatibles " +
    "Un buen ejemplo para entender esto es mantener la compatibilidad hacia atrás. Si se escribe una nueva versión de una clase," +
    "naturalmente se querrá que sea fácilmente utilizable en todos los lugares donde funcionaba la versión antigua. Sin embargo," +
    " si se hace cambios de ruptura, como eliminar o actualizar métodos que eran cruciales para el funcionamiento de la versión antigua," +
    "se puede acabar con una clase que necesite que se actualicen todos sus clientes para poder ejecutarse."
);

console.log(
  "El patrón de diseño Adapter proporciona una abstracción que sirve de puente entre los métodos y propiedades de la nueva clase" +
    "y los métodos y propiedades de la antigua. Tiene la misma interfaz que la clase antigua, pero contiene lógica para asignar los" +
    "métodos antiguos a los nuevos para ejecutar operaciones similares. Esto es similar a cómo una toma de corriente actúa como adaptador" +
    "entre un enchufe de estilo estadounidense y un enchufe de estilo europeo."
);

run();