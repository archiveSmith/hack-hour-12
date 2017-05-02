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
  const charArr = input.split('');
  const brackets = {};
  const open = ['(', '{', '['];
  const closed = [')', '}', ']'];
  charArr.forEach(function(char) {
    if (brackets.hasOwnProperty(char)) {
      brackets[char] += 1;
    } else if (bracketArr.includes(char)) {
      brackets[char] = 1;
      }
    });
  let matched = true;
  for (let i = 0; i < bracketArr.length; i += 2) {
    if (brackets.hasOwnProperty(bracketArr[i])) {
      if (brackets[bracketArr[i]] !== brackets[bracketArr[i + 1]]) {
        matched = false;
      }
    }
  }
  console.log(matched);
  return matched;
}

module.exports = balancedParens;


balancedParens('(');  // false
balancedParens('()'); // true
    balancedParens(')(');  // false
    balancedParens('(())');  // true

   balancedParens('[](){}'); // true
   balancedParens('[({})]');   // true
   balancedParens('[(]{)}'); // false

  balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
  balancedParens(' var hubble = function() { telescopes.awesome();'); // false