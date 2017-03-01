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
  let answer;
  return array.reduce(function(curr, next) {
    if (curr.indexOf(next) !== -1) {
      answer = next;
    }
    return curr.push(next);
  }, []);
  return answer;
}

module.exports = repeatNumbers;
