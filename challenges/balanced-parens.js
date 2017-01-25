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
    if (!input) return;
    let symbols = {'(':')', '[':']', '{':'}'};
    let symbolsI = {')':'(', ']':'[', '}':'{'};
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        if (['(', '[', '{', ')', ']', '}'].indexOf(c) !== -1) {
            array.push(c);
        }        
    }
    if (array.length === 0) return false;
    if (array.length % 2 !== 0) return false;

    let matches = 0;
    // let countdown = array.length - 1;
    for (let i = 0; i < array.length; i+=1) {
        // console.log('comparing', array[i], symbolsI[array[countdown]]);
        let symbol = array[i];
        if (['(', '[', '{'].indexOf(symbol) === -1) {
            // console.log('continue');
            continue;
        }
        let closeSymbol = symbols[symbol];
        // console.log('SYMBOL', symbol);
        for (let j = i+1; j < array.length; j+=1) {
            // console.log('comparing', i, j, array[j], closeSymbol);

            if (array[j] === closeSymbol) {
                // console.log('MATCH', array[j], closeSymbol);
                matches += 1;
                break;
            }
        }
    }    
    // console.log('matches', matches);
    if ((array.length/2) === matches) {
        return true;
    }
    return false;
}

// console.log(balancedParens('()[]{]'));
// console.log(balancedParens('('))
// console.log(balancedParens('()'))
// console.log(balancedParens(')'))
// console.log(balancedParens('[asd asdas][wr wer we]asd asd@#!@{das da}()'))
// console.log(balancedParens('[]'))
// console.log(balancedParens('{}'))
// console.log(balancedParens('({}'))
// console.log(balancedParens('{})'))
// console.log(balancedParens('(([))'))

module.exports = balancedParens;