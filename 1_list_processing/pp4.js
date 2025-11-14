function anagram(word, list) {
  return list.filter(testWord => testWord.split('').sort().join('') === word.split('').sort().join(''));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]