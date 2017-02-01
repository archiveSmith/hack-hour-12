// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
//(while try yrt for if fi rof elihw)
// matchWord('');  -> true

const reverseStr = require('./reverse-in-place.js');

function matchWord(str) {
  str = str.replace(/\W|\_/ig, ' ');
  let matches = str.match(/\w+/ig);
  let ignore = [];
  for (let i = 0; i < matches.length;) {
    let rev = matches[i].split('');
    rev = reverseStr(rev).join('');
    let next = matches.indexOf(rev, i)
    // console.log(rev, i, next)
    if (next === -1 || (next - i) % 2 === 0) return false;
    ignore.push(i);
    i += 1;
  }

  return true;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))

module.exports = matchWord;
