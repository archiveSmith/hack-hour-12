// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

   var array1 = ['dog','cat', 3, 4];
   var array2  = [];
   var array3 = ['dog'];
   var array4 = [1, 2, 'dog'];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  console.log('1:', array1, '2: ',array2, '3: ', array3, '4: ', array4);
  let sharedArr = array1;
  let arrOfArrs = [array1, array2, array3, array4];
  let i;
  for (i = 1; i < 4; i += 1) {
    let tempArr = [];
    for (let j = 0; j < sharedArr.length; j += 1) {
      if (arrOfArrs[i].indexOf(sharedArr[j]) !== -1 && tempArr.indexOf(sharedArr[j]) === -1) {
        tempArr.push(sharedArr[j]);
      }
    }
    sharedArr = tempArr;
  }
  if (sharedArr.length > 0) return sharedArr;
  else return "Nothing in Common!";
}

console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
