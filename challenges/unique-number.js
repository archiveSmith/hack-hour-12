/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * [8,9,8,9,3]
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

//console.log(uniqueNumber([8,9,8,9,3]));// -> 2
function uniqueNumber(array) {
  const res = {};

  for (let i = 0; i < array.length; i++) {
    res[array[i]] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    res[array[i]]++;
  }

  for (let key in res) {
    if(res[key] === 1) {
      return key;
    }
  }
}

module.exports = uniqueNumber;
