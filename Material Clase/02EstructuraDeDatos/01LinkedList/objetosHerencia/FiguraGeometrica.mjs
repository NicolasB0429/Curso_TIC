export class FiguraGeometrica {
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }

  toString = () => {
    return `Nombre: ${this.nombre} `;
  };

  get nombre() {
    return this.nombre;
  }

  area = () => {
    return null
  }
}
