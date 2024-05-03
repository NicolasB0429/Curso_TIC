import { bubbleSort } from "./bubbleBogoSort.mjs";
import { countingSort } from "./countingSort.mjs";
import { insertionSort } from "./insertionSort.mjs";
import { quick_Sort } from "./quickSort.mjs";
import { radixSort } from "./radixSort.mjs";
import { binarySearch } from "../07Search/binarySearch.mjs"
import { binarySearchRecursive } from "../07Search/binarySearchRecursive.mjs";
import { jumpSearch } from "../07Search/jumpSearch.mjs"
import { linearSearch } from "../07Search/linearSearch.mjs"

let limite = 1000000;
let data = [];

for (let i = 0; i < limite; i++) {
  data[i] = Math.floor(Math.random() * 1000 + 100);
}
let numero = 987
data[987000]=numero

console.log("unsort", data);
//bubbleSort(data)
//let dataSorted = countingSort(data)
// insertionSort(data)
let tempDate = new Date();
console.log(
  "Sort.minutos",
  tempDate.getMinutes(),
  "segundos",
  tempDate.getSeconds()
);
let dataSorted = quick_Sort(data)
// let dataSorted = radixSort(data);
tempDate = new Date();
console.log(
  "Sort.minutos",
  tempDate.getMinutes(),
  "segundos",
  tempDate.getSeconds()
);

console.log("sorted", dataSorted);

tempDate = new Date();
console.log(
  "Search.minutos",
  tempDate.getMinutes(),
  "segundos",
  tempDate.getSeconds()
);
// let index = jumpSearch(dataSorted,numero);
let index = linearSearch(dataSorted, numero);
tempDate = new Date();
console.log(
  "Search.minutos",
  tempDate.getMinutes(),
  "segundos",
  tempDate.getSeconds()
);
console.log('index',index)
console.log('valor',dataSorted[index[0]])