/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const min = Math.min(a, b);

  const gCD2 = (input) => {
    if (a % input === 0 && b % input === 0) {
      return Math.abs(input);
    }
    return gCD2(input - 1);
  };
  if (a === 0 || b === 0) {
    return Math.max(Math.abs(a), Math.abs(b));
  }
  return gCD2(min);
}

module.exports = gcd;
