"use strict"

/*

PROBLEM

TEST CASES
  - Provided

DATA STRUCTURE & ALGORITHM
  - Use a temporary array to store sliced version of original array
  - Need to also track index of new array relative to original
  - Deal with even and odd arrays
*/

function binarySearch(list, term) {
  let startIndex = 0;
  let arr = [...list];

  while (arr.length > 0) {
    let midIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) midIndex -= 1;

    if (arr[midIndex] === term) {
      return startIndex + midIndex;
    } else if (arr[midIndex] > term) {
      arr = arr.slice(0, midIndex)
    } else {
      arr = arr.slice(midIndex + 1);
      startIndex += midIndex + 1;
    }
  }
  
  return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6