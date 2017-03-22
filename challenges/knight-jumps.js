// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  // get the coordinate of the knight
  let arr = str.replace('(','').replace(')','').split(' ').map( (num) => Number(num));
  console.log(arr)

  // get all possible location it can move to
    let table = [[2,-1],[2,1],[1,2],[1,-2],[-2,1],[-2,-1],[-1,2],[-1,-2]]

    //helper function to add array
  function addArray([a,b],[x,y]) {
    return [a + x, b + y]
  }

  let result = []

    //add it to the table
  table.forEach( (coor) => {result.push(addArray(coor,arr))});

  // check which one can exist on the board ( 0 < x,y < 8)
  return result.filter( (coor) => (coor[0] > 0 && coor[0] < 8 && coor[1] > 0 && coor[1] < 8)).length
}

module.exports = knightjumps;
