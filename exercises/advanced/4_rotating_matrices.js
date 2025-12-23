/*

PROBLEM
  Input:        - 2D nested array with arbitrary MxN matrix of elements; assumed that elements are numbers / immutable
  Output:       - Similar 2D nested array but with elements 'rotated'
  Requirements: - Rotate given matrix by 90-degrees clockwise, as illustrated in provided test cases
                - 4x rotations end up back at the original matrix

TEST CASES

DATA STRUCTURES & ALGORITHM
  Notes         - This is similar to a transpose, except instead of transposing row 1 to col 1, we move row 1 to col 3
                - In transpose:
                  - Row 1 => Col 1
                  - Row 2 => Col 2
                  - Row 3 => Col 3
                - In a 90-dedgree rotateion
                  - Row 1 => Col 3
                  - Row 2 => Col 2
                  - Row 3 => Col 1
                - Col indices are (total col - original row index)
*/

function rotate90(matrix) {
  let output = [];
  let rowCount = matrix.length;
  let colCount = matrix[0].length;

  for (let i = 0; i < colCount; i++) {
    output.push([]);
  }

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      output[c][rowCount - r - 1] = matrix[r][c];
    }
  }
  return output;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]