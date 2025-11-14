function buyFruit(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) {
      output.push(arr[i][0]);
    }
  }
  return output;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]