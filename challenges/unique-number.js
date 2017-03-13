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
  if (!array || array.length < 1) return;
  if (array.length === 1) return array[0];

  let mySet = new Set(array);
  let sum1 = [...mySet].reduce((acc, curr) =>  acc + curr) * 2;
  let sum2 = array.reduce((acc, curr) => acc + curr);

  return sum1 - sum2;
}

// console.log(uniqueNumber([1,2,1,3,3,2,4,5,4]));

module.exports = uniqueNumber;
