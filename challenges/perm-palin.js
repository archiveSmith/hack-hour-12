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
	if (!str) return str;
  if (str.length === 1) return true;

  let prop;
  let oddCount = 0;
  let isEven = str.length % 2 === 0 ? true : false;

  const letters = str.split('');
  const letterObj = letters.reduce(function(current, next) {
    if(next in current) {
      current[next] += 1;
    }
    else {
      current[next] = 1;
    }
    return current;
  }, {});

  if (isEven) {
    for(prop in letterObj) {
      if (letterObj[prop] % 2 === 1) return false;
    }
    return true;
  }
  else {
    for(prop in letterObj) {
      if (letterObj[prop] % 2 === 1) oddCount += 1;
    }
    if (oddCount === 1) return true;
    return false;
  }
}

module.exports = permPalin;