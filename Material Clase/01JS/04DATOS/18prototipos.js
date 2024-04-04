let prototipoFunciones = {
  accion(parametro) {
    console.log(`El elemento ${this.color} sirve para ${parametro}`);
  },
};

let elementoNegro = Object.create(prototipoFunciones);
elementoNegro.color = "negro";
elementoNegro.accion("el techo y la azotea");
console.log(elementoNegro);
