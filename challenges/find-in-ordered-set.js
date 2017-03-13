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

   const mid = ~~(arr.length / 2);

   if (target === arr[mid]) return true;

   return target < arr[mid] ?
     findInOrderedSet(arr.slice(0, mid), target) :
     findInOrderedSet(arr.slice(mid + 1), target);
 }


module.exports = findInOrderedSet;
