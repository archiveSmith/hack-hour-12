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
  // let [x, y] = (str.slice(1, 4).split(' '));
  // [x, y] = [Number(x), Number(y)];
  const x = Number(str[1]);
  const y = Number(str[3]);
  console.log('x', x);
  
  const MIN = 1;
  const MAX = 8;
  let moves = 0;
  if (x + 1 <= MAX && y + 2 <= MAX) moves += 1;
  if (x + 1 <= MAX && y - 2 >= MIN) moves += 1;
  if (x - 1 >= MIN && y + 2 <= MAX) moves += 1;
  if (x - 1 >= MIN && y - 2 >= MIN) moves += 1;
  if (x + 2 <= MAX && y + 1 <= MAX) moves += 1;
  if (x - 2 >= MIN && y + 1 <= MAX) moves += 1;
  if (x + 2 <= MAX && y - 1 >= MIN) moves += 1;
  if (x + 2 >= MIN && y - 1 >= MIN) moves += 1;


  // for (let i = -2; i <= 2; i += 1) {
  //   if (i !== 0) {
  //     if ((x + i) >= MIN && (x + i) <= MAX) moves += 1;
  //     if ((y + i) >= MIN && (y + i) <= MAX) moves += 1;
  //   }
  // }
  return moves;
}

module.exports = knightjumps;

console.log(knightjumps('(4 5)'));
