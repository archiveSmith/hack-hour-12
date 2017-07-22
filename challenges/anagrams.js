/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// BRUTE FORCE
function anagrams(str, result = '', perms=[]) {
  // base case: when result has same length as input string, push to perms
  if (str === '') {
    perms.push(result);
    return;
  }

  // loop through string
  for (let i = 0; i < str.length; i++) {
    // take ith letter
    const takeIt = str[i];

    // leave the other letters
    const leaveIt = str.slice(0, i) + str.slice(i + 1);

    // make recursive call with other letters, append taken char to result str
    anagrams(leaveIt, result + takeIt, perms);
  }

  return perms;
}

// Heap's alg. Helper function could avoid str parameter being built on every call
// function anagrams(str, arr=Array.from(str), n=arr.length, perms=new Set()) {
//   if (n === 1) {
//     perms.add(arr.join(''));
//     return;
//   }

//   for (let i = 0; i < n; i++) {
//     // Use array to swap elements in-place and build perms in base case
//     anagrams(str, arr, n - 1, perms);

//     // Odd length swaps first element. Even length swaps ith element.
//     const a = n % 2 ? 0 : i;
//     const b = n - 1;
//     [arr[a], arr[b]] = [arr[b], arr[a]];
//   }

//   return [...perms];
// }

// console.log(anagrams('abc'));

module.exports = anagrams;

// Heap's algorithm with array input much cleaner
function heap(arr, n = arr.length, perms = []) {
  if (n === 1) {
    perms.push(arr.join(''));
    return;
  }

  // One array used to swap elements in-place and store perm in base case
  for (let i = 0; i < n; i++) {
    heap(arr, n - 1, perms);

    // Odd length swaps first element. Even length swaps ith element.
    const a = n % 2 ? 0 : i;
    const b = n - 1;
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  return perms;
}

console.log(heap(['a', 'b', 'c']));