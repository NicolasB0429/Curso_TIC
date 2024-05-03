export function countingSort(input) {
  // Encontrar el elemento máximo en el arreglo
  const max = Math.max(...input);
  console.log("max", max, "\n");

  // Crear un arreglo para guardar la frecuencia de cada elemento
  const count = new Array(max + 1).fill(0);

  // Contar la ocurrencia de cada elemento
  for (const num of input) {
    count[num]++;
  }
  console.log("frecuencia", count, "\n");

  /* Calcular la suma de prefijos para almacenar 
  la posición de cada elemento en la matriz ordenada
  */
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  console.log("suma de prefijos", count, "\n");

  // Crear una matriz de salida para almacenar los elementos ordenados
  const output = new Array(input.length);

  // Colocar elementos en la matriz de salida en función de los recuentos
  let posicion;
  for (let i = input.length - 1; i >= 0; i--) {
    output[count[input[i]] - 1] = input[i];
    count[input[i]]--;
  }

  return output;
}
/* 
let unsortedArray = [5, 2, 1, 3, 4, 1, 0, 0, 4, 7, 2, 2, 5, 5];
console.log("original\n", unsortedArray);
let sortedArray = countingSort(unsortedArray);
console.log("ordenado\n", sortedArray);
 */