
'use strict'
console.log('\n Instrucción switch')
let algunaExpresion = ''
let descripcion = ''
switch (algunaExpresion) {
  case 0:
    descripcion = 'cero'
    break
  case false:
  case true:
    descripcion = 'booleano'
    break
  case '':
    descripcion = 'cadena vacía'
  default:
    descripcion = 'cualquier cosa'
}
console.log('descripción:', descripcion)
