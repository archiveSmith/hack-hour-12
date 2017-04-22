/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    // use object
    let obj = {};
    for(let i = 0; i < array.length; i++) {
        // if not in obj, add to obj. if in obj, return
        if(obj.hasOwnProperty(array[i].toString())) return array[i];
        else obj[array[i]] = '';
    }
}

module.exports = repeatNumbers;
