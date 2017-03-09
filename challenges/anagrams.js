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

// function anagrams(string) {
//   const anagramArr = [];
//   const stringArr = string.split('');
//   for (let i = 0; i < string.length; i += 1) {
//     for (let j = i + 1; j < string.length; j += 1) {
//       let swapChar = stringArr.slice();
//       console.log('orig', swapChar, i, j)
//       let temp = swapChar[i];
//       swapChar[i] = swapChar[j];
//       swapChar[j] = temp;
//       console.log(swapChar)
//     }
//   }
// }

function anagrams(string) {
  // store results in object for const lookup time
  const permutations = {};

  //create driver function for getting perms
  function getPerms(str, curr = '') {
    // Base case: if we have used all elements from str, save anagram as key. value does not matter
    if (str === '') return permutations[curr] = true;

    // loop through string
    for (let i = 0; i < str.length; i += 1) {
      // take letter at current index
      const selected = str.slice(i, i + 1);

      //store the rest of the letters for the next call
      const rest = str.slice(0, i) + str.slice(i + 1);

      // pass the leftover letters and the built up curr string to a recursive call
      getPerms(rest, curr + selected)
    }
    // return null to end recursive call declaratively
    return null;
  }

  getPerms(string);

  return Object.keys(permutations)
}

console.log(anagrams('abc'))

module.exports = anagrams;
