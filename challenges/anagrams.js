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
  function swap (str, spot1, spot2) {
    let arr = str.split('');
    let temp = arr[spot1];
    arr[spot1] = arr[spot2];
    arr[spot2] = temp;
    return arr.join('');
  }
  function swapAll (string) {
    const result = [string];
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if(i !== j) result.push(swap(string, i, j));
      }
    }
    return result;
  }
  const holderArr = swapAll(string);
  const allCombos = [];
  for (let i = 0; i < holderArr.length; i++) {
    allCombos.push(swapAll(holderArr[i]));
  }
  const slimCombos = allCombos.reduce((result, item) => {
    return result.concat(item);
  }, [])
  return slimCombos.filter((item, index) => {
    return slimCombos.indexOf(item) === index;
  })
}
//console.log(anagrams('dare'));

module.exports = anagrams;
