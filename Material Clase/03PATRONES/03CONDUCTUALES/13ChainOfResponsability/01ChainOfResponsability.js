// Clase de queja que almacena el título y la gravedad de una queja
// Un valor más alto de gravedad indica una queja más grave
function Complaint(title, severity) {
  this.title = title;
  this.severity = severity;
}

// Gestor de base que recibe todas las reclamaciones
function Representative() {
  // Si este gestor no puede tramitar la reclamación, se reenviará al siguiente nivel
  this.nextLevel = new Management();

  this.handleComplaint = function (complaint) {
    if (complaint.severity === 0)
      console.log(
        "El representante resolvió la siguiente reclamación: " + complaint.title
      );
    else this.nextLevel.handleComplaint(complaint);
  };
}

// Gestor de segundo nivel para tramitar reclamaciones de gravedad 1
function Management() {
  // Si este gestor no puede tramitar la reclamación, se reenviará al siguiente nivel
  this.nextLevel = new Leadership();

  this.handleComplaint = function (complaint) {
    if (complaint.severity === 1)
      console.log(
        "La dirección resolvió la siguiente reclamación: " + complaint.title
      );
    else this.nextLevel.handleComplaint(complaint);
  };
}

// Gestor de máximo nivel que gestiona todas las reclamaciones no tramitadas hasta el momento.
function Leadership() {
  this.handleComplaint = function (complaint) {
    console.log(
      "La gerencia resolvió la siguiente reclamación: " + complaint.title
    );
  };
}

function run() {
  // Crear una instancia del controlador de nivel básico
  let customerSupport = new Representative();

  // Crear múltiples reclamaciones de gravedad variable y pasarlas al gestor base.

  let complaint1 = new Complaint("El botón Enviar no funciona", 0);
  customerSupport.handleComplaint(complaint1);
  // Resultado: Representante resolvió la siguiente queja: El botón de enviar no funciona

  let complaint2 = new Complaint("Pago fallido", 1);
  customerSupport.handleComplaint(complaint2);
  // Resultado: La dirección resolvió la siguiente reclamación: Pago fallido

  let complaint3 = new Complaint("Falta del empleado", 2);

  customerSupport.handleComplaint(complaint3);
  // Resultado: La dirección resolvió la siguiente queja: Falta del empleado
}

console.log(
  "El patrón Chain of Responsibility es uno de los patrones de diseño de comportamiento más sencillos. Resulta útil cuando se diseña la lógica de operaciones que pueden ser gestionadas por varios controladores. " +
    "De forma similar a cómo funciona el escalado de incidencias en los equipos de soporte, el control pasa a través de una cadena de manejadores, y el manejador responsable de realizar la acción completa la operación. " +
    "Este patrón de diseño se utiliza a menudo en el diseño de IU, donde varias capas de componentes pueden gestionar un evento de entrada del usuario, como un toque o un deslizamiento.\n\n"
);

run();


