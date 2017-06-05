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
  str = str.split('');
  let i = 0;
  while (str.length > 1) {
    if (i === 1 && str.indexOf(str[i]) === str.lastIndexOf(str[i])) return false;
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) i = 1;
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return false;
    str.splice(str.lastIndexOf(str[i]), 1);
    str.shift();
  }
  return true;
}

module.exports = permPalin;
