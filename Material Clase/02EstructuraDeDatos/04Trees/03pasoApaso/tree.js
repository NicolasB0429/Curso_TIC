import { TreeBinary } from "./TreeBinary.mjs";

/*
let dodo = new TreeBinary();

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
   75, 28, 27, 63, 85, 78, 90, 93, 94, 86, 7];
let dado = new TreeBinary();
dado.addArray(data);
/*
console.log("preOrder\n", dado.preOrder());

console.log("nodo\n", dado.findNode(2));
console.log("nodo\n", dado.findNode(4));
console.log("padre\n", dado.findParent(2));
console.log("padre\n", dado.findParent(4));

console.log("nodo\n", dado.findNode(63));
console.log("padre\n", dado.findParent(63));

console.log('borrado 4:\n',dado.delete(4))
console.log("preOrder\n", dado.preOrder());
console.log("borrado 63:\n", dado.delete(63));
console.log("preOrder\n", dado.preOrder());
*/
/*
console.log("nodo 2\n", dado.findNode(2));
console.log("padre 2\n", dado.findParent(2));
console.log("borrado 2:\n", dado.delete(2));
console.log("preOrder\n", dado.preOrder());
console.log("padre 4\n", dado.findParent(4));

console.log("nodo 93\n", dado.findNode(93));
console.log("padre 93\n", dado.findParent(93));
console.log("borrado 93:\n", dado.delete(93));
console.log("preOrder\n", dado.preOrder());
console.log("padre 94\n", dado.findParent(94));
*/

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

console.log("borrado -------------------------------");
console.log("pre", dado.preOrder());
console.log("dos hijos:75", dado.delete(75));
console.log("pre", dado.preOrder());


console.log("borrado -------------------------------");
console.log("pre", dado.preOrder());
console.log("dos hijos:24", dado.delete(24));
console.log("pre", dado.preOrder());

console.log("borrado -------------------------------");
console.log("pre", dado.preOrder());
console.log("dos hijos:61", dado.delete(61));
console.log("pre", dado.preOrder());
