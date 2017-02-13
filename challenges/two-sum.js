/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 'use strict';

function twoSum(arr, n) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return false;

  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }

  return false;
}

module.exports = twoSum;
