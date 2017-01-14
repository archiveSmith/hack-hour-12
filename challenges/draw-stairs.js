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
    let string = '';
  
    for (let currStair = 1; currStair <= n; currStair += 1) {
        for (let space = 0; space < n - currStair; space += 1) {
            string += ' ';
        }
        for (let star = 1; star <= currStair; star += 1) {
            string += '*';
        }
        string += '\n';
    }
    
    return string;

}

function drawStairs2(n) {
  
  let string = '';
  
  for (let currStair = 1; currStair <= n; currStair += 1) {
    for (let space = 0; space < n - currStair; space += 1) {
      string += ' ';
    }
    for (let star = 1; star <= currStair; star += 1) {
      string += '*';
    }
    string += '\n';
  }
  
  return string;
}


module.exports = drawStairs;
