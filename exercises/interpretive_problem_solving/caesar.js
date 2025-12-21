/*
PROBLEM
  Input:
    - string
    - integer representing a 'key' by which to shift letters in the string
  
  Output:
    - string with shifts applied
  
  Requirements
    - shift any alphabetical characters by the key
    - preserve case
    - only shift alphabetical characters
    - after 'Z' comes 'A' again
  
  Assumptions:
    - key will always be positive integer

TEST CASES
  - Provided

DSA NOTES
  - "Shift" mechanism
    - "rotate" a wheel i.e. array of letters by using shift + push (rotate pointer right) / pop + (rotate pointer left)
      - don't have to worry about "end of array" because we're simulating a wheel, i.e. this can accommodate rotates from 'z' to 'a', and rotations beyond 26 characters
    - calculate the index to jump to using mod / remainder
  - preserving case
    1. have two reference arrays / sets, one lower and one uppercase
    2. have one reference and match ending character to original character case
    3. calculate using some start reference char code
  
  - Simulating a wheel feels interesting and easy to implement. it will not be the most efficienty because we're rotating literally a character at a time, but the solution will be easier to read versus calculating the index because to calculate the index we'll need to do some modding / remainder combined with some start / end indices for 'A' and 'a'. Let's do the wheel.

DATA STRUCTURES
  - arrays to hold wheels
  - string for input string, which we'll need to iterate through character-by-character, but since we're not writing to this string (we can't, strings are immutable in JS), we can simply reference string with str[i]
  - string for output, built character-by-character as we process input string
ALGORITHMS
  - create two arrays, each a "wheel" of alphabet, one lowercase one uppercase
  - instantiate output str variable
  - iterate character-by-character through input string
  - use helpfer function on each character: rotateChar
    - use upper / lower wheel depending on case of characther
    - if not alphabetical, 
  - append returned character to 
*/

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHA = ALPHA.toUpperCase().split('');
const LOWER_ALPHA = ALPHA.toLowerCase().split('');

function caesarEncrypt(str, rot) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output += rotateChar(str[i], rot);
  }
  console.log(output);
}

function rotateChar(char, rot) {
  let index = ALPHA.indexOf(char.toLowerCase());
  if (index === -1) return char;

  let rotated_wheel = (char === char.toLowerCase() ? [...LOWER_ALPHA] : [...UPPER_ALPHA]);

  for (let i = 0; i < rot; i++) {
    rotated_wheel.push(rotated_wheel.shift());
  }

  return rotated_wheel[index];
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"