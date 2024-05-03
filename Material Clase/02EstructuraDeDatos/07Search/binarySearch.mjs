import Comparator from "./Comparator.mjs";

export function binarySearch(
  sortedArray,
  seekElement,
  comparatorCallback
) {
  const comparator = new Comparator(comparatorCallback);

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    // console.log('start',startIndex,'middle',middleIndex,'end',endIndex)
    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }
    if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}
/* 
let arreglo = [10, 12, 14, 15, 25, 45, 47, 75, 85];
let indices = binarySearch(arreglo, 12);
console.log(indices);
 */