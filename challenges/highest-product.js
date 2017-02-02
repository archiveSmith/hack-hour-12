/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 'not a valid array';
  const order = array.sort((a, b) => a - b);
// console.log(order);
  const nega = [];
  const posi = [];
  const num1 = [];
  const num2 = [];
  for (let i = 0; i < 3; i += 1) {
    if (order[i] < 0) nega.push(order[i]);
    posi.push(order.pop());
  }
// console.log('nega =', nega);
// console.log('posi =', posi);
  if (nega.length === 2) num1.push(nega[0] * nega[1] * posi[0]);
  if (posi.length === 3) num2.push(posi[0] * posi[1] * posi[2]);


// console.log('nega =', nega);
  return Math.max(num1, num2);
}


console.log(highestProduct([7, 20, 6, 18, 4, 9, -20, -2, 1]));


module.exports = highestProduct;
