'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let LCM = function(x,y) {
    let  i = 1;

    while (!(i % x === 0 && i % y === 0)) {
      i++;
    }

    return i;
  }

  let sumSingle = function(x,roof) {
    for (let i = roof; i >= 0; i--) {
      if (i % x === 0) {
        let n = i / x;
        return x * (n+1) * n / 2 ;
      } 
    }
  }

  let LCMvalue = LCM(3,5);

  return sumSingle(3,10) + sumSingle(5,10) - sumSingle(LCMvalue,10);
}

let sumSingle = function(x,roof) {
  for (let i = roof; i >= 0; i--) {
    if (i % x === 0) {
      let n = i / x;
      return x * (n+1) * n / 2 ;
    } 
  }
}

console.log(sumMultiples3Or5Below1000());
console.log(sumSingle(5,10))

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
