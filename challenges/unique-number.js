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

 // O(n) time
// function uniqueNumber(array) {
//   const numbers = {};
//
//   array.forEach((number) => {
//     if (numbers[number]) numbers[number]++;
//     else numbers[number] = 1;
//   });
//
//   const keys = Object.keys(numbers);
//   for (let i = 0; i < keys.length; i++) {
//     if (numbers[keys[i]] === 1) return keys[i];
//   }
//
//   return;
// }

// O(1) space
function uniqueNumber(array) {
  for (let i = 0; i < array.length; i++) {
    const compare = array[i];
    let unique = true;

    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        unique = false;
        break;
      }
    }

    if (unique) return array[i];
  }
}

module.exports = uniqueNumber;
