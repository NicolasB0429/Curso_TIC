export function binarySearchRecursive(arr, val, start = 0, end = arr.length - 1) {
  const middleIndex = Math.floor((start + end) / 2);
  // console.log("start", start, "middle", middleIndex, "end", end);
  if (val === arr[middleIndex]) {
    return middleIndex;
  }

  if (start >= end) {
    return -1;
  }

  if (val < arr[middleIndex]) {
    return binarySearchRecursive(arr, val, start, middleIndex - 1);
  } else {
    return binarySearchRecursive(arr, val, middleIndex + 1, end);
  }
}
/* 
let numbers = [1, 3, 5, 10, 32, 40, 60, 71, 80, 99,110];

let foundIndex = binarySearchRecursive(numbers, 99);
console.log(foundIndex); // 6
 */