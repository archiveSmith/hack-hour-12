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
  let step;
 
  for (let i = 1; i <= n; i += 1) {
    step = "";
    for (let j = 1; j <= n - i; j += 1) {
      step += " ";
    }
    for (let j = 1; j <= i; j += 1) {
      step += "*";
    }
    console.log(step);
  }
}


module.exports = drawStairs;
