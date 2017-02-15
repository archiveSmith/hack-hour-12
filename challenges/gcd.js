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
    for (let i = Math.floor(y / 2); i > 0; i -= 1) {
      if (y % i === 0 && x % i === 0 && x !== i) return i;
    }
    return 1;
}

module.exports = gcd;