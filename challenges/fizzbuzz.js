// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  let result = [];
  for (let i = 1; i <= num; i++) {
    let string = '';
    if (i % 3 === 0) string += 'fizz';
    if (i % 5 === 0) string += 'buzz';
    if (string === '') result.push(i);
    else result.push(string);
  }

  return result;

}

module.exports = fizzbuzz;
