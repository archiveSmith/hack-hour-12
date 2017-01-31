// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    if (!str || str.length < 0) return false;
    if (str === ' ') return true;
    console.log('check');
    let stack = [];
    str = str.toLowerCase();
    let strArr = str.split(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\s+]/g);
    console.log('strArr: ',strArr);
    strArr.forEach((s) => {
        if (s !== '') {
            if (stack.length > 0 && s.split('').reverse().join('') === stack[stack.length - 1]) {
                console.log('popping: ', stack);
                stack.pop();
            } else {
                stack.push(s);
                console.log('pushing: ', stack);
            }
        }
    });
    return !stack.length;

}

// console.log(matchWord(''));

module.exports = matchWord;
