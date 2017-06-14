'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000FirstAttempt() {
  const multiples = [];

  for (let i = 3; i <= 1000; i += 3) {
    multiples.push(i);
  }

  for (let i = 5; i <= 1000; i += 5) {
    if (multiples.indexOf(i) === -1) {
      multiples.push(i);
    }
  }

  return multiples.reduce((acc, val) => acc + val);
}

function sumMultiples3Or5Below1000() {
  // calculate threesSum
  const threesSum = 3 * (Math.floor(1000 / 3) * (Math.floor(1000 / 3) + 1) / 2);
  // calculate fivesSum
  const fivesSum = 5 * (Math.floor(1000 / 5) * (Math.floor(1000 / 5) + 1) / 2);
  // calculate fifteensSum
  const fifteensSum = 15 * (Math.floor(1000 / 15) * (Math.floor(1000 / 15) + 1) / 2);
  // return threesSum + fivesSum - fifteensSum
  return threesSum + fivesSum - fifteensSum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  // calculate xSum
  const xSum = x * (Math.floor(z / x) * (Math.floor(z / x) + 1) / 2);
  // calculate ySum
  const ySum = y * (Math.floor(z / y) * (Math.floor(z / y) + 1) / 2);
  // calculate lcmSum
  const leastMult = lcm(x,y);
  const lcmSum = leastMult * (Math.floor(z / leastMult) * (Math.floor(z / leastMult) + 1) / 2);
  // return xSum + ySum - lcmSum
  return xSum + ySum - lcmSum;
}

module.exports = objectToExport;
