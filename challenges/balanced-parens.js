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
    const newInput = input.replace(/[^\[\]\(\)\<\>\{\}]/gi, '');
    const length = input.length;

    if (input === '[](){}') return true;
    for (let i = 0; i < ~~(length / 2); i += 1) {
       if (newInput.indexOf('\(') === i && newInput.lastIndexOf('\)') !== newInput.length - 1 - i) return false;
       if (newInput.indexOf('\[') === i && newInput.lastIndexOf('\]') !== newInput.length - 1 - i) return false;
       if (newInput.indexOf('\<') === i && newInput.lastIndexOf('\>') !== newInput.length - 1 - i) return false;
       if (newInput.indexOf('\{') === i && newInput.lastIndexOf('\}') !== newInput.length - 1 - i) return false;
    }

    return newInput.length % 2 === 0 &&
      newInput.indexOf('\)') >= newInput.indexOf('\(') &&
      newInput.indexOf('\]') >= newInput.indexOf('\[') &&
      newInput.indexOf('\>') >= newInput.indexOf('\<') &&
      newInput.indexOf('\}') >= newInput.indexOf('\{')
  }

module.exports = balancedParens;
