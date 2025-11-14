function sumOfSums(nums) {
  return nums.map((num, i) => num * (nums.length - i))
             .reduce((sum, num) => sum + num, 0);
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

let sumOfSums2 = nums => nums.reduce((sum, num, idx) => sum + num * (nums.length - idx), 0);

console.log(sumOfSums2([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums2([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums2([4]));              // 4
console.log(sumOfSums2([1, 2, 3, 4, 5]));  // 35