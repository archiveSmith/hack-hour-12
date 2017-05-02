/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    // edge case not string
    if (typeof(str) !== 'string') return false
    // edge case: one word string, 
    if (str.length == 1) return true

	for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 2]) {
            return true;
        }
    }

    return false
}

//  console.log(permPalin('abab')) //=> true
//  console.log(permPalin('cbaba')) //=> true
//  console.log(permPalin('cbac')) //=> false
//  console.log(permPalin('a')) //=> true

module.exports = permPalin;

function permPalin(str) {

    // Edge case: emptu string or non-alphabetic characters
    if (!/[a-z]+/.test(str)) return 'bad input';

    // Make case insensitive
    const lowerCaseStr = str.toLowerCase()

    // count char via object
    const countChars = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        countChars.hasOwnProperty(char) ? countChars[char] += 1: countChars[char] = 1;
    }

    // If more than one odd character in string, cannot be palindrome

    let numOdd = 0;

    Object.values(countChars).forEach(count => {
        if (count % 2 == 1) numOdd++;
    })

    return numOdd < 2;

}