/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Requirements:
- Rotation has 3 elements:
  - Digits on left to be 'frozen'
  - Digit to be moved to the end
- Starting from 0 frozen and up to all but the last two digits frozen, rotate
- leading zeros are dropped


*/
function maxRotation(num) {
  let str = String(num);
  if (str.length === 1) return num;

  for (let i = 0; i < str.length - 1; i++) {
    str = rotate(str, i);
  }

  return Number(str);
}

function rotate(str, i) {
  frozen = str.slice(0, i);
  moveLeft = str.slice(i + 1);
  moveRight = str.at(i);
  return frozen + moveLeft + moveRight;
}

function rotateRightmostDigits(num, digit) {
  if (digit === 1) return num;
  const str = String(num);
  return Number(str.slice(0, -digit) + str.slice(-digit + 1) + str.at(-digit));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
