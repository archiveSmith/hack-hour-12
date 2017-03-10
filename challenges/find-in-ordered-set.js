/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target) {
//   if(!arr) return false;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > target) return false;
//     if(arr[i] === target) return true;
//   }
//   return false;
// }

function findInOrderedSet(arr, target) {
  if(arr[0] > target || arr.length === 1) return false;
  if(arr[0] === target) return true;

  let middle = arr.length / 2
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle);

  return findInOrderedSet(arr2, target) || findInOrderedSet(arr1, target);

}

module.exports = findInOrderedSet;
