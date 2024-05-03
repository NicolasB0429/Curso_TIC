// La clase memento que puede contener una instantánea de la clase Originador - documento
function Text(contents) {
  // Contenido del documento
  this.contents = contents;

  // Función accesoria para contenidos
  this.getContents = function () {
    return this.contents;
  };

  // Función auxiliar para calcular el recuento de palabras del documento actual
  this.getWordCount = function () {
    return this.contents.length;
  };
}

// La clase originadora que contiene la última versión del documento
function Document(contents) {
  // Titular del recuerdo, es decir, el texto del documento
  this.text = new Text(contents);

  // Función para guardar nuevos contenidos como recuerdo
  this.save = function (contents) {
    this.text = new Text(contents);
    return this.text;
  };

  // Función para volver a una versión anterior del texto utilizando un recuerdo
  this.restore = function (text) {
    this.text = new Text(text.getContents());
  };

  // Función auxiliar para obtener el memento actual
  this.getText = function () {
    return this.text;
  };

  // Función auxiliar para obtener el recuento de palabras del documento actual
  this.getWordCount = function () {
    return this.text.getWordCount();
  };
}

// La clase que provee funciones helper para modificar el documento

function DocumentManager(document) {
  // Titular para el ordenante, es decir, el documento
  this.document = document;

  // Array para mantener una lista de recuerdos
  this.history = [];

  // Añadir el estado inicial del documento como primera versión del documento
  this.history.push(document.getText());

  // Función auxiliar para obtener el contenido actual de los documentos
  this.getContents = function () {
    return this.document.getText().getContents();
  };

  // Función auxiliar para obtener el número total de versiones disponibles para el documento
  this.getVersionCount = function () {
    return this.history.length;
  };

  // Función auxiliar para obtener el historial completo del documento
  this.getHistory = function () {
    return this.history.map(function (element) {
      return element.getContents();
    });
  };

  // Función para sobrescribir el contenido del documento
  this.overwrite = function (contents) {
    let newVersion = this.document.save(contents);
    this.history.push(newVersion);
  };

  // Función para añadir contenido nuevo al contenido existente del documento
  this.append = function (contents) {
    let currentVersion = this.history[this.history.length - 1];
    let newVersion;
    if (currentVersion === undefined) newVersion = this.document.save(contents);
    else
      newVersion = this.document.save(currentVersion.getContents() + contents);
    this.history.push(newVersion);
  };

  // Función para borrar todo el contenido del documento
  this.delete = function () {
    this.history.push(this.document.save(""));
  };

  // Función para obtener una versión determinada del documento
  this.getVersion = function (versionNumber) {
    return this.history[versionNumber - 1];
  };

  // Función para deshacer el último cambio
  this.undo = function () {
    let previousVersion = this.history[this.history.length - 2];
    this.document.restore(previousVersion);
    this.history.push(previousVersion);
  };

  // Función para revertir el documento a una versión anterior
  this.revertToVersion = function (version) {
    let previousVersion = this.history[version - 1];
    this.document.restore(previousVersion);
    this.history.push(previousVersion);
  };

  // Función auxiliar para obtener el recuento total de palabras del documento
  this.getWordCount = function () {
    return this.document.getWordCount();
  };
}

function run() {
  // Crear un documento
  let blogPost = new Document("");

  // Crea un manejador para el documento
  let blogPostManager = new DocumentManager(blogPost);

  // Cambio 1 adiciona texto
  blogPostManager.append("Esta es una prueba!");
  console.log(blogPostManager.getContents());

  // Cambio 2 adiciona más texto
  blogPostManager.append(" Adición de texto:");
  console.log(blogPostManager.getContents());

  // Cambio 3 sobre escribe el texto con otro
  blogPostManager.overwrite("Este texto sobreescribe lo que hay");
  console.log(blogPostManager.getContents());

  // Cambo 4 borra el contenido del texto
  blogPostManager.delete();
  console.log(blogPostManager.getContents());

  // Se obtiene una versión antigua del documento
  console.log(blogPostManager.getVersion(2).getContents());

  // Cambio 5 se obtiene la versión vieja
  blogPostManager.revertToVersion(3);
  console.log(blogPostManager.getContents());

  // Cuenta las palabras
  console.log(blogPostManager.getWordCount());

  // Cambio 6 deshace el último cambio
  blogPostManager.undo();
  console.log(blogPostManager.getContents());

  // Obtiene el número de versiones del documento
  console.log(blogPostManager.getVersionCount());

  // Obtiene la historia completa del documento
  console.log(blogPostManager.getHistory());
}

run();
/* 
console.log("Versionar objetos es otro problema común que se presenta cuando se desarrolla aplicaciones. " +
"Hay muchos casos de uso en los que se necesita mantener el historial de un objeto, facilitar las reversiones y, a veces, incluso revertir. Escribir la lógica para este tipo de aplicaciones puede ser difícil. "+
"El patrón de diseño Memento está pensado para resolver este problema fácilmente. Un memento se considera una instantánea de un objeto en un momento determinado. El patrón de diseño Memento utiliza estos "+
"mementos para conservar instantáneas del objeto a medida que se modifica con el tiempo. Cuando se necesite volver a una versión anterior, sólo se tiene que recuperar el memento correspondiente.")
 */