/*

- - - - - - - -
- - - - - - - -
- - - W - - - -
- - - - - - - -
- - - - - - - -
- - - - - - B -
- - - - - - - -
- - - - - - - -


Given string representation with board with two queens...
Return true or false depending on whether queens can attack each other

====== PROBLEM ========
- Input:
  - String representation of a board
- Output:
  - true or false based on whether queens can attack each other
- Rules:
  - Queen's coordinates are represented by (row, column)
  - First row and column are 0, starting from top left
  - Board boundary is 8 x 8; i.e. column and row both go 0 to 7
  - Queens are on the same...
    - row -> same 'row' coordinates, e.g. (3, 2) and (3, 5)
    - column -> same 'column coordinates, e.g. (3, 5), (7, 5)
    - diagonal -> absolute difference between row and column coordinates are the same e.g. (2, 3) and (5, 6)
  - Only have queen pieces on the board
  - Queens are 'B' for black and 'W' for white
  - Queens may be missing
    - Return undefined if one or both queens are missing
    - Possible scenarios: [B, W], [B], [W], []
  - We will always be a board
  - Characters will be underscores, 'B', 'W', and newline characters. No spaces
  - Single string will be input

- Items to confirm:
  - Board coordinates
    - 0 index?
    - which corner to start coordinates from?
    - is board always 8 by 8?
  - 

====== TEST CASES ========
- 2 row scenarios
- 2 column scenarios
- 2 diagonal scenarios
- 2 no attack scenarios
- 3 missing queen scenarios: missing B, missing W, missing both

======= DATA STRUCTURES ========
- Working directly with one long string would mean taking indexOf() with modulo, but not easy and would work with row lengths of 9
- Nested arrays: can chain coordinates like [3][2] for [col][row]
- Array of strings: can work with same way but can't mutate string, which is fine

Board:
[
  "________",
  "________",
  "___W____",
  "________",
  "________",
  "______B_",
  "________",
  "________",
]

Coordinates:
[2, 3]

======== ALGORITHMS =========

High level:
1. Parse board into correct data structure
2. Find queens' location
3. Stop if we don't have both queens
4. Determine if queens can attack each other

Helpesr: 
- queenCoordinates(board) => { 'W' => [2, 3], 'B' => [5, 6] }
  - initialize empty object `coordinates`
  - iterate over array of string (row)
  - iterate each character of string i.e. columns
    - if 'B' or 'W', save [row, col] pair to `coordinates` under appropriate key ('B' or 'W')
    - Guard clause: return undefined if 'B' or 'W' key already exists
  - return coordinates
- attackableCoordinates(coordinate 1, coordinate2) => true/false
  1. Check if coordinates are in same row
    - Return true if both elements in first index are same
    2. Check if coordinates are in same column
    - Return true if both elements in second index are same
  3. Check if coordinates are in the same diagonal
    - Calculate absolute difference between first index
    - Calculate absolute difference between second index
    - Return true if both differences are same
  4. If we make it to end, return false

Detailed:
1. Parse board into correct data structure
  - Split input into array of strings based on newline characters

2. Find queens' location
  - Use queenCoordinates, pass in our board, get back object with coordinates

3. Stop if we don't have both queens
  - If coordinate object doesn't contain one 'B' and one 'W', return undefined

4. Determine if queens can attack each other
  - Use attackableCoordinates(), pass in our coordinates, and return our return value



*/



// ========= TEST CASES ============
// Given test case:
console.log(queenAttack("________" +
                        "________" +
                        "___W____" +
                        "________" +
                        "________" +
                        "______B_" +
                        "________" +
                        "________") === true);

// Another diagonal
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "_B______" +
                        "W_______") === true);

// Row attack 1
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "W______B" +
                        "________" +
                        "________" +
                        "________" +
                        "________") === true);

// Row attack 2
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "______WB" +
                        "________") === true);

// Column attack 1
console.log(queenAttack("_______B" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "_______W") === true);

// Column attack 2
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "_B______" +
                        "_W______" +
                        "________" +
                        "________" +
                        "________") === true);

// No attack 1
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "_B______" +
                        "_____W__" +
                        "________" +
                        "________" +
                        "________") === false);

// No attack 2
console.log(queenAttack("_______B" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "_W______" +
                        "________" +
                        "________") === false);

// Missing Queen - B
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "_B______" +
                        "________" +
                        "________" +
                        "________" +
                        "________") === undefined);

// Missing Queen - W
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "____W___" +
                        "________") === undefined);

// Missing Queen - both
console.log(queenAttack("________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________" +
                        "________") === undefined);


