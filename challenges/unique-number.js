/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    let max = -Infinity;
    let min = Infinity;
    let actual_sum = 0; 
    for (let i = 0; i < array.length; i++) {
        if ( max < array[i]) {
            max = array[i];
        }
        if ( min > array[i]) {
            min = array[i]
        }
        actual_sum += array[i];
    }

    let sum = (min + max)*(max - min + 1) / 2;
    return actual_sum - sum;
}

module.exports = uniqueNumber;
