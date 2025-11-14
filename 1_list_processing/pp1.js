let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

//  Map each array to the product of its inner array's nested elements
//  Return the sum of the array

function totalArea(rectangles) {
  const areas = rectangles.map(calculateArea);
  return areas.reduce((acc, rectangle) => acc + rectangle);
}

let calculateArea = rectangle => rectangle.reduce((acc, side) => acc * side);


console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  const squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121