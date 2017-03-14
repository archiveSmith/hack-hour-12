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
    let data = [];

    for (let i = 0; i < array.length; i++) {
        let idx = data.indexOf(array[i])
        if (idx > -1) {
            data.splice(idx, 1)
        } else {
            data.push(array[i])
        }
        console.log(data)
    }

    return data[0]
}


module.exports = uniqueNumber;
