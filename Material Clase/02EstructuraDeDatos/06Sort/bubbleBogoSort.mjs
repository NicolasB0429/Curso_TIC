let iterations = 0;

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

export function bubbleSort(arr) {
  let flag = true;
  while (flag == true) {
    flag = false;

    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        flag = true;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
    
  }
}

function bogoSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function bubble(arr) {
  iterations = 0;

  while (!isSorted(arr)) {
    iterations++;
    bubbleSort(arr);
  }
  return arr;
}

function bogo(arr) {
  iterations = 0;

  while (!isSorted(arr)) {
    iterations++;
    bogoSort(arr);
  }
  return arr;
}
/* 
let myArray = [5, 3, 1, 8, 2, 0];
console.log(`Unsorted array: ${myArray}`);

let sortedArray = bubble(myArray);
console.log(`Sorted array: ${sortedArray}`);
console.log(`Sorting took ${iterations} iterations!`);

myArray = [5, 3, 1, 8, 2, 0];
console.log(`Unsorted array: ${myArray}`);

sortedArray = bogo(myArray);
console.log(`Sorted array: ${sortedArray}`);
console.log(`Sorting took ${iterations} iterations!`);
 */