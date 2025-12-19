const fibonacciRecursive = n => (n <= 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

function fibonacci(n) {
  if (n <= 2) return 1;
  let n1 = 1;
  let n2 = 1;
  for (let i = 2; i < n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050