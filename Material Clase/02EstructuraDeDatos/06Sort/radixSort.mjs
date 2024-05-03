export function radixSort(arr) {
  // Encuentra el número máximo para determinar el número de dígitos
  const maxNum = Math.max(...arr);
  const numDigits = Math.ceil(Math.log10(maxNum + 1)); // Número de dígitos del número mayor

  // Iterar a través de cada dígito, empezando por el dígito menos significativo (LSD)
  for (let digit = 0; digit < numDigits; digit++) {
    const buckets = Array(10)
      .fill(0)
      .map(() => []); // Create 10 buckets (0-9)
      // console.log('buckets',buckets)

    // Distribuye los números en función de la cifra actual
    for (const num of arr) {
      const digitValue = Math.floor(num / Math.pow(10, digit)) % 10; // Extraer el dígito
      buckets[digitValue].push(num);
      // console.log('num',num,'digito',digitValue,"\nbuckets", buckets);
    }
    // console.log('buckets',buckets)
    // Recoge los números en orden.
    let index = 0;
    for (let i = 0; i < 10; i++) {
      const bucket = buckets[i];
      for (const num of bucket) {
        arr[index++] = num;
      }
    }
  }

  return arr;
}

/* 
const unsortedArray = [122, 415, 2015, 657, 32, 436232, 7201, 3255];
console.log(unsortedArray); 
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); 
 */