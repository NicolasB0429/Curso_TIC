// node variables.js

//'use strict'

console.log('\n Declaración de Variable')
let counter = 0

console.log('\n Declaración de variable sin tipo')
counter = 'zero'

let x // Se declara pero NO se inicializa
console.log('x:', x) 

console.log('\n Declaración de una constante')
const PI = 3.141592653589793

console.log('\n Tratar de modificar una constante genera un error')
try {
  PI = 3
} catch (exception) {
  console.log('Error:', exception.message) // Asignación a una variable constante
}

/* Reglas de Oro
1. Las variables se declaran con LET ó CONST, no con VAR
*/
var contador  = 0
cuenta = 1
console.log("con var: "+contador+" : "+typeof contador)
console.log("cuenta: "+cuenta+" : "+typeof cuenta)
/*
2. Usar modo estricto (STRICT MODE): "use strict"
3. Tener cuidado con los tipos de las variables, NO confiarse de la conversión de tipos
*/
console.log("operacion 2*['21']: "+2*['21'] + " : "+ typeof 2*['21'])
console.log("operacion 2+['40']: "+2+['40'] + " : "+ typeof 2+['40'])
/*
4. Usar los prototipos, para el uso de clases, constructores y métodos
5. Evitar usar THIS fuera de constructores y métodos
*/

console.log('\n Caracteres Unicode pueden ser usados como nombres')
const π = 3.141592653589793
