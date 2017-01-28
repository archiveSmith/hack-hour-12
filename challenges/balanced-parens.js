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
    if (typeof input !== 'string' || !input[1]) return false;
    if (input.length % 2 !== 0) return false;
    const parensReg = /[\{\(\[\}\]\)]/ig
    parensMap = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    let parens = input.match(parensReg)
    while(parens.length){
        let count = 0
        if(parens[0] in parensMap) {
            for (let i = 1; i < parens.length; i++) {
                if(parens[i] === parens[0]) count++
                else if(parens[i] === parensMap[parens[0]] && count !== 0) count--
                else if(parens[i] === parensMap[parens[0]] && count === 0) {
                    parens.splice(i, 1);
                    parens.splice(0, 1);
                }
                else return false;
            }
        }
        else return false;
    }
    return true;
}
console.log(balancedParens('({(d(s))})'))

module.exports = balancedParens;
/*
((([])) ))((

even number,
if it opens, it must close


*/