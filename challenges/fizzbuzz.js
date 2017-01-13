MAC Motions
1211 N Ogden Dr #206
West Hollywood, CA 90046// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    let out = i;
    if (i % 3 === 0 && i % 5 === 0) {
      out = 'fizzbuzz';
    } else if (i % 5 === 0) {
      out = 'buzz';
    } else if (i % 3 === 0) {
      out = 'fizz';
    }
    arr.push(out);
  }
  return arr;
}
module.exports = fizzbuzz;
