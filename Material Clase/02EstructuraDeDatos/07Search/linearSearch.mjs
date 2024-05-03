import Comparator from "./Comparator.mjs";

export function linearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const foundIndices = [];

  array.forEach((element, index) => {
    if (comparator.equal(element, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}
/* 
let arreglo = [10, 12, 14, 15, 25, 85, 47, 75, 85 ];
let indices = linearSearch(arreglo, 85);
console.log(indices)
 */