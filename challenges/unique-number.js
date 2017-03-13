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
  /*  n^2 time o(1) space
  array.sort((a,b) => a-b)
  for (i = 0; i < array.length-1; i+=2) {
    if (array[i] !== array[i+1]) return array[i];
  }
  */
  if (!arr || !arr.length) return;
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map.hasOwnProperty(array[i])) delete map[array[i]];
    else map[array[i]] = true;
  }
  return Number(Object.keys(map)[0])

}
console.log(uniqueNumber([1,2,1,3,3]));
module.exports = uniqueNumber;
