/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort((a, b) => a - b)
  let negArr = array.filter(num => num < 0)
  let posArr = array.filter(num => num >= 0)
  let negLen = negArr.length;
  let posLen = posArr.length;
  if (negLen < 2) {
    if (posLen > 2) {
      return (posArr[posLen - 1] * posArr[posLen - 2] * posArr[posLen - 3])
    } else return 'Not enough integers'
  }

  return Math.max(negArr[0] * negArr[1] * posArr[posLen - 1], posArr[posLen - 1] * posArr[posLen - 2] * posArr[posLen - 3]);
}

module.exports = highestProduct;
