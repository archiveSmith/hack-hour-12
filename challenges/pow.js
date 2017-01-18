/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (!base || power < 1) return;

    function kaPow (base, power) {
        if ( power === 0 ) return 1;
        return base * kaPow(base, --power);
    }

    return kaPow(base, power);
}


module.exports = pow;
