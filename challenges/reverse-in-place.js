'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
	const len = array.length;
	if (len === 0 || arguments.length < 1) return [];
	for (let i = 0; i < len / 2; i += 1) {
		[array[i], array[len - (i + 1)]] = [array[len - (i + 1)], array[i]];
	}
	return array;
}

module.exports = reverseInPlace;
