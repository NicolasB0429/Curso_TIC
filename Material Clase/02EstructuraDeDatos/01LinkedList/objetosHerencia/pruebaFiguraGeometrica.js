import { FiguraGeometrica } from "./FiguraGeometrica.mjs";
import { Rectangulo } from "./Rectangulo.mjs";
import { Cuadrado } from "./Cuadrado.mjs";
import { Triangulo } from "./Triangulo.mjs";
import { Circulo } from "./Circulo.mjs";
import { LinkedList } from "../modulos/LinkedList.mjs";

let cantidad = 10;
let listaFiguras = new LinkedList(new FiguraGeometrica("general"));
let valor;
for (let i = 0; i < cantidad; i++) {
  valor = Math.floor((Math.random() * 4) + 1);
  // console.log("valor", valor);
  switch (valor) {
    case 1:
      listaFiguras.push(new Rectangulo(valor+1, 3, "rectangulo"));
      break;
    case 2:
      listaFiguras.push(new Cuadrado(valor+2, "cuadrado"));
      break;
    case 3:
      listaFiguras.push(new Triangulo(2, valor+3, "triangulo"));
      break;
    case 4:
      listaFiguras.push(new Circulo(valor+1, "circulo"));
      break;
    default:
      console.log("valor fuera de rango: ", valor);
      break;
  }
}

console.log(listaFiguras.toString());

let mayor = listaFiguras.resume(
  (elemento,referencia) => {    
    if (elemento.area() > referencia && elemento.area() != null){
      referencia = elemento.area()
    }
    return referencia
  },
  0)

console.log('mayor',mayor)

let menor = listaFiguras.resume(
  (elemento, referencia) => {
    if (elemento.area() < referencia && elemento.area() != null) {
      referencia = elemento.area();
    }
    return referencia;
},Infinity);

console.log('menor',menor);

let sumaAreas = listaFiguras.resume(
  (elemento,acumulador) => {
    acumulador += elemento.area()
    return acumulador
  },0)

console.log('suma',sumaAreas)  

listaFiguras.forEach(
  (elemento) => {
    console.log(`nombre: ${elemento.nombre} : area ${elemento.area()}`)
})


