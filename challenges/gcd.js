/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// 10 = 1, 2, 5, 10
// 8 = 1, 2, 4, 8

function gcd(a, b) {
    const divisor1 = [];
    const divisor2 = [];
    for(let i = a; i > 0; i--) {
        if((a / i) % 1 === 0) {
            divisor1.push(i);
        }
    }
    for(let i = b; i > 0; i--) {
        if((b / i) % 1 === 0) {
            divisor2.push(i);
        }
    }

    for(let i = 0; i < divisor1.length; i++) {
        for(let j = 0; j < divisor2.length; j++) {
            if(divisor1[i] === divisor2[j]) {
                return divisor1[i];
            }
        }
    }
}

module.exports = gcd;