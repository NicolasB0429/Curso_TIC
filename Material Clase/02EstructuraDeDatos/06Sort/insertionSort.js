function insertionSort(input) {
  // Variable para almacenar el elemento actual que se está comparando
  let activeNumber;

  // Recorre la matriz empezando por el segundo elemento (índice 1)
  for (let i = 1; i < input.length; i++) {
    // Almacena el elemento actual en la variable activeNumber
    activeNumber = input[i];

    // Declarar la variable para el bucle interno
    let j;

    // Bucle interno para comparar el activeNumber con los elementos que lo preceden
    for (j = i - 1; j >= 0; j--) {
      if (input[j] > activeNumber) {
        // Mueve el elemento mayor una posición hacia adelante para hacer espacio
        // para el activeNumber
        input[j + 1] = input[j];
      } else {
        // Si encontramos un elemento menor que o
        // igual alNúmeroActivo, se sale del bucle interno
        break;
      }
    }
    // Coloca el activeNumber en su posición correcta ordenada
    input[j + 1] = activeNumber;
  }
}

let entrada = [24, 10, 17, 9, 5, 9, 1, 23, 300];
console.log(entrada);
insertionSort(entrada);
console.log(entrada);
