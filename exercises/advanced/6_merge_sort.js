"use strict"
/*
PROBLEM
  Input:            array
  Output:           new array with elements sorted
  Requirements:     - keep dividing each array until every element is in its own array
                    - then merge arrays of two arrays using our merge sort function until we have one array

*/

function split(arr) {
  arr = [...arr];
  let output = [[], []];
  while (arr.length > 0) {
    output[0].push(arr.shift());
    if (arr.length > 0) output[1].unshift(arr.pop());
  }

  if (output[0].length > 1) {
    output[0] = split(output[0]);
  }
  if (output[1].length > 1) {
    output[1] = split(output[1]);
  }
  return output;
}

// console.log(split([1, 2, 3, 4, 5]));

function mergeSort(arr) {
  return merge(split(arr));
}


function merge(arr) {
  let arr1;
  let arr2;
  [arr1, arr2] = [...arr]
  
  if (Array.isArray(arr1[0]) && Array.isArray(arr1[1])) {
    arr1 = merge(arr1);
  }
  if (Array.isArray(arr2[0]) && Array.isArray(arr2[1])) {
    arr2 = merge(arr2);
  }

  if (arr1.length === 0) return [...arr2];
  if (arr2.length === 0) return [...arr1];

  let output = [];
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (idx1 >= arr1.length || arr2[idx2] < arr1[idx1]) {
      output.push(arr2[idx2]);
      idx2++;
    } else if (idx2 >= arr2.length || arr1[idx1] <= arr2[idx2]) {
      output.push(arr1[idx1]);
      idx1++;
    }
  }
  return output;
}


console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   // [0, 1, 2, 5, 6, 7, 8, 9]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]