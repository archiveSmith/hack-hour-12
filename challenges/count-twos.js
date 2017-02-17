// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
    let result = 0;

    for (let i = 1; i <= num; i++) {
        let str = i.toString();
        result += (str.length - str.replace(/2/g,'').length);
    }

    console.log(result)
}

countTwos(1);  //-> 0
countTwos(3);  //-> 1
countTwos(13);  //-> 2
countTwos(1000);  //-> 300
countTwos(11420);  //-> 4483




module.exports = countTwos;