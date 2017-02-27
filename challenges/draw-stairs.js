/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======

 For example:
 drawStairs(6) ->
>>>>>>> 73c87a4fbe0ffca391a5d67ff3bbd4948184ebaf
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
