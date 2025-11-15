function isValidEmail(email) {
  // Must have one @
  if (email.match(/@/g).length !== 1) return false;   // One @
  const [local, domain] = email.split(/@/);

  // Local must have one or more alphabet or number, and nothing else
  if (!(/[a-zA-Z0-9]+/.test(local)) || /[^a-zA-Z0-9]/.test(local)) return false;

  // Domain must have at least one dot separating components which only contain alphabets
  if (!(/[a-zA-Z]+(\.[a-zA-Z]+)+/g.test(domain)) || /[^a-zA-Z\.]/.test(domain)) return false;

  return true;
}

function isValidEmail2(email) {
  return /[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+/g.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('foo@baz@bar.ph'));          // returns false
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false

console.log();

function isValidEmail2(email) {
  return /^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/i.test(email);
}
console.log(isValidEmail2('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail2('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail2('foo@baz.com'));             // returns true
console.log(isValidEmail2('foo@baz.ph'));              // returns true
console.log(isValidEmail2('foo@baz@bar.ph'));          // returns false
console.log(isValidEmail2('HELLO123@baz'));            // returns false
console.log(isValidEmail2('foo.bar@baz.to'));          // returns false
console.log(isValidEmail2('foo@baz.'));                // returns false
console.log(isValidEmail2('foo_bat@baz'));             // returns false
console.log(isValidEmail2('foo@bar.a12'));             // returns false
console.log(isValidEmail2('foo_bar@baz.com'));         // returns false
console.log(isValidEmail2('foo@bar.....com'));         // returns false
