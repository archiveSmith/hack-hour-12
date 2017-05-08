/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    // SOLUTION 1
    let i = 0, j = 0;

    const mergedArray = [];
    let length = arr1.length + arr2.length;
    while(length) {
        if(!arr1[i] || !arr2[j]) break;
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
        length--;
    }
    if(i < arr1.length) {
        for(let k = i; k < arr1.length; k++) {
            mergedArray.push(arr1[k]);
        }
    } else {
        for(let k = j; j < arr2.length; k++) {
            mergedArray.push(arr1[k]);
        }
    }
    return mergedArray;

    // SOLUTION 2
    // return arr1.concat(arr2).sort((a, b) => a - b);
}

// let my_array = [3,4,6,10,11,15,21];
// let another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
