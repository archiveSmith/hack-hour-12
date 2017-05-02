// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered 
// when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  for (let i = 0; i <= num; i += 1) {
    const str = String(i);
    for (let j = 0; j < str.length; j += 1) {
      if (str[j] === '2') count += 1;
    }
  }
  return count;
}

// much more effiecient solution
function checkDigits(num) {
  // padd str with 0 in front
  var str = '0' + String(num);
  var count = 0;

  // loop over string backwards
  for (var i = str.length - 1; i > 0; i--) {
    // create slice with one digit removed from the end
    var slice = str.slice(0, i);
    // if current character is larger than 2
    if (str[i] > 2) {
      // add by one but leave it as the string with the leading 0
      slice = addOne(slice);
    }
    // add trailing zeroes until length matches
    slice = padNum(slice, str.length - 1);
    // increment count by int value of slice
    count += parseInt(slice);
  }
  // loop over string beginning to end
  for (var i = 0; i < str.length; i++) {
    // if we find a 2
    if (str[i] === '2') {
      // increment count by int value of slice + 1, or 1
      count += parseInt(str.slice(i+1) || 0) + 1;
    }
  }

  return count;
}

function addOne(str) {
  // return string that is one count higher than input
  return str.slice(0, -1) + (parseInt(str.slice(-1)) + 1);
}

function padNum(str, length) {
  while (str.length < length) {
    str += '0';
  }
  return str;
}

// console.log(countTwos(30161312));

module.exports = countTwos;