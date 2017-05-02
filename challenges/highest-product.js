/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  array.sort((a,b) => b-a);
  const negs = array.filter(item => {
    return item < 0;
  })
  if(negs && negs.length>= 2){
    negsPos = negs.map(item => item*-1);
    const bigNegs = [];
    for (let i = 0; i < negsPos.length; i++){
      if (negsPos[i] > array[0] || negsPos[i] > array[1] || negsPos[i] > array[2]) bigNegs.push(negsPos[i]);
    }
    if (bigNegs.length >= 2) {
      bigNegs.sort((a,b) => b-a);
      array.push(bigNegs[0]);
      array.push(bigNegs[1]);
      array.sort((a,b) => b-a);
    }
  } 
  return array[0]*array[1]*array[2];
}


console.log(highestProduct([5,4,-10,-8,-20,3,-30]));

module.exports = highestProduct;
