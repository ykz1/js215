function staggeredCase(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) output += str[i].toUpperCase();
    if (i % 2 === 1) output += str[i].toLowerCase();
  }
  return output;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"