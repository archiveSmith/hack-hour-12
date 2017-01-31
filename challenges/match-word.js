// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    //replace all none word character with space //remove trailling and front space
    str = str.replace(/[^a-z0-9]/gmi, " ").trim();
    arr = str.split(' ');

    //edge case for no word exist, edge case for only 1 word exist
    if (arr.length == 1) {
        if (arr[0] == '') return true;
        return false;
    }

    return arr[0].toLowerCase() == arr[arr.length - 1].toLowerCase().split('').reverse().join('');
    //condition that is case-insensitive (.toLowwerCase() = .toLowwerCase())
    //check with .reverse()
}

module.exports = matchWord;

// var result1 = matchWord('__END_DNE-----');  //-> true
// console.log(result1)
// var result2 = matchWord('__ENDDNE__');
// console.log(result2)  //-> false       (not separated by a space)
// var result3 = matchWord('IF()()fi[]');
// console.log(result3)  //-> true        (should be case-insensitive)
// var result4 = matchWord('for__if__rof__fi');
// console.log(result4)  //-> false     not properly closed. like ( [) ] 
// var result5 = matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');
// console.log(result5)//  -> true
// var result6 = matchWord('');
// console.log(result6)  //-> true