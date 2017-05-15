/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(arr) {
  if (!Array.isArray(arr) || !arr.length) return 0;

// iterate through array
  // for each value, find the largest value and memoize largest difference
  let largestProfit = -Infinity;

  // we only need to check up to the 2nd-the-last value
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const diff = arr[j] - arr[i];
      if (diff > largestProfit) largestProfit = diff;
    }
  }
  return largestProfit < 0 ? 0 : largestProfit;
}

// function bestProfit(arr) {
//   let largestProfit = -Infinity;

//   // create subarrays 
//   function findMaxDiff(subArr) {

//   }
// }

module.exports = bestProfit;