/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort((a, b) => a - b)
  // return array
  let negArr = array.filter(num => num < 0)
  let posArr = array.filter(num => num >= 0)
  // console.log(negArr, posArr)
  let negLen = negArr.length;
  let posLen = posArr.length;
  if (negLen < 2) {
    // console.log('dont enter here')
    if (posLen > 2) {
      return (posArr[posLen - 1] * posArr[posLen - 2] * posArr[posLen - 3])
    } else return 0
  }

  // console.log(negArr[0] * negArr[1] * posArr[posLen - 1], posArr[posLen - 1] * posArr[posLen - 2] * posArr[posLen - 3])
  return Math.max(negArr[0] * negArr[1] * posArr[posLen - 1], posArr[posLen - 1] * posArr[posLen - 2] * posArr[posLen - 3]);
}

// console.log(highestProduct([-22, -33, -44, 1, 4, 7, 9, 2]))

module.exports = highestProduct;
