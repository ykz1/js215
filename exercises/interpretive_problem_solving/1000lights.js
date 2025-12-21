/*
Problem statement:
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Requirements
- Given n, perform n passes of toggling n lights, then return an array of the lights that are on

Input:
- number

Output:
- array of numbers

Assumptions:
- lights index to 1

Data structure:
- use an array to track the status of each light

Algorithm:
- create new array of n elements, all set to false
- start a loop from 1 to n with i tracking the round we're on
  - start an inner loop starting form the round and iterating by i, toggle lights 
*/
function lightsOn(n) {
  let lights = new Array(n).fill(false);
  for (let round = 1; round <= n; round++) {
    for (let i = round; i <= n; i += round) {
      lights[i - 1] = !lights[i - 1];
    }
    // console.log(lights);
  }
  let output = [];
  for (let i = 0; i < lights.length; i++) {
    if (lights[i]) output.push(i + 1);
  }
  return output;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
