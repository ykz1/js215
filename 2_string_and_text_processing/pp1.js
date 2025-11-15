// Q1
const firstName = 'Kyle';
const lastName = 'Zhao';
fullName = firstName + ' ' + lastName;
console.log(fullName);

// Q2
console.log(firstName.concat(lastName));

// Q3
console.log(fullName.split(' '));

// Q4
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

//Q5
let charCode = language.charCodeAt(idx);
console.log(charCode);

// Q6
console.log(String.fromCharCode(charCode));

// Q7
console.log(language.lastIndexOf('a'));

// Q8
let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B'; 
console.log(a > b);

// Q9
console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

// Q10
console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

// Q11
console.log(language.slice(1, -1)); // slice treats negative as negativce index
console.log(language.slice(2, -1));

// Q12
console.log(language.substring(1, -1)); // substring treats negative as 0, and swaps low / high
console.log(language.substring(2, -1));

// Q13
let fact1 = 'JavaScript is fun'
let fact2 = 'Kids like it too'
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

// Q14
console.log(fact1[0]);
console.log(fact2[0]);

// Q15
const pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

// Q16
let boxNumber = (356).toString();

// Q17
console.log(typeof boxNumber);
boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// Q18
let rls = require('readline-sync');
let name = rls.question('What is your name? ')
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0,-1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}