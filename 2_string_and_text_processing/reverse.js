function reverse(string) {
  return string.split('')
               .reverse()
               .join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"

function reverse2(string) {
  let output = '';
  for (char of string) {
    output = char + output;
  }
  return output;
}

console.log(reverse2('hello'));                  // returns "olleh"
console.log(reverse2('The quick brown fox'));    // returns "xof nworb kciuq ehT"
