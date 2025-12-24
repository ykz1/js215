"use strict"
/*
Algorithm
- Iterate through string provided
- if not a letter push character to output string
- if is a letter...
  - use the next key to find the shift value
  - shift the letter by the shift value
  - push the shifted letter to output string
  - make sure to preserve case

Data structures
- use index to track which character of original string  we're parsing
- use index to track which letter from key we're using as shift value lookup
- use string to store alphabet
- use index to track index of alphabet for shifted character
*/

function vigenereEncrypt(str, key) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
  
  let output = ''
  let k = 1;

  for (let i = 0; i < str.length; i++ ) {
    const char = str[i];
    if (/[a-z]/i.test(char)) {
      let letters = ALPHA;
      if (/[A-Z]/.test(char)) letters = ALPHA.toUpperCase();
      const shiftValue = letters.indexOf(key[k - 1]);
      let shiftedIndex = (letters.indexOf(char) + 1 + shiftValue) % 26 - 1
      debugger;
      output += letters[shiftedIndex];
    } else {
      output += char;
    }
  }
  return output;
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat"));
// Expected output: "Bmnxmtpeqw dhz'x op u'w pjusww!"

// Explanation for the first word "Pineapples":
// Plaintext:  P   i   n   e   a   p   p   l   e   s
// Keyword:    m   e   a   t   m   e   a   t   m   e
// Shift:     12   4   0  19  12   4   0  19  12   4
// Ciphertext: B   m   n   x   m   t   p   e   q   w
// (Note: 'p' + shift 4 wraps around from 'z' to 't')

console.log(vigenereEncrypt("Hello, World!", "key"));
// Expected output: "Rijvs, Pbtcf!"

console.log(vigenereEncrypt("Coding is fun.", "abc"));
// Expected output: "Cqfklg ku hwo."

console.log(vigenereEncrypt("Launch School", "LS"));
// Expected output: "Wawnch Scnoop"