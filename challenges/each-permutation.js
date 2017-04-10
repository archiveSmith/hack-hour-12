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
  const perms = arr.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 &&
      arr.slice(0, key)
        .concat(arr.slice(key + 1))
        .reduce(permute, [])
        .map(function(perm) { return [item].concat(perm); }) ||
      item);
  }, []);

  perms.forEach(perm => callback(perm));
}

module.exports = eachPermutation;

define success
go through each part
rearticulate again and again until you have something to work with

function eachPermutation(arr, callback, built = [], perms = {}) {
  // if arr is emtpy, then this particulat array is complete. save in object as key and perform callback
  // successive identical attays will not result in performing the callback.
  if (!arr.length && !(built in perms) perms[built] = callback(built));
  // else give each remaining alement a turn being in front of the rest
  else arr.forEach((e, i) => eachPermutation([...arr.slice(0, i), ...arr.slice(i + 1)], callback, [...built, e], perms));
}
