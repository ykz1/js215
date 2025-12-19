function wordToDigit(str) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < nums.length; i++) {
    const regex = new RegExp(`\\b${nums[i]}\\b`,"gi");
    str = str.replace(regex, i);
  }
  return str
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


