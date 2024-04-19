function countingSort(input) {
  // Encontrar el elemento máximo en el arreglo
  const max = Math.max(...input);
  console.log('max',max)

  // Crear un arreglo de contar para guardar la frecuencia de cada elemento
  const count = new Array(max + 1).fill(0);

  // Contar la ocurrencia de cada elemento
  for (const num of input) {
    count[num]++;
  }
  console.log('count',count)

  /* Calcular la suma de prefijos para almacenar 
  la posición de cada elemento en la matriz ordenada
  */
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  console.log("count", count);
  
  // Crear una matriz de salida para almacenar los elementos ordenados
  const output = new Array(input.length);

  // Colocar elementos en la matriz de salida en función de los recuentos
  for (let i = input.length - 1; i >= 0; i--) {
    output[count[input[i]] - 1] = input[i];
    count[input[i]]--;
  }

  return output;
}

let unsortedArray = [5, 2, 1, 3, 4, 1, 0, 0, 4, 7, 2];
console.log(unsortedArray); 
let sortedArray = countingSort(unsortedArray);
console.log(sortedArray); 
