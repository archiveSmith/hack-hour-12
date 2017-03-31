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
  const getAllCombs = (itemsArr) => {
    const result = [];

    const loop = function (start, depth, arr = []) {
      for (let i = start; i < itemsArr.length; i += 1) {
        let next = arr.push(itemsArr[i]);
        if (depth > 0) loop(i + 1, depth - 1, next);
        else result.push(next);
      }
    };

    for (let i = 0; i < itemsArr.length; i++) {
      loop(0, i);
    };

    return result;
  };
  const combs = getAllCombs(items);

  let maxVal = 0;

  for (let i = 0; i < combs.length; i += 1) {
    let combWeight = 0;
    let combVal = 0;
    for (let j = 0; j < combs[i].length; j += 1) {
      combWeight += combs[i][j].weight;
      combVal += combs[i][j].val;
    }
    if (combWeight <= weightAvailable && combVal > maxVal) maxVal = combVal;
  }
  return maxVal;
};

// var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])



module.exports = solveKnapsack;
