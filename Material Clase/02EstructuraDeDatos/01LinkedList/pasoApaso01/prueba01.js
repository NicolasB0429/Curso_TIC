import { LinkedList } from "./LinkedList.mjs";

let lista = new LinkedList(3);
lista.push(2);
lista.push(1);
lista.tail(4);
lista.tail(5);
console.log("lista", lista.toString());

let listaArray = LinkedList.fromArray([1, 2, 3, 4, 5, 6, 7]);
console.log("lista", listaArray.toString());
console.log("lista", listaArray.length());
console.log("lista", lista.length());

let objetos = [
  {
    value: 1,
    data: "data1",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 2,
    data: "data2",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 3,
    data: "data3",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 4,
    data: "data4",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 5,
    data: "data5",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 6,
    data: "data6",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 7,
    data: "data7",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 8,
    data: "data8",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
  {
    value: 9,
    data: "data9",
    toString: function () {
      return ` ${this.value} : ${this.data} `;
    },
  },
];

let listaO = LinkedList.fromArray(objetos);
console.log('listaO',listaO.toString());
console.log('listaO',listaO.toStringV());
