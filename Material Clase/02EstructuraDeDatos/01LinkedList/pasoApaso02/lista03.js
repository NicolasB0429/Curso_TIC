import { LinkedList } from "./LinkedList.mjs";
import { Objeto } from "./Objeto.mjs";

let datos = [10,'diez',20,'veinte',30,'treinta',40,'cuarenta',50,'cincuenta']

let objeto = new Objeto(datos[0], datos[1]);

let listaObjeto = new LinkedList(objeto)

for(let i = 2; i < datos.length; i += 2){
    listaObjeto.push(new Objeto(datos[i],datos[i+1]))
}

console.log(listaObjeto.toString())
console.log(listaObjeto.search(10))
console.log(listaObjeto.search('diez'));
console.log(listaObjeto.search(11));

let enteros = [10,20,30,40,50,60,70,80,90]
let listaEnteros = LinkedList.fromArreglo(enteros)
console.log(listaEnteros.toString())
