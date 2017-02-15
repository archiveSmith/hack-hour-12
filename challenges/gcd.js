/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!a || !b) return;
  if (!Number.isInteger(a) || !Number.isInteger(b)) return;
  if (a === 0) return b;
  if (b === 0) return a;

  const denominators = [a];
  for (let i = Math.floor(a/2); i > 0; i--) {
    if(a % i === 0) denominators.push(i);
  }
  for (let i = 0; i < denominators.length; i++) {
    if (b % denominators[i] === 0) return denominators[i];
  }
}
module.exports = gcd;