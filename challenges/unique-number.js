/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const seen = {};
  for (let i = 0; i < array.length; i += 1) {
    seen[array[i]] = !seen[array[i]];
  }
  for (let key in seen) {
    if (seen[key] === true) return key;
  }
}

module.exports = uniqueNumber;
