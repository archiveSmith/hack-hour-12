// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board
// with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents
// the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should
// output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"



function knightjumps(str) {
  let moves = 0;
  // turn the string into numbers to get x and y
  let coords = str.match(/^\((\d)\s(\d)\)$/);
  if(!coords[1] && !coords[2]) return 'must be coordinates';
  let x = +coords[1];
  let y = +coords[2];

  // identify tests
  let tests = {
    rightUp   : [2,1],
    rightDown : [2,-1],
    leftUp    : [-2,1],
    leftDown  : [-2,-1],
    upLeft    : [-1,2],
    upRight   : [1,2],
    downLeft  : [-1,-2],
    downRight : [1,-2],
  }

  // compare x and y to tests and count where x and y don't exceed boundaries
  for (let test in tests) {
    console.log(x + tests[test][0], y + tests[test][1]);
    if (((x + tests[test][0]) > 0 && (x + tests[test][0] <= 8)) &&
        ((y + tests[test][1]) > 0 && (y + tests[test][1] <= 8)))
      moves++;
  }

  return moves;
}

module.exports = knightjumps;
