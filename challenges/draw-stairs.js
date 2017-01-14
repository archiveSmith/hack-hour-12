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
  for (let i = 1; i <= n; i += 1) {
    let star = i;
    let space = n - i;
    let str = '';

    while (space > 0) {
      str += ' ';
      space -= 1;
    }
    while (star > 0) {
      str += '*';
      star -= 1;
    }
    console.log(str);
    star += 1;
    space -= 1;
  }
}


module.exports = drawStairs;
