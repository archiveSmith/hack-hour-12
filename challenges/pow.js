/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // establish base case, power is the value
  // that changes
  if (power === 0) return 1;

  // return call to pow with power - 1
  return base * pow(base, power - 1);
}

module.exports = pow;
