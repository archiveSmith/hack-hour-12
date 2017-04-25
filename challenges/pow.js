/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //Zero raised to any power is zero
  if (base === 0) return 0;
  if (power === 0) return 1;
  //Run this for negative powers
  if (power < 0) {
    // if (power === 0) return 1;
    return (1 / base) * pow(base, power + 1);
  }
  //Run this for postive powers
  return base * pow(base, power - 1);
}

module.exports = pow;
