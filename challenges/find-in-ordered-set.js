/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

var nums = [1, 4, 6, 7, 9, 17, 45,47]
console.log(findInOrderedSet(nums,2)); // -> true

function findInOrderedSet(arr, target) {
  // get the midpoint of the array
  let half = Math.floor(arr.length / 2);
  // return if it's a match
  if (target === arr[half]) return true;
  // base case - we found nothing
  if (arr.length === 1) return false;
  // split the array
  let firstHalf = arr.slice(0,half);
  let secondHalf = arr.slice(half);
  // call with appropriate array
  if (target < arr[half]) return findInOrderedSet(firstHalf,target);
  else return findInOrderedSet(secondHalf, target);

  return false;

}


module.exports = findInOrderedSet;
