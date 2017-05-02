// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed".
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart.
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (typeof str !== 'string') return 'not a string';
  if (str === '') return true;
  const lower = str.toLowerCase();
  const words = lower.match(/[a-z]+/g);
  if (words.length % 2 === 1) return false;
  const wordStack = [];
  words.forEach(word => {
    const reversedWord = word.split('').reverse().join('');
    const topOfStack = wordStack[wordStack.length - 1];
    if (reversedWord !== topOfStack) wordStack.push(word);

    // Else if they do match, pop off the word stack to show that pair has matched!
    else wordStack.pop();
  });
  return !wordStack.length;
}

    // if (str.length < 1) return true;
    // const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '-', '_', '?', '<', '>', '/', '\\'];
    // let arr = str.split('');
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!special.includes(arr[i])) {
    //         newArr.push(arr[i]);
    //     }
    // }
    // let newStr = newArr.join('');
    // let back = newArr.reverse().join('');
    //     // console.log(newStr);
    //     //     console.log(back);

    // for (let i = 0; i < newStr.length; i++) {
    //     if (newStr.charAt(i) !== back.charAt(i)) return false;
    // }
    // return true;
    // console.log(back);
    // console.log(newArr);

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('__END_DNE-----'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));


module.exports = matchWord;
