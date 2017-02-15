/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        const choosed = arr[i];
        const rest = arr.slice(i + 1);
        for (let j = 0; j < rest.length; j++) {
            if (rest[j] + choosed === n) {
                return true;
            }
        }
    }
    return false;
}

// Quadratic Time complexity
function CCC1twoSum(arr, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (arr[i] + arr[j] === n) return true;
        }
    }
    return false;
}

// Linear time complexity
// Linear space complexity
function CCC2twoSum(arr, n) {
    if (!Array.isArray(arr) || !Number.isInteger(n)) return 'bad input';
    const visitedNums = {};
    for (let i = 0; i < arr.length; i++) {
        if (visitedNums.hasOwnProperty(n - arr[i])) return true;
        visitedNums[arr[i]] = 'Stored number';
    }
    return false;
}

module.exports = twoSum;

// console.log(twoSum([1,2,3,4,5], 9));
