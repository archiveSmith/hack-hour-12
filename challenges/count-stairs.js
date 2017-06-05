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

//  * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
//  * 1 + 1 + 1 + 1 + 1
//  * 1 + 1 + 1 + 2
//  * 1 + 1 + 2 + 1
//  * 1 + 2 + 1 + 1
//  * 1 + 2 + 2
//  * 2 + 1 + 1 + 1
//  * 2 + 1 + 2
//  * 2 + 2 + 1

// function countStairs(n, count = 0) {
//   // find different combos of 1 and 2 that equal N.
//   // create a combo of all 1s
//   // count each pairing of consequetive 1s
//   // double

//   // n = 1 => 1* (+1)
//   // n = 2 -> 2 (+1)
//   // n = 3 -> 3* (+1)
//   // n = 4 -> 5 (+2)
//   // n = 5 -> 8* (+3)
//   // n = 6 -> 13 (+5)

//   // take the last count and add the number in which the combo starts/ends with 1

//   // 1 ( last -1 ceil(/2) + 1 )

//   // count the last number of permutations that begin w/ 1

//   if (n === 0) return count;
//   countStairs(n - 1, count + (Math.floor((n - 1) / 2) + 1));
// }

// var countStairs = memo(function(n){
//   if (n < 2) return 1;
//   else return countStairs(n-1) + countStairs(n-2);
// });

// function memo(fn) {
//   var store = {};
//   return function(val) {
//     if(store[val]) return store[val];
//     else {
//       var ans = fn(val);
//       store[val] = ans;
//       return ans;
//     }
//   };
// }

// linear time (factorial time complexity w/o memo)
function countStairs(n, memo = {}) {
  if (memo.hasOwnProperty(n)) return memo[n];
  if (n < 2) return 1;
  return countStairs(n - 1, memo) + countStairs(n - 2, memo);
}

// console.log(countStairs(1));
// console.log(countStairs(2));
// console.log(countStairs(3));
// console.log(countStairs(4));
// console.log(countStairs(5));
// console.log(countStairs(6));

module.exports = countStairs;
