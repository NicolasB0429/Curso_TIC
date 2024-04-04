
'use strict'
console.log('\n El parámetro Rest reúne todos los argumentos restantes en una matriz')
const average = (first = 0, ...following) => {
  let sum = first 
  for (const value of following) { sum += value }
  return sum / (1 + following.length)
}
console.log('average(1, 7, 2, 9):', average(1, 7, 2, 9)) // 4.75

console.log('\n Math.max acepta un número variable de parámetros')
let result = Math.max(3, 1, 4, 1, 5, 9, 2, 6) 
console.log('result:', result) 

console.log('\n no trabaja con un arreglo')
let numbers = [1, 7, 2, 9]
result = Math.max(numbers) 
console.log('result arreglo:', result) 

console.log('// pero si con el operador spead')
result = Math.max(...numbers) 
console.log('result: rest', result) 

console.log("\n Diferencia entre 'rest' ... y 'spread' ...")
Math.max(...numbers)                      // operador 'spread' : argumento en la llamada de una función
const max = (...values) => { /* body */}  // Declaración de un parámetro 'rest'

console.log("\n Funciones sin parametro 'rest' pueden ser llamadas con 'spread'")
{
  const average = (x, y) => (x + y) / 2
  result = average(...numbers)
  console.log('result:', result) // 4
}
console.log("\n 'spread' en la inicialización de un arreglo")
let moreNumbers = [1, 2, 3, ...numbers] 
console.log('moreNumbers:', moreNumbers) 

console.log("\n No es lo mismo una declaración 'rest' en extracción")
let [first, ...following] = numbers // declaración 'rest'
console.log('first:', first) 
console.log('following:', following) 

console.log("\n 'spread' también funciona dentro de una cadena como si fuera arreglo de caracteres")
let message = 'Esta es una prueba'
let characters = [...message]
console.log('characters:', characters) 

console.log("\n Parámetros 'rest' tambié trabajan con la sintaxis de la función")
{
  function average(first = 0, ...following) { let sum = first 
    for (const value of following) { sum += value }
    return sum / (1 + following.length)
  }
  console.log('average(1, 7, 2, 9):', average(1, 7, 2, 9)) // 4.75
}
