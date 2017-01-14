/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/
// for each asterisks there should be equal amounts of leading opposite whitespaces
// init an empty string to store values
// store leading whitespaces n - 1 plus asterisks
// add new line after each iteration



function drawStairs(n) {
  for (let i = 1; i < n; i+=1) {
    ' '.repeat(n - i) + '*'.repeat(i);
  }

}


module.exports = drawStairs;
