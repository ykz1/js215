/*
Requirements & assumptions 
- Write function that takes an array and mutates it by sorted elements in ascending order
- Will always be given array
- Rely on JS' ">" to sort, which works as expected when comparing two numbers or two strings, but will perform string comparison when given a number and a string

Algorithm & data structure:
- new array to store output
- iterate until no need to iterate, use a flag to see if we can make it through an iteration of all elements without swapping 
  - iterate through all elements
    - perform swap if needed
- return new array
*/

function bubbleSort(arr) {
  let swapFlag;
  do {
    swapFlag = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapFlag = true;
      }
    }
  } while (swapFlag);
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]