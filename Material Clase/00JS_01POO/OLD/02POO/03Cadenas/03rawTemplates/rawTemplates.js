
'use strict'

console.log('// En una raw string, backslashes no son caracteres de escape')
/*
  String.raw(strings)
  String.raw(strings, sub1)
  String.raw(strings, sub1, sub2)
  String.raw`templateString`
*/

const filePath = String.raw`C:\Development\profile\about.html`;
console.log(`El archivo fué cargado desde: ${filePath}`);

let path = String.raw`c:\users\nate`
console.log('\n ejemplo path: ',path === 'c:\\users\\nate')