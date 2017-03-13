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
  for (let i = 0; i < array.length; i += 1) {
    let paired = false;
    for (let j = 0; j < array.length; j += 1) {
      if (j === i) j += 1;
      if (array[j] === array[i]) paired = true;
    }
    if (!paired) return array[i]
  }
}

// let newObj = array.reduce(function(curr, next) {
//     if (curr[next]) curr[next] += 1;
//     else {
//       curr[next] = 1;
//     }
//     return curr;
//   }, {});
//   let keys = Object.keys(newObj);
//   let i;
//   for (i = 0; i < keys.length; i += 1) {
//     if (newObj[keys[i]] === 1) return keys[i];
//   }

module.exports = uniqueNumber;
