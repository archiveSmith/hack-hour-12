/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  const bracketStore = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const brackets = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    let isOpenBracket = false;
    let isClosedBracket = false;
    let bracketChar;

    Object.keys(bracketStore).forEach(bracket => {
      if (char === bracket) {
        isOpenBracket = true;
        bracketChar = bracket;
      }
      if (char === bracketStore[bracket]) {
        isClosedBracket = true;
        bracketChar = bracket;
      }
    });

    if (isOpenBracket) { brackets.push(bracketChar); }

    // last inserted bracket must be open bracket version of closed bracket
    else if (isClosedBracket) {
      if (brackets[brackets.length - 1] === bracketChar) {
        brackets.pop()
      } else {
        return false;
      }
    }
  }

  // all open brackets must be popped off by closed brackets
  return brackets.length === 0;
}

console.log('true: ', balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log('false: ', balancedParens(' var hubble = function() { telescopes.awesome();'));
console.log('false: ', balancedParens('('));  // false
console.log('true: ', balancedParens('()')); // true
console.log('false: ', balancedParens(')('));  // false
console.log('true: ', balancedParens('(())'));  // true
console.log('true: ', balancedParens('[](){}')); // true
console.log('true: ', balancedParens('[({})]'));   // true
console.log('false: ', balancedParens('[(]{)}')); // false

module.exports = balancedParens;
