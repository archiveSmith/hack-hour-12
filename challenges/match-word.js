// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (typeof str !== 'string') return 'not a string';
  if (str === "") return true;
  
  const nonWord = /[^A-Za-z0-9]/;
  const arr = str.split(nonWord).filter((word) => { return word !== ""; }).map((word) => { return word.toLowerCase(); });
  const wordCounter = [];  //  counter for matched words
  const arrLength = arr.length;
  
  for (let i = 0; i < arrLength; i += 1) {
    // if input[i] is an open parens type, push parens type to parensCounter
    if (wordCounter.length === 0) { wordCounter.push(arr[i]); }
    else if (arr[i].split("").reverse().join("") === wordCounter[wordCounter.length - 1]) { wordCounter.pop(); }
  }
  
  // if wordCounter === 0 we have matched words
  if (wordCounter.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = matchWord;
