// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


// function countTwos(num) {
//     let count = 0;
//     for(let i = 1; i <= num; i++) {
//         let numString = String(i);
//         for(let j = 0; j < numString.length; j++) {
//             if(numString[j] === '2') {
//                 count++;
//             }
//         }        
//     }
//     return count;
// }

function countTwos(num) {
    let bigString = '';
    let count = 0;
    for(let i = 1; i <= num; i++) {
        bigString += i;
    }
    for(let i = 0; i < bigString.length; i++) {
        if(bigString[i] === '2') count++;
    }
    return count;
}

// need updating
// function countTwos(num, currentNum = 0, count = 0) {
//     if(currentNum > num) return count;
//     let currString = currentNum + "";
//     for(let i = 0; i < currString.length; i++) {
//         if(currString[i] === '2') count++;
//     }
//     return countTwos(num, ++currentNum, count);
// }

module.exports = countTwos;