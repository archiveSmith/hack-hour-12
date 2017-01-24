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
    const parensReg = /[\{\(\[\}\]\)]/ig
    let parens = input.match(parensReg)
    const mapped = parens.map(item =>{
        if(item === '{' || item === '}') return 'b';
        if(item === '(' || item === ')') return 'p';
        if(item === '[' || item === ']') return 'a';
    })
    //check if palindrome
    for (let i = 0; i < Math.floor(mapped.length/2); i++) {
        if(mapped[i] !== mapped[mapped.length-(1+i)]) return false;
    }
    return true;
}
console.log(balancedParens('(())'))
console.log(typeof '{')
module.exports = balancedParens;
