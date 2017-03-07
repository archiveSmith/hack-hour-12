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

function anagrams(string, start = '') {
  console.log(string);
  if (!string) return [''];
  if (string.length === 1) {
    return [start + string];
  } else {
    let returnResult = [];
    for (let i = 0; i < string.length; i += 1) {
      let result = anagrams(string.substr(0, i) + string.substr(i + 1), string[i]);
      for (let j = 0; j < result.length; j += 1) {
        let newVal = start + result[j];
        if (returnResult.includes(newVal) === false) {
          returnResult.push(start + result[j]);
        }
      }
    }
    return returnResult;
  }
}

module.exports = anagrams;
