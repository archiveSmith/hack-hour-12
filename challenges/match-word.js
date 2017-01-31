// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close
// a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words 
//in a string are "closed". Write a function that takes a string and returns true if every word is 
//closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.length === 0) return true;
  const newStr = str.replace(/[^\w\s]|/g, '').replace(/\s+|_/g, ' ');
  const strArr = newStr.split(' ');
  if (strArr.length % 2 !== 0) return false;
  let i;
  let j;
  const arr = [];
  for (i = 0; i < strArr.length; i += 1) {
    const lowerStr = strArr[i].toLowerCase();
    arr.push(lowerStr);
  }
  const checkArr = [arr[0]];
  for (j = 1; j < arr.length; j += 1) {
    const reversedStr = arr[j].split('').reverse().join('');
    if (reversedStr === checkArr[checkArr.length - 1]) {
      checkArr.pop();
    }
    else {
      checkArr.push(arr[j]);
    }
  }
  return checkArr.length === 0;
}

module.exports = matchWord;
