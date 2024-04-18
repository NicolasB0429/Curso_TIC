function dias(name) {
  return `buenos días ${name.toUpperCase()}`
}

function tardes(name){
  return `buenas tardes ${name.toLowerCase()}`
}

function saludo(name, hora){
  let nombre = 'ramiro'
  console.log(`${hora(name)}, mi nombre es ${nombre}`)
}

saludo('pablo',dias)
saludo("pedro", tardes);


{
  function mayorQue(n) {
    return (m) => m > n;
  }

  let mayorQue10 = mayorQue(10);
  console.log(mayorQue10(11));

  console.log(mayorQue(10)(9));
}

{
  function argumentos(f) {
    return (...args) => {
      console.log("llamando con", args);
      let resultado = f(...args); // Math.min(1,2,10) Math.max(1,2,10)
      console.log("llamado con", args, ", devolvió", resultado);
      return resultado;
    };
  }
  argumentos(Math.min)(1, 2, 10);
  argumentos(Math.max)(1, 2, 10);
}

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}

function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

//repetir(3, console.log);

repetir(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});




let labels = [];
repetir(5, (i) => {
  labels.push(`Unidad ${i + 1}`);
});
console.log(labels);


["a", "b", "c", "d", "e"].forEach((elemento) => console.log("arreglo:", elemento));

function reduce(array, funcion, inicio) {
  let actual = inicio;
  for (let elemento of array) {
    actual = funcion(actual, elemento);
  }
  return actual;
}

console.log(
  "reduce:",
  reduce([1, 2, 3, 4], (a, b) => a + b, 0)
);

function promedio(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log("promedio:", promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
