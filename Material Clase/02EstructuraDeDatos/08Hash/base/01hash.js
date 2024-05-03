import { HashTable } from "./HashTable.mjs";

let datos = [
  { key: 79, value: 250 }, //2 % 10 = 2
  { key: 58, value: 510 },
  { key: 279, value: 980 },
  { key: 324, value: 590 }, //3 % 10 = 3
  { key: 10, value: 60 },
  { key: 42, value: 550 },
  { key: 196, value: 700 },
  { key: 8, value: 220 },
  { key: 495, value: 840 },
  { key: 1500, value: 590 },
  { key: 8435435, value: 3220 }, //7 % 10 = 7
  { key: 49534534534543, value: 1840 }, //15 % 10 = 5
  { key: 150034534, value: 1590 }, //9 % 10 = 9
];

let random = () => {
  return Math.floor(Math.random() * 1000);
};
let tabla = new HashTable(10);

let limite = 10;
limite =  1000
let key = 0;
let value = 0;
for (let i = 0; i < limite; i++) {
  
  key = random()*(5+i)
  value = random()*10
  /*
  console.log('i',i,'k',key,' : v',value)
  ({ key, value } = datos[i]);
  */
  tabla.add(key, value);
  
}

/*
console.log(tabla.print());
console.log(tabla)
console.log(tabla.remove(324))
console.log(tabla.remove(8));
*/
console.log(tabla);