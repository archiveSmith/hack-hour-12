/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// let permArr = [],
//   usedChars = [];

// function permPalin(input) {
//   var i, ch;
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length == 0) {
//       permArr.push(usedChars.slice());
//     }
//     permPalin(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr
// };

// console.log(permPalin('abab'.split('')));

function permPalin(str) {
    
    if (!/[a-z]+/test(str)) return 'bad input';
    
    const lowerCaseStr = str.toLowerCase();

    const countChars = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      countChars.hasOwnProperty(char) ? countChars[char] += 1 : countChars[char] = 1;
    }

    let numOdd = 0;
    Object.values(countChars).forEach(count => {
      if (count % 2 === 1) numOdd++;
    });

    return numOdd < 2;
}

module.exports = permPalin;