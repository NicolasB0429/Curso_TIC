import { FiguraGeometrica } from "./FiguraGeometrica.mjs";

export class Triangulo extends FiguraGeometrica {
  base;
  altura;

  constructor(base, altura, nombre) {
    super(nombre);
    this.base = base;
    this.altura = altura;
  }

  area = () => {
    return (this.base * this.altura) / 2;
  };

  toString = () => {
    return `area ${this.nombre}: ${this.area()}`;
  };
}
