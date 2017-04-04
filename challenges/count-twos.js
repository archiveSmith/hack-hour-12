// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let twos = 0;

  for (let i = 0; i <= num; i++) {
    let str = String(i);
    for (let j = 0; j < str.length; j++) {
      if(str[j] === '2') twos++;
    }
  }

  return twos;
}


console.log(countTwos(2000));

module.exports = countTwos;
