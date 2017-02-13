/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        const choosed = arr[i];
        const rest = arr.slice(i + 1);
        console.log(choosed, rest);
        for (let j = 0; j < rest.length; j++) {
            if (rest[j] + choosed === n) {
                return true;
            }
        }
    }
    return false;
}

module.exports = twoSum;

// console.log(twoSum([1,2,3,4,5], 9));
