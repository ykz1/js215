/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Requirements:
- Move the nth digit from the end to the end
- retun a number

Data structure:
- parse into string, construct new number, then cast to integer before returning

Algorithm:
- save string representation of number
- find the nth digit from last, and concat all digits before with all digits after and finally with the digit
- cast to number and return value
*/

function rotateRightmostDigits(num, digit) {
  if (digit === 1) return num;
  const str = String(num);
  return Number(str.slice(0, -digit) + str.slice(-digit + 1) + str.at(-digit));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);