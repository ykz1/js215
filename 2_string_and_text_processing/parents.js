function isBalanced(str) {
  let brackets = 0;
  for (let char of str) {
    if (char === '(') {
      brackets += 1;
    } else if (char === ')') {
      brackets -= 1;
    }
    if (brackets < 0) return false;
  }
  return brackets === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);


// Further Exploration: any `return` within the callback function passed to `forEach` will only return from that callback function. As a result, `forEach` will always iterate through the entire array, and will not return early. As a result, we must use another variable to track whenever a close bracket comes before a matching open bracket.
function isBalanced2(str) {
  let brackets = 0;
  let closeBeforeOpen = false;
  str.split('').forEach(char => {
    if (char === '(') {
      brackets += 1;
    } else if (char === ')') {
      brackets -= 1;
    }
    if (brackets < 0) {
      closeBeforeOpen = true;
    }
  });
  return !closeBeforeOpen && brackets === 0;
}

console.log(isBalanced2('What (is) this?') === true);
console.log(isBalanced2('What is) this?') === false);
console.log(isBalanced2('What (is this?') === false);
console.log(isBalanced2('((What) (is this))?') === true);
console.log(isBalanced2('((What)) (is this))?') === false);
console.log(isBalanced2('Hey!') === true);
console.log(isBalanced2(')Hey!(') === false);
console.log(isBalanced2('What ((is))) up(') === false);
