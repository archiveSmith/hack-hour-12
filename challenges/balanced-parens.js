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
    let parens = input.match(parensReg)
    const mapped = parens.map(item =>{
        if(item === '{') return 'openB';
        if(item === '}') return 'closedB'
        if(item === '(') return 'openP';
        if(item === ')') return 'closedP'
        if(item === '[' ) return 'openA';
        if(item === ']') return 'closedA'
    })
    const checkObj = {openB: 'closedB', openP: 'closedP', openA: 'closedA'}
    //check if palindrome
    for (let i = 0; i < Math.floor(mapped.length/2); i++) {
        console.log(mapped[i], mapped[mapped.length-(1+i)])
        if(checkObj[mapped[i]] !== mapped[mapped.length-(1+i)]) {
            return false;
        }
    }
    return true;
}
console.log(balancedParens('((()))'))
module.exports = balancedParens;
