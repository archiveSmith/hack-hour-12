/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (!arr || !n || !arr.length) return 'Check Inputs';

    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(n - arr[i]) > -1) return true;
    } return false;
}
// console.log(twoSum([1,2,3,4], 5));
// console.log(twoSum([1,2,3,4], 3));
module.exports = twoSum;
