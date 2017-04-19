/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// function solveKnapsack(items, weightAvailable) {
//   if (items.length === 0 || weightAvailable === 0) return 0;

//   // if first item is too heavy to fit, disregard it and consider other items
//   if (items[0].weight > weightAvailable) {
//     return solveKnapsack(items.slice(1), weightAvailable);
//   }  // if first item does fit
//   const left = items.slice(1);
//   const takeItem = items[0].value + solveKnapsack(left, weightAvailable - items[0].weight);
//   const leaveItem = solveKnapsack(left, weightAvailable);

//   return (takeItem > leaveItem) ? takeItem : leaveItem;
// }

function solveKnapsack(itemsLeft, weightAvailable) {
  const memo = [];

  // build the table
  for (let n = 0; n <= itemsLeft.length; n += 1) {
    memo.push([]);
    for (let w = 0; w <= weightAvailable; w += 1) {
      // if 0 items in consideration or 0 weight available, set value to zero
      if (n === 0 || w === 0) memo[n][w] = 0;

      // if item.weight > weightAvailable, return memo[n-1][w]
      // current item is itemsLeft[n-1] because we start from n = 1
      else if (itemsLeft[n - 1].weight > w) {
        memo[n][w] = memo[n - 1][w];
      } else {
        const item = itemsLeft[n - 1];
        const take = item.value + memo[n - 1][w - item.weight];
        const leave = memo[n - 1][w];

        memo[n][w] = (take > leave) ? take : leave;
      }
    }
  }
  // after we exit the for loops, the table (memo) will have been built,
  // with the answer we want saved at the bottom right most corner of the table

  return memo[itemsLeft.length][weightAvailable];
}

module.exports = solveKnapsack;
