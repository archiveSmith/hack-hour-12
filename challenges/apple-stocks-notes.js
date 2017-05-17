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

function bestProfit(pricesArr) {
  // Edge cases: Input not an array or empty array. Return 0.
  if (!Array.isArray(pricesArr) || !pricesArr.length) return 0;

  // Use first price to initialize lowest price to buy.
  // Initialize highest profit as 0.
  let cheapestPrice = pricesArr[0], profit = 0;

  // Loop through array.
  for (let i = 0; i < pricesArr.length; i++) {

    // If we see a price lower than our lowest price so far,
    // set our lowest price so far to that lower price.
    cheapestPrice = Math.min(cheapestPrice, pricesArr[i]);

    // Set profit to highest between itself and newest price
    // minus lowest price.
    profit = Math.max(profit, pricesArr[i] - cheapestPrice);
  }

  // Return profit value at the end.
  return profit;
}

console.log(bestProfit([0,1,6,-1,10,5])); // -> 11
console.log(bestProfit([0,-1])); // -> 0

module.exports = bestProfit;
