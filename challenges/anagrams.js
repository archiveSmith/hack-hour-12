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
  //sepertate string into array
  let arr = string.split(''); // ['a','b','c']
  console.log(arr);
  // create permutation
  let result = arr;


  for (let i = 0; i < arr.length - 1; i++) {
      let new_result = [];
      result.forEach((ele) => {
        arr.forEach( (ele2) => {
          let str = ele + ele2;
          if (str.uniq().length == str.length) {
            new_result.push(str)
          }

        })
      result = new_result
    })


    console.log(result)
  }

  return result;
}

var result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;
