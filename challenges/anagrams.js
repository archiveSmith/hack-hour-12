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

// take combo for first letter, and then move first letter to end of string (rotate it) and then repeat this... string.length times
function anagrams(string) {
  const permutations = {};
  function getPerms(str, curr = '') {
    if(str === '') return permutations[curr] = true;  

    for(let i = 0; i < str.length; i++) {

      const selected = str.slice(i, i + 1);

      const rest = str.slice(0, i) + str.slice(i + 1);

      getPerms(rest, cur + selected);

    }

    return null;

  }

  getPerms(string);
  return Object.keys(permutations);
}

module.exports = anagrams;
