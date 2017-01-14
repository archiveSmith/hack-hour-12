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
  let space = '';
  let stair = '*';
  let spaceCount;
  let stairCount;

  for (let i = 1; i <= n; i += 1) {

    spaceCount = n - i;
    stairCount = i;

    for (let i = 1; i <= spaceCount; i += 1) {
      space += ' ';
    }

    console.log(`${space}${stair}`)
    space = ''
    stair += '*'

  }
}


module.exports = drawStairs;
