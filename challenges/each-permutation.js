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

function eachPermutation(arr, cb) {
  //set up mem storage for permutation
  const mem = [];

  function createPermutation(arr, result = []) {
    //base case
    if (arr.length === 0 && mem.indexOf(result) === -1) {
      mem.push(result);
      return;
    }

    //iterate using for loop
    for (let i = 0; i < arr.length; i++) {
      const new_result = result.concat(arr[i]);
      const new_arr = arr.slice(0,i).concat(arr.slice(i + 1))
      createPermutation(new_arr, new_result)
    }

    return;
  }

  createPermutation(arr)

  //iterate though mem to run cb()
  mem.forEach( (ele) => {
    cb(ele)
  })
}

// testing
// const result = eachPermutation([1,2,3], function(ele) {
//   console.log(ele);
// });


module.exports = eachPermutation;
