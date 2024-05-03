// La clase de boletín que puede enviar mensajes a sus suscriptores
function Newsletter() {
  // Mantener una lista de abonados
  this.subscribers = [];

  // Suscribir a un lector añadiéndolo a la lista de suscriptores
  this.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
  };

  // Desuscribir a un lector añadiéndolo a la lista de suscriptores
  this.unsubscribe = function (subscriber) {
    this.subscribers = this.subscribers.filter(function (element) {
      if (element !== subscriber) return element;
    });
  };

  // Publicar una entrada llamando a la función de recepción de todos los suscriptores
  this.publish = function (post) {
    this.subscribers.forEach(function (element) {
      element.receiveNewsletter(post);
    });
  };
}

// La clase lectora que puede suscribirse y recibir actualizaciones de boletines informativos
function Reader(name) {
  this.name = name;

  this.receiveNewsletter = function (post) {
    console.log("Boletín recibido por " + name + "!: " + post);
  };
}

function run() {
  // Crear dos lectores
  let rick = new Reader("ed");
  let morty = new Reader("morty");

  // Cree su boletín de noticias
  let newsletter = new Newsletter();

  // Suscribir a un lector al boletín
  newsletter.subscribe(rick);

  // Publicar el primer mensaje
  newsletter.publish("This is the first of the many posts in this newsletter");

  // Suscribir a otro lector al boletín
  newsletter.subscribe(morty);

  // Publicar la segunda entrada
  newsletter.publish("This is the second of the many posts in this newsletter");

  // Dar de baja al primer lector
  newsletter.unsubscribe(rick);

  // Publicar la tercera entrada
  newsletter.publish("This is the third of the many posts in this newsletter");
  
}

run();
/*
console.log("El patrón Observer proporciona una solución alternativa al problema de la interacción multiobjeto. En lugar de permitir que cada objeto se comunique entre sí a través de un mediador designado, "+
"el patrón Observer les permite observarse mutuamente. Los objetos están diseñados para emitir eventos cuando intentan enviar datos o control, y otros objetos que están «escuchando» estos eventos pueden "+
" entonces recibirlos e interactuar basándose en su contenido.")
*/
