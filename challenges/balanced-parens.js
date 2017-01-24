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
  

if (input.indexOf('(') > -1 && (input.indexOf(')') < input.indexOf('(') || input.indexOf(')') < input.indexOf('[') || input.indexOf(')') < input.indexOf('{'))) return false;
if (input.indexOf('[') > -1 && (input.indexOf(']') < input.indexOf('(') || input.indexOf(']') < input.indexOf('[') || input.indexOf(']') < input.indexOf('{'))) return false;
if (input.indexOf('{') > -1 && (input.indexOf('}') < input.indexOf('(') || input.indexOf('}') < input.indexOf('[') || input.indexOf('}') < input.indexOf('{'))) return false;


let sorted = input.split('').sort();

if (sorted.lastIndexOf('(') * 2 + 1 !== sorted.lastIndexOf(')')) return false;
sorted = sorted.splice(sorted.lastIndexOf(')') + 1);
if (sorted.lastIndexOf('[') * 2 + 1 !== sorted.lastIndexOf(']')) return false;
sorted = sorted.splice(sorted.lastIndexOf(']') + 1);
if (sorted.lastIndexOf('{') * 2 + 1 !== sorted.lastIndexOf('}')) return false;

return true;
}

module.exports = balancedParens;
