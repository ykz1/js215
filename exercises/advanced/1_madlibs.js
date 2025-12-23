"use strict"
/*
PROBLEM
  Input: text template
TEST CASES

DATA STRUCTURES & ALGORITHMS
*/


let template1 = 'The {adjective} brown {noun} {adverb} {verb} the {adjective} {noun}, who {adverb} {verb} his {noun} and looks around.'
let template2 = "The {noun} {verb} the {noun}'s {noun}."

function madlibs(template) {
  const WORDS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  }
  
  function sampleWord(match) {
    const key = match.replace(/[^a-z]/gi, '');
    const words = WORDS[key];
    const randIndex = Math.floor(Math.random() * words.length);
    return words[randIndex];
  }

  return template.replace(/{([a-z]*)}/gi, sampleWord)
}

// These examples use the following list of replacement texts:

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".