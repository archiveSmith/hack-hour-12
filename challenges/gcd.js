/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smallest = a < b ? a : b;
  let largest = a > b ? a : b;
  if (smallest % 2 === 1 || largest % 2 === 1) {
    let divisor = 1;
    for (let i = 3; i < smallest; i += 2) {
      if (smallest % i === 0 && largest % i === 0) divisor = i;
    }

    return divisor;
  } else {
    let divisor = 1;
    for (let i = 2; i < smallest; i += 1) {
      if (smallest % i === 0 && largest % i === 0) divisor = i;
    }

    return divisor;
  }
}

// console.log(gcd(27, 9))

module.exports = gcd;