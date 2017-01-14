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
  const stars = ['\u2605', '\u2606'];
  const faces = ['\u263A', '\u2639'];
  const space = ' ';
  for (let i = n - 1; i >= 0; i -= 1) {
  	// console.log(space.repeat(i) + stars[Math.floor(Math.random()*stars.length)].repeat(n-i));
  	// console.log(space.repeat(i) + stars[i % 2].repeat(n-i));
  	console.log(space.repeat(i) + faces[i % 2].repeat(n-i));
  }
}


module.exports = drawStairs;

//drawStairs(34);

