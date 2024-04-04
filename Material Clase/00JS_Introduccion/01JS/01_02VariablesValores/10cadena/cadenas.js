
'use strict'
// secuencia Escape 
let s = '\\\'\'\\\n'
console.log('s:', s) // \''\
console.log('s.length:', s.length) // 5
// Cadenas pueden tener caracteres Unicode
// https://home.unicode.org/

let unicodeEjemplo = 'Unicode 🌐'
console.log('unicodeEjemplo:', unicodeEjemplo) 
// Caracteres sobre \u{FFFF} requieren dos códigos
// https://en.wikipedia.org/wiki/UTF-16

unicodeEjemplo = 'Unicode \u{10437}'
console.log('unicodeEjemplo:', unicodeEjemplo) // Hello 🌐
console.log('unicodeEjemplo.length:', unicodeEjemplo.length) // 8
console.log('unicodeEjemplo[0]:', unicodeEjemplo[0]) // U
console.log('unicodeEjemplo[8]:', unicodeEjemplo[8]) // �
console.log('unicodeEjemplo[9]:', unicodeEjemplo[9]) // �
