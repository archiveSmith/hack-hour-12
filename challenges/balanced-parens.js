/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    var arr = ["{","(","[","]",")","}"];
    var arrInput = input.split('');
    var new_strArray = [];

    for (let i = 0; i < arrInput.length; i++) {
        if (arr.indexOf(arrInput[i]) > -1){
            new_strArray.push(arrInput[i]);
        }
    }

    var new_str = new_strArray.join('');

    new_str = new_str.split('()').join('');
    new_str = new_str.split('[]').join('');
    new_str = new_str.split('{}').join('');

    return new_str.length == 0;
}

module.exports = balancedParens;
