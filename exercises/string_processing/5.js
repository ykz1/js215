function swapCase(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) output += str[i].toUpperCase();
    if (/[A-Z]/.test(str[i])) output += str[i].toLowerCase();
    if (/[^a-z]/i.test(str[i])) output += str[i];
  }
  return output;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"