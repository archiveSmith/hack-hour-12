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
  let counter = 0;
  let ch = input[counter++];
  const stack = [];

  while (ch) {
    if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      if (stack[stack.length-1] !== '(') return false;
      stack.pop();
    } else if (ch === '[') {
      stack.push(ch);
    } else if (ch === ']') {
      if (stack[stack.length-1] !== '[') return false;
      stack.pop();
    } else if (ch === '{') {
      stack.push(ch);
    } else if (ch === '}') {
      if (stack[stack.length-1] !== '{') return false;
      stack.pop();
    }

    ch = input[counter++];
  }

  if (stack.length > 0) return false;
  return true;
}

module.exports = balancedParens;
