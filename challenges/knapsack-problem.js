/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(itemsLeft, weightAvailable) {
  // i can create a map of all the possible combinations and its values...
  // and then find the filter out the values less than or equal to weight available...
  // and then return the greatest value from that bunch

  let temp = [];
  let tempObj = {};
  
  // you're manipulating the same object and pushing a reference of the object.. thats why its always the same..zzz
  for(let i = 0; i < itemsLeft.length; i++) {
    tempObj = Object.assign({}, itemsLeft[i]);
    temp.push(tempObj);
    for(let j = i + 1; j < itemsLeft.length; j++) {
      tempObj = Object.assign({}, tempObj);
      tempObj["weight"] += itemsLeft[j]["weight"];
      tempObj["value"] += itemsLeft[j]["value"];
      temp.push(tempObj);
    }

    for(let k = i + 1; k < itemsLeft.length; k++) {
      tempObj = Object.assign({}, tempObj);
      tempObj["weight"] -= itemsLeft[k]["weight"];
      tempObj["value"] -= itemsLeft[k]["value"];
      temp.push(tempObj);
    }

  }

  return temp.filter((element) => {
    return element.weight <= weightAvailable;
  }).reduce((a, b) => {
    if(a.value > b.value) return a;
    else return b;
  }).value;

};


// function solveKnapsack(itemsLeft, weightAvailable) {

//   if(itemsLeft.length === 0 || weightAvailable === 0) return 0;

//   if(itemsLeft[0].weight > weightAvailable) {
//     return solveKnapsack(itemsLeft.slice(1), weightAvailable);
//   }
  
//   else {
//     let left = itemsLeft.slice(1);
//     let takeItem = itemsLeft[0].value + solveKnapsack(left, weightAvailable - itemsLeft[0].weight);
//     let leaveItem = solveKnapsack(left, weightAvailable);
//     return (takeItem > leaveItem) ? takeItem : leaveItem;
//   }

// };


// items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
