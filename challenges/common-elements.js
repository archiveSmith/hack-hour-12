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
  let result = [];
  let bool;
  for(let i = 0; i < array1.length; i++) {
    bool = true;
    if(!array2.includes(array1[i])) bool = false;
    if(!array3.includes(array1[i])) bool = false;
    if(!array4.includes(array1[i])) bool = false;
    if(bool) result.push(array1[i]);
  }
  result = result.reduce((a, b) => {
    if(a.indexOf(b) === -1) a.push(b);
    return a;
  },[]);
  if(result.length === 0) return "Nothing in Common!";
  return result;
}

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// console.log(commonElements(array1, array2, array3, array4));

// function commonElements(array1, array2, array3, array4) {
//   return [array1, array2, array3, array4]
//     .reduce((inCommon, nextArray) => {
//     inCommon.filter((el) => {
//       nextArray.includes(el)
//       .filter((el, i, array) => {
//         array.indexOf(el) === i).reduce((a, b, i, arr) => {
//           arr, 'Nothing in Common!');
//         })
//       })
//     })
//   })
// }

function commmonElements(array1, array2, array3, array4) {
  const set = new Set();
  array1.forEach((item) => {
    if(array2.includes(item) && array3.includes(item) && array4.includes(item)) {
      set.add(item);
    }
  })
  return set.size > 0 ? [...set] : 'Nothing in Common!';
}


module.exports = commonElements;
