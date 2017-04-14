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
  const store = {};

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in store) {
      delete store[array[i]];
    } else {
      store[array[i]] = true;
    }
  }

  return Object.keys(store)[0];
}

// Bitwise XOR O(n)
function uniqueNumberAlt(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}

// one liner Bitwise
// const uniqueNumberReduce = (array) => reduce(acc, curr, 0) => 

module.exports = uniqueNumber;
