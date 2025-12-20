function triangle(a1, a2, a3) {
  const angles = [a1, a2, a3].sort((a, b) => a - b);
  if (a1 + a2 + a3 !== 180 || angles[0] <= 0) return 'invalid';
  if (angles[2] === 90) return 'right';
  if (angles[2] > 90) return 'obtuse';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

