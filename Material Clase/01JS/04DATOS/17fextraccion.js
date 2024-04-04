'use strict'

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Dos formas iguales de extraer atributos
let resultado1 = Object.assign(producto, medidas);

console.log(resultado1);

// Spread Operator o Rest Operator

resultado2 = { ...producto, ...medidas};
console.log(resultado2);