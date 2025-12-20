/*
Requirements:
1. find the square of the sum of the  first n positive integers (1 + 2 + 3 )**2
2. find the sum of the squares of the first n positive integers (1**2 + 2**2 + 3**2)
3. find the difference between 1 and 2

Assumptions:
- always given positive integer; return 0 otherwise
- always given valid number; return null otherwise
*/


function sumSquareDifference(num) {
  if (typeof num !== 'number') return null;
  if (num <= 0) return 0;

  let sum = 0
  let sumSquare = 0
  
  for (let i = 1; i <= num; i++) {
    sum += i;
    sumSquare += i**2;
  }
  return sum**2 - sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150