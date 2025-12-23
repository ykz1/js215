/*
PROBLEM
  Input:          two arrays
  Output:         one new array
  Requirements:   - merge elements from two arrays provided in output array
                  - output array should be sorted
                  - do not mutate original arrays

TEST CASES

DATA STRUCTURES & ALGORITHM
  - Have two index counters, one for each array
  - Loop until both counters are at the end of respective arrays
  - Each iteration, only increment one counter forward
  - The counter that is incremented forward depends on a comparison of the current value in each array
    - If equal, doesn't matter so take the first array's element, increment counter appropriately
    - If one is greater, take that element
    - if one pointer is at the end and the other is not, then take the available element
  - exit loop condition is both counters are at end
  - return output array
  - provide early return if either argument array is empty

*/

function merge(arr1, arr2) {
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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]