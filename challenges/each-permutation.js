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

// function eachPermutation(arr, callback) {

// }

function eachPermutation(arr, callback, built = [], perms = {}) {
  if (!arr.length && !(built in perms)) perms[built] = callback(built);
  else arr.forEach((el, i) => eachPermutation([...arr.slice(0, 1), ...arr.slice(i + 1)], callback, [...built, el], perms));
}



module.exports = eachPermutation;
