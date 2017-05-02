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
	if (typeof str !== 'string') return 'str not a string';
	if (str.length === 1) return true;
	
	const uniqueFrequency = {};
	
  for (let i = 0; i < str.length; i++){
    uniqueFrequency[str[i]] = ++uniqueFrequency[str[i]]||1;
  }
  
  let oddsCount = 0;
  
  const uniqueFrequencyKeys = Object.keys(uniqueFrequency);

  for (let i = 0; i < uniqueFrequencyKeys.length; i += 1) {  
    if (uniqueFrequency[uniqueFrequencyKeys[i]] % 2 !== 0) {
      oddsCount += 1;
    }
    if (oddsCount > 1) return false;
  }
  return true;
}

module.exports = permPalin;