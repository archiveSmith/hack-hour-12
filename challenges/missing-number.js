/*
A zero-indexed array A consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], which means
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange:
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/

// O(n log n) space and time complexity
// function missingNum(Array) {
// 	const sorted = Array.sort((a, b) => a - b);
//
// 	for (let i = 0; i < sorted.length; i++) {
// 		if (sorted[i] !== i + 1) return i + 1;
// 	}
// }

// O(n) time and O(n) space
// function missingNum(Array) {
// 	const numbers = {};
//
// 	for (let i = 0; i < Array.length; i++) {
// 		numbers[Array[i]] = true;
// 	}
//
// 	const keys = Object.keys(numbers);
//
// 	for (let i = 0; i < keys.length; i++) {
// 		if (Number(keys[i]) !== i + 1) return i + 1;
// 	}
// }

// O(n) time O(1) space
function missingNum(Array) {
	const expected = (Array.length + 2) * ((Array.length + 1) / 2);
	const sum = Array.reduce((a, b) => a + b, 0);

	return expected - sum;
}

module.exports = missingNum;
