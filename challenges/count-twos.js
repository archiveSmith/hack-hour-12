// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  const two = '2';
  let count = 0;
  for (let i = 1; i <= num; i += 1) {
    const strArr = i.toString().split('');
    let k = 0;
    while (k < strArr.length) {
      if (strArr[k].includes(two)) {
        count += 1;
      }
      k += 1;
    }
  }
  return count;
}

module.exports = countTwos;


// function countTwos(num, counter = 0) {
//   if (num === 0) return counter;
//   return countTwos(num - 1, counter += num.toString().split('').filter(digit => digit === '2').length);
// }
