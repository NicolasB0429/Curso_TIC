import { FiguraGeometrica } from "./FiguraGeometrica.mjs";

export class Rectangulo extends FiguraGeometrica {
  ancho;
  largo;

  constructor(ancho, largo, nombre) {
    super(nombre);
    this.ancho = ancho;
    this.largo = largo;
  }

  area = () => {
    return this.ancho * this.largo;
  };

  toString = () => {
    return `area ${this.nombre}: ${this.area()}`;
  };

}
