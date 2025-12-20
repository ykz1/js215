function triangle(s1, s2, s3) {
  const sides = [s1, s2, s3].sort((a, b) => a - b);
  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) return 'invalid';
  if (sides[0] === sides[2]) return 'equilateral';
  return (new Set(sides).size === 2 ? 'isosceles' : 'scalene');
}

console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");
