import { LinkedList } from "./LinkedList.mjs";

let cadena = [
  {
    valor: "cadena1",
    data: 23,
    toString: function () {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
  },
  {
    valor: "cadena2",
    data: 24,
    toString: function () {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
  },
  {
    valor: "cadena3",
    data: 25,
    toString: function () {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
  },
  {
    valor: "cadena4",
    data: 26,
    toString: function () {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
  },
  {
    valor: "cadena5",
    data: 27,
    toString: function () {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
  },
];

let listaCadena = new LinkedList(cadena[0]);
for (let i = 1; i < cadena.length; i++) {
  listaCadena.push(cadena[i]);
}
// console.log(listaCadena.toString())

let enteros = [3, 7, 1, 9, 6, 3, 9, 2, 0];
let listaEnteros = new LinkedList(23);
for (let i = 1; i < enteros.length; i++) {
  listaEnteros.push(enteros[i]);
}
let busca = listaEnteros.find(9);
if (busca != null) console.log(busca.toString());
else console.log("número no encontrado");

busca = listaEnteros.find(1009);
if (busca != null) console.log(busca.toString());
else console.log("número no encontrado");
