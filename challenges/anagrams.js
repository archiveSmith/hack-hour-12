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
  // Store results in object for constant lookup time
  const permutations = {};

  // Create driver function for getting perms
  function getPerms(str, cur = '') {
    // Base case: If we have used all elements from str, save anagram as key. Value does not matter.
    if (str === '') return permutations[cur] = true;

    // Loop through string
    for (let i = 0; i < str.length; i += 1) {
      // Take letter at current index
      const selected = str.slice(i, i + 1);

      // Store the rest of the letters for the next call
      const rest = str.slice(0, i) + str.slice(i + 1);

      // Pass the leftover letters and the built up current string to a recursive call
      getPerms(rest, cur + selected);
    }
    // Return null to end recursive calls declaritively
    return null;
  }

  // Call getPerms on string input
  getPerms(string);
  return Object.keys(permutations);
}

module.exports = anagrams;
