// Clase de escritor que recibe una tarea, la escribe en 2 segundos y la marca como terminada.
function Writer(name, manager) {
  // Referencia al gestor, nombre del redactor y una bandera de ocupado que el gestor utiliza al asignar el artículo.
  this.manager = manager;
  this.name = name;
  this.busy = false;

  this.startWriting = function (assignment) {
    console.log(this.name + " empezó a escribir " + assignment + "");
    this.assignment = assignment;
    this.busy = true;

    // Temporizador de 20 s para reproducir la acción manual
    setTimeout(() => {
      this.finishWriting();
    }, 20000);
  };

  this.finishWriting = function () {
    if (this.busy === true) {
      console.log(this.name + " terminó de escribir " + this.assignment + "");
      this.busy = false;
      return this.manager.notifyWritingComplete(this.assignment);
    } else {
      console.log(this.name + " no está escribiendo ningún artículo");
    }
  };
}

// Clase de redacción que recibe una tarea, la edita en 30 segundos y la marca como finalizada.
function Editor(name, manager) {
  // Referencia al gestor, nombre del redactor y una bandera de ocupado que el gestor utiliza al asignar el artículo.
  this.manager = manager;
  this.name = name;
  this.busy = false;

  this.startEditing = function (assignment) {
    console.log(this.name + " empezó a editar " + assignment + "");
    this.assignment = assignment;
    this.busy = true;

    // Temporizador de 20 s para reproducir la acción manual
    setTimeout(() => {
      this.finishEditing();
    }, 20000);
  };

  this.finishEditing = function () {
    if (this.busy === true) {
      console.log(this.name + " edición finalizada " + this.assignment + "");
      this.manager.notifyEditingComplete(this.assignment);
      this.busy = false;
    } else {
      console.log(this.name + " no está editando ningún artículo");
    }
  };
}

// La clase mediator
function Manager() {
  // Arreglo de trabajadores
  this.editors = [];
  this.writers = [];

  this.setEditors = function (editors) {
    this.editors = editors;
  };
  this.setWriters = function (writers) {
    this.writers = writers;
  };

  // El gestor recibe nuevas asignaciones a través de este método
  this.notifyNewAssignment = function (assignment) {
    let availableWriter = this.writers.find(function (writer) {
      return writer.busy === false;
    });
    availableWriter.startWriting(assignment);
    return availableWriter;
  };

  // Los escritores llaman a este método para notificar que han terminado de escribir
  this.notifyWritingComplete = function (assignment) {
    let availableEditor = this.editors.find(function (editor) {
      return editor.busy === false;
    });
    availableEditor.startEditing(assignment);
    return availableEditor;
  };

  // Los editores llaman a este método para notificar que han terminado de editar
  this.notifyEditingComplete = function (assignment) {
    console.log("" + assignment + " está listo para publicar");
  };
}

function run() {
  // manager
  let manager = new Manager();

  // trabajadores
  let editors = [new Editor("Ed", manager), new Editor("Phil", manager)];
  let writers = [new Writer("Michael", manager), new Writer("Rick", manager)];

  // une manager a trabajadores
  manager.setEditors(editors);
  manager.setWriters(writers);

  // Enviar dos tareas al manager
  manager.notifyNewAssignment("aprendiendo JS");
  manager.notifyNewAssignment("APRENDIENDO A VIVIR");
}

run();
/*
console.log(
  "El diseño de tu aplicación a veces puede requerir que juegues con un gran número de objetos distintos que albergan diversos tipos de lógica empresarial y que a menudo dependen unos de otros. " +
    " Manejar las dependencias a veces puede resultar complicado, ya que necesitas hacer un seguimiento de cómo estos objetos intercambian datos y control entre ellos. " +
    "El patrón de diseño Mediator pretende ayudarte a resolver este problema aislando la lógica de interacción de estos objetos en un objeto independiente por sí mismo. " +
    "Este objeto separado se conoce como mediador, y es el responsable de que tus clases de nivel inferior realicen el trabajo. Tu cliente o el entorno de llamada también interactuarán con el mediador en lugar " +
    "de con las clases de nivel inferior."
);
*/