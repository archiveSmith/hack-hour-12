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
  if (string.length < 2) {
    return [string];
  }
  const allPerms = [];
  for (let i = 0; i < string.length; i += 1) {
    const letter = string[i];
    const shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1);
    const shortstringArray = anagrams(shorterWord);
    for (let j = 0; j < shortstringArray.length; j += 1) {
      allPerms.push(letter + shortstringArray[j]);
    }
  }
  const result = [...new Set(allPerms)];
  return result;
}

function anagrams(string) {
  // store results in object for constant lookup time
  const permutations = {};

  // create driver function for getting permutations

}

module.exports = anagrams;
