/*

PROBLEM DESCRIPTION:

In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal. Positions on the board equate to coordinate numbers. Given a set up like so:

_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _

The white queen's position equates to (2, 3) and the black queen is at (5, 6). In this example the queens are on the same diagonal, and therefore can attack each other.

Write a function which, given a string representation of the board with the two queens, returns true or false depending on whether the queens can attack each other or not.

*/

/*

======= PROBLEM ========

Input:
- String representation of a board, assumed to be broken down by newline characters

Output:
- true or false based on whether queens on board can attack each other

Rules:
- Queens can attack each other if on the same...
- row:      same 'row' coordinate
- column:   same 'column' coordinate
- diagonal: absolute difference in 'row' and 'column' coordinates equal

Assumptions:
- Confirm orientation / indexing of board: top left is (0, 0) - YES
- Confirm coordinates given are (row, column) - YES
- Board boundary always 8x8? - YES
- Only queens on board? - YES
- 'B' is black and 'W' is white?
  - NOTE: queens may be missing, i.e. [B, W], [B], [W], [] are all possible
- Always one 'B' and one 'W'?
- Single string with nothing but 'B', 'W', '-', ' ' (space), and '\n' (newline)
- The two queens are not differentiated from one another

======= TEST CASES ========
Can attack scenarios
- 2 same-row
- 2 same-column
- 2 same-diagonal

Cannot attack scenarios
- 3 no-attack scenarios
- missing B
- missing W
- missing both

======= DATA STRUCTURES ========
Requirements
- Parse number of queens given -- string.includes could work
- Read coordinates of queens given -- 
  - array of arrays of single-character strings; OR
  - array of strings...can read with grid[row][col] though cannot write to positions
- Calculate using coordinates
  - Can simply use variables like black_row, black_col, white_row, white_col
  - Could also use a hash

======= ALGORITHMS ========
High level:
1.  Parse board into array of strings 
2.  Find queen locations
3.  Return false unless both queens found
4.  Check whether queens can attack one another

Detailed:
1.  Parse board into array of strings
    - Split input by newline character
    - Store into board variable
2.  Find queen locations
    - Helper method: queenCoordinates to parse board and return two coordinates
    - Return could be array of two coordinates, or hash 
3.  Return false unless both queens found
    - 
4.  Check whether queens can attack one another
    - Check same row, return true if row coordinates equal one another
    - Check same column, return true if col coordinates equal one another
    - Check same diagonal, return true if absolute difference of rows equal that of cols
    - Return false otherwise

======= CODE ========

*/

function queenAttack(input) {
  let board = parseBoard(input);
  let coordinates = findQueens(board);

  if (Object.keys(coordinates).length !== 2) return false;
  if (coordinates.black.row === coordinates.white.row) return true;
  if (coordinates.black.col === coordinates.white.col) return true;
  if (isDiagonal(coordinates)) return true;
  return false;
}

const parseBoard = (input) => input.split("\n");

const findQueens = (board) => {
  const coordinates = {}
  for (let r = 0; r < 8; ++r) {
    for (let c = 0; c < 8; ++c) {
      const piece = board[r][c]
      if (piece === 'B') coordinates.black = { row: r, col: c };
      if (piece === 'W') coordinates.white = { row: r, col: c };
    }
  }
  return coordinates;
}

const isDiagonal = (coordinates) => {
  const rowDelta = Math.abs(coordinates.black.row - coordinates.white.row);
  const colDelta = Math.abs(coordinates.black.col - coordinates.white.col);
  return rowDelta === colDelta;
}



// =============== TEST CASES ================
// Can attack scenarios
// - Given test cases: W (2,3) and B (5,6)
console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W____\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n") === true);
                        
// - 2 same-row

console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W___B\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === true);


console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "B______W\n") === true);

// - 2 same-column

console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W____\n" +
                        "________\n" +
                        "________\n" +
                        "___B____\n" +
                        "________\n" +
                        "________\n") === true);


console.log(queenAttack("_______W\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n") === true);

// - 2 same-diagonal

console.log(queenAttack("________\n" +
                        "__W_____\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n" +
                        "________\n") === true);
                                                

console.log(queenAttack("_______W\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "B_______\n") === true);
                                                

// Cannot attack scenarios

// - 3 no-attack scenarios

console.log(queenAttack("_B______\n" +
                        "________\n" +
                        "_______W\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === false);
                                                

console.log(queenAttack("W_______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n" +
                        "________\n") === false);
                                                

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "____B___\n" +
                        "__W_____\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === false);
                                                

// - missing B
console.log(queenAttack("________\n" +
                        "________\n" +
                        "_____W__\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === false);
                                                
// - missing W
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "___B____\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === false);
                                                
// - missing both
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === false);
                                                
