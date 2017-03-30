/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let value = 0;

  function check(items, currWeight, currValue) {
    // console.log(weightAvailable, items, value, currValue, currWeight);
    if (!items.length || currWeight > weightAvailable) return;
    if (currValue >= value) value = currValue;
    return check(items.slice(1), currWeight + items[0].weight, currValue + items[0].value) || check(items.slice(1), currWeight, currValue)
  }

  check(items, 0, 0);

  return value;
};

// let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;
