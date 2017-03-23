/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  //Set a final array
  //loop numRows times, pushing vals to temp arrays
  //each loop, begin and end with 1
  //add the previous array values for the new array values
  //need to keep track of previous array

  let finalArr = [];
  let lastArr = [];
  let i;
  for (i = 1; i <= numRows; i += 1) {
    let tempArr = [1];
    for (let j = 0; j < lastArr.length; j += 1) {
      if (lastArr[j + 1]) tempArr.push(lastArr[j] + lastArr[j + 1]);
    }
    if (lastArr.length > 0) tempArr.push(1);
    lastArr = tempArr;
    finalArr.push(lastArr);
  }
  return finalArr;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
