// Iterador para una lista compleja con métodos personalizados
function Iterator(list) {

  this.list = list;
  this.index = 0;

  // Obtener el elemento actual
  this.current = function () {
    return this.list[this.index];
  };

  // Obtener el siguiente elemento de la lista
  this.next = function () {
    return this.list[this.index++];
  };

  // Comprobar si hay otro elemento en la lista
  this.hasNext = function () {
    return this.index < this.list.length;
  };

  // Restablecer el índice para que apunte al elemento inicial
  this.resetIndex = function () {
    this.index = 0;
  };

  // Ejecuta un bucle forEach sobre la lista
  this.forEach = function (callback) {
    for (
      let element = this.next();
      this.index <= this.list.length;
      element = this.next()
    ) {
      callback(element);
    }
  };
}

function run() {
  // Una lista compleja con elementos de varios tipos de datos
  let list = ["Lorem ipsum", 9, ["lorem ipsum dolor", true], false];

  // Crea una instancia del iterador y pásale la lista
  let iterator = new Iterator(list);

  // Registrar el primer elemento
  console.log('current',iterator.current());
  // Salida: Lorem ipsum

  // Imprime todos los elementos de la lista utilizando los métodos del iterador
  while (iterator.hasNext()) {
    console.log('while',iterator.next());
    /**
     * Salida:
     * Lorem ipsum
     * 9
     * [ 'lorem ipsum dolor', true ]
     * false
     */
  }

  // Restablecer el índice del iterador al primer elemento
  iterator.resetIndex();

  // Use the custom iterator to pass an effect that will run for each elemen // Use the custom iterator to pass an effect that will run for each item in the list.
  iterator.forEach(function (element) {
    console.log('ForEach',element);
  });
  /**
   * Salida:
   * Lorem ipsum
   * 9
   * [ 'lorem ipsum dolor', true ]
   * false
   */
}


console.log("El patrón Iterator es bastante sencillo y se utiliza con mucha frecuencia en casi todos los lenguajes modernos orientados a objetos. Si te encuentras ante la tarea de recorrer "+
" una lista de objetos que no son todos del mismo tipo, los métodos de iteración normales, como un bucle for, pueden resultar bastante complicados — sobre todo si también estás escribiendo lógica de negocio dentro de ellos. "+
"El patrón Iterator puede ayudarte a aislar la lógica de iteración y procesamiento de tus listas de la lógica de negocio principal.\n\n")


run();
