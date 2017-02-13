// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3,
// "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  const res = [];

  for (let i = 1; i <= num; i++) {
    const check3 = (i) => (i % 3 == 0);
    const check5 = (i) => (i % 5 == 0);

    if (check3(i) && check5(i)) res.push('fizzbuzz');
    else if (check3(i)) res.push('fizz');
    else if (check5(i)) res.push('buzz');
    else res.push(i);
  }

  return res;
}

module.exports = fizzbuzz;
