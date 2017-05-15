/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === n) return true;
//         }
//     }
//     return false;
// }

function twoSum(arr, n) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[n - arr[i]] === undefined) obj[arr[i]] = false;
        else return true;
    }
    return false;
}

module.exports = twoSum;
