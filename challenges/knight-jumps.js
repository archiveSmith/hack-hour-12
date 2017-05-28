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
  // Validate input
  if (typeof str !== 'string') return 'Must enter a string';

  // FORMAT: (x y)
  const x = parseInt(str[1]);
  const y = parseInt(str[3]);

  // Validate x and y values
  if (x < 1 || x > 8 || y < 1 || y > 8) return 'Must enter valid x and y';

  let possibleJumps = 0;

  // Check top left
  if ( (x - 2) >= 1 && (y + 1) <= 8 ) possibleJumps++;
  if ( (x - 1) >= 1 && (y + 2) <= 8 ) possibleJumps++;

  // // Check top right
  if ( (x + 1) >= 1 && (y + 2) <= 8 ) possibleJumps++;
  if ( (x + 2) >= 1 && (y + 1) <= 8 ) possibleJumps++;

  // Check bottom right
  if ( (x + 2) <= 8 && (y - 1) >= 1 ) possibleJumps++;
  if ( (x + 1) <= 8 && (y - 2) >= 1 ) possibleJumps++;

  // Check bottom left
  if ( (x - 1) >= 1 && (y - 2) >= 1 ) possibleJumps++;
  if ( (x - 2) >= 1 && (y - 1) >= 1 ) possibleJumps++;

  return possibleJumps;
}

module.exports = knightjumps;
