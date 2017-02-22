// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num, count = 0) {
  if (num === 0 || num === 1) return count;
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; ) {
    strNum.indexOf('2', i) !== -1 ? count += 1 : ;
  }
  // num.toString().includes('2') ? count += 1 : count = count;
  return countTwos(num - 1, count);
}

console.log(countTwos(1000))

module.exports = countTwos;