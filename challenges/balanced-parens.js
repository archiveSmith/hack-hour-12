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
    // let filtered = input.replace(/[a-zA-Z0-9\.\=\:\s\;]/gi, "");
    let filtered = input.match(/[\(\)\[\]\{\}]/g).join("");
    let arr = [];
    let popped;
    for(let i = 0; i < filtered.length; i++) {
        if(filtered[i] === '(') arr.push(filtered[i]);
        if(filtered[i] === '{') arr.push(filtered[i]);
        if(filtered[i] === '[') arr.push(filtered[i]);

        if(filtered[i] === ')') {
            popped = arr.pop();
            if(popped !== '(' || popped === undefined) return false;
        }
        if(filtered[i] === '}') {
            popped = arr.pop();
            if(popped !== '{' || popped === undefined) return false;
        }
        if(filtered[i] === ']') {
            popped = arr.pop();
            if(popped !== '[' || popped === undefined) return false;
        }
    }
    if(arr.length !== 0) {
        return false;
    }
    return true;
}

module.exports = balancedParens;
