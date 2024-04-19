
'use strict'
console.log('\n Operadores Booleanos')
const a = [1, 2, 3]
let i = 3
if (i < a.length && a[i] > 0) 
  i++
console.log('i:', i) 

console.log('\n Otro ejemplo')
console.log('0 && \'Harry\':', 0 && 'Harry') 
console.log('0 || \'Harry\':', 0 || 'Harry') 

console.log('\n Otro ejemplo')
let arg = 'Fred'
let result = arg && arg.toString()
console.log('result:', result) 
arg = 0
result = arg && arg.toString()
console.log('result:', result) 

console.log('\n Otro ejemplo')
let defaultValue = 'N/A'
arg = '{ "nombre": "Pedro" }'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 
arg = 'null'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 
arg = '0'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 

console.log('\n Usando el operador ?? ')
arg = '{ "nombre": "Pablo" }'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) 
arg = 'null'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) 
arg = '0'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) 

console.log('\n El operador ?. ')
let persona = undefined
let recipiente = persona?.name
console.log('recipiente:', recipiente) 

console.log('\n Encadenando operadores ?.')
persona = { nombre: 'Fred' }
let longitud = persona?.nombre?.length
console.log('longitud:', longitud) 
