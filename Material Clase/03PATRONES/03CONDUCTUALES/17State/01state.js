// Crear títulos para todos los estados de una tarea
const STATE_TODO = "TODO"
const STATE_IN_PROGRESS = "IN_PROGRESS"
const STATE_READY_FOR_REVIEW = "READY_FOR_REVIEW"
const STATE_DONE = "DONE"

// Crear la clase de tarea con un título, una persona asignada y la duración de la tarea.
function Task(title, assignee) {
  this.title = title;
  this.assignee = assignee;

  // Función auxiliar para actualizar el asignatario de la tarea
  this.setAssignee = function (assignee) {
    this.assignee = assignee;
  };

  // Función para actualizar el estado de la tarea
  this.updateState = function (state) {
    switch (state) {
      case STATE_TODO:
        this.state = new TODO(this);
        break;
      case STATE_IN_PROGRESS:
        this.state = new IN_PROGRESS(this);
        break;
      case STATE_READY_FOR_REVIEW:
        this.state = new READY_FOR_REVIEW(this);
        break;
      case STATE_DONE:
        this.state = new DONE(this);
        break;
      default:
        return;
    }
    // Invocar la función de devolución de llamada para el nuevo estado después de que se establezca
    this.state.onStateSet();
  };

  // Establecer el estado inicial de la tarea como TODO
  this.updateState(STATE_TODO);
}

// TODO state
function TODO(task) {

    this.onStateSet = function () {
        console.log(task.assignee + " notified about new task " + task.title + "")
    }
}

// Estado IN_PROGRESS
function IN_PROGRESS(task) {

    this.onStateSet = function () {
        console.log(task.assignee + " started working on the task " + task.title + "")
    }
}

// estado READY_FOR_REVIEW que actualiza el asignatario de la tarea para que sea el gestor del desarrollador para la revisión
function READY_FOR_REVIEW(task) {
    this.getAssignee = function () {
        return "Manager 1"
    }

    this.onStateSet = function () {
        task.setAssignee(this.getAssignee())
        console.log(task.assignee + " notified about completed task " + task.title + "")
    }
}

// DONE estado que elimina el asignatario de la tarea ya que ahora se ha completado
function DONE(task) {
    this.getAssignee = function () {
        return ""
    }

    this.onStateSet = function () {
        task.setAssignee(this.getAssignee())
        console.log("Task " + task.title + " completed")
    }
}

function run() {
  // Crea una tarea
  let task1 = new Task("Create a login page", "Developer 1");

  // Póngalo en IN_PROGRESS
  task1.updateState(STATE_IN_PROGRESS);

  // Crea otra tarea
  let task2 = new Task("Create an auth server", "Developer 2");

  // Póngalo en IN_PROGRESS también
  task2.updateState(STATE_IN_PROGRESS);

  // Actualizar los estados de las tareas hasta que finalicen
  task2.updateState(STATE_READY_FOR_REVIEW);
  
  task1.updateState(STATE_READY_FOR_REVIEW);
  

  task1.updateState(STATE_DONE);
  
  task2.updateState(STATE_DONE);
  
}

run()

console.log("El patrón de diseño State es uno de los patrones de diseño más utilizados en la industria del desarrollo de software. Los frameworks de JavaScript más populares, como React y Angular, "+
"se basan en gran medida en el patrón State para gestionar los datos y el comportamiento de la aplicación en función de esos datos. En pocas palabras, el patrón de diseño State es útil en situaciones en las que "+
"se puede definir estados definitivos de una entidad (que podría ser un componente, una página, una app o una máquina), y la entidad tiene una reacción predefinida al cambio de estado. Por ejemplo que se está "+
"intentando construir un proceso de solicitud de préstamo. Cada paso del proceso de solicitud puede definirse como un estado. Aunque el cliente suele ver una pequeña lista de estados simplificados de su solicitud "+
"(pendiente, en revisión, aceptada y rechazada), puede haber otros pasos implicados internamente. En cada uno de estos pasos, la solicitud se asignará a una persona distinta y puede tener requisitos únicos. El sistema "+
"está diseñado de tal forma que al final de la tramitación en un estado, éste se actualiza al siguiente de la fila, y se inicia el siguiente conjunto de pasos pertinente.")