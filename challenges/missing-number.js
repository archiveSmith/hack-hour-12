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
// function missingNum(Array) {
//   let compare = 0;
//   let count = 1;
//   for (let i = 1; i < Array.length + 1; i += 1) {
//     compare = count ^ Array[i];
//     console.log(compare)
//     count += 1;
//   }
//   return compare;
// }

// // time complexity: O(n)
// // space complexity: 1
// function missingNum(array) {
//   // get sum of all integers from 1 to (N+1) including missing element
//   // using sum of linear series of number: n*(n+1)/2, n = Array.length + 1
//   const sum = (array.length + 1) * (array.length + 2) / 2;

//   // subtract all present integers from sum to find missing element
//   return array.reduce((total, num) => total - num, sum);
// };

const missingNum = arr => arr.reduce((acc, num) => acc - num, (arr.length + 1) * (arr.length + 2) / 2);

console.log(missingNum([2, 3, 1, 5, 6, 7]));

module.exports = missingNum;
