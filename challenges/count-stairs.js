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
  if (steps === n) return 1;
    // console.log('step', steps); return 1;
  if (steps > n) return 0;
  // console.log(n, steps)
  const oneStep = steps += 1;
  const twoStep = steps += 2;
  console.log(oneStep, twoStep)
  // return countStairs(n, steps += 1) + countStairs(n, steps += 2);
  return countStairs(n, oneStep) + countStairs(n, twoStep);
  // console.log('count', count)
}

function countStairs(n) {
  const memo = {};

  function counting(n) {
    if (memo.hasOwnProperty(n)) return memo[n];
    // base case: when n < 2, inc counter
    if (n < 2) return 1;
    // return recursive sum
    return memo[n] = counting(n - 1) + counting(n - 2);
  }

  return counting(n);
}

function countStairs(n, memo = {}) {
  if (memo.hasOwnProperty(n)) return memo[n];
  if (n < 2) return 1;
  return memo[n] = countStairs(n - 1, memo) + countStairs(n - 2, memo);
}

console.log(countStairs(5))

module.exports = countStairs;
