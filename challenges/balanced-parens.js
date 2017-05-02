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
  const brackets = [];
  console.log(input);

  // make a reference object with valid open and closing brackets
  const openBrackets = { '{': '}',  '[': ']', '(': ')' };

  // loop through input
  for (let i = 0; i < input.length; i++) {
    // if we find any open brackets, push them onto the brackets array
    if (input[i] in openBrackets)
      brackets.push(input[i]);

    // if we find any closing brackets, check to see if it is the valid closing
    // bracket matching the last open bracket on the stack.  If it is, we've closed
    // that group so we can pop it off the array and keep going.  If not, we know this
    // string does not contain balanced parens.  Return false.
    else if (/[\]})]/.test(input[i])) {
      if (openBrackets[brackets.pop()] !== input[i]) return false;
    }
  }

  // if brackets is empty, we return true, if not, we know something didn't match
  return !brackets.length;

}

function cSbalancedParens(input){
  var matches = { '[': ']', '{': '}', '(': ')' };
  var brackets = [];
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (char in matches) {
      brackets.push(char);
    } else if (char === ']' || char === ')' || char === '}') {
      if (matches[brackets.pop()] !== char){
        return false;
      }
    }
  }

  return !brackets.length;
}

console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('(')); //false
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); //false
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
module.exports = balancedParens;
