import { LinkedList } from "./LinkedList.mjs";

let dodo = new LinkedList("primero");
dodo.push("segundo");
dodo.push("tercero");
dodo.tail("cero");
let puntero = dodo.head;
console.log(dodo.toString());
console.log(dodo.length());
