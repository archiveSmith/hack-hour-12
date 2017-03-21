/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

// either take one step or two steps 

function countStairs(n, steps = 0) {
  if (steps === n) {
    // console.log('step', steps); 
    return 1;
  }
  if (steps > n) return 0;
  // console.log(n, steps)
  let count = countStairs(n, steps += 1) + countStairs(n, steps += 2);
  // console.log('count', count)
  return count;
}

// console.log(countStairs(5))

module.exports = countStairs;
