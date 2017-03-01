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

    if (!array) return null;

    let i;
    let len = array.length;
    for (i = 0; i < len; i += 1) {
      let indNum = array.shift();
      if (array.includes(indNum)) return indNum;
    }   
  }

  // let answer;
  // array.reduce(function(curr, next) {
  //   if (curr.includes(next)) {
  //     answer = next;
  //   }
  //   else curr.push(next);
  //   return curr;
  // }, []);
  // return answer;
}

module.exports = repeatNumbers;
