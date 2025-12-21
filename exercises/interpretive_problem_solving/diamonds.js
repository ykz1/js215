"use strict";

/*
Input: odd integer n
Output: n x n grid with a diamond formed by '*'
Requirements: 
  - Diamond fills the length and height of the grid

Assumptions:
  - Always given odd integer
  - Pad empty space with ' '

Algorithm
  - Use an array to store n strings
  - Start with middle string of n '*'s: store this in our array
  - Loop until array length equals n provided. With each iteration
    - replace leftmost and rightmost '*' with a space
    - both push and unshift this into our array
  - Print grid line by line
*/

function diamond(n) {
  let grid = [];
  for (let distance = 0; grid.length < n; distance++) {
    const stars = '*'.repeat(n - distance * 2);
    const pad = ' '.repeat(distance);
    const line = pad + stars + pad;
    if (grid.length !== 0) grid.push(line);
    grid.unshift(line);
  }
  grid.forEach(line => console.log(line));
}

diamond(1);
diamond(3);
diamond(5);
diamond(11);

/* 
Hollow diamond:

We still need to track
- left pad
- right pad

But now we need to split what used to be a continuous string of '*'s into:
- left '*'
- middle pad = (n - distance - 2) or 0
- right '*'

And we also need to account for the first last line which only has one '*'

We should be able to build our grid using our old code, but refactor only the part which constructs variable stars which holds the part of each line previously with stars, but now with stars on the outside with a middle pad of space(s)


*/

function hollowDiamond(n) {
  let grid = [];
  for (let distance = 0; grid.length < n; distance++) {
    let stars;
    if ((distance * 2 + 1) === n) {
      stars = '*';
    } else {
      const middle = ' '.repeat(n - 2 - distance * 2);
      stars = '*' + middle + '*'
    }
    const pad = ' '.repeat(distance);
    const line = pad + stars + pad;
    if (grid.length !== 0) grid.push(line);
    grid.unshift(line);
  }
  grid.forEach(line => console.log(line));
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(5);
hollowDiamond(11);