/*
===== PROBLEM DESCRIPTION =====
Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.

===== PROBLEM =====
Input:
  - string of letters and numbers

Output:
  - string of letters and numbers

Requirements:
  - swap the positions of letters with numbers, and vice versa
  - do not mutate original string

Questions / assumptions:

Main case:
- ignore characters that are not numbers nor letters
- swap characters until we run out of numbers or run out of letters, any remaining characters of the other type will remain as they are in the string

Edge case arguments
- when given no argument...
  - return null
- when given number argument...
  - return argument
- when given array argument...
  - perform swap on individual elements of array, recursively as deep as array nests, and return array of swapped properties
- when given object argument...
  - perform swap on values of object, recursively as deep as object nests, and return object of swapped properties
- when given more than one argument...
  - ignore extra argument(s)
- when given empty string, return empty string
- what to do with characters that are not numbers nor 

===== TEST CASES =====
- Include given + a couple more happy path
- Calling with non-alphanumeric characters: ignore these characters
- Calling with multiple identical characters: swap each character as appropriate
- Calling twice should result in original string
- Calling without arguments returns null
- Calling with array: swap eligible elements, return new array
- Calling with object: swap eligible values (ignore keys), return new array of values
- Calling on other types: return original object
- Calling on empty string: return empty string
- Calling with multiple arguments: all arguments are swapped
- 

===== DATA STRUCTURES =====
Requirements:
- Iterate through string character-by-character
- Swap characters, i.e. will need to perform mutating actions

Use an array of characters

===== ALGORITHMS =====

1. Convert string argument to an array that we can both iterate through, and swap individual character elements in
2. Iterate through array, character-by-character
3. When character is a letter or number, look ahead and find the corresponding number / letter to swap, if found, perform swap, if not found, continue
  - use RegExp.prototype.test to 
  - use String.prototype.search to find 
4. Join together array and return as new string

Here's an interesting case:

abcd12345678
- if we swap character-by-character without stopping, it becomes 12345678abcd
- if we limit one swap per index, it becomes 1234abcd5678, which is probably the intention 


*/

// ===== CODE =====

function swap(...args) {
  if (args.length === 0) return null;
  debugger;
  if (args.length === 1) return swapString(args[0]);
  return args.map(swapString);
}

function swapString(str) {
  if (typeof str === 'object') {
    if (str === null) {
      return null;
    } else if (Array.isArray(str)) {
      return str.map(swapString);
    } else {
      return swapString(Object.values(str));
    }
  } else if (typeof str === 'string') {
    if (str === '') return '';

    const letters = /[a-z]/i;
    const numbers = /[0-9]/;

    let chars = str.split('');
    let swappedIndexes = [];

    for (let i = 0; i < chars.length; ++i) {
      if (swappedIndexes.includes(i)) continue;

      if (letters.test(chars[i])) {
        for (let j = i; j < chars.length; ++j) {
          if (numbers.test(chars[j])) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            swappedIndexes.push(j);
            break;
          }
        }
      } else if (numbers.test(chars[i])) {
        for (let j = i; j < chars.length; ++j) {
          if (letters.test(chars[j])) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            swappedIndexes.push(j);
            break;
          }
        }
      }
    }
    return chars.join('');
  } else {
    return str;
  }
}

// TEST CASES

// Given + a couple more happy path
console.log('Provided test cases');
console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("abcd12345678") === "1234abcd5678"); // true

// Calling with non-alphanumeric characters: ignore these characters
console.log('Calling with non-alphanumeric characters: ignore these characters');
console.log(swap("a.bcd@1") === "1.bcd@a"); // true
console.log(swap("  1a2b3  c") === "  a1b2c  3"); // true

// Calling with multiple identical characters: swap each character as appropriate
console.log('Calling with multiple identical characters: swap each character as appropriate');
console.log(swap("aaad123") === "123daaa"); // true

// Calling twice with same count of numbers and letters should result in original string
console.log('Calling twice should result in original string');
console.log(swap(swap("1a2b3c")) === "1a2b3c"); // true
console.log(swap(swap("abcd123")) !== "abcd123"); // true

// Calling without arguments returns null
console.log('Calling without arguments returns null');
console.log(swap() === null); // true

// Calling with multiple arguments: all arguments are swapped
console.log('Calling with multiple arguments: all arguments are swapped');
console.log(swap("1a2b3c", "abcd123")); //["a1b2c3", "123dabc"])

// Calling with array: swap eligible elements, return new array
console.log('Calling with array: swap eligible elements, return new array');
console.log(swap(["abcd123", "1a2b3c"])) // returns ["123dabc", "a1b2c3"]
console.log(swap(["abcd123", 123, null, undefined, 'abc', "1a2b3c"])) // returns ["123dabc", 123, null, undefined, 'abc', "a1b2c3"]

// Calling with object: swap eligible values (ignore keys), return new object
console.log('Calling with object: swap eligible values (ignore keys), return new object');
console.log(swap({a1: "1a2b3c", b2: "abcd123" })) // returns {a1: "a1b2c3", b2: "123dabc" }

// Calling on other types: return original object
console.log('Calling on other types: return original object');
console.log(swap(undefined) === undefined); // true
console.log(swap(123) === 123); // true

// Calling on empty string: return empty string
console.log('Calling on empty string: return empty string');
console.log(swap('') === ''); // true

// Additional test cases from the assignment
console.log('Additional test cases from the assignment');
console.log(swap("") === ""); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true