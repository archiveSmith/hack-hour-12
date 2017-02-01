// Some languages have "if" statements that are closed by "fi" instead of curly
// brackets. Or they close a "case" with "esac", i.e. the same keyword backwards.
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
  if (str.length === 0) return true;
  if (str.match(/[.,!?:;'"\-_[\]}()]/) === false) return false;

  const strArr = str.replace(/[.,!?:;'"\-_[\]}()]/gi, ' ')
  .match(/(\w+)/g)
  .map(e => e.toLowerCase());
  const len = strArr.length;
  const compArr = [];
  const matchArr = [];

  if (len % 2 === 1) return false;

  for (let i = 0; i < len; i += 1) {
    if (compArr.length > 0) {
      if (matchArr.includes(strArr[i])) {
        compArr.pop();
        matchArr.pop();
      }
    } else {
      compArr.push(strArr[i]);
      matchArr.push(strArr[i].split('').reverse().join(''));
    }
  }

  if (compArr.length > 0) return false;

  return true;
}

module.exports = matchWord;

// if(reverseWord !== wordStack[wordStack.length - 1]) wordStack.push(word);
// else wordStack.pop();
