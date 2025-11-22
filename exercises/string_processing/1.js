// function isUppercase(str) {
//   for (let i = 0; i < str.length; i++) {
//     if ((/[a-z]/i).test(str[i]) && str[i] !== str[i].toUpperCase()) return false;
//   }
//   return true;
// }

let isUppercase = str => !/[a-z]/.test(str)

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true