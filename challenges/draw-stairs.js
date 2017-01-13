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
'use strict';
function drawStairs(n) {
	let result = '', space = ' ', asterisk = '*', spaces, asterisks;
	for (let row = 1; row <= n; row++) {
		spaces = space.repeat(n-row);
		asterisks = asterisk.repeat(row);
		result = result + spaces + asterisks + '\n';
	}
	return result;
}
//console.log(' '+ ' ' + ' ' + '*'+'\n'+'**');
console.log(drawStairs(10));

module.exports = drawStairs;
