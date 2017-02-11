/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	-permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  const arr = Array.from(str);

  const permutator = (inputArr) => {
    const result = [];

    const permute = (array, m = []) => {
      if (array.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < array.length; i += 1) {
          const curr = array.slice();
          const next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return result;
  };
  const perms = (permutator(arr));

  for (let i = 0; i < perms.length; i += 1) {
    if (perms[i].slice(0, Math.ceil(perms[i].length / 2)).join('') ===
      perms[i].slice(Math.ceil(perms[i].length / 2)).reverse().join('')) {
      return true;
    }
  }
  return false;
}

module.exports = permPalin;

// const countChar = {};
//
// for (var i = 0; i < str.length; i++) {
//   const char = str[i]
//   // hasOwnProperty used to avaoid 0 which would return false if just use [char]
//   countChars.hasOwnProperty(char) ? countChars[char] += 1 : countChars[char] = 1;
// }
//
// Object.values(countChars).forEach(count => {
//   if (count % 2 === 1) numOdd++;
// })
//
// return numOdd < 2;
