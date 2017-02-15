/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!a || !b || typeof a !== 'number' || typeof b !== 'number') return 'Check Inputs';

  let biggestDivisor = 1;
  for (var i = 1; i <= (a > b ? a : b) / 2; i++) {
    if (a % i === 0 && b % i === 0 && i > biggestDivisor) biggestDivisor = i;
  } return biggestDivisor;
}
console.log(gcd(10, 9));
console.log(gcd(10, 20));

module.exports = gcd;