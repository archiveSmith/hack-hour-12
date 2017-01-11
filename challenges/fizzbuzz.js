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
	const arr = []
	for (var i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr.map((val) => {

	    if (val % 3 === 0 && val % 5 === 0) {
	      val = 'fizzbuzz'
	    } else if (val % 5 === 0) {
	      val = 'buzz';
	    } else if (val % 3 === 0) {
	      val = 'fizz';
	    } else {
	      val = val;
	    }
	    
	    return val;
	})
}
module.exports = fizzbuzz;
