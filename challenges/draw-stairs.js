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
    const stairs = Array(n);
    let thisLevel = 1;
    let stair;

    console.log("stairs", stairs);
    stairs.forEach(function(level) {
        for (let i = 0; 0 < n - thisLevel; i++) {
            stair += ' ';
        }
        console.log(thisLevel);
        for (let k = 0; k < thisLevel ; k++) {
            stair += '*';
        }


        level.push(stair);

    });

    console.log(stairs.join(''));

}

drawStairs(6);

//module.exports = drawStairs;
