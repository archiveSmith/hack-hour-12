/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
<<<<<<< HEAD
 *
=======
 *
>>>>>>> e3dc620f30f6b501ed4782a83c299c8a0d18beb8
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 // function subsetSum(array, target) {
 //   function getCombinations(chars) {
 //     const result = [];
 //     const f = (prefix, chars) => {
 //       for (let i = 0; i < chars.length; i += 1) {
 //         result.push(prefix + chars[i]);
 //         f(prefix + chars[i], chars.slice(i + 1));
 //       }
 //     };
 //     f(0, chars);
 //     return result;
 //   }
 //   return getCombinations(array).includes(target);
 // }

 function subsetSum(array, target, sum = 0) {
   if (sum === target) return true;
   if (sum > target) return false;
   if (!array.length) return false;
   return subsetSum(array.slice(1), target, sum += array[0]) ||
    subsetSum(array.slice(1), target, sum);
 }

 module.exports = subsetSum;
