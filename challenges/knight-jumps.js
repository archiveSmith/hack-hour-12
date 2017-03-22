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
  // get current position
  let position = [parseInt(str.slice(1, 2)), parseInt(str.slice(3, 4))];
  // we already have the position of the knight.
  // the most possibilty that a knight can have at any given location is 8
  // start a counter = 0
  let counter = 0;
  // find these points and see if they are within the range of the board.
  let potentials = {};
  potentials[1] = [position[0] - 2, position[1] - 1];
  potentials[2] = [position[0] - 2, position[1] + 1];
  potentials[3] = [position[0] - 1, position[1] - 2];
  potentials[4] = [position[0] - 1, position[1] + 2];
  potentials[5] = [position[0] + 1, position[1] - 2];
  potentials[6] = [position[0] + 1, position[1] + 2];
  potentials[7] = [position[0] + 2, position[1] - 1];
  potentials[8] = [position[0] + 2, position[1] + 1];
  // if these points are within the board, increment the counter
  // loop through all items in the object and test
  for(let i = 1; i < 9; i++) {
    if(potentials[i][0] >= 1 && potentials[i][1] <= 8) {
      counter++;
    }
  }
  return counter
}

module.exports = knightjumps;
