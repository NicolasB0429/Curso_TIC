import { FiguraGeometrica } from "./FiguraGeometrica.mjs";
import { Rectangulo } from "./Rectangulo.mjs";

export class Cuadrado extends Rectangulo {
  constructor(lado, nombre) {
    super(lado, lado, nombre);
  }
  
  toString = () => {
    return `area ${this.nombre}: ${this.area()}`;
  };

}
