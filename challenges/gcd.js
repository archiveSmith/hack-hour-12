/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 function gcd(a, b) {
   // find factors
   function findFacs(n) {
     // find all prime numbers up to n
     const primes = [];
     const factors = [];

     function isPrime(num) {
       for (let i = 2; i < num; i += 1) {
         if (num % i === 0) return false;
       }
       return true;
     }

     for (let j = 2; j < n; j += 1) {
       if (isPrime(j)) primes.push(j);
     }

     // console.log(primes)

     for (let m = 0; m < n; m += 1) {
       if (n % primes[m] === 0) factors.push(primes[m]);
     }
     // console.log(factors)
     return factors;
   }

   const x = findFacs(a);
   const y = findFacs(b);

   // console.log(x);
   // console.log(y);

   // return largest shared factor
   const sharedFacs = [];

   if (x.length <= y.length) {
     for (let k = 0; k < y.length; k += 1) {
       if (x.includes(y[k])) sharedFacs.push(y[k]);
     }
   } else {
     for (let l = 0; l < x.length; l += 1) {
       if (y.includes(x[l])) sharedFacs.push(x[l]);
     }
   }

   if (sharedFacs.length === 0) return 1;
   return sharedFacs[sharedFacs.length - 1];

 }

module.exports = gcd;
