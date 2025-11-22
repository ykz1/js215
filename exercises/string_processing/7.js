function staggeredCase(str) {
  let chars = str.split('');
  let idx = 0;
  chars = chars.map(char => {
    if (/[a-z]/i.test(char)) {
      idx++
      return idx % 2 !== 0 ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  })
  return chars.join('');
}

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");