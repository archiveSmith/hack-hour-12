/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true   cbaccabc
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  const strArr = str.split('');
  const obj = strArr.reduce((a, b) => {
    // a[b] = ++a[b] || 1;
    if (a[b]) delete a[b];
    else a[b] = 1;
    return a;
  }, {});
  return Object.keys(obj).length <= 1;
}


module.exports = permPalin;
