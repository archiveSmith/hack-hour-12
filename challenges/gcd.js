/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'bad inputs';
  
  const divisorA = [];
  const divisorB = [];
  let shortList = [];
  let longList = [];
  let gcd = 1;
  
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) divisorA.push(i);
  }
  
  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0) divisorB.push(i);
  }
  
  if (divisorA.length <= divisorB.length) {
    shortList = divisorA;
    longList = divisorB;
  } else {
    shortList = divisorB;
    longList = divisorA;
  }
  
  for (let i = 0; i < shortList.length; i += 1) {
    if (longList.includes(shortList[i]) && gcd <= shortList[i]) gcd = shortList[i];
  }
  
  return gcd;
}

module.exports = gcd;