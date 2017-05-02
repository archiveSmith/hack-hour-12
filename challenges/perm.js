function perms(array, built = [], memo = []) {
    if (!array.length) {
        // console.log(memo);
        memo.push(built);
    } else {
        // array.forEach((e, i) => perms(array.slice(0, i).concat(array.slice(i + 1)), built.concat(e), memo));
        console.log(built);
        array.forEach((e, i) => perms([...array.slice(0, i),...array.slice(i + 1)], [...built, e], memo));
    }
    return memo;
}

// console.log(perms([1,2,3]));

function permuteA(permutation) {
  var length = permutation.length,
      result = new Array([0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][length]),
      c = new Array(length).fill(0),
      i = 1,
      j = 1;

  result[0] = permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      var k = (i % 2) ? c[i] : 0,
          p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result[j] = permutation.slice();
      ++j;
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

// console.log(permute([1, 2, 3]));

var permArr = [],
  usedChars = [];

function permuteB(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permuteB(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

// console.log(permuteB([1,2,3]));

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

let r = permutator([1,1,1,1,1,1,1,1,1,1,1]);
console.log(r.length);