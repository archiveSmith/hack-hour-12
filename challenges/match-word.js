// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards.
// for this problem we'll check that all words in a string are "closed".
// Write a function that takes a string and returns true if every word is closed
// by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const matches = {};
  const openWords = [];

  // create an object of all words in  the string
  console.log(str);
  let key = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i])) {
      key += str[i];
    } else if (key) {
      key = key.toLowerCase();
      let reversed = key.split('').reverse().join('');

      // check to see if we're expecting to see this
      if (key in matches) {
        if (reversed !== openWords.pop()) {
          return false;
        }
      } else {
        openWords.push(key);
        matches[reversed] = key;
      }

      //console.log("looking for <" + reversed + ">" + " in [" + openWords + "]");
      key = reversed = '';

    }
  }

  // last check for the final key
  // (Our for loop boots us out if the last key is at the
  //  very end of the string)
  if (key.split('').reverse().join('') === openWords[0]) {
    openWords.pop();
  }

  return !openWords.length;

}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));//  -> true
console.log(matchWord('__END_DNE-----'));//  -> true
console.log(matchWord('__ENDDNE__'));//  -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));//  -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));//  -> false     not properly closed. like ( [) ]
console.log(matchWord('')); // -> true

module.exports = matchWord;
