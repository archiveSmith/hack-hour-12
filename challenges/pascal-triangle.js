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
  const rows = [];
  let thisRow = [];

  for (let i = 0; i < numRows; i++) {
    if(!i) rows.push([1]);
    else if(i === 1) rows.push([1,1])
    else {
      let lastRow = rows[i-1];
      len = lastRow.length;
      for (let j = 0; j <= len; j++) {
        if(j === 0) thisRow.push(lastRow[0]);
        else if(j === len) thisRow.push(lastRow[len - 1]);
        else {
          let val = 0;
          val = lastRow[j - 1] ? lastRow[j - 1] : 0;
          val += lastRow[j];
          thisRow.push(val);
        }
      }
      rows.push(thisRow);
      thisRow = [];
      console.log(rows);
    }
  }

  return rows;
}

pascalTriangle(10);

module.exports = pascalTriangle;
