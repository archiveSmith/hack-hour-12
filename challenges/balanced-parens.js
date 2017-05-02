/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false!
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
	const matches = {'[':']', '{':'}', '(':')',};
	let brackets = [];
	// loop over string
	for (var i = 0; i < input.length; i += 1) {
		let char = input[i];
		// if char is opening bracket, push it on the stack
		if (char in matches) {
			brackets.push(char);
		// else, if char closing, compare it with last item on stack
		} else if (char === ']' || char === '}' || char === ')') {
			if (matches[brackets.pop()] !== char) {
				return false;
			}
		}
	}
	// return true if stack is empty
	return !brackets.length;
}
module.exports = balancedParens;
