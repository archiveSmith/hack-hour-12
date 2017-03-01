/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let n = array.length - 1
	let true_sum = (1 + n)*n/2;
	return sum - true_sum;
}

let result = repeatNumbers([3,1,2,4,5,6,7,5])
console.log(result);

module.exports = repeatNumbers;
