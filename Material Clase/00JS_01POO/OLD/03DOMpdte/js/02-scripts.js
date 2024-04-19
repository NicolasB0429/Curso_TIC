
const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas...
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);

// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

