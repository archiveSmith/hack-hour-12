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
    if(str.length === 1) {
        return true;
    }
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]]++;
        
    }
    let oddCases = 0;
    for(let letter in obj) {
        if(obj[letter] % 2 !== 0) {
            oddCases++;
        }
        if(oddCases > 1) {
            return false;
        }
    }
    return true;
}

module.exports = permPalin;