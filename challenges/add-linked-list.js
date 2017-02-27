/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const arr1 = [];
  const arr2 = [];

  while (l1) {
    arr1.unshift(l1.value);
    l1 = l1.next;
  }

  while (l2) {
    arr2.unshift(l2.value);
    l2 = l2.next;
  }

  const resultArr = String(+arr1.join('') + +arr2.join('')).split('').reverse();

  const result = new Node(resultArr[0]);
  let currNode = result;

  for (let i = 1; i < resultArr.length; i += 1) {
    const newNode = new Node(resultArr[i]);
    currNode.next = newNode;
    currNode = currNode.next;
  }

  return result;
}

module.exports = { Node, addLinkedList };
