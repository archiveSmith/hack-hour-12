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
 *  balancedParens('[{}](){}'); // true
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
  let parens = [];
  for (let ch of input) {
    if (/[\{\}\[\]\(\)]/ig.test(ch)) parens.push(ch);
  }

  for (let [index, ch] of parens.entries()) {
    if (ch === '{') {
      let next = parens.indexOf('}', index);
      if ((next - index) % 2 !== 1) return false;
    } else if (ch === '(') {
      let next = parens.indexOf(')', index);
      if ((next - index) % 2 !== 1) return false;
    } else if (ch === '[') {
      let next = parens.indexOf(']', index);
      if ((next - index) % 2 !== 1) return false;
    }
  }

  return true;
  
}

console.log(balancedParens('[{{](]'));
 
module.exports = balancedParens;