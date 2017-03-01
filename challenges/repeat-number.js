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

// brute force solution
function repeatNumbers(array) {
    let answer;
    // filter out unique numbers
    array.reduce((a, b) => {
        if(!a.includes(b)) {
            a.push(b);
        } else {
            // save number that isn't unique
            answer = b;
        }
        return a;
    }, []);
    return answer;
}

console.log(repeatNumbers([1,2,3,3,4,5,6]));

module.exports = repeatNumbers;
