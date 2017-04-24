/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let stairsArr = [];
  let i = 0;

  while (i < n) {
    stairsArr[i] = ' '.repeat(n - i - 1) + '*'.repeat(i + 1);
    i++;
  }
  console.log(stairsArr.join('\n'));
}

module.exports = drawStairs;
