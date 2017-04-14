/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

const pow = (base, power) => !power ? 1 : base * pow(base, power - 1);

module.exports = pow;
