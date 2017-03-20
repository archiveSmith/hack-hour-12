/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 2 + 1 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * example = 4;
 * 2+2
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * example = 6;
 * 2+2+1+1
 * 2+1+2+1
 * 1+2+2+1
 * 1+1+2+2
 * 2+1+1+2
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */
//can loop down from 5
//starting with 1, and 2
//can start with 

function countStairs(n) {
  //how many different ways for each amount of ones
  if (n === 1) return 1;
  if (n === 2) return 2;
  return countStairs(n-1) + countStairs(n-2);
  
}
console.log(countStairs(5));
module.exports = countStairs;
