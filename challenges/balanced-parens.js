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

function balancedParens(input) {
    let symbols = {'(':')', '[':']', '{':'}'};
    let symbolsI = {')':'(', ']':'[', '}':'{'};
    if (!input) return;
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        if (['(', '[', '{', ')', ']', '}'].indexOf(c) !== -1) {
            array.push(c);
        }        
    }
    if (array.length === 0) return false;
    if (array.length % 2 !== 0) return false;

    let countdown = array.length - 1;
    for (let i = 0; i < array.length / 2; i+=1) {
        console.log('comparing', array[i], symbolsI[array[countdown]]);
        let open = array[i];
        let close = symbols[array[i]];
        if (array[i] != symbolsI[array[countdown]]) {
            return false;
        }
        countdown -= 1;
        // let open = array[i];
        // let close = symbols[open];
        // console.log('open', open, 'close', close);
        // let idxOpen = i;
        // let idxClose = array.indexOf(close);
        // console.log('idxOpen', idxOpen, 'idxClose', idxClose);
        // if (idxClose === -1) return false;
        // if (idxClose - idxOpen % 2 === 0) {
        //     return false;
        // }
    }    
    return true;
}

// console.log(balancedParens('('))
// console.log(balancedParens('()'))
// console.log(balancedParens(')'))
// console.log(balancedParens('[asd asdas][wr wer we]asd asd@#!@{das da}()'))
// console.log(balancedParens('[]'))
// console.log(balancedParens('{}'))
// console.log(balancedParens('({}'))
// console.log(balancedParens('{})'))
// console.log(balancedParens('(([))'))
// console.log(balancedParens('({{})'));

module.exports = balancedParens;