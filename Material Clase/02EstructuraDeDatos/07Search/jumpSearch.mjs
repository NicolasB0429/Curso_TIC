import Comparator from './Comparator.mjs';

export function jumpSearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const arraySize = sortedArray.length;
  // console.log('original',sortedArray)
  if (!arraySize) {
    return -1;
  }

  const jumpSize = Math.floor(Math.sqrt(arraySize));
  // console.log('jumpSize',jumpSize)

  let blockStart = 0;
  let blockEnd = jumpSize;
  while (comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
    // console.log('Start',blockStart,' Final',blockEnd)
    blockStart = blockEnd;
    blockEnd += jumpSize;
    // console.log("Start", blockStart, " Final", blockEnd);
    
    if (blockStart > arraySize) {
      return -1;
    }
  }
  
  let currentIndex = blockStart;
  // console.log('IndiceInicio',currentIndex)
  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (comparator.equal(sortedArray[currentIndex], seekElement)) {
      return currentIndex;
    }

    currentIndex += 1;
  }

  return -1;
}
/* 
let arreglo = [10, 12, 14, 15, 25, 45, 47, 75, 85, 89, 92, 96, 104, 110, 120];
let indices = jumpSearch(arreglo, 92);
console.log(indices);
 */