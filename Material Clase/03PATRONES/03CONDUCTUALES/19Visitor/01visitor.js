// Visitor class that defines the methods to be called when visiting each place
function Reader(name, cash) {
  this.name = name;
  this.cash = cash;

  // Los métodos de visita pueden acceder al objeto lugar e invocar las funciones disponibles
  this.visitBookstore = function (bookstore) {
    console.log(this.name + " visitó la librería y compró un libro");
    bookstore.purchaseBook(this);
  };

  this.visitLibrary = function () {
    console.log(this.name + " visitó la biblioteca y leyó un libro");
  };

  // Función auxiliar para demostrar una transacción
  this.pay = function (amount) {
    this.cash -= amount;
  };
}

// Clase de lugar para una biblioteca
function Library() {
  this.accept = function (reader) {
    reader.visitLibrary();
  };
}

// Clase de lugar para una librería que permite comprar libros
function Bookstore() {
  this.accept = function (reader) {
    reader.visitBookstore(this);
  };

  this.purchaseBook = function (visitor) {
    console.log(visitor.name + " bought a book");
    visitor.pay(8);
  };
}

function run() {
  // Crear un lector (el visitante)
  let reader = new Reader("Rick", 30);

  // Crear los lugares
  let booksInc = new Bookstore();
  let publicLibrary = new Library();

  // El lector visita la biblioteca
  publicLibrary.accept(reader);

  console.log(reader.name + " tiene $" + reader.cash);

  // El lector visita la librería
  booksInc.accept(reader);

  console.log(reader.name + " tiene $" + reader.cash);
}

run();

console.log(
  "El patrón Visitor pretende ayudarte a que tu código sea extensible. La idea es proporcionar un método en la clase que permita a los objetos de otras clases realizar cambios en los objetos " +
    " de la clase actual con facilidad. Los otros objetos visitan el objeto actual (también llamado objeto lugar), o la clase actual acepta los objetos visitantes, y el objeto lugar gestiona adecuadamente " +
    "la visita de cada objeto externo."
);
