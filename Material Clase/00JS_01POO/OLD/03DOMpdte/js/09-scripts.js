
/* Básicamente hay 2 formas de eliminar:
Eliminando un elemento por si mismo 
Eliminarlo desde el padre...
*/

const primerEnlace = document.querySelector('a');
primerEnlace.remove();

// La otra forma es por el padre..
const navegacion = document.querySelector('.navegacion');

// el sigueinte paso es identificar el elemento a borrar..

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);

// Otra forma es creando una variable...
const borrar = navegacion.children[2]
navegacion.removeChild(borrar);


