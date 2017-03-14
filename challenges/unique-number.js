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
// function uniqueNumber(array) {
//   if (!array.length) return;
//   if (array.length === 1) return array[0];

//   let actualSum = 0;
//   let mySet = new Set();

//   for (const num of array) {
//     actualSum += num;
//     mySet.add(num);
//   }

//   let expectedSum = 0;

//   for (const num of mySet) {
//     expectedSum += num;
//   }

//   return (2 * expectedSum) - actualSum;
// }

function uniqueNumber(array, i = 0, num = array[i]) {
  if (i === array.length) return;
  for (let j = i + 1; j < array.length; j += 1) {
    console.log(array[j], num)
    if (array[j] === num) return uniqueNumber(array, i += 1); 
  }

  return num;
}

console.log(uniqueNumber([1,2,1,3,2,3,4]));

module.exports = uniqueNumber;
