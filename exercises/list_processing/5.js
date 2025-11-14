function leadingSubstrings(str) {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(str.slice(0, i + 1));
  }
  return output;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// Further exploration

function leadingSubstrings2(str) {
  let subStr = '';
  return str.split('')
            .map(char => subStr += char);
}

console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings2('a'));        // ["a"]
console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
