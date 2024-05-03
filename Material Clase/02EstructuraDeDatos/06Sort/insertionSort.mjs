export function insertionSort(input) {
  // Variable para almacenar el elemento actual que se está comparando
  let numeroActivo;

  // Recorre la matriz empezando por el segundo elemento (índice 1)
  for (let i = 1; i < input.length; i++) {
    // Almacena el elemento actual en la variable numeroActivo
    numeroActivo = input[i];

    // Declarar la variable para el bucle interno
    let j;
    // console.log('numero activo:',numeroActivo,'i:',i)
    // Bucle interno para comparar el numeroActivo con los elementos que lo preceden
    for (j = i - 1; j >= 0; j--) {
      // console.log('j:',j,':',input,':',input[j])
      if (input[j] > numeroActivo) {
        // Mueve el elemento mayor una posición hacia adelante para hacer espacio
        // para el numeroActivo
        input[j + 1] = input[j];
        // console.log("if:j:", j, ":", input);
      } else {
        // Si encontramos un elemento menor que o
        // igual alNúmeroActivo, se sale del bucle interno
        // console.log('j','break')
        break;
      }
    }
    // Coloca el numeroActivo en su posición correcta ordenada
    input[j + 1] = numeroActivo;
    // console.log("cambia:j:", j, ":", input);
  }
}
/* 
let entrada = [24, 10, 17, 9, 5, 9, 1, 23, 300];
console.log('original',entrada);
insertionSort(entrada);
console.log('ordenando',entrada);
 */