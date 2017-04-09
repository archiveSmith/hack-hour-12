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
  let max = 0;

  function solveEachKnapsack(items, weightAvailable, addedItems = []) {
    if (weightAvailable < 0) {
      addedItems = [];
    }

    if (weightAvailable == 0) {
    console.log(items, 'with ', weightAvailable)
      const new_max = addedItems.reduce( (accu, item) => {
        return accu + Number(item.value)
      },0)
      if (new_max > max) {
        max = new_max;
      }
      addedItems = [];
      return;
    }

    //use permutation to create allowable combination
    for (let i = 0; i < items.length; i++) {
      if (items[i].weight <= weightAvailable) {
        newAddedItems = addedItems.concat(items[i])
        newItems = items.slice(0, i).concat(items.slice(i + 1))
        newWeight = weightAvailable - items[i].weight;
        solveEachKnapsack(newItems,newWeight,newAddedItems);
      }
    }

    // get maximum value in there

    return;
  };

  solveEachKnapsack(items, weightAvailable)

  return max
}


items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
result = solveKnapsack(items, 5); // returns 7 (from items[0] and items[1])
console.log(result);

module.exports = solveKnapsack;
