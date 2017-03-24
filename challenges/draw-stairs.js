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

// drawStairs
function drawStairs(n) {
  let str = ''
  for (let j = 0; j < n; j++) {
    str = str.concat('*')
    let stair = (' ').repeat(n - j - 1).concat(str)
    console.log(stair)
  }
}

drawStairs(6)
module.exports = drawStairs;
