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
    // const arr = input.split('');
    // const par = ['(', ')', '{', '}', '[', ']'];
    // const results = arr.reduce(function (a, b) {
    //     if (par.includes(b)) a.push(b);
    //     return a;
    // }, []);
    // console.log(results);


    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];
    const paren, obj;

    var temp = [];
    var len = results.length;


    for (let i = 0; i < len; i++) {
        paren = results[i];

        if (open.indexOf(paren) > -1) {
            temp.push(paren);
        } else if (close.indexOf(paren) > -1) {

            obj = open[close.indexOf(paren)];
            if (temp.length === 0 || (temp.pop() !== obj)) {
                return false;
            }
        }
    }

    return (temp.length === 0);

}

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false 
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;