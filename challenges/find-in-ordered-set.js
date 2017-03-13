/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time


 */


// function findInOrderedSet(arr, target) {
//   if (arr[0] > target || arr.length === 0) return false;
//   if (arr[0] === target) return true;
//   return findInOrderedSet(arr.slice(1), target);
// }

// function findInOrderedSet(arr, target, index = 0) {
//   if (arr[index] > target || !arr[index]) return false;
//   if (arr[index] === target) return true;
//   // index += 1;
//   return findInOrderedSet(arr, target, index += 1);
// }

function findInOrderedSet(arr, target) {
  const middle = Math.floor(arr.length / 2);
  if (target === arr[middle]) return true;
  return target < middle ? findInOrderedSet(arr.slice(0, middle), target) : findInOrderedSet(arr.slice(middle + 1), target);
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 9));  //-> true
// //findInOrderedSet(nums, 2);  //-> false

module.exports = findInOrderedSet;
