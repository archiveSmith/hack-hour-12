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
  if (input.length === 0) return true;
  let arr = [];
    for (let i = 0; i < input.length ; i+= 1) {
      if (input[i] === '(' || input[i] === ')' || input[i] === '[' || input[i] === ']' || input[i] === '{' || input[i] === '}') {
        arr.push(input[i]);
      }
  }

  let openParens = 0;
  let parenClosing = false;
  let outerParen = false;
  let openBrackets = 0;
  let bracketClosing = false;
  let outerBracket = false;
  let openCurlies = 0;
  let curlyClosing = false;
  let outerCurly = false

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '(') {
      openParens += 1;
      if (openBrackets === 0 && openCurlies === 0) outerParen = true;
    }
    else if (arr[i] === ')') {
      openParens -= 1;
      parenClosing = true;
    }
    else if (arr[i] === '[') {
      openBrackets += 1;
      if (openParens === 0 && openCurlies === 0) outerBracket = true;
    }
    else if (arr[i] === ']') {
      openBrackets -= 1;
      bracketClosing = true;
    }
    else if (arr[i] === '{') {
      openCurlies += 1;
      if (openBrackets === 0 && openParens === 0) outerCurly = true;
    }
    else if (arr[i] === '}') {
      openCurlies -= 1;
      curlyClosing = true;
    }

    if (openParens < 0 || openBrackets < 0 || openCurlies < 0) return false;

    if ((parenClosing && openBrackets !== 0 && !outerBracket) || (parenClosing && openCurlies !== 0 && !outerCurly)) return false;
    if ((bracketClosing && openParens !== 0 && !outerParen) || (bracketClosing && openCurlies !== 0 && !outerCurly)) return false;
    if ((curlyClosing && openParens !== 0 && !outerParen) || (curlyClosing && openBrackets !== 0 && !outerBracket)) return false;

    curlyClosing = false;
    parenClosing = false;
    bracketClosing = false;

  }
  if (openParens !== 0 || openBrackets !== 0 || openCurlies !== 0) return false;
  return true;
}

module.exports = balancedParens;
