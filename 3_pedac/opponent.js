/*
Write a function that returns the position of the closest active opponent. If two opponents are equidistant, return the opponent with the higher position on the board.

*/

/*
===== REQUIREMENTS =====
Input: 
- object of opponent positions
- integer representing our position

Output:
- integer position of closest opponent


Rules:
- if two opponents are equidistant, return higher position

Questions / Assumptions:
- always given two arguments: an object and an integer
- object argument:
  - what to do if not object?
    - return null
  - what to do if empty object?
    - return null
  - confirm that we ignore non-enumerable properties, such as length
    - ignore
  - what if value is not a Number? confirm we can ignore property
    - ignore
  - what if value is a string number like '23'?
    - ignore
  - what if value is non-integer number?
    - proceed
  - what if value is NaN?
    - ignore
  - what if value is Infinity or -Infinity?
    - proceed 
  - what if two opponents have the same position / number?
    - return first provided
  - what if position is negative?
    - assume absolute distance 
- number argument:
  - what if not number?
    - return null
  - what if not provided?
    - return null
  - what if undefined, or null?
    - return null
- positions object's keys are not relevant

===== TEST CASES =====
Provided test cases:
- normal case
- equidistant opponents (return larger position)
- null position opponent (ignored)

Other test cases (should still return valid opponent)
- negative numbers
- Infinity and -Infinity opponents
- opponents with same position

Bad arguments (all return null)
- missing argument
- first argument not an object
- first argument is empty object
- first argument has no valid number values
- second argument not a valid number

Check that object passed is not mutated

===== DATA STRUCTURES =====
Positions (object) key names are not relevant and can be ignored, so we can store distances into an array.
- Need to filter for valid positions
- Iterate through valid positions one at a time to find closest opponent

An array would meet both our data structure requirements.

===== ALGORITHMS =====
1.  Check that two arguments are provided: an object and a number
2.  Check that object is not empty
3.  Check that number is a valid position
    - helper function: validPosition
4.  Filter object values for valid positions and save to array
    - helper function: validPosition
5.  Iterate through valid positions and find 
    - if smallest absolute distance
      - save to closestPosition variable
      - save to distance variable   
    - if same absolute distance as stored smallest distance, compare position value


Checking two values:
  - assumes values are both valid
  - if value equals position, then return position because cannot be closer
  - if position is Infinity, return largest value opponent
  - if position is -Infinity, return smallest value opponent
  - if values are only Infinity and -Infinity, return the infinity with sign matching position
*/

function findClosestOpponent(positions, position) {
  if (!validPositions(positions) || !validPosition(position)) return null;

  let opponents = Object.values(positions).filter(validPosition);
  if (position === Infinity) return Math.max(...opponents);
  if (position === -Infinity) return Math.min(...opponents);
  if (onlyInfinities(opponents)) return position * Infinity;

  let closestOpponent;
  let closestDistance = Infinity;

  for (let i = 0; i < opponents.length; ++i) {
    const opponent = opponents[i]
    if (opponent === position) return opponent;

    const distance = Math.abs(opponent - position);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestOpponent = opponent;
    } else if (distance === closestDistance && opponent > closestOpponent) {
      closestOpponent = opponent;
    }
  }
  return closestOpponent;
};

const validPositions = positions => {
  if (typeof positions !== 'object') return false;        // Must be object
  if (Array.isArray(positions)) return false;             // Must not be array
  if (Object.keys(positions).length === 0) return false;  // Must not be empty
  if (Object.values(positions).every(position => !validPosition(position))) return false; // Must have some valid position
  return true;
}

const validPosition = position => {
  if (typeof position !== 'number') return false;   // Must be number
  if (position !== position) return false;          // Must not be NaN
  return true;
}

const onlyInfinities = positions => {
  const set = new Set(positions);
  if (set.size !== 2) return false;
  if (!set.has(Infinity)) return false;
  if (!set.has(-Infinity)) return false;
  return true;
}



// TESTS

// Provided cases:
console.log("Provided cases");

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10) === 15);

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3) === 5);

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150) === 100);

// Other test cases that have valid returns
console.log("Other valid cases");

console.log(findClosestOpponent({
  "Opponent 1" : -5,
  "Opponent 2" : 1,
}, -6) === -5);

console.log(findClosestOpponent({
  "Opponent 1" : -11,
  "Opponent 2" : -1,
}, -6) === -1);


console.log(findClosestOpponent({
  "Opponent 1" : -Infinity,
  "Opponent 2" : Infinity,
}, 1) === Infinity);

console.log(findClosestOpponent({
  "Opponent 1" : -Infinity,
  "Opponent 2" : Infinity,
}, -1) === -Infinity);

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 2,
}, Infinity) === 2);

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 2,
}, -Infinity) === 1);

console.log(findClosestOpponent({
  "Opponent 1" : 5,
  "Opponent 2" : 5,
}, 1) === 5);


// Test cases that should return null
console.log("Null return cases");

console.log(findClosestOpponent() === null);
console.log(findClosestOpponent(1) === null);
console.log(findClosestOpponent({
  "Opponent 1" : 5,
  "Opponent 2" : 5,
}) === null);
console.log(findClosestOpponent({}, 1) === null);
console.log(findClosestOpponent([['Opponent 1', 5], ['Opponent 2', 3]], 1) === null);
console.log(findClosestOpponent(5, 1) === null);
console.log(findClosestOpponent({
  "Opponent 1" : 5,
  "Opponent 2" : 5,
}, '5') === null);

// Check that object passed is not mutated
let a = {
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
};
findClosestOpponent(a, 10);
