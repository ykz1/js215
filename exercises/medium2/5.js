/*
Requirements
- Featured numbers have three requirements
  1. odd
  2. multiple of 7
  3. digits occur exactly once
- Given a number, return the next featured number
- Largest featured number is 9876543201
- If no featured number, return message

Input: 
- number

Output:
- number or string message


Algorithm:
- find next multiple of 7
- if even, add 7
- start looping with this number as the starting point
  - check whether number has repeating digits, if not, return number
    - helper function uniqueDigits: convert to string, then array of characters, then compare size of array with a new set size of array
  - increment by 14
  - stop looping at max featured number
- if loop finishes and no number is found, then return 'not found' message
*/

function featured(num) {
  const MAX_FEATURED = 9876543201;
  const notFoundMessage = 'There is no possible number that fulfills those requirements.';
  if (num >= MAX_FEATURED) return notFoundMessage;
  
  // Find next odd multiple of 7
  num = num + (7 - (num % 7));
  if (num % 2 === 0) num += 7;
  
  const digitsUnique = num => {
    let digits = String(num).split('');
    return digits.length === new Set(digits).size;
  }

  for (;num <= MAX_FEATURED; num += 14) {
    if (digitsUnique(num)) return num;
  }

  return notFoundMessage;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."