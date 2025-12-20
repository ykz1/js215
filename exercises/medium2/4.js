/*
Algorithm:
  - Iterate through all the 13th of the year, should be 12 each
  - Find the day-of-week of each, and if Friday, +1 to accumulator
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    if (new Date(year, month, 13).getDay() === 5) count++;
  }
  return count
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2