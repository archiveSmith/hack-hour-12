// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  const memo = {};
  // { valuea : {count: 4, once: false}, valueb : {count: 4, once: false} }
  const results = [];

  function memoizeOnce(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (!memo[arr[i]]) {
        memo[arr[i]] = {};
        memo[arr[i]]['value'] = arr[i];
        memo[arr[i]]['count'] = 1;
        memo[arr[i]]['once'] = true;
      } else {
        if (!memo[arr[i]]['once']) {
          memo[arr[i]]['count'] += 1;
          memo[arr[i]]['once'] = true;
        }
      }
    }
    clearOnce(memo);
  }
  function clearOnce(obj) {
    for (let prop in obj) {
      obj[prop].once = false;
    }
  }

  memoizeOnce(array1);
  memoizeOnce(array2);
  memoizeOnce(array3);
  memoizeOnce(array4);

  for (let prop in memo) {
    if (memo[prop].count === 4) results.push(memo[prop].value);
  }
  return results.length > 0 ? results : 'Nothing in Common';

}

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// console.log(commonElements(array1, array2, array3, array4));


module.exports = commonElements;
