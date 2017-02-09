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
    if (perms[i].slice(0, ~~perms[i].length / 2).join('') ===
      perms[i].slice(Math.ceil(perms[i].length / 2)).reverse().join(''))
      return true;
  }
  return false;
}

module.exports = permPalin;
