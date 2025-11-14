function substrings(str) {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      output.push(str.slice(i, j));
    }
  }
  return output;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

// Further Exploration

  function substrings2(str) {
    return str.split('')
              .map((subStr, idx, arr) => [subStr, arr.slice(idx + 1).map((char) => subStr += char)])
              .flat(Infinity);
  }

console.log(substrings2('abcde'));
