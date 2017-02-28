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

function countTwos(num) {
  let count = 0;

  for (let i = 2; i <= num; i += 1) {
    const numString = i.toString();
    for (let i = 0; i < numString.length; i += 1) {
      if (numString[i] === '2') count += 1;
    }
  }

  return count;
}

function countTwos(num, counter = 0) {
  if (num === 0) return counter;
  return countTwos(num - 1, counter += num.toString().split('').filter(digit => digit === '2').length);
}

console.log(countTwos(1000))

module.exports = countTwos;