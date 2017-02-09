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