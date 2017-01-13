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
	const max = n;
	for (let i = 1; i <= max; i += 1) {
		let level = "";
		let empty = max-i;
		let stars = i;
		while (empty > 0) {
			level += " ";
			empty -= 1;
		}
		while (stars > 0) {
			level += "*";
			stars -= 1;
		}
		console.log(level);
	}
}


module.exports = drawStairs;

drawStairs(9);