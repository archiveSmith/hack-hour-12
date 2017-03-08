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
  const results = [];
  let stringArr = string.split('');

  function perm(items, cur = []) {
    if (cur.length === string.length) if (results.indexOf(cur) === -1) results.push(cur);
    let c;
    for (let i = 0; i < items.length; i += 1) {
      c = items.splice(i, 1)[0];
      perm(items.slice(), cur + c);
      items.splice(i, 0, c);
    }
  }

  perm(stringArr);
  return results;
}

// provided alternate solution
function allAnagramsAlternate (word) {
  if (word.length < 2) {
    return [word];
  } else {
    var allAnswers = [];
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      var shortwordArray = allAnagrams(shorterWord);
      for (var j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(letter + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}

module.exports = anagrams;
