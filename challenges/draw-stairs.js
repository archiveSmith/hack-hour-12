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

// My solution.
function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
        let row = new Array(n);
        for (var x = 0; x < row.length; x++) {
            row[x] = ' ';
        }
        for (let j = 0; j < i; j++) {
            row[j] = '*';
        }
        console.log(row.reverse().join(''));
    }
}

// Codesmith solution.
// function drawStairs(n) {
//     let spaces = '';
//     let splats = '';

//     for (let i = 1; i <= n; i++) {
//         spaces = ' '.repeat(n - 1);
//         splats = '*'.repeat(i);
//         console.log(spaces + splats);
//     }
// }

// function drawStairs(n) {
//     for (let i = 1; i <= n; i += 1) {
//         console.log(' '.repeat(n - 1) + '*'.repeat(i));        
//     }
// }

drawStairs(3)

module.exports = drawStairs;
