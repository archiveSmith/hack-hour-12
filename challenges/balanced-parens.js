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
  if (input.length % 2 === 1) return false;

  let parens = 0;
  let counter = 0;
  let ch = input[counter++];

  while (ch) {
    if (ch === '(') {
      parens++;
      if (input[counter + 1] !== ')' || input[counter + 1] !== '(') return false;
    } else if (ch === ')') {
      parens--;
    }
    ch = input[counter++];
  }

  return parens === 0 ? true : false;
}

module.exports = balancedParens;
