/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
'use strict';
function pow(base, power) {
	if (!power) return 1;
	else {
		return base * pow(base, power-1);
	}
}
//console.log(pow(2,6));
module.exports = pow;
