/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power <= 0) return 1;
	// tail call optimization
	// think of num as the function's state at the current invocation
	function recursivePow(base, power, num) {
		if (power === 1) return num;
		return recursivePow(base, power - 1, base * num);
	}

	return recursivePow(base, power, base);
}

module.exports = pow;
