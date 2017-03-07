/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (!string) return;
  const output = [];
  const used = [];
  function recurse(str) {
    const chars = str.split('');
    for (let i = 0; i < chars.length; i += 1) {
      const curr = chars.splice(i, 1);
      used.push(curr);
      if (chars.length === 0) output.push(used.join(''));
      recurse(chars.join(''));
      chars.splice(i, 0, curr);
      used.pop();
    }
  }
  recurse(string);
  return output;
}

// console.log(anagrams('abc'));

module.exports = anagrams;
