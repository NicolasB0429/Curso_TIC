
'use strict'

console.log('\n for estándar')
for (let i = 1; i <= 10; i++)
  console.log(i)

let a = [2, 3, 5, 7, 11, 13]
console.log('\n Recorriendo en forma inversa')
for (let i = a.length - 1; i >= 0; i--)
  console.log(a[i])

console.log('\n Varias Variables')
for (let i = 0, j = a.length - 1; i < j; i++, b) {
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}
console.log('a:', a) // [13, 11, 7, 5, 3, 2]

console.log('\n for of')
let arr = [, 2, , 4]
arr[9] = 100
for (let element of arr)
  console.log(element) // Imprime undefined, 2, undefined, 4, undefined (5 times), 100

console.log('\n "for of" visita todos los Unicode de la cadena')
let greeting = 'Hello 🌐'
for (const c of greeting)
  console.log(c) // Prints H e l l o, a space, and 🌐

console.log('\n for in')
let obj = { name: 'Pedro', age: 42, altura: 12, peso: 50, trabajo: false }
 obj = { 1: 'Pedro', 2: 42, 3: 12, 4: 50, 5: false }
for (const indice in obj) 
  console.log(`${indice}: ${obj[indice]}`)

console.log('\n "for in" escapa los elementos perdidos')
let numbers = [1, 2, , 4]
numbers[99] = 100
for (const i in numbers)
  console.log(`${i}: ${numbers[i]}`)

console.log('\n Evitar expresiones aritméticas con índice "for in"')
numbers[1] = 1
for (const i in numbers)
  if (numbers[i] === numbers[i + 1]) // i + 1 is '01', '11', y así sucesivamente
    console.log('`duplicado a ${i}`:', `duplicado a ${i}`) // duplicado a 0

// Solucion, convertir el indice a número
for (const i in numbers)
  if (numbers[i] === numbers[parseInt(i) + 1])
    console.log('`duplicado a ${i}`:', `duplicado a ${i}`) 
 
console.log('\n "for in" refleja propiedades, no índices')
numbers.lucky = true
for (const i in numbers) // i es '0', '1', '3', '99', 'lucky'
  console.log(`${i}: ${numbers[i]}`)

console.log('\n Caution: "for in" en cadenas indexa caracter por caracter')
{
  let greeting = 'Prueba 🌐'
  for (const i in greeting)
    console.log(greeting[i]) // P r u e b a, espacio, y dos símbolos
}

