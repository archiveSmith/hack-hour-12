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

function balancedParens(input) {
  input = input.replace(/[^\[\]\(\)\<\>\{\}]/gi, '');
  const len = input.length;
  const compArr = [];
  const matchArr = [];
  const matches = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let i = 0; i < len; i += 1) {
    if (compArr.length > 0) {
      if (matchArr.includes(input[i])) {
        compArr.pop();
        matchArr.pop();
      } else {
        compArr.push(input[i]);
        matchArr.push(matches[input[i]]);
      }
    } else {
      compArr.push(input[i]);
      matchArr.push(matches[input[i]]);
    }
  }

  if (compArr.length > 0) return false;

  return true;
}


module.exports = balancedParens;
