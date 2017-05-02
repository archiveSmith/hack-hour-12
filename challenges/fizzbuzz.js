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
        let by3 = false;
        let by5 = false;
        let byBoth = false;
        if (i % 3 == 0) {
            by3 = true;
        }
        if (i % 5 == 0) {
            by5 = true;
        }
        if (by3 && by5) {
            byBoth = true;
        }
        if (byBoth) {
            result.push('fizzbuzz');
            continue;
        }
        if (by3) {
            result.push('fizz');
            continue;            
        }
        if (by5) {
            result.push('buzz');
            continue;            
        }
        result.push(i);
    }
    return result;
}

module.exports = fizzbuzz;