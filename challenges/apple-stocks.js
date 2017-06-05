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

// brute force, check every possibility (aka looking forward in time)
// function bestProfit(arr) {

// // iterate through array
//   // for each value, find the largest value and memoize largest difference

//   // we only need to check up to the 2nd-the-last value

// }

function bestProfit(arr) {
  // Edge cases: Input not an array or empty array. Return 0.
  if (!Array.isArray(arr) || !arr.length) return 0;

  // Use first price to initialize lowest price to buy.
  // Initialize highest profit as 0.
  let cheapestPrice = arr[0];
  let largestProfit = 0;

  // Loop through array.
  for (let i = 0; i < arr.length; i += 1) {

    // If we see a price lower than our lowest price so far,
    // set our lowest price so far to that lower price.
    cheapestPrice = Math.min(cheapestPrice, arr[i]);

    // Set profit to highest between itself and newest price
    // minus lowest price.
    largestProfit = Math.max(largestProfit, arr[i] - cheapestPrice);
  }

  // Return profit value at the end.
  return largestProfit;
}

console.log(bestProfit([0,1,6,-1,10,5])); // -> 11
console.log(bestProfit([0,-1])); // -> 0

module.exports = bestProfit;
