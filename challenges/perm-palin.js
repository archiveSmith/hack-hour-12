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
	if (str.length === 1) return true;
  for (let [index, ch] of str.split('').entries()) {
    let nextInst = str.indexOf(ch, index + 1);
    if (nextInst > 0) {
      let next = true;
      let i = index + 1;
      let j = nextInst - 1;
      while (next) {
        if (i === j) return true;
        if (str[i] !== str[j]) next = false;
        else if (str[i] === str[j]) {
          i += 1;
          j -= 1;
        }
      }
    }
  }

  return false;
}

// console.log(permPalin('cbaba'))

module.exports = permPalin;