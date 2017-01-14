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
	var spaces = '', stars = '';
	
	doNTimes(n, function() {
		spaces += ' ';
	});
	doNTimes(n, function(j) {
		stars += '*'; 
		console.log(spaces.slice(j) + stars)
	});
	
	function doNTimes(n, func) {
		for(var i = 0; i < n; i++) {
			func(i);
		}
	}
}


module.exports = drawStairs;
