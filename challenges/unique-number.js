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
  let actualSum = 0;
  let mySet = new Set();

  for (const num of array) {
    actualSum += num;
    mySet.add(num);
  }

  let expectedSum = 0;

  for (const num of mySet) {
    expectedSum += num;
  }

  return (2 * expectedSum) - actualSum;
}

// console.log(uniqueNumber([1,2,1,3,2,3,4]));

module.exports = uniqueNumber;
