function sum(num) {
  return String(num).split('').reduce((sum, num) => sum + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45