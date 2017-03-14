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
  const store = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!store[array[i]]) store[array[i]] = true;
    else delete store[array[i]];
  }
  let result;
  return Object.keys(store)[0];
}

// Bitwise XOR
// function uniqueNumber(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     result = result ^ array[i];
//   }
//   return result;
// }

// console.log(uniqueNumber([1,2,1,3,3,2,4,5,4]));

module.exports = uniqueNumber;
