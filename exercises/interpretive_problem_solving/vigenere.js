"use strict"

/*

PROBLEM
  Input
    - two strings
    - string to be ciphered
    - key to perform cipher with

  Output
    - ciphered string
  
  Requirements
  - use characters key to determine shift values based on a 0-25 index
  - match character-by-character of key to string, and reuse key until each string has a shift character
    - assume that string lengths which are not multiples of key length use partial keys
  - preserve case of letters
  - preserve index of non-letter characters, such as spaces and punctuation

  Assumption
  - 

  Data structure & Algorithm
  - Iterate char-by-char through input string and push appropriate letter to output string
  - If non-alphabetical char, push char
  - If alphabetical
    - use a "wheel" to track the next shift key character
    - use a second "wheel" to find the shifted character
    - push the correct case of shifted character to our output string
  - return otuput string

*/

const L_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const U_ALPHA = L_ALPHA.toUpperCase();

function vigenereCipher(str, key) {
  let output = '';
  key = key.split('');

  str.split('').forEach(char => {
    if (/[a-z]/i.test(char)) {
      output += rotate(char, key[0]);
      key.push(key.shift());
    } else {
      output += char
    }
  });
  return output;
}

function rotate(char, key) {
  let alpha = (char === char.toLowerCase() ? L_ALPHA : U_ALPHA);
  let start = alpha.indexOf(char);
  let shift = L_ALPHA.indexOf(key.toLowerCase());
  let index = (start + shift) % 26;
  return alpha[index];
}

// Test Cases
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");