"use strict"

/*

PROBLEM
  Input
    - odd integer n
  
  Output
    - n x n grid with an 8-pointed star
  
  Requirements / assumptions:
    - n provided will always be an odd integer greater than 7
    - assume we don't have to worry about wrapping 

TEST CASES
  - 7, 9, try 15 too

DATA STRUCTURE & ALGORITHM
  Notes
    - Can go "inside out", starting with middle line of n stars
    - "draw" two lines at a time: +/- distance from middle
    - each line has 7 components
      - left outer pad
      - star
      - left inner pad
      - star
      - right inner pad
      - star
      - right outer pad
    - but it only has 3 unique elements:
      - star: always '*'
      - inner pad: always distance - 1
      - outer pad: n - innerPad * 2 - 3
  Data Structure:
    - store lines into an array
  Algorithm:
  - (optional) guard clause for bad input  
  - draw middle line and add to output array
  - loop adding lines to output array until size of array exceeds n
    - build line-by-line and add both to beginning (unshift) and end (push) of output array
  - log each line of output array
*/


function star(n) {
  let line = '*'.repeat(n);
  let grid = [line];
  for (let distance = 1; grid.length < n; distance++) {
    let innerPad = ' '.repeat(distance - 1);
    let outerPad = ' '.repeat((n - 3 - (innerPad.length * 2)) / 2);
    line = outerPad + '*' + innerPad + '*' + innerPad + '*' + outerPad;
    grid.push(line);
    grid.unshift(line);
  }
  grid.forEach(line => console.log(line));
}

star(7);
star(9);
star(15);