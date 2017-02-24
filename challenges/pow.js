/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, acc = base) {
  if (power < 0) return pow((1 / base), -power);
  if (power === 0) return 1;
  if (power === 1) return acc;
  return pow(base, power - 1, acc * base);
}

module.exports = pow;
