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
  
// const p1 = input.indexOf('(');
// const pc = input.indexOf(')');
// const b1 = input.indexOf('[');
// const c1 = input.indexOf('{');

// if (p1 > -1 && (pc < p1 || pc < b1 || pc < c1)) return false;
// if (b1 > -1 && (input.indexOf(']') < p1 || input.indexOf(']') < b1 || input.indexOf(']') < c1)) return false;
// if (c1 > -1 && (input.indexOf('}') < p1 || input.indexOf('}') < b1 || input.indexOf('}') < c1)) return false;


// let sorted = input.split('').sort();

// if (sorted.lastIndexOf('(') * 2 + 1 !== sorted.lastIndexOf(')')) return false;
// sorted = sorted.splice(sorted.lastIndexOf(')') + 1);
// if (sorted.lastIndexOf('[') * 2 + 1 !== sorted.lastIndexOf(']')) return false;
// sorted = sorted.splice(sorted.lastIndexOf(']') + 1);
// if (sorted.lastIndexOf('{') * 2 + 1 !== sorted.lastIndexOf('}')) return false;

// return true;

  // implement a stack data-structure to manage last-in-first-out
  // that way, each opening/closing character must either be an opening character
  // or a closing character that corresponds to the top stack character
  let stack = [];

  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };
  
  for (let i = 0; i < input.length; i ++) {
    let chr = input[i];
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
