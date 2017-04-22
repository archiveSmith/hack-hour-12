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
    var counter = 1;
    var output = [];
    while(num > 0) {
        if(counter % 3 === 0 && counter % 5 === 0) output.push("fizzbuzz");
        else if(counter % 3 === 0) output.push("fizz");
        else if(counter % 5 === 0) output.push("buzz");
        else output.push(counter);
        counter++;
        num--;
    }
    return output;
}

module.exports = fizzbuzz;
