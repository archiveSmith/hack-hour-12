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
  if (!string || !string.length) return '';
  
  const output = [];
  const used = [];

  function recurse(str) {
    // convert string to array
    const chars = str.split('');
    // loop over string
    for (let i = 0; i < chars.length; i += 1) {
      // remove current char from string
      const curr = chars.splice(i, 1);
      // add current char to used 
      used.push(curr);
      // if char array is now empty, push word from used array to output
      if (chars.length === 0) output.push(used.join(''));
      // recursive call with remaining chars
      recurse(chars.join(''));
      // re-insert current char
      chars.splice(i, 0, curr);
      // empty used array
      used.pop();
    }
  }

  recurse(string);
  
  return output;
}

// console.log(anagrams('abcd'));

module.exports = anagrams;
