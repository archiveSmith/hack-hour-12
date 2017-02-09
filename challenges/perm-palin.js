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
    if (!str || typeof str !== 'string') return false;

    const numOfEachChar = [];
    let oddNumCount = 0;
    while (str) {
        let regex = new RegExp(str[0], 'ig');

        numOfEachChar.push(str.match(regex).length);
        str = str.replace(regex, '');
    }
    console.log(numOfEachChar);
    return !(numOfEachChar.filter((num) => {
        return (num % 2);
    }).length > 1)

}
console.log(permPalin('abac'))

module.exports = permPalin;