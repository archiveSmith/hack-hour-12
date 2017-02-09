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
	if (!str || typeof str !== 'string') return;
  if (str.length === 1) return true;

  const hash = {};
  for (let i = 0; i < str.length; i += 1) {
    if (hash.hasOwnProperty(str[i])) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }
  // console.log(hash);
  let hasOdd = 0;
  Object.keys(hash).forEach((el) => {
    // console.log(hash[el], hash[el] % 2);
    if (hash[el] % 2 !== 0) {
      hasOdd += 1;
      // console.log('found odd, hasOdd:  ', hasOdd);
    }
  });
  return (hasOdd < 2);
}

module.exports = permPalin;