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
    let spaces = n - i;
	  let steps = i;
  	let str = '';
    while (spaces > 0) {
      str += ' ';
      spaces -= 1;
    }
    while (steps > 0) {
      str += '*';
      steps -= 1;
    }
    console.log(str);
  }
}



module.exports = drawStairs;
