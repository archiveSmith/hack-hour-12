/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let sharedDivisors = [];
  let i;
  let shortest = a < b ? a : b;
  for (i = 1; i <= shortest; i += 1) {
    if (a % i === 0 && b % i === 0) sharedDivisors.push(i);
  }
  let max = Math.max(...sharedDivisors);
  return max;
}

module.exports = gcd;

  // let firstDivisors = [];
  // let secondDivisors = [];
  // let i;
  // let j;
  // let n;
  // for (i = 1; i < Math.floor(a / 2) + 1; i += 1) {
  //   if (a % i === 0) firstDivisors.push(i);
  // }
  // for (j = 1; j < Math.floor(b / 2) + 1; j += 1) {
  //   if (b % j === 0) secondDivisors.push(j);
  // }
  // let largest = 1;
  // for (n = 1; n < firstDivisors.length; n += 1) {
  //   if (secondDivisors.indexOf(firstDivisors[n]) !== -1) {
  //     largest = firstDivisors[n];
  //   }
  // }
  // return largest;