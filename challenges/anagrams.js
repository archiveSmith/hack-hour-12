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
  const anagramArr = [];
  const stringArr = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j < string.length; j += 1) {
      let swapChar = stringArr.slice();
      console.log('orig', swapChar, i, j)
      let temp = swapChar[i];
      swapChar[i] = swapChar[j];
      swapChar[j] = temp;
      console.log(swapChar)
    }
  }
}

// function anagrams(string) {

// }

console.log(anagrams('abc'))

module.exports = anagrams;
