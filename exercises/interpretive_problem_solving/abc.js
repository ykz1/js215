"use strict"

/*
PROBLEM
  Input
  - string

  Output
  - true or false

  Requirements
  - given our string argument, return true or false depending on whether we can spell the word using our 'set of blocks'
  - each block contains a pair of characters
  - we can use at most one character from each block to spell our string
  - ignore case sensitivity

  Assumptions
  - will always be given a string i.e. ignore no arguments passed, extra arguments, and non-string arguments
  - if given empty string, return true
  - string can have any number of non-alphabetical characters, such as spaces or periods

  Test cases
  - given, but add empty string case

  DSA Notes:
  - if there are repeating letters, return false
    - save a lowercase version of string with all non-alphabetical characters removed
    - convert to array
    - compare length of array with size of set created using array
    - if not equal, then there are duplicate alphabetical characters and we can early return false
  - we have two iteration options:
    - iterate through our blocks and check whether string uses 0, 1, or 2 of block's letters
    - iterate through our string character-by-character and check whether the 'other character' from the matching block is used in our string -- this approach feels better
  - given we need to look up letter-by-letter, it would make sense to use an object with lettters as keys
    - this means we would need to 
  - alternative data structures:
    - nested array: outer array contains blocks, each block is a 2-element array of the two characters in a block
      - this works well if we're planning to iterate through the blocks
    - object with 2-element array as key and true/false as block
      - works well if for some reason we need to track which blocks are "used up", but we don't need to actuall track this because we can early return from the function if ANY block gets used
    - object with characters as keys and the "other character in its block" as values
      - not the most efficient because we would have 2x the number of blocks in properties of our object, but will do for our intent
  
  Data Structure:
  - object to store block pair information
  - array of string to compare with set of array
  
  Algorithm:
  - get only lowercase alphabeticals with helper function getLowAlphas
  - check for repeat characters with helper function hasRepeat: 
    - check length against length of uniq characters (using string --> array --> set)
  - iterate character-by-character, for each char
    - find its counterpart character
    - search for that character within our string
    - if found, return false from function
  - if we make it to the end of our string iteration, return true

*/

function isBlockWord(str) {
  const getLowAlphas = str => str.toLowerCase().replace(/[^a-z]/gi,'');
  const hasRepeat = str => str.length > new Set(str.split('')).size;
  const blocks = {
    b: 'o',
    o: 'b',
    x: 'k',
    k: 'x',
    d: 'q',
    q: 'd',
    c: 'p',
    p: 'c',
    n: 'a',
    a: 'n',
    g: 't',
    t: 'g',
    r: 'e',
    e: 'r',
    f: 's',
    s: 'f',
    j: 'w',
    w: 'j',
    h: 'u',
    u: 'h',
    v: 'i',
    i: 'v',
    l: 'y',
    y: 'l',
    z: 'm',
    m: 'z',
  }

  str = getLowAlphas(str);
  if (hasRepeat(str)) return false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const otherChar = blocks[char];
    if (str.includes(otherChar)) return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // true
console.log(isBlockWord('je...   st'));       // true
console.log(isBlockWord('jestj'));       // false

