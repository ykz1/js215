function isAllUnique(string) {
  let chars = {};
  string = string.toLowerCase()
                 .replace(/ /g,'');

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (chars[char]) return false;
    chars[char] = true;
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true