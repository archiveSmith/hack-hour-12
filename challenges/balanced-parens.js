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
  // implement a stack data-structure to manage last-in-first-out
  // that way, each opening/closing character must either be an opening character
  // or a closing character that corresponds to the top stack character
  const stack = [];

  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < input.length; i++) {
    const chr = input[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }
  // if we iterate through the input w/o false patterns
  // we check to see if the stack is clear
  return stack.length === 0;
}

module.exports = balancedParens;
