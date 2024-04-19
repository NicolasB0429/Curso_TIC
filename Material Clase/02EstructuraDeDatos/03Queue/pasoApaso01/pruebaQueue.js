import { Queue } from "./Queue.mjs"

let cola1 = new Queue()
cola1.encole(1)
cola1.encole(2);
cola1.encole(3);
cola1.encole(4);
cola1.encole(5);
console.log(cola1.toString())
console.log(cola1.length())
console.log(cola1.desencole())
console.log(cola1.desencole());
console.log(cola1.desencole());
console.log(cola1.desencole());
console.log(cola1.toString());
let arreglo = [10,40,30,20,50,60,70,80,10,20]
let cola2 = Queue.fromArray(arreglo)
console.log(cola2.toString());