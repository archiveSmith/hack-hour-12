// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    // change everything to lowercase using regex or toLowerCase(), split everything
    // by space and punctuations
    // use a stack
    var wordArr = str.split(/[/\_\W+/]/gi).filter((words) => words !== "");
    // we have to push things into an array and pop out when we find a reverse at the
    // the end of the stack. then check the array after. if not length of 0, return false.
    // else return true
    for(let i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i].toLowerCase();
    }
    let tempArr = [];
    for(let i = 0; i < wordArr.length; i++) {
        if(wordArr[i].split("").reverse().join("") === tempArr[tempArr.length - 1]) {
            tempArr.pop();
        } else {
            tempArr.push(wordArr[i]);
        }
    }
    if(tempArr.length != 0) {
        return false;
    }
    return true;
}

module.exports = matchWord;

