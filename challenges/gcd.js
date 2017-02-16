/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    const y = a > b ? a : b;
    let x = y === a ? b : a;
    for (let i = 1; i > 0; i += 1) {
      j = x / i;
      if (j % 1 === 0 && y % j === 0) return j;
    }
}

module.exports = gcd;