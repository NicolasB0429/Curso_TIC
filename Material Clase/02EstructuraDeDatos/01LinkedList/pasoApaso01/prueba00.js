import { LinkedList } from "./LinkedList.mjs";

let lista = new LinkedList(100)
lista.addItem(200)
lista.addItem(300);
lista.addItem(400);
lista.addItem(500);
/* 
console.log(lista)
console.log(lista.head.next);
console.log(lista.head.next.next);

console.log("busca 300", lista.findItem(300));
console.log("busca 305", lista.findItem(305));
*/
/*
console.log(lista.toString())
console.log('borrado:',lista.deleteItem(300))
console.log(lista.toString());
console.log("borrado:", lista.deleteItem(500));
console.log(lista.toString());

console.log('después',lista.findAfterItem(100))
console.log("antes", lista.deleteItem(100));
console.log(lista.toString());
*/
/* 
let datos = [10,20,50,30,40,60,]
lista = new LinkedList(datos[0])
for(let i = 1; i < datos.length; i++){
    lista.addItem(datos[i])
}
console.log(lista.toString());

datos = [11, 23, 34, 56, 76, 87, 98, 98];
lista = LinkedList.fromArray(datos)
lista.push(50);
console.log(lista.toStringH());
console.log(lista.length())
 */

/* 
let limite = 10
let i = 1
for(; ;){
    console.log(i)
    i++
    if(i > limite)
        break
}
console.log(i)
for (let j = 1; j < limite; j++) {
  console.log(j);
}
console.log(j)
 */