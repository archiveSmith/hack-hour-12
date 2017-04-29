/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (typeof base !== "number" || typeof power !== "number") return undefined;
  if (power === 1) return base * power;
  return base * pow(base, power - 1)
}

module.exports = pow;
