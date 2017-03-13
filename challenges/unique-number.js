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
  //check inputs
  if (!array || !Array.isArray(array)) return 'Check Inputs';

  //loop through and put into object cache
  const found = {};

  for (var i = 0; i < array.length; i++) {
    console.log(found);
    //if number not in cache, create new property with number
    if (found.hasOwnProperty(array[i])) {
      delete found[array[i]];
    //else delete number from cache
    } else {
      found[array[i]] = true;
    }
  }
  return Object.keys(found)[0];
}
console.log(uniqueNumber([1,1,2,3,3]));
module.exports = uniqueNumber;
