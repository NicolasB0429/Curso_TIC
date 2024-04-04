let x = 1;
console.log(x);

x = 1;
console.log("x:", x);

x = 1;
let y = 2;
let z = 3;
console.log("x:", x, "y:", y, "z:", z);

x = 1;
y = 2;
z = 3;
console.log({ x, y, z });

let usuario = {
  nombre: "Pedro",
  contacto: {
    correoElectronico: "combariza@gmail.com",
  },
};

console.log(usuario);
console.log({ usuario });

console.log("%s tiene %d años de edad.", "Pablo", 29);

console.log("Consola de Registro");
console.info("Consola de Informacion");
console.debug("Console de Depuracion");
console.warn("Consola de Aviso");
console.error("Consola de Error");

for (i = 0; i < 10; i++) {
  console.count();
}

for (i = 0; i < 10; i++) {
  console.count("Contador 1");
}
console.countReset("Contador 1");

console.time();
setTimeout(() => {
  console.timeEnd();
}, 5000);

console.time(); 

setTimeout(() => {
  console.timeEnd();
}, 5000);

setTimeout(() => {
  console.timeLog();
}, 2000);

function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.trace();
}
one();

let dispositivo = [
  {
    nombre: "iPhone",
    marca: "Apple",
  },
  {
    nombre: "Galaxy",
    marca: "Samsung",
  },
];

console.table(dispositivo);
