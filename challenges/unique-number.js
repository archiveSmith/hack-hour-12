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
  let numbers = {};
  for(let i = 0; i < array.length; i++) {
    if(!numbers[array[i]]) numbers[array[i]] = 1;
    else numbers[array[i]]++;
  }
  let keys = Object.keys(numbers);
  for(let i = 0; i < keys.length; i++) {
    if(numbers[keys[i]] === 1) return keys[i];
  }
}

// console.log(uniqueNumber([1,1,2,2,3,3,4,4,5,6,6,7,7]));

module.exports = uniqueNumber;
