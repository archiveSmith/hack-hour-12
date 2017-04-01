/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  let finalArr = [];

  const permute = (array, m = []) => {
    if (array.length === 0) finalArr.push(m);
    else {
      for (let i = 0; i < array.length; i += 1) {
        let curr = array.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m. concat(next));
      }
    }
  }
  permute(arr);
  for (let j = 0; j < finalArr.length; j += 1) {
    callback(finalArr[j]);
  }
}

module.exports = eachPermutation;
