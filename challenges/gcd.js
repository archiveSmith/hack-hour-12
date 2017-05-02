/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a = null, b = null) {
    //edge case for bad input
    if (!a || !b) return 'bad inputs'

    // a === b the gcd is a or b
    if (a == b) return a;

    if (a % b === 0) return b;

    if (b % a === 0) return a;
,
    if (Math.abs(a,b) < a && Math.abs(a,b) )
    // the different maybe the greatest common divisor
    for (let i = Math.abs(a - b); i > 0 ;i--) {
        if (a % i === 0 && b % i === 0) {
            return i
        }
    }
    //
}

//============================ TESTING =====================================

let result1 = gcd(10000000000, 10)
console.log(result1);

// let result2 = gcd(10, 9) 
// console.log(result2)

// let result3 = gcd(10, 5) 
// console.log(result3)

// let result4 = gcd(7, 7) 
// console.log(result4)

// let result5 = gcd(8) 
// console.log(result5)

//=================== DO NOT MODIFY BELOW ===============================

module.exports = gcd;