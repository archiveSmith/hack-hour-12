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
	if (!str || typeof str !== '') return false;
  if (str.length === 1) return true;

  const hash = {};
  for (let i = 0; i < str.length; i += 1) {
    (hash.hasOwnProperty(str[i])) ? hash[str[i]] += 1 : hash[str[i]] = 1;
  }
  let hasOdd = 0;
  Object.keys(hash).forEach((el) => {
    if (hash[el] % 2 !== 0) {
      hasOdd += 1;
    }
  });
  return (hasOdd < 2);
}

module.exports = permPalin;