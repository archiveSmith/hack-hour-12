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
    const x = y === a ? b : a;
    for (let i = x; i > 0; i = i / 2) {
      if (y % i === 0 && x % i === 0) return i;
    }
}

module.exports = gcd;