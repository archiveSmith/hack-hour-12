/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

//if its odd length we need even num of everything and one that's odd  9
//if its even you need even of everything you need to have even num of everything

function permPalin(str) {
  if (str.length === 0 || !str || typeof str !== 'string') return;
  function countLetters (string) {
    const split = string.split('')
    const obj = split.reduce((map, letter) => {
      if (map[letter]) map[letter] = ++map[letter];
      else map[letter] = 1;
      return map; 
    }, {})
    const resultArr = [];
    for (let key in obj) {
      resultArr.push(obj[key]);
    }
    return resultArr;
  }
  const counts = countLetters(str);
  if (str.length % 2 === 0) {
    //even num of everything
    return counts.reduce((bool, item) => {
      if (item % 2 !== 0) bool = false;
      return bool; 
    }, true);
  }
  else {
    let oddCount = 0;
    counts.forEach((item) => {
      if (item % 2 !== 0) oddCount++;
    })
    if (oddCount === 1) return true;
    else return false;
  }
}
console.log(permPalin(5))

module.exports = permPalin;