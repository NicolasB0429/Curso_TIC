import { TreeBinary } from "./TreeBinary.mjs";

let dodo = new TreeBinary();
/* 
dodo.add(20)
dodo.add(10)
dodo.add(30)
dodo.add(40)

console.log("----------------------------");
let cantidad = 10;
for (let i = 0; i < cantidad; i++) {
  let random = Math.floor(Math.random() * cantidad * 10);
  dodo.add(random);
}
console.log("pre", dodo.preOrder());
console.log("in", dodo.inOrder());
console.log("post", dodo.postOrder());
*/
console.log("----------------------------");
let data = [24, 6, 2, 61, 50, 35, 89, 87, 63, 93];
let dado = new TreeBinary();
dado.addArray(data);
console.log("pre", dado.preOrder());
console.log("in", dado.inOrder());
console.log("post", dado.postOrder());
console.log("----------------------------");
// console.log('find',dado.findNode(50))