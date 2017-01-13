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
  let spaces = n - 1;
  let steps = 1;
  for (let i = 0; i < n; i += 1) {
    spaces -= i;
    steps += i;

    while (spaces > 0) {
      console.log(' ');
      spaces -= 1;
    }
    while (steps > 0) {
      console.log('*');
      steps -= 1;
    }
  }
}


module.exports = drawStairs;
