
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('apellido', 'Florez');
localStorage.setItem('trabajo', 'desarrollador');
localStorage.setItem('direccion', 'Cll 23 5 40');

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem("apellido");
console.log('nombre',nombre,apellido);

localStorage.removeItem('nombre');
const anotherName = localStorage.getItem('nombre');
console.log('ya no existe:',anotherName);
localStorage.clear();
