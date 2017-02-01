// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" 
//with "esac", i.e. the same keyword backwards. for this problem we'll check that all words 
//in a string are "closed". Write a function that takes a string and returns true if every word is 
//closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  function backwords (string) {
    return string.split('').reverse().join('');
  }
  function lower (array) {
    return array.map(item => {
      return item.toLowerCase();
    });
  }
  const regex = /[a-zA-Z]+/g;
  let arr = str.match(regex);
  arr = lower(arr);
  arrCopy = arr.slice(0);
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(backwords(arr[i])) !== -1) {
      obj[arr[i]] = backwords(arr[i]);
      arr[i] = null;
    };
  }
  const open = [];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] in obj) {
      open.push(arrCopy[i])
    }
    else {
      if(obj[open.pop()] !== arrCopy[i]) return false;
    }
  }
  return true;
}
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;
