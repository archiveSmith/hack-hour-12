/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsackInProgress(items, weightAvailable) {
  const getAllCombs = itemsArr => {
    const result = [];

    const loop = function(start, depth, arr = []) {
      for (let i = start; i < itemsArr.length; i += 1) {
        let next = arr.push(itemsArr[i]);
        if (depth > 0) loop(i + 1, depth - 1, next);
        else result.push(next);
      }
    };

    for (let i = 0; i < itemsArr.length; i++) {
      loop(0, i);
    }

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
}

// var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

function solveKnapsack(items, weightLeft) {
  if (items.length === 0 || weightLeft === 0) return 0;

  // if first item is too heavy to fit, disregard it and consider other items
  if (items[0].weight > weightLeft) {
    return solveKnapsack(items.slice(1), weightLeft);
  } else {
    // if first item does fit
    const itemsLeft = items.slice(1);
    const includeItem = items[0].value + solveKnapsack(itemsLeft, weightLeft - items[0].weight);
    const leaveItem = solveKnapsack(itemsLeft, weightLeft);

    // return the higher value of leaving vs including the item
    return includeItem > leaveItem ? includeItem : leaveItem;
  }
}

// recursive
function solveKnapsackTrackItems(items, weightLeft) {
  const selected = {
    value: 0,
    list: []
  };

  if (items.length === 0 || weightLeft === 0) return selected;

  // if first item is too heavy to fit, consider other items
  if (items[0].weight > weightLeft) {
    return solveKnapsack(items.slice(1), weightLeft);
  } else {
    //if first item does fit
    // leaveItem must be declared before takeItem for proper outcome

    const leaveItem = solveKnapsack(items.slice(1), weightLeft);
    const indludeItem = solveKnapsack(items.slice(1), weightLeft - items[0].weight);

    indludeItem.list.push(items[0]);
    const includeItem = {
      value: items[0].value + indludeItem.value,
      list: indludeItem.list
    };

    return includeItem.value > leaveItem.value ? includeItem : leaveItem;
  }
}

function solveKnapsackDynamic(itemsLeft, weightAvailable) {
  var memo = [];

  // build the table
  for (var n = 0; n <= itemsLeft.length; n++) {
    memo.push([]);
    for (var w = 0; w <= weightAvailable; w++) {
      // if 0 items in consideration or 0 weight available, set value to zero
      if (n === 0 || w === 0) memo[n][w] = 0;
      else if (itemsLeft[n - 1].weight > w) {
        // if item.weight > weightAvailable, return memo[n-1][w]
        // current item is itemsLeft[n-1] because we start from n = 1
        memo[n][w] = memo[n - 1][w];
      } else {
        var item = itemsLeft[n - 1];
        var take = item.value + memo[n - 1][w - item.weight];
        var leave = memo[n - 1][w];

        memo[n][w] = take > leave ? take : leave;
      }
    }
  }
  // after we exit the for loops, the table (memo) will have been built,
  // with the answer we want saved at the bottom right most corner of the table

  return memo[itemsLeft.length][weightAvailable];
}

module.exports = solveKnapsack;
