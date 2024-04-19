import { FiguraGeometrica } from "./FiguraGeometrica.mjs";

export class Circulo extends FiguraGeometrica {
  radio;

  constructor(radio, nombre) {
    super(nombre);
    this.radio = radio;
  }

  area = () => {
    return Math.PI * this.radio * this.radio;
  };

  toString = () => {
    return `area ${this.nombre}: ${this.area()}`;
  };
}
