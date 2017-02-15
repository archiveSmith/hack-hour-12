/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let min, max;
  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }

  if ((max % min) === 0) return min;

  const factors = [];
  for (let i = max; i > 0; i--) {
    if ((max % i) === 0) factors.push(i);
  }

  for (let i = 0; i < factors.length; i++) {
    if ((min % factors[i]) === 0) return factors[i];
  }

  return 1;
}

module.exports = gcd;
