'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let i;
  for (i = 3; i < 1000; i += 3) {
    if (i % 3 === 0) sum += i;
  }
  for (j = 5; j < 1000; j += 5) {
    if (j % 5 === 0 && j % 3 !== 0) sum += j;
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let i;
  let starter;
  x < y ? starter = x : starter = y; 
  for (i = starter; i < z; i += 1) {
    if (i % x === 0 || i % y === 0) sum += i;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
