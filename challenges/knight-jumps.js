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
  //board is 1 to 8 on x-axis
  //board is 1 to 8 on y-axis; can't go under 1 or over 8 on either;
  //knight moves two spaces in one direction and 1 space in another
  //8 is max
  //can decrement from 8 possible moves
  let pos = str.match(/\d/g);
  pos[0] = Number(pos[0]);
  pos[1] = Number(pos[1]);
  if (pos.length !== 2 || pos[0] < 1 || pos[0] > 8 || pos[1] < 1 || pos[1] > 8) return;
  //then all y + 1;
  let movesCount = 8;
  let posChanges = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [-1,2], [1,-2], [-1, -2]];
  posChanges.forEach(possible => {
    if (possible[0] + pos[0] > 8 || possible[0] + pos[0] < 1 || possible[1] + pos[1] > 8 || possible[1] + pos[1] < 1) {
      movesCount--;
    }
  })
  return movesCount;
}

console.log(knightjumps('(4 6)'));
module.exports = knightjumps;
