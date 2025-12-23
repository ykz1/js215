"use strict"
/*
PROBLEM
  Input:          nested 2D array of number elements
  Output:         nested 2D array of transposed number elements
  Requirements:   - do not mutate original array or nested array
                  - 
  Assumptions:    - always given 2D nested array
                  - column sizes i.e. lengths of inner arrays are all the same
                  - no empty inner arrays

TEST CASES
  Given case of 3x3 matrix
  Add 1 more of non-matching row and column lengths

DATA STRUCTURE & ALGORITHMS
  Notes           Build our new output array element-by-element
                  Use 2 loops to iterate through columns and rows
                  In JS, we can reference non-existing elements in an array and assign them leaving gaps, so we should be able to build our output array while iterating through original array

  Data Structure  Nested array

  Algorithms      1. Initiate new output array, looping n = row count times to add different objects as inner arrays
                  2. Iterate through rows of given array
                  3. Iterate through columns of given array
                  4. Switch row and column indices to assign values from given array into output array
*/

function transpose(matrix) {
  let output = [];
  let rowCount = matrix.length;
  let colCount = matrix[0].length;    // Assumes that all inner arrays have same length i.e. input array has fixed columns

  for (let i = 0; i < colCount; i++) {
    output.push([]);
  }

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      output[c][r] = matrix[r][c];
    }
  }
  return output;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
]

const newMatrix2 = transpose(matrix2);

console.log();
console.log(matrix2);        // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]
console.log(newMatrix2);     // [[1, 6], [2, 7], [3, 8], [4, 9], [5, 0]]