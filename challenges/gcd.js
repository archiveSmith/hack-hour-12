/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
// To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd. Note that we ignored the quotient in each step except to notice when the remainder reached 0, signalling that we had arrived at the answer. 

function gcd(a, b) {
    let dividend = null;
    let divisor = null;
    let quotient = null;
    let remainder = null;
    if (a > b) {
        dividend = a;
        divisor = b;
    } else {
        dividend = b;
        divisor = a;
    }
    quotient = Math.floor(dividend / divisor);
    remainder = dividend % divisor;
    while (remainder !== 0) {
        dividend = divisor;
        divisor = remainder;
        quotient = Math.floor(dividend / divisor);
        remainder = dividend % divisor;
    }
    return divisor;
}

// console.log(gcd(10,8));
// console.log(gcd(10,9));

module.exports = gcd;