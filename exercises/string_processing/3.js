function letterCaseCount(str) {
  let output = {lowercase: 0, uppercase: 0, neither:0};
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) output.lowercase++;
    if (/[A-Z]/.test(str[i])) output.uppercase++;
    if (/[^a-z]/i.test(str[i])) output.neither++;
  }
  return output
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }