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
  if (typeof input !== "string") return true;
  if (input === "") return true;
  
  const parensCounter = [];  //  counter for balanced parens
  const inputLength = input.length;
  
  for (let i = 0; i < inputLength; i += 1) {
    // if input[i] is an open parens type, push parens type to parensCounter
    if (input[i] === '(') parensCounter.push('(');
    if (input[i] === '[') parensCounter.push('[');
    if (input[i] === '{') parensCounter.push('{');
    
    // if input[i] is matching closing parens type for last element in
    // closing parensCounter, pop element from parensCounter
    if (input[i] === ')' && parensCounter[parensCounter.length - 1] === '(') parensCounter.pop();
    if (input[i] === ']' && parensCounter[parensCounter.length - 1] === '[') parensCounter.pop();
    if (input[i] === '}' && parensCounter[parensCounter.length - 1] === '{') parensCounter.pop();
   }

  // if parensCounter === 0 we have balanced parens
  if (parensCounter.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = balancedParens;
