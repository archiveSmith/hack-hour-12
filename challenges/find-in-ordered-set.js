/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// binary search using low and high ranges
function findInOrderedSet(arr, target, lowRange = 0, highRange = arr.length, half) {
  // get halfway point using averaging
  halfwayPoint = Math.floor((lowRange + highRange) / 2);

  // check for value
  if (arr[halfwayPoint] === target) return true;

  // check for base case - no more range
  if (highRange - lowRange < 2) return false;

  // change ranges
  if (arr[halfwayPoint] > target) {
    highRange = halfwayPoint;
  } else {
    lowRange = halfwayPoint;
  }

  // recurse
  return findInOrderedSet(arr, target, lowRange, highRange, halfwayPoint)
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
