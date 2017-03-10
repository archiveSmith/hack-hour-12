/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


 function findInOrderedSet(arr, target) {
   if (!arr.length) return false;
   if (target === arr[0]) return true;
   if (target === arr[Math.ceil(arr.length / 2) - 1]) return true;
   return target < arr[Math.ceil(arr.length / 2) - 1] ?
     findInOrderedSet(arr.slice(0, Math.ceil(arr.length / 2) - 1), target) :
     findInOrderedSet(arr.slice(Math.ceil(arr.length / 2)), target);
 }


module.exports = findInOrderedSet;
