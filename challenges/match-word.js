// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

<<<<<<< HEAD

// you can lowercase the str before you do anything... don't have to map!!!
function matchWord(str) {
    let wordArr = str.toLowerCase().split(/[/\_\W+/]/gi).filter((words) => words !== "");
    
    const tempArr = [];
    for(let i = 0; i < wordArr.length; i++) {
        if(wordArr[i].split("").reverse().join("") === tempArr[tempArr.length - 1]) tempArr.pop();
        else tempArr.push(wordArr[i]);
    }
    if(tempArr.length != 0) return false;
    return true;
}

module.exports = matchWord;

=======
function matchWord(str) {

}

module.exports = matchWord;
>>>>>>> a3e7558829470752c1b7ca4bb02eb6bb48f05c20
