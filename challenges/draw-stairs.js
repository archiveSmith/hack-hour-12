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
    if(n < 1 || n > 100) {
        return "Invalid Input";
    }

    let counter = 1;

    while(n > 0) {
        let line = "";
        line += printSpaces(n - 1);
        line += printStars(counter);
        counter++;
        n--;
        console.log(line);
    }

    function printStars(num) {
        let stars = "";
        for(let i = 0; i < num; i++) {
            stars += "*";
        }
        return stars;
    }

    function printSpaces(num) {
        let spaces = "";
        for(let i = 0; i < num; i++) {
            spaces += " ";
        }
        return spaces;
    }

}

module.exports = drawStairs;
