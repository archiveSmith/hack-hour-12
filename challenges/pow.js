/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (!base || power < 1) return;

  function kaPow(base, power) {
    if (power === 0) return 1;
    return base * kaPow(base, --power);
  }

  return kaPow(base, power);
};

function cSpow(base, power) {
  if (!isFinite(base) || !Number.isInteger(power) ||
    power < 0 || (base === 0 && power === 0)) {
    return 'Please insert valid inputs into pow function';
  }

  function powerify(base, power) {
    if (power === 0) return 1;
    return base * powerify(base, power - 1);
  }

  return powerify(base, power);
}

module.exports = pow;
