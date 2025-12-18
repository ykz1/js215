/*

10:36 start
11:57 finished
12:16 refactored

========== PROBLEM DESCRIPTION ==========

While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

- If version1 > version2, we should return 1.
- If version1 < version2, we should return -1.
- If version1 === version2, we should return 0.
- If either version number contains characters other than digits and the . character, we should return null.

Here is an example of version number ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

*/

/*
========== PROBLEM  ==========

Input: 
- Two string arguments

Output:
- 1, -1, or 0

Rules:
- Compare version1 with version2, returning 1, -1, or 0
- Invalid version numbers result in returning null
- Trailing '.0's do not differentiate a version number
  - i.e. 1 === 1.0, and 1.2 === 1.2.0.0


Assumptions:
- Version numbers must end in a number, and not a decimal
- Number comparisons are integer comparisons i.e. 18 > 2
- Only two arguments will be passed

========== TEST CASES ==========
Given comparisons
- 0.1 < 1
- 1 = 1.0
- 1.0 < 1.1
- 1.2 = 1.2.0.0
- 1.2.0.0 < 1.18.2

Invalid comparisons
- Trailing decimal: ('0.1', '1.')
- Spaces: ('1. 01', '2'))
- Double decimals: ('1..1', '1')
- Characters other than numbers and decimals: ('1a', '1')
- Integers(1.0, 2.2)

========== DATA STRUCTURES ==========
For valid arguments, use an array to store numbers as integers
- 1.0 --> [1, 0]

========== ALGORITHMS ==========
High level
  1. Return null if arguments are not string
  2. Return null if arguments have characters other than numbers and decimals
  3. Return null if arguments don't have single decimals separating numbers, or if arguments have leading or trailing decimals
  4. Parse arguments into arrays
  5. Compare element-by-element, using integer comparison
  6. If one is greater, return 1 or -1
  7. If both are equal, proceed to next element in array
  8. If at end of both arrays and all elements are identical

========== CODE ==========

*/
function compareVersions(v1, v2) {
  if (!validType(v1) || !validType(v2)) return null;
  if (!validFormat(v1) || !validFormat(v2)) return null;

  v1 = parseToArray(v1)
  v2 = parseToArray(v2)

  for (let i = 0; i < (Math.max(v1.length, v2.length)); ++i) {
    if (v1[i] > (v2[i] || 0)) return 1;
    if (v2[i] > (v1[i] || 0)) return -1;
  }
  return 0;
}

const validType = arg => typeof arg === 'string';
const validFormat = arg => /^[0-9]+(\.[0-9]+)*$/.test(arg);
const parseToArray = arg => arg.split('.').map(num => +num);

// ========== TESTS ==========
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1.1', '1.0') === 1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2', '1.2.0.1') === -1);
console.log(compareVersions('1.2', '1.18.2.0') === -1);
console.log(compareVersions('0.2', '1.') === null);
console.log(compareVersions('1. 02', '1') === null);
console.log(compareVersions('1..2', '1') === null);
console.log(compareVersions('one', '1') === null);
console.log(compareVersions('42', 43) === null);

console.log();

console.log(compareVersions('1', '1') === 0);
console.log(compareVersions('1.1', '1.0') === 1);
console.log(compareVersions('2.3.4', '2.3.5') === -1);
console.log(compareVersions('1.a', '1') === null);
console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('1.', '2') === null);
console.log(compareVersions('1..0', '2.0') === null);
console.log(compareVersions('1.0', '1.0.0') === 0);
console.log(compareVersions('1.0.0', '1.1') === -1);
console.log(compareVersions('1.0', '1.0.5') === -1);