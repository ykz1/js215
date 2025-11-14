//  Octal to decimal conversion
//  Take String with octal number -> return Number with decimal value

function octalToDecimal(numberString) {
  //  Process right-to-left
  //  Start at power of 0, increment 1 with each character
  //  Sum as we iterate, with reduce()

  let octalize = (sum, num, power) => sum + num * 8**power;

  return numberString.split('')
                     .reverse()
                     .reduce(octalize, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9