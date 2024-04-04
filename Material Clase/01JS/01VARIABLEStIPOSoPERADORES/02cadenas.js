/*
caracteres especiales: precedido por un backslash: \
impresión de caracteres especiales: precedido \\
carácteres Unicode: https://en.wikipedia.org/wiki/List_of_Unicode_characters
*/

console.log("ejemplo de una cadena con\nun salto de línea ó retorno de carro")
console.log("se inserta una nueva línea a través del caracter: \\n")
console.log("impresión de carácters Unicode: las vocales tildadas: ", 
    '\u00E1',", ",'\u00E9',", ",'\u00ED',", ",'\u00F3',", ",'\u00FA')/*ASCCI */
console.log("las cadenas se pueden concatenar: ", 
    "esta cadena uno"+" se concatena con esta cadena dos") /*Concatenar Cadenas*/

/*
    Templates
*/
console.log(`ejemplo de un template: 100*2 = ${100*2}`) /* Para hacer una operación */
let numero = 1000
console.log(`ejemplo de un template: ${numero}*2 = ${numero*2}`)


