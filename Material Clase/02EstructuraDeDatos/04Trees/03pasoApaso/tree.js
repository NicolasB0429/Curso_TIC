import { TreeBinary } from "./TreeBinary.mjs";

let dodo = new TreeBinary();
/* 
dodo.add(20)
dodo.add(10)
dodo.add(30)
dodo.add(40)
 */
/*
console.log("----------------------------");
let cantidad = 10;
for (let i = 0; i < cantidad; i++) {
  let random = Math.floor(Math.random() * cantidad * 10);
  dodo.add(random);
}
console.log("pre", dodo.preOrder());
console.log("in", dodo.inOrder());
console.log("post", dodo.postOrder());
console.log("----------------------------");
console.log("----------------------------");
*/
let data = [24, 6, 2, 4, 61, 50, 54, 35,
   75, 85, 78, 63, 90, 93, 94, 86, 7];
let dado = new TreeBinary();
dado.addArray(data);
console.log("preOriginal", dado.preOrder());
/*
console.log("in", dado.inOrder());
console.log("post", dado.postOrder());
console.log("----------------------------");
 */
/*
console.log('find',dado.findNode(50))
console.log("----------------------------");
console.log("find", dado.findParent(35));
 */
/*
console.log('borrado -------------------------------')
console.log('hoja:4',dado.delete(4))
console.log("pre", dado.preOrder());
*/
/* 
console.log("borrado -------------------------------");
console.log("un solo hijo:2", dado.delete(2));
console.log("pre", dado.preOrder());
*/
/*
console.log("borrado -------------------------------");
console.log("dos hijos:24", dado.delete(24));
console.log("pre", dado.preOrder());
*/