/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// binary search using low and high ranges
function findInOrderedSet(arr, target, start, end) {
  // get halfway point using averaging
  const midValue = Math.floor((start + end) / 2);

  // check for value
  if (arr[midValue] === target) return true;

  // check for base case - no more range
  // if (end - start < 2) return false;
  if (end === start) return false;

  // change ranges
  if (arr[midValue] > target) {
    end = midValue;
  } else {
    start = midValue;
  }

  // recurse
  return findInOrderedSet(arr, target, start, end);
}


// Provided solution
function findInOrderedSetProvided(arr, target) {
  function binSearch(start, end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    if (end === start) return false;
    if (arr[mid] > target)
      return binSearch(start, mid - 1);
    else
      return binSearch(mid + 1, end);
  }
  return binSearch(0, arr.length - 1);
}

module.exports = findInOrderedSet;
