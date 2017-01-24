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
	if (!input || input.length < 1) return false;
	const depths = Array(3).fill(0);

	for (let i = 0; i < input.length; i += 1) {
		let char = input.charAt(i);
		switch(char) {
			case '(':
				depths[0] += 1;
				break;
			case ')':
				depths[0] -= 1;
				break;
			case '[':
				depths[1] += 1;
				break;
			case ']':
				depths[1] -= 1;
				break;
			case '{':
				depths[2] += 1;
				break;
			case '}':
				depths[2] -= 1;
				break;
			default:
				break;
		}
	}

	return (depths.reduce((res, acc) => res + acc, 0) === 0);

}

console.log(balancedParens('[(]{)}'));

module.exports = balancedParens;
