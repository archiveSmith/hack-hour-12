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
  if (typeof input !== 'string' || !input) return false;  
  const leftSides = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i].match(/[\[\(\{]/)) leftSides.push(input[i]);
    else if (input[i].match(/[\]\}\)]/)) {
      if ((leftSides[leftSides.length - 1] + input[i]).match(/(\[\])|(\{\})|(\(\))/))
        leftSides.pop(); 
      else return false;
    }
  } return leftSides.length === 0;
}

module.exports = balancedParens;
